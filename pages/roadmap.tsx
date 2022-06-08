import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useParallax } from "react-scroll-parallax"
import BackgroundSVG from "../public/images/bg-pattern.svg"
import lottie from "lottie-web"
// @ts-ignore
import { Roll, Flip } from "react-reveal"

import animation from "../roadmap-animation/data.json"

const Roadmap = () => {
  // start animation
  useEffect(() => {
    var animDuration = 4000
    const anim = lottie.loadAnimation({
      container: document.querySelector(".roadmap-animation") as HTMLElement,
      animationData: animation,
      renderer: "svg", // "canvas", "html"
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
      console.log("Scrolling")
      animatebodymovin(animDuration)
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      anim.destroy()
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  // initialize active index
  const [activeIndex, setActiveIndex] = useState(0)
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

  const parallax = useParallax<HTMLDivElement>({
    // rotate: [0, 360],
    translateY: ["-400px", "0px"],
  })

  // ui components
  return (
    <div className="roadmap-background">
      <div className="parallax" ref={parallax.ref}>
        <Image src={BackgroundSVG} alt="DISAPORA" layout="fill" />
      </div>

      <div className="roadmap-pagnation">
        {sections.map((item: any, index: number) => {
          return (
            <p
              key={index}
              className={`${activeIndex === index ? "roadmap-pagnation-dot-active" : "roadmap-pagnation-dot-unactive"}`}
              onClick={() => {
                setActiveIndex(index)
                !!refArray.current && refArray.current[index].scrollIntoView()
              }}
            />
          )
        })}
      </div>

      <div className="roadmap-animation" />
      <p className="roadmap-page-title text-4xl font-bold">{pageTitle}</p>
      <p className="roadmap-sub-text">{pageSubTitle}</p>

      {sections.map((item, index) => {
        return (
          <div ref={addToRefs} className={index % 2 === 0 ? "right-section" : "left-section"} key={index}>
            <Flip left={index % 2 === 1} right={index % 2 === 0}>
              <p className="roadmap-section-title text-4xl font-bold">{item.title}</p>
            </Flip>
            <Roll left={index % 2 === 1} right={index % 2 === 0}>
              {item.list.map((item) => {
                return (
                  <div key={item}>
                    <p className="roadmap-section-list-text font-bold">{item}</p>
                  </div>
                )
              })}
            </Roll>
          </div>
        )
      })}
    </div>
  )
}

export default Roadmap
