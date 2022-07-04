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
    var animDuration = isMobile ? 1000 : 4100
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
      if (frame <= maxFrames) {
        anim.goToAndStop(frame, true)
      }
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
    <div
      className={
        isMobile
          ? "relative w-screen overflow-x-hidden overflow-y-scroll bg-purple-med"
          : "relative w-screen overflow-y-hidden bg-purple-med"
      }
    >
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
                  ? "md:z-10 md:mb-3 md:h-2 md:w-2 md:rounded-full md:bg-yellow-300"
                  : "md:z-10 md:mb-3 md:h-1 md:w-1 md:rounded-full md:bg-yellow-300"
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
        <p className="max-w-2xl px-[60px] p-8 pt-24 text-center text-3xl font-bold tracking-wide text-white">{pageTitle}</p>
        <p className={"w-full font-light text-center text-white md:w-6/12 text-center text-white px-10 text-base"}>{pageSubTitle}</p>
      </div>

      <div className="flex w-screen flex-col items-center">
        {sections.map((item, index) => {
          const isEven = index % 2 === 0
          const isOdd = !isEven
          return (
            <VisibilitySensor onChange={(isVisible) => onChange(isVisible, index)} key={index}>
              <div
                ref={addToRefs}
                className={isMobile ? "mt-56" : isEven ? "md:mt-56 md:ml-96 " : "md:mt-56 md:mr-96 "}
              >
                <div className={isMobile ? "" : isEven ? "md:ml-24" : "md:mr-24"}>
                  <Flip left={isOdd} right={isEven}>
                    <p className={"max-w-2xl md:p-8 px-20 pt-24 text-center text-3xl font-bold tracking-wide text-white"}>
                      {item.title}
                    </p>
                  </Flip>
                  <Roll left={isOdd} right={isEven}>
                    {item.list.map((item) => {
                      return (
                        <div key={item}>
                          <p className={"px-5 mt-2 w-full text-center text-white text-base font-light"}>{item}</p>
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
