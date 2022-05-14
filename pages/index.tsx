import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { DiasporaLogo } from "../components/DiasporaLogo/DiasporaLogo"
// import { GoldMaskData }  from "../components/DiasporaLogo/GoldMaskData"
import { Nav } from "../components/Nav"
import { Layout } from "../components/Layout"
// import Spline from '@splinetool/react-spline';
// import { Spline } from 'react-spline'

const Home: NextPage = () => {
  return (
    <Layout
      classes={`
        bg-container items-center
        justify-center bg-black 
        text-white`}
      showLogo={true}
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
                {/*<Spline scene={"https://prod.spline.design/z9ZrPk6mKAs97Rxq/scene.splinecode"} />*/}
              </a>
            </Link>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home
