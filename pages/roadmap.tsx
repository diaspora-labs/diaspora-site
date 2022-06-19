import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import lottie from "lottie-web"
import { useParallax } from "react-scroll-parallax"
import VisibilitySensor from "react-visibility-sensor"
import { Roll, Flip } from "react-reveal"
import { isMobile } from "react-device-detect"

import animation from "../roadmap-animation/data.json"
import mobileAnimation from "../roadmap-animation/data_mobile.json"
import BackgroundSVG from "../public/images/bg-pattern.svg"

const Roadmap = () => {
  // initialize active index
  const [activeIndex, setActiveIndex] = useState(0)

  // update pagination on scroll
  function onChange(isVisible: any, index: number) {
    setActiveIndex(index)
  }

  // laod animation
  useEffect(() => {
    var animDuration = 3800
    const anim = lottie.loadAnimation({
      container: document.querySelector(".roadmap-animation") as HTMLElement,
      animationData: isMobile ? mobileAnimation : animation,
      renderer: "svg",
      loop: false,
      autoplay: false,
    })

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY
      const maxFrames = anim.totalFrames
      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100))
      anim.goToAndStop(frame, true)
    }

    const onScroll = () => {
      animatebodymovin(animDuration)
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      anim.destroy()
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  // create page sections
  const sections = [
    {
      title: "The Journey",
      list: ["Define Mission/Vision", "Build Roadmap", "Build Whitepaper", "Brand Identity"],
    },
    {
      title: "Mint an Ancestor",
      list: ["Launch NFT Collection", "Build Gallery", "Marketing / Social"],
    },
    {
      title: "Lay the Cultural Foundation",
      list: ["Develop DAO", "Develop Structure and Governance", "Logistics (LLC, DeFi, etc.)"],
    },
    {
      title: "Building the Pathways",
      list: [
        "Building Partnerships (in the 4 pillars)",
        "Develop Event Schedule and Framework (Physical and Digital)",
        "Develop Masterclasses",
      ],
    },
  ]

  // create References
  const initial: Array<any> = []
  const refArray = useRef(initial)
  const addToRefs = (el: any) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el)
    }
  }

  // section titles
  const pageTitle = `A "Nonlinear" Journey Through Lineage and Future`
  const pageSubTitle = `Transparency is key for the Diaspora DAO. It is important that we share our journey as we build the community. Decentralization is not only a part of the foundation of the organization, but also the pathway through lineage. Diaspora’s journey to building a DAO, as well as every members own journey within it, is a non linear path. We will continue to iterate and learn from the past to create pathways for the future.`

  // background parallax element
  const parallax = useParallax<HTMLDivElement>({
    speed: -10,
  })

  // ui components
  return (
    <div className="w-screen">
      <div className="fixed top-0 w-1/6 opacity-10" ref={parallax.ref}>
        <Image src={BackgroundSVG} alt="diaspora" layout="fixed" />
      </div>

      <div className="fixed top-2/4 right-20 flex-col items-center">
        {sections.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`${
                activeIndex === index
                  ? "z-10 mb-3 h-2 w-2 rounded-full bg-yellow-300"
                  : "z-10 mb-3 h-1 w-1 rounded-full bg-yellow-300"
              }`}
              onClick={() => {
                setActiveIndex(index)
                !!refArray.current && refArray.current[index].scrollIntoView({ block: "end", inline: "nearest" })
              }}
            />
          )
        })}
      </div>

      <div className="roadmap-animation" />
      <div className="flex w-screen flex-col items-center">
        <p className="max-w-2xl p-8 pt-24 text-center text-5xl font-bold tracking-wide text-white">{pageTitle}</p>
        <p className="w-6/12 text-center text-white">{pageSubTitle}</p>
      </div>

      <div className="flex w-screen flex-col items-center">
        {sections.map((item, index) => {
          const isEven = index % 2 === 0
          const isOdd = !isEven
          return (
            <VisibilitySensor onChange={(isVisible) => onChange(isVisible, index)} key={index}>
              <div ref={addToRefs} className={isEven ? "mt-56 ml-96 w-1/3" : "mt-56 mr-96 w-1/3"}>
                <div className={`${isEven ? "ml-24" : "mr-24"}`}>
                  <Flip left={isOdd} right={isEven}>
                    <p className={`+ mt-96 text-5xl font-bold text-white`}>{item.title}</p>
                  </Flip>
                  <Roll left={isOdd} right={isEven}>
                    {item.list.map((item) => {
                      return (
                        <div key={item}>
                          <p className="mt-2 w-2/3 font-bold text-white">{item}</p>
                        </div>
                      )
                    })}
                  </Roll>
                </div>
              </div>
            </VisibilitySensor>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap
