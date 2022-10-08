import React, { useState, useEffect, useRef } from "react"
import { useSpringCarousel } from "react-spring-carousel"
import { people } from "../../data/people"
import { social } from "../Social"
import { PersonCard } from "./PersonCard"
import { ScrollDownIcon } from "../Icons/ScrollDownIcon"
import { Closeinactive } from "../Icons/Closeinactive"
import cls from "classnames"

export const PeopleSection = ({ showModal, setShowModal }: any) => {
  const [showPerson, setPerson] = React.useState({
    name: "",
    bio: "",
    image: "",
    title: "",
    linkedIn: "",
    twitter: "",
    instagram: "",
    dribbble: "",
    cyber: "",
    foundation: "",
    streetArt: "",
  })

  const scrollRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [windowWidth, setWidowWidth] = useState(0)

  const { carouselFragment, slideToItem, useListenToCustomEvent } = useSpringCarousel({
    items: people.map((i: any, index: number) => ({
      loop: true,
      slideType: "fixed",
      itemsPerSlide: 1,
      initialActiveItem: 0,
      id: i.id,
      renderItem: (
        <div key={index} id="defaultModal" aria-hidden="true">
          <div className="... relative h-full content-center p-4 md:h-auto md:px-[30vh] ">
            <div className="relative rounded-[2.5rem] bg-[#9b9b9b] shadow dark:bg-gray-700">
              <div className="relative">
                <div className="absolute top-10 right-7">
                  <button
                    onClick={() => {
                      setShowModal(false)
                    }}
                    type="button"
                    className="group ml-auto inline-flex cursor-pointer items-center rounded-lg p-1.5 text-sm transition ease-in-out"
                    data-modal-toggle="defaultModal"
                  >
                    <Closeinactive />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex-row">
                <div className="mb-5 mt-9 mr-7 ml-7 lg:mb-5 lg:mt-5 lg:mr-5 lg:ml-7">
                  <div
                    style={{ backgroundImage: `url(${i.image})` }}
                    className={`h-[132px] w-[132px] overflow-hidden rounded-full bg-cover bg-top`}
                  ></div>
                </div>

                <div className="px-10 pb-10 text-center lg:px-5 lg:py-20 lg:pr-20 lg:text-left">
                  <div className="text-2xl text-black">{i.name}</div>
                  <div className="text-md mb-5 text-black lg:mb-4">{i.title}</div>
                  <div className="text-sm text-black lg:mr-20">{i.bio}</div>

                  <div className="mt-5 flex justify-center lg:items-center lg:justify-start">
                    <div className="mt-[-3px] flex">
                      {i.linkedIn && (
                        <div className="mr-5 lg:mr-2">
                          <a target="_blank" rel="noreferrer" href={showPerson.linkedIn}>
                            <social.linkedIn.icon width="24" height="24" background="#000" />
                          </a>
                        </div>
                      )}
                      {i.twitter && (
                        <div className="mr-5 lg:mr-2">
                          <a target="_blank" rel="noreferrer" href={i.twitter}>
                            <social.twitter.icon width="24" height="24" background="#000" />
                          </a>
                        </div>
                      )}
                      {i.instagram && (
                        <div className="mr-5 lg:mr-2">
                          <a target="_blank" rel="noreferrer" href={i.instagram}>
                            <social.instagram.icon width="24" height="24" background="#000" />
                          </a>
                        </div>
                      )}
                      {i.dribbble && (
                        <div className="mr-5 lg:mr-2">
                          <a target="_blank" rel="noreferrer" href={i.dribbble}>
                            <social.dribbble.icon width="24" height="24" background="#000" />
                          </a>
                        </div>
                      )}
                      {i.cyber && (
                        <div className="mr-5 lg:mr-2">
                          <a target="_blank" rel="noreferrer" href={i.cyber} className="mt-1 block">
                            <social.cyber.icon width="24" background="#000" />
                          </a>
                        </div>
                      )}
                      {i.foundation && (
                        <div className="mr-5 lg:mr-2">
                          <a target="_blank" rel="noreferrer" href={i.foundation} className="mt-1 block">
                            <social.foundation.icon width="24" background="#000" />
                          </a>
                        </div>
                      )}
                      {i.streetArt && (
                        <div className="mr-5 lg:mr-2">
                          <a target="_blank" rel="noreferrer" href={i.streetArt} className="mt-1 block">
                            <social.streetArt.icon width="24" background="#000" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      renderThumb: <h1 style={{ color: "#fff", zIndex: 10 }}> Thumb </h1>,
    })),
  })

  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideChange") {
      setSelectedIndex(event.currentItem.index)
    }
  })

  useEffect(() => {
    if (!!slideToItem) {
      slideToItem(selectedIndex)
    }
  }, [selectedIndex, slideToItem])

  /**
   * Used to go to the next and previous slide when the carousel is displayed
   * @param direction
   * @returns
   */
  const updateSlide = (direction: number) => {
    const css = direction > 0 ? "cursor-pointer -rotate-90" : "cursor-pointer  rotate-90"
    return (
      <div
        className={css}
        onClick={() => {
          if (selectedIndex + direction >= 0 && selectedIndex + direction < people.length) {
            slideToItem(selectedIndex + direction)
          }
        }}
      >
        <ScrollDownIcon />
      </div>
    )
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "scroll"
    }
  }, [showModal])

  useEffect(() => {
    setWidowWidth(window.innerWidth)
  }, [])

  return (
    <div className="relative">
      <span ref={scrollRef} style={{ position: "absolute", top: -100 }} />
      <div
        className="backdrop-blur-sm"
        style={{
          position: "fixed",
          top: 0,
          overflowX: showModal ? "hidden" : "scroll",
          overflowY: showModal ? "hidden" : "hidden",
          height: showModal ? "100vh" : 0,
          width: showModal ? "100vw" : 0,
          marginTop: "10%",
          placeContent: "center",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99,
          backgroundColor: "#000000cc",
        }}
      >
        {windowWidth >= 400 && (
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: "100%",
              padding: "0px 10%",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 2,
              top: "24%",
            }}
          >
            {updateSlide(-1)}
            {updateSlide(1)}
          </div>
        )}

        {showModal && windowWidth >= 400 && (
          <div className="align-center fixed top-96 z-10 flex w-full flex-row justify-center pt-8">
            {people.map((item, index) => {
              return (
                <p
                  onClick={() => setSelectedIndex(index)}
                  key={index}
                  className={cls(
                    "mx-[6px] h-[6px] w-[6px] cursor-pointer rounded-full",
                    selectedIndex === index ? "bg-white" : "bg-gray-500"
                  )}
                />
              )
            })}
          </div>
        )}
        {carouselFragment}
      </div>

      <div className="relative mt-4">
        {/* <ScrollDownIcon /> */}

        <p className={`mb-4 mt-20 text-center text-3xl font-bold tracking-wide text-gray-400 lg:mb-10`}>The Team</p>
        <div className="lg:space mx-auto grid max-w-6xl px-20 backdrop-blur-sm sm:auto-cols-auto lg:grid-cols-2 lg:gap-4">
          {people.map((person: any, i: number) => (
            <div onClick={() => setSelectedIndex(i)} key={i}>
              <PersonCard
                person={person}
                onClick={() => {
                  scrollRef.current.scrollIntoView({ block: "start" })
                  setPerson(person), setShowModal(true)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
