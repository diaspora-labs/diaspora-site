import React, { FC, useMemo } from "react"
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { ThirdwebSDKProvider } from "@thirdweb-dev/react/solana"
import { useWallet } from "@solana/wallet-adapter-react"

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css")

export const Wallet: FC = () => {
  const wallet = useWallet()

  return (
    <ThirdwebSDKProvider network={"devnet"} wallet={wallet}>
      <div className="flex items-center justify-center">
        <WalletMultiButton style={{ fontFamily: "Korolev" }}></WalletMultiButton>
        {/* <WalletDisconnectButton /> */}
      </div>
    </ThirdwebSDKProvider>
  )
}

export default Wallet
