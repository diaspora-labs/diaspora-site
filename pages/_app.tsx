import "../styles/globals.css"
import type { AppProps } from "next/app"
import "@fontsource/roboto"
import { ParallaxProvider } from "react-scroll-parallax"
import { ThirdwebProvider } from "@thirdweb-dev/react/solana"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { GlowWalletAdapter, PhantomWalletAdapter, UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"
import { ThirdwebSDKProvider } from "@thirdweb-dev/react/solana"
import { useWallet } from "@solana/wallet-adapter-react"
import type { FC } from "react"
import React, { useMemo } from "react"
import { RecoilRoot } from "recoil"
import { getEndpoint } from "@/lib/utils"

// Use require instead of import since order matters
require("@solana/wallet-adapter-react-ui/styles.css")
require("../styles/globals.css")

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet

  // You can also provide a custom RPC endpoint
  const endpoint = getEndpoint()

  const wallets = useMemo(
    () => [
      /**
       * Wallets that implement either of these standards will be available automatically.
       *
       *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
       *     (https://github.com/solana-mobile/mobile-wallet-adapter)
       *   - Solana Wallet Standard
       *     (https://github.com/solana-labs/wallet-standard)
       *
       * If you wish to support a wallet that supports neither of those standards,
       * instantiate its legacy wallet adapter here. Common legacy adapters can be found
       * in the npm package `@solana/wallet-adapter-wallets`.
       */
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <AppWrapper Component={Component} pageProps={pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

const AppWrapper = ({ Component, pageProps }) => {
  const wallet = useWallet()

  return (
    <RecoilRoot>
      <ThirdwebSDKProvider network={"devnet"} wallet={wallet}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThirdwebSDKProvider>
    </RecoilRoot>
  )
}

export default App
