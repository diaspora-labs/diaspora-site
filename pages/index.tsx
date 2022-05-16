import { useEffect } from "react"
import { NextPage } from "next"
import { GoldMaskLogo } from "../components/DiasporaLogo/GoldMaskLogo"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Discord } from "../components/Icons/Discord"
import { Envelop } from "../components/Icons/Envelop"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Layout } from "../components/Layout"
import { NavHeader } from "../components/NavHeader"
import sal from "sal.js"

const Home: NextPage = () => {
  useEffect(() => {
    // @ts-ignore
    sal({
      threshold: 0.1,
    })
  })

  return (
    <Layout showLogo>
      <div className="fixed inset-0 z-0">
        <GoldMaskLogo />
      </div>

      <section className="z-10 flex h-full min-h-screen flex-col">
        <div className="flex grow flex-col p-10">
          <NavHeader />

          <div className="grid h-full grow grid-cols-4">
            <div className="col-span-2 flex h-full flex-col items-start justify-center">
              <div
                className="text-5xl font-light leading-tight text-neutral-600"
                data-sal="slide-up"
                data-sal-delay="300"
              >
                Building a bridge
                <br />
                for the culture
                <br />& mint an ancestor
              </div>
            </div>
            <div
              className="col-span-2 mx-20 flex h-full flex-col items-end justify-center"
              data-sal="slide-up"
              data-sal-delay="500"
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="mt-[80px] text-center text-4xl font-light">
                  Great things
                  <br />
                  are coming
                </div>
                <div className="text-lg font-normal">Connect with us to stay updated</div>
                <div className="flex  space-x-10">
                  <Discord />
                  <Instagram />
                  <Twitter />
                  <Envelop />
                </div>
                <div className="hidden p-2">
                  <button className="rounded-xl bg-[#F05E17] px-4 py-2 font-bold uppercase text-black">
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeFooter />
      </section>
    </Layout>
  )
}

export default Home
