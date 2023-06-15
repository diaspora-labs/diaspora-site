import { useDisclosure, useInterval } from "@chakra-ui/react"
import {
  buyMembershipToken,
  getErrorForTransaction,
  getErrorsFromError,
  isEndedSale,
  isSaleStarted,
  loadArtworkData,
} from "@creator-experience/fixed-price-sale"
import { useLanguage } from "@creator-experience/language"
import { editionNftArtworkAtom, editionNftMarketAtom } from "@creator-experience/recoil"
import { Nft } from "@creator-experience/types"
import {
  convertSolToUsd,
  getEditionMintFeeWallet,
  getEditionType,
  getGlobalEditionMintFeeSol,
  lamportsToSol,
  roundToTwoDecimals,
  solToLamports,
} from "@creator-experience/utils"
import { errorFromCode } from "@metaplex-foundation/mpl-fixed-price-sale/dist/src/generated/errors"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import dayjs, { Dayjs } from "dayjs"
import { useRouter } from "next/router"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { OmniModal, OmniModalImageSize, OmniModalProps } from "components/OmniModal"
import { EditionMintDetails } from "./EditionMintDetails"

export interface EditionMintModuleProps {
  editionNft: Nft
  fpsMarketId?: string
  primaryColor?: string
}

export enum EditionMintModalState {
  STARTED = "started",
  COMPLETED = "completed",
  ERROR = "error",
}

export interface IMintButtonConfig {
  disabled: boolean
  label: string
  onClick: () => void
}

export interface IEditionMintDetails {
  priceLabel: string
  price: string
  priceInUsd: string | null
  typeLabel: string
  typeValue: string
  mintLimitReached: boolean
}

export const EditionMintModule: React.FC<EditionMintModuleProps> = ({ editionNft, fpsMarketId, primaryColor }) => {
  const { connection } = useConnection()
  const wallet = useWallet()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [artwork, setArtwork] = useRecoilState(editionNftArtworkAtom)
  const marketState = useRecoilValue(editionNftMarketAtom)
  const { generics, genericPhrases, components, hub } = useLanguage()
  const [now, setNow] = useState<Dayjs>(dayjs())
  const [mintDetails, setMintDetails] = useState<IEditionMintDetails | null>(null)
  const [buttonConfig, setMintButtonConfig] = useState<IMintButtonConfig>({
    disabled: true,
    label: "",
    onClick: () => null,
  })
  const [modalState, setModalState] = useState<EditionMintModalState>(EditionMintModalState.STARTED)
  const [usdPrice, setUsdPrice] = useState<number | null>(null)
  const [mintedNft, setMintedNft] = useState<string | undefined>(undefined)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const getUsdPrice = async () => {
    if (!artwork?.market.price) return
    setUsdPrice(await convertSolToUsd(lamportsToSol(Number(artwork.market.price))))
  }
  usdPrice ?? getUsdPrice()

  useInterval(() => {
    setNow(dayjs())
  }, 1000)

  useEffect(() => {
    const hasStarted = artwork ? isSaleStarted(artwork?.market) : false
    const hasEnded = artwork ? isEndedSale(artwork?.market) : true

    const mintActive = hasStarted && !hasEnded
    // Use a different button label prior to and during mint:
    let label = mintActive ? generics.mint : components.mintDetails.launchesSoon
    // If the mint has ended, change the label:
    label = hasEnded ? components.mintDetails.ended : label

    const editionType = getEditionType(editionNft, artwork)
    setMintButtonConfig({
      disabled: !mintActive,
      label,
      onClick: mint,
    })

    const price = artwork?.market.price ? lamportsToSol(Number(artwork?.market.price)).toString() : ""
    setMintDetails({
      priceLabel: generics.price,
      price,
      priceInUsd: usdPrice ? `~$${roundToTwoDecimals(usdPrice).toString()}` : null,
      typeLabel: editionType?.label || "",
      typeValue: editionType?.value || "",
      mintLimitReached: artwork?.mintLimitReached || false,
    })
  }, [now, artwork])

  useEffect(() => {
    loadArtwork()
  }, [connection, marketState, fpsMarketId])

  const loadArtwork = async () => {
    if (!fpsMarketId) {
      setArtwork(undefined)
      return
    }

    const artworkData = await loadArtworkData({
      connection,
      marketKey: new PublicKey(fpsMarketId),
      wallet,
    })
    setArtwork(artworkData)
  }

  const mint = useCallback(async () => {
    try {
      setModalState(EditionMintModalState.STARTED)
      setMintedNft(undefined)
      onOpen()
      if (!artwork) return

      const publicKey = wallet.publicKey

      if (!publicKey) {
        throw new Error("Wallet not connected")
      }

      const transferTx = new Transaction()

      // .add(
      //   SystemProgram.transfer({
      //     fromPubkey: publicKey,
      //     toPubkey: new PublicKey(getEditionMintFeeWallet()),
      //     lamports: solToLamports(getGlobalEditionMintFeeSol()),
      //   })
      // )

      const signatures = await buyMembershipToken({
        art: artwork,
        connection,
        wallet,
        transferTx,
      })

      const [error] = await getErrorForTransaction(connection, signatures.mintSignature || "")
      if (error) {
        const codeError = errorFromCode(parseInt(error, 16))
        setErrorMessage(codeError?.message || genericPhrases.tryAgainLater)
      } else {
        setMintedNft(signatures.newMint.toBase58())
        setModalState(EditionMintModalState.COMPLETED)
        await loadArtwork()
      }
    } catch (e) {
      if (e instanceof Error) {
        const errorCode = getErrorsFromError(e)
        const error = errorFromCode(parseInt(errorCode[0], 16))
        const insufficientFundsErrorCode = "0x1"
        if (errorCode[0] === insufficientFundsErrorCode) {
          setErrorMessage(hub.pages.mintPage.insufficientFunds)
        } else {
          setErrorMessage(error?.message || e.message)
        }
      } else {
        setErrorMessage(genericPhrases.tryAgainLater)
      }

      console.error("Error minting:", e)
      setModalState(EditionMintModalState.ERROR)
    }
  }, [artwork, connection, wallet])

  const modalProps = useMemo(() => {
    switch (modalState) {
      case EditionMintModalState.STARTED: {
        return {
          title: components.mintStartedDetails.mintingNftModalTitle,
          description: components.mintStartedDetails.mintingNftModalDescription,
          allowClose: false,
        }
      }
      case EditionMintModalState.COMPLETED: {
        return {
          imageSrc: editionNft.json?.image || "",
          title: `Minted ${editionNft.json?.name}`,
          description: components.mintStartedDetails.mintedNftModalDescription,
          allowClose: true,
          shareButtonsConfig: {
            link: `/${mintedNft}`,
            text: components.mintStartedDetails.mintedShareText,
          },
          copyWidgetProps: {
            copyString: `/${mintedNft}`,
            // type: CopyWidgetType.url,
          },
        }
      }
      case EditionMintModalState.ERROR: {
        return {
          title: generics.error,
          description: errorMessage || "",
          allowClose: true,
        }
      }
      default: {
        const n: never = modalState

        return n
      }
    }
  }, [modalState, errorMessage])

  return (
    <>
      {mintDetails?.price ? (
        <EditionMintDetails
          mintDetails={mintDetails}
          buttonConfig={buttonConfig}
          primaryColor={primaryColor}
          modalState={modalState}
        />
      ) : null}
      {/* <OmniModal isOpen={isOpen} onClose={onClose} {...modalProps} /> */}
    </>
  )
}
