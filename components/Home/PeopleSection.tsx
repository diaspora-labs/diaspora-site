import React, { useState, useEffect } from "react"
import { useSpringCarousel } from "react-spring-carousel"
import { people } from "../../data/people"
import { social } from "../Social"
import { PersonCard } from "./PersonCard"
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

  const [selectedIndex, setSelectedIndex] = useState(0)

  const { carouselFragment, slideToItem, useListenToCustomEvent } = useSpringCarousel({
    items: people.map((i: any, index: number) => ({
      loop: true,
      slideType: "fixed",
      itemsPerSlide: 1,
      initialActiveItem: 0,
      id: i.id,
      renderItem: (
        <div key={index} id="defaultModal" aria-hidden="true" className={``}>
          <div className="... relative h-full content-center p-4 md:h-auto md:px-[30vh] ">
            <div className="relative rounded-[2.5rem] bg-[#9b9b9b] shadow dark:bg-gray-700">
              <div className="relative">
                <div className="absolute top-10 right-7">
                  <button
                    onClick={() => {
                      setShowModal(false)
                    }}
                    type="button"
                    className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-black hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      className="h-10 w-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
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

                  <div className="mt-7 flex justify-center lg:items-center lg:justify-start">
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

  return (
    <>
      <div
        style={{
          overflowX: showModal ? "hidden" : "scroll",
          overflowY: showModal ? "hidden" : "hidden",
          height: showModal ? "80vh" : 0,
          placeContent: "center",
          justifyContent: "center",
          // width: showModal ? "60%" : 0
        }}
      >
        {carouselFragment}
      </div>

      {showModal && (
        <div className="align-center mb-10 flex flex-row justify-center">
          {people.map((item, index) => {
            return (
              <p
                onClick={() => setSelectedIndex(index)}
                key={index}
                className={cls(
                  "mx-[6px] h-[6px] w-[6px] rounded-full",
                  selectedIndex === index ? "bg-white" : "bg-gray-500"
                )}
              />
            )
          })}
        </div>
      )}

      <div className="relative mt-4">
        <p className={`mt-20 text-center text-3xl font-bold tracking-wide text-gray-400 lg:mb-10`}>The Team</p>
        <div className="lg:space mx-auto grid max-w-6xl px-20 backdrop-blur-sm sm:auto-cols-auto lg:grid-cols-2 lg:gap-4">
          {people.map((person: any, i: number) => (
            <div onClick={() => setSelectedIndex(i)} key={i}>
              <PersonCard
                person={person}
                onClick={() => {
                  setPerson(person), setShowModal(true)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
