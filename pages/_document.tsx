import { Html, Head, Main, NextScript } from "next/document"
import Chatbot  from '../components/Chatbot'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <title>Diaspora</title> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/fonts/korolev.css" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Chatbot />
      </body>
    </Html>
  )
}
