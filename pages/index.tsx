import { NextPage } from "next"
import Image from "next/image"
import Head from "next/head"
import { DiasporaLogo } from "../components/DiasporaLogo/DiasporaLogo"
import { Nav } from "../components/Nav"

const Home: NextPage = () => {
  return (
    <div
      className={`
        bg-container flex 
        min-h-screen flex-col items-center
        justify-center bg-black bg-home-bg 
        bg-contain bg-center 
        bg-no-repeat 
        py-2 
        text-white`}
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
    </div>
  )
}

export default Home
