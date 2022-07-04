import React, { Suspense, useEffect } from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"
// import GoldMaskLogo from "../components/DiasporaLogo/GoldMaskLogo"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Discord } from "../components/Icons/Discord"
import { Envelop } from "../components/Icons/Envelop"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Layout } from "../components/Layout"
import { NavHeader } from "../components/NavHeader"
import Team from "./team"
import sal from "sal.js"

const GoldMaskLogo = dynamic(() => import("../components/DiasporaLogo/GoldMaskLogo"), {
  ssr: false,
})

const Home: NextPage = () => {
  // useEffect(() => {
  //   // @ts-ignore
  //   sal({
  //     threshold: 0.1,
  //   })
  // })
  const [showModal, setShowModal] = React.useState(false)
  return (
    <Layout showLogo>
      <div className={"inset-0 md:fixed md:z-0 md:mt-10"}>
        {/* @ts-ignore */}
        {/*<Suspense fallback={null} r3f>
          <GoldMaskLogo />
        </Suspense>*/}
      </div>

      <section className={showModal ? "md:hidden" : "pointer-events-auto z-10 flex h-full min-h-screen flex-col"}>
        <div className={"flex grow flex-col p-10"}>
          

          <div className="sm:text-center md:grid md:h-full md:grow md:grid-cols-4">
            <div className="col-span-2 flex h-full flex-col items-start justify-center">
              <div
                className="text-center text-4xl font-light leading-tight text-neutral-600 md:text-5xl"
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
              className="col-span-2 h-full items-end justify-center md:mx-20 md:flex md:flex-col"
              data-sal="slide-up"
              data-sal-delay="500"
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="mt-[80px] text-center text-4xl font-light sm:hidden">
                  Great things
                  <br />
                  are coming
                </div>
                <div className="text-lg font-normal">Connect with us to stay updated</div>
                <div className="pointer-events-auto flex space-x-10">
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
      </section>

      <section className="pointer-events-auto z-10 flex h-full min-h-screen flex-col border-t-[1px] border-neutral-800">
        <div className="flex grow flex-col p-10">

          <div className={"container mx-auto mt-10 max-w-3xl"}>
            <p className={`text-center text-lg font-normal tracking-wide text-gray-400 `}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            </p>
          </div>

          <Team showModal={showModal} setShowModal={setShowModal} />
        </div>
      </section>

      <HomeFooter />
    </Layout>
  )
}

export default Home
