import { NextPage } from "next"
import Head from "next/head"
import { DiasporaLogo } from "../components/DiasporaLogo/DiasporaLogo"
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

      <div className="grid place-items-center">
        <div className="m-4">
          <div className="mb-5">
            <div className="ml-32 mb-[100px] text-lg uppercase text-white">Coming soon</div>
          </div>
          <DiasporaLogo />
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <Nav />
      </div>
    </Layout>
  )
}

export default Home
