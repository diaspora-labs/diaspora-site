import React, { Suspense, useEffect, useState } from "react"
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

import Image from "next/image"

import { PeopleSection } from "../components/Home/PeopleSection"

const GoldMaskLogo = dynamic(() => import("../components/DiasporaLogo/GoldMaskLogo"), {
  ssr: false,
})

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Layout showLogo>
      <div className={"inset-0 scroll-smooth md:fixed md:z-0 md:mt-10"}>
        {/* @ts-ignore */}
        {/*<Suspense fallback={null} r3f>
          <GoldMaskLogo />
        </Suspense>*/}
      </div>

      <section className={showModal ? "hidden" : "pointer-events-auto z-10 flex h-full flex-col md:min-h-screen"}>
        <div className={"flex grow flex-col p-10"}>
          <div className="sm:text-center md:grid md:h-full md:grow md:grid-cols-4">
            <div className="flex h-full flex-col justify-center text-center sm:items-center md:col-span-2 ">
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
              <div className="invisible flex flex-col items-center justify-center space-y-6 md:visible">
                <div className="invisible hidden text-center  text-4xl font-light md:visible md:mt-[80px] md:block">
                  Great things
                  <br />
                  are coming
                </div>

                <div className="visible text-lg font-normal">Connect with us to stay updated</div>
                <div className="pointer-events-auto visible flex space-x-10">
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

      <section
        className={
          showModal
            ? "md:hidden"
            : "pointer-events-auto z-10 flex h-full min-h-screen flex-col border-t-[1px] border-neutral-800"
        }
      >
        <div className="flex grow flex-col p-10">
          <div className="mx-auto">
            <Image src="/images/logos/diaspora-team-logo.png" alt="screenshot" width="652" height="172" />
          </div>

          <div className={"container mx-auto mt-10 max-w-3xl"}>
            <p className={`text-center text-lg font-normal tracking-wide text-gray-400 `}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            </p>
          </div>
        </div>
      </section>

      <PeopleSection showModal={showModal} setShowModal={setShowModal} />

      <HomeFooter />
    </Layout>
  )
}

export default Home
