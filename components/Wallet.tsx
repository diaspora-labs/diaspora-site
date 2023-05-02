import React, { FC, useMemo } from "react"
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui"

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css")

export const Wallet: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <WalletMultiButton disabled style={{ fontFamily: "Korolev" }}></WalletMultiButton>
      {/* <WalletDisconnectButton /> */}
    </div>
  )
}

export default Wallet
