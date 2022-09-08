import React, { Suspense, useEffect, useState } from "react"
import { NextPage } from "next"
import dynamic from "next/dynamic"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { HomeFooter } from "../components/Home/HomeFooter"
import { Discord } from "../components/Icons/Discord"
import { Envelop } from "../components/Icons/Envelop"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Layout } from "../components/Layout"

import Image from "next/image"

import { PeopleSection } from "../components/Home/PeopleSection"

const GoldMaskLogo = dynamic(() => import("../components/GoldMask/GoldMaskLogo"), {
  ssr: false,
})

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Layout showLogo>
      <section className={"relative z-10 flex h-full flex-col md:min-h-screen"}>
        <div
          className={
            "bg-100 inset-0 scroll-smooth bg-[length:1000px] bg-center bg-no-repeat md:absolute md:z-0 md:mt-10"
          }
        >
          {/* @ts-ignore */}
          <Suspense fallback={null}>
            <Canvas shadows flat linear>
              <GoldMaskLogo />
              <OrbitControls />
            </Canvas>
          </Suspense>
        </div>
        {/* needs to be put back with mask {<div className={"pointer-events-none z-10 flex grow flex-col p-10 "}>} */}
        <div className={"z-10 flex grow flex-col p-10 "}>
          <div className="sm:text-center md:grid md:h-full md:grow md:grid-cols-4">
            <div className="flex h-full flex-col items-start justify-center sm:items-center md:col-span-2">
              <div className="text-center text-4xl font-light leading-tight text-neutral-600 shadow-black drop-shadow-md md:text-5xl">
                Building a bridge
                <br />
                for the culture
                <br />& mint an ancestor
              </div>

              <iframe
                className="rounded"
                src="https://open.spotify.com/embed/playlist/3byvJcO0IZvAcaezEOnXxI?utm_source=generator&theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-span-2 h-full items-end justify-center md:mx-20 md:flex md:flex-col">
              <div className="invisible flex flex-col items-center justify-center space-y-6 md:visible">
                <div className="invisible hidden text-center  text-4xl font-light md:visible md:mt-[80px] md:block">
                  Great things
                  <br />
                  are coming
                </div>

                <div className="visible text-lg font-normal">Connect with us to stay updated</div>
                <div className="pointer-events-auto visible flex space-x-8">
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

      <section className={"pointer-events-auto z-10 flex h-full flex-col border-t-[1px] border-neutral-800"}>
        <div className="flex grow flex-col p-10">
          <div className="mx-auto">
            <Image src="/images/logos/diaspora-team-logo.png" alt="screenshot" width="652" height="172" />
          </div>

          <div className={"container mx-auto mt-10 max-w-3xl"}>
            <p className={`text-center text-lg font-normal tracking-wide text-gray-400 `}>
              Diaspora is a community centric DAO powered by the Solana blockchain. The company’s mission is to empower
              economic opportunity, education, and equality. Projects under Diaspora will be funded initially by the
              launch of a unique NFT collection that showcases historic people, moments, and iconography of the
              diaspora. It will serve as a digital historical treasure, reimagined through a futuristic lens.
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
