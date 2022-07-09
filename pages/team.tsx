import React from "react"

import { Layout } from "../components/Layout"
import { OnCyber, StreetArt, Profile } from "../components/Icons"
import { people } from "../data/people"

const Team = (props: any) => {
  // const [showModal, props.setShowModal] = React.useState(false);
  const { setSelectedIndex } = props
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
  const Person = ({
    name = "",
    bio = "",
    image = "",
    title = "",
    linkedIn = "",
    twitter = "",
    instagram = "",
    dribbble = "",
    cyber = "",
    foundation = "",
    streetArt = "",
  }: {
    name: string
    bio: string
    image: string
    title: string
    linkedIn?: string
    twitter?: string
    instagram?: string
    dribbble?: string
    cyber?: string
    foundation?: string
    streetArt?: string
  }) => {
    // console.log('showPerson ', showPerson)
    return (
      <div className="md:w-11/12">
        <div className="relative">
          <div className="absolute top-10 right-7">
            <Profile />
          </div>
        </div>

        <div
          onClick={() => {
            window.scrollTo(0, 0)
            setPerson({
              ...showPerson,
              name: name,
              bio: bio,
              image: image,
              title: title,
              linkedIn: linkedIn,
              twitter: twitter,
              instagram: instagram,
              dribbble: dribbble,
              cyber: cyber,
              foundation: foundation,
              streetArt: streetArt,
            }),
              props.setShowModal(true)
          }}
          className="mb-10 flex flex-col items-center rounded-[40px] rounded-[2.5rem] border border-[#2D2A26] lg:flex-row "
        >
          <div className="mt- mb-5 pt-7 lg:ml-7">
            <div
              style={{ backgroundImage: `url(${image})` }}
              className={`relative h-[100px] w-[100px] overflow-hidden rounded-full border-2 border-neutral-800 bg-cover bg-top`}
            ></div>
          </div>

          <div className="px-5 text-left">
            <div className="flex items-center">
              <div className="mb-1 text-xl">{name}</div>
              {/*<div className="ml-3 mt-[-3px] flex">
                {linkedIn && (
                  <div className="mr-2">
                    <a target="_blank" rel="noreferrer" href={linkedIn}>
                      <social.linkedIn.icon width="24" height="24" background="#fff" />
                    </a>
                  </div>
                )}
                {twitter && (
                  <div className="mr-2">
                    <a target="_blank" rel="noreferrer" href={twitter}>
                      <social.twitter.icon width="24" height="24" background="#fff" />
                    </a>
                  </div>
                )}
                {instagram && (
                  <div className="mr-2">
                    <a target="_blank" rel="noreferrer" href={instagram}>
                      <social.instagram.icon width="24" height="24" background="#fff" />
                    </a>
                  </div>
                )}
                {dribbble && (
                  <div className="mr-2">
                    <a target="_blank" rel="noreferrer" href={dribbble}>
                      <social.dribbble.icon width="24" height="24" background="#fff" />
                    </a>
                  </div>
                )}
                {cyber && (
                  <div className="mr-2">
                    <a target="_blank" rel="noreferrer" href={cyber} className="mt-1 block">
                      <social.cyber.icon width="24" background="#fff" />
                    </a>
                  </div>
                )}
                {foundation && (
                  <div className="mr-2">
                    <a target="_blank" rel="noreferrer" href={foundation} className="mt-1 block">
                      <social.foundation.icon width="24" background="#fff" />
                    </a>
                  </div>
                )}
                {streetArt && (
                  <div className="mr-2">
                    <a target="_blank" rel="noreferrer" href={streetArt} className="mt-1 block">
                      <social.streetArt.icon width="24" background="#fff" />
                    </a>
                  </div>
                )}
              </div>*/}
            </div>
            <div className="text-md mb-4 text-center text-gray-400">{title}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative mt-20 lg:mt-40">
      <p className={`mb-10 text-center text-3xl font-bold tracking-wide text-gray-400 lg:mb-20`}>The Team</p>
      <div className="mx-auto grid max-w-6xl backdrop-blur-sm sm:auto-cols-auto lg:grid-cols-2 ">
        {people.map((person: any, i: number) => (
          <div onClick={() => setSelectedIndex(i)} key={i}>
            <Person {...person} />
          </div>
        ))}
      </div>

      {/* {props.showModal && (
          <div
            id="defaultModal"
            aria-hidden="true"
            className={`mt-50 h-modal absolute inset-x-0  top-[100px] z-50 flex w-full flex-col items-center overflow-y-auto overflow-x-hidden backdrop-blur-sm md:inset-x-0 md:top-[150px] md:h-full`}
          >
            <div className="... relative h-full w-full max-w-[866px] content-center p-4 md:h-auto">
              <div className="relative rounded-[2.5rem] bg-[#9b9b9b] shadow dark:bg-gray-700">
                <div className="relative">
                  <div className="absolute top-10 right-7">
                    <button
                      onClick={() => {
                        props.setShowModal(false)
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
                      style={{ backgroundImage: `url(${showPerson.image})` }}
                      className={`h-[132px] w-[132px] overflow-hidden rounded-full bg-cover bg-top`}
                    ></div>
                  </div>

                  <div className="px-10 pb-10 text-center lg:px-5 lg:py-20 lg:pr-20 lg:text-left">
                    <div className="text-2xl text-black">{showPerson.name}</div>
                    <div className="text-md mb-5 text-black lg:mb-4">{showPerson.title}</div>
                    <div className="text-sm text-black lg:mr-20">{showPerson.bio}</div>

                    <div className="mt-7 flex justify-center lg:items-center lg:justify-start">
                      <div className="mt-[-3px] flex">
                        {showPerson.linkedIn && (
                          <div className="mr-5 lg:mr-2">
                            <a target="_blank" rel="noreferrer" href={showPerson.linkedIn}>
                              <social.linkedIn.icon width="24" height="24" background="#000" />
                            </a>
                          </div>
                        )}
                        {showPerson.twitter && (
                          <div className="mr-5 lg:mr-2">
                            <a target="_blank" rel="noreferrer" href={showPerson.twitter}>
                              <social.twitter.icon width="24" height="24" background="#000" />
                            </a>
                          </div>
                        )}
                        {showPerson.instagram && (
                          <div className="mr-5 lg:mr-2">
                            <a target="_blank" rel="noreferrer" href={showPerson.instagram}>
                              <social.instagram.icon width="24" height="24" background="#000" />
                            </a>
                          </div>
                        )}
                        {showPerson.dribbble && (
                          <div className="mr-5 lg:mr-2">
                            <a target="_blank" rel="noreferrer" href={showPerson.dribbble}>
                              <social.dribbble.icon width="24" height="24" background="#000" />
                            </a>
                          </div>
                        )}
                        {showPerson.cyber && (
                          <div className="mr-5 lg:mr-2">
                            <a target="_blank" rel="noreferrer" href={showPerson.cyber} className="mt-1 block">
                              <social.cyber.icon width="24" background="#000" />
                            </a>
                          </div>
                        )}
                        {showPerson.foundation && (
                          <div className="mr-5 lg:mr-2">
                            <a target="_blank" rel="noreferrer" href={showPerson.foundation} className="mt-1 block">
                              <social.foundation.icon width="24" background="#000" />
                            </a>
                          </div>
                        )}
                        {showPerson.streetArt && (
                          <div className="mr-5 lg:mr-2">
                            <a target="_blank" rel="noreferrer" href={showPerson.streetArt} className="mt-1 block">
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
        )} */}
    </div>
  )
}

export default Team
