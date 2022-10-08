import React, { useState, useRef } from "react"
import { NextPage } from "next"

import { HomeFooter } from "../components/Home/HomeFooter"
import { Discord } from "../components/Icons/Discord"
import { Envelop } from "../components/Icons/Envelop"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { ScrollDownIcon } from "../components/Icons/ScrollDownIcon"

import { Layout } from "../components/Layout"
import { Visual } from "../components/HomeVisual"

import Image from "next/image"

import { PeopleSection } from "../components/Home/PeopleSection"
import { GoldMaskThree } from "../components/GoldMask/GoldMaskThree"

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const secondPage = useRef(null)
  const scrollToSecondPage = () => {
    secondPage.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    })
  }
  return (
    <Layout showLogo>
      <section className={"relative z-10 flex h-full flex-col md:min-h-screen"}>
        <div className="z-10 flex grow flex-col p-10 ">
          <div className="text-center md:grid md:h-full md:grow md:grid-cols-4">
            <div className="mt-20 flex h-full flex-col items-center justify-center md:col-span-2 md:mt-0 md:mr-40">
              <div className="text-center text-4xl font-light leading-tight text-neutral-500 shadow-black drop-shadow-md md:text-left md:text-5xl">
                Building a bridge
                <br />
                for the culture
                <br />
                <div className="mt-5 text-3xl font-normal text-neutral-400">#TakeTheJourney</div>
              </div>
            </div>
            <div className="z-10 col-span-2 h-full items-end justify-center md:mr-20 md:ml-40 md:flex md:flex-col">
              <div className="invisible flex flex-col items-center justify-center space-y-6 md:visible">
                <div className="invisible hidden text-center  text-4xl font-light md:visible md:mt-[80px] md:block">
                  Great things
                  <br />
                  are coming
                </div>

                <div className="visible text-lg font-normal">Connect with us to stay updated</div>
                <div className="pointer-events-auto visible flex space-x-8">
                  {/* <Discord /> */}
                  <a
                    href="https://www.instagram.com/diasporaxyz/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a href="https://twitter.com/OurDiaspora" target="_blank" rel="noreferrer">
                    <Twitter />
                  </a>
                  <a href="mailto:info@ourdiaspora.xyz" target="_blank" rel="noreferrer">
                    <Envelop />
                  </a>
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
        <div
          className={
            "bg-100 md:mt-100 inset-0 mb-20 scroll-smooth bg-[length:1000px] bg-center bg-no-repeat md:absolute md:z-0"
          }
        >
          <GoldMaskThree />
        </div>
      </section>

      <span
        ref={secondPage}
        className="align-center flex cursor-pointer justify-center pb-10"
        onClick={scrollToSecondPage}
      >
        <ScrollDownIcon />
      </span>

      <section className={"pointer-events-auto z-10 flex h-full flex-col border-t-[1px] border-neutral-800"}>
        <div className="my-auto mt-10 flex grow flex-col p-10">
          <div className="mx-auto">
            <Visual />
            {/* <Image src="/images/logos/diaspora-team-logo.png" alt="screenshot" width="652" height="172" /> */}
          </div>

          <div className={"container mx-auto mt-10 max-w-3xl"}>
            <p className="text-center text-lg font-normal tracking-wide text-gray-400">
              4,444 Ancestors to guide you on your Journey into Web3. Connecting the Diaspora on the Solana Blockchain
              with History, Lineage, Up-skilling & Digital Art. With a goal to inspire ‘Decentralized Powernomics’
              across the culture, summon your Sol & Mint an Ancestor. Your key-to-access, collectible & guide.
              {/* Diaspora is a community centric DAO powered by the Solana blockchain. The company’s mission is to empower
              economic opportunity, education, and equality. Projects under Diaspora will be funded initially by the
              launch of a unique NFT collection that showcases historic people, moments, and iconography of the
              diaspora. It will serve as a digital historical treasure, reimagined through a futuristic lens. */}
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
