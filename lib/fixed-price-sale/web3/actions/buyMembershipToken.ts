import { getUmi } from "@creator-experience/mpl"
import { findTradeHistoryAddress, findVaultOwnerAddress } from "@metaplex-foundation/mpl-fixed-price-sale"
import { findMetadataPda, MPL_TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata"
import { publicKey } from "@metaplex-foundation/umi"
import { WalletContextState } from "@solana/wallet-adapter-react"
import { Connection, PublicKey, Transaction, TransactionMessage, VersionedTransaction } from "@solana/web3.js"
import BN from "bn.js"
import { createBuyTransaction } from "../transactions/buyMembershipToken"
import { createWrappedAccountTxs } from "./createWappedAccountTxs"
import { prepareTokenAccountAndMintTxs } from "./prepareTokenAccountAndMintTxs"

type Art = any

interface BuyMembershipTokenParams {
  connection: Connection
  wallet: WalletContextState
  art: Art
  transferTx: Transaction
}

const findPda = (programId: PublicKey, seeds: Array<Buffer | Uint8Array>) => {
  const [publicKey] = PublicKey.findProgramAddressSync(seeds, programId)

  return publicKey
}

const tokenMetadataProgramKey = new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.bytes)

const getOriginalEditionPda = (mint: PublicKey) => {
  return findPda(tokenMetadataProgramKey, [
    Buffer.from("metadata", "utf8"),
    tokenMetadataProgramKey.toBuffer(),
    mint.toBuffer(),
    Buffer.from("edition", "utf8"),
  ])
}

const getEditionMarkerPda = (mint: PublicKey, edition: BN) => {
  return findPda(tokenMetadataProgramKey, [
    Buffer.from("metadata", "utf8"),
    tokenMetadataProgramKey.toBuffer(),
    mint.toBuffer(),
    Buffer.from("edition", "utf8"),
    Buffer.from(edition.div(new BN(248)).toString()),
  ])
}

export const buyMembershipToken = async ({ connection, wallet, art, transferTx }: BuyMembershipTokenParams) => {
  const buyer = wallet.publicKey
  const { market, marketKey, sellingResource, mint, id, prints, editionKey } = art

  const [vaultOwner, vaultOwnerBump] = await findVaultOwnerAddress(mint, market.store)
  const [tradeHistory, tradeHistoryBump] = await findTradeHistoryAddress(buyer!, marketKey)

  const {
    mint: newMint,
    recipient: newTokenAccount,
    createMintTx,
    createAssociatedTokenAccountTx,
    mintToTx,
  } = await prepareTokenAccountAndMintTxs(connection, wallet.publicKey!)

  const newMintEdition = getOriginalEditionPda(newMint.publicKey)

  const umi = getUmi()
  const newMintMetadata = findMetadataPda(umi, {
    mint: publicKey(newMint.publicKey.toBase58()),
  })

  const resourceMintEditionMarker = getEditionMarkerPda(mint, (prints.supply as BN).add(new BN(1)))

  const {
    account: userTokenAcc,
    createTokenAccountTx,
    closeTokenAccountTx,
  } = await createWrappedAccountTxs(connection, buyer!, new BN(market.price).toNumber())

  const { tx: buyTx } = await createBuyTransaction({
    connection,
    buyer: buyer!,
    userTokenAccount: userTokenAcc.publicKey,
    resourceMintMetadata: id,
    resourceMintEditionMarker,
    resourceMintMasterEdition: editionKey,
    sellingResource: market.sellingResource,
    market: marketKey,
    marketTreasuryHolder: market.treasuryHolder,
    vaultOwner,
    tradeHistory,
    tradeHistoryBump,
    vault: sellingResource.vault,
    vaultOwnerBump,
    newMint: newMint.publicKey,
    newMintEdition,
    newMintMetadata: new PublicKey(newMintMetadata.bytes),
    newTokenAccount,
    gatekeeperCollection: market.gatekeeper?.collection,
  })

  const mintTx = new Transaction({ feePayer: wallet.publicKey }).add(
    createMintTx,
    createAssociatedTokenAccountTx,
    mintToTx,
    createTokenAccountTx,
    buyTx,
    closeTokenAccountTx
  )

  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash()

  if (!wallet.signTransaction) {
    throw new Error("wallet.signTransaction not available")
  }
  if (!wallet.publicKey) {
    throw new Error("wallet.publicKey not available")
  }

  const fpsLookupTableAddress = "AukQFzBLWaVudfywEDA3HtY3d1jcRoFm3bAyEs8EHKYw"
  const lookupTableAddress = new PublicKey(fpsLookupTableAddress)
  const { value: lookupTableAccount } = await connection.getAddressLookupTable(lookupTableAddress)
  if (!lookupTableAccount) {
    throw new Error("lookup table account not found")
  }

  const messageV0 = new TransactionMessage({
    payerKey: wallet.publicKey,
    recentBlockhash: blockhash,
    instructions: [...mintTx.instructions, ...transferTx.instructions],
  }).compileToV0Message([lookupTableAccount])
  const transactionV0 = new VersionedTransaction(messageV0)

  transactionV0.sign([newMint, userTokenAcc])
  const mintSigned = await wallet.signTransaction(transactionV0)

  const mintSignature = await connection.sendTransaction(mintSigned)
  await connection.confirmTransaction(
    {
      signature: mintSignature,
      blockhash: blockhash,
      lastValidBlockHeight: lastValidBlockHeight,
    },
    "confirmed"
  )

  return {
    mintSignature,
    newMint: newMint.publicKey,
  }
}
