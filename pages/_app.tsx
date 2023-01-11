import "../styles/globals.css"
import type { AppProps } from "next/app"
import "@fontsource/roboto"
import { ParallaxProvider } from "react-scroll-parallax"

import dynamic from "next/dynamic"

const WalletProvider: any = dynamic(() => import("../contexts/ClientWalletProvider"), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <AppWrapper Component={Component} pageProps={pageProps} />
    </WalletProvider>
  )
}

const AppWrapper = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
