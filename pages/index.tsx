import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { DiasporaLogo, DiasporaGoldMask } from "../components/DiasporaLogo/DiasporaLogo"
import { Nav } from "../components/Nav"
import { Layout } from "../components/Layout"

const Home: NextPage = () => {
  return (
    <Layout
      classes={`
        bg-container items-center
        justify-center bg-black 
        text-white`}
      showLogo={false}
    >
      <Head>
        <title>Diaspora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid w-full place-items-center">
        <div className="m-4 w-full">
          <div className="mx-auto mb-5 w-[60%]">
            <div className="mb-10 text-lg uppercase text-white">Coming soon</div>
            <Link href="/">
              <a>
                <DiasporaGoldMask />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <Nav />
      </div>
    </Layout>
  )
}

export default Home
