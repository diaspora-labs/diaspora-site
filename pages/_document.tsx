import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <title>Diaspora</title> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/fonts/korolev.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
