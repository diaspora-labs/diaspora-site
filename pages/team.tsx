import React from "react"

import { Layout } from "../components/Layout"
import { Nav } from "../components/Nav"
import { OnCyber, StreetArt } from "../components/Icons"

const Team = () => {
  const Person = ({
    name,
    bio,
    image,
    title,
    linkedIn,
    twitter,
    instagram,
    dribbble,
    cyber,
    foundation,
    streetArt
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
    return (
      <div className="my-5 mb-20 flex flex-col items-center md:flex-row md:items-start">
        <div className="mb-10">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={`relative h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-indigo-600 bg-cover bg-top`}
          ></div>
        </div>
        <div className="px-10 text-left">
          <div className="flex items-center">
            <div className="mb-1 text-xl">{name}</div>
            <div className="ml-3 mt-[-3px] flex">
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
            </div>
          </div>
          <div className="text-md mb-4 text-indigo-600">{title}</div>
          <div className="text-neutral-500">{bio}</div>
        </div>
      </div>
    )
  }

  const social = {
    instagram: {
      name: "Instagram",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    twitter: {
      name: "Twitter",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    github: {
      name: "GitHub",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    dribbble: {
      name: "Dribbble",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    linkedIn: {
      name: "LinkedIn",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 30 30" {...props}>
          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
        </svg>
      ),
    },
    cyber: {
      name: "Cyber",
      icon: OnCyber,
    },
    streetArt: {
      name: "StreetArt",
      icon: StreetArt,
    },
    foundation: {
      name: "Foundation",
      icon: (props: any) => (
        <svg width="55" fill="currentColor" viewBox="0 0 100 30">
          <path
            fillRule="evenodd"
            d="M64.894 16.456c0 9.088-7.368 16.456-16.457 16.456s-16.455-7.368-16.455-16.456S39.349 0 48.438 0s16.455 7.368 16.455 16.456zM16.902 1.567a.784.784 0 011.358 0L35.056 30.66a.784.784 0 01-.679 1.176H.785a.784.784 0 01-.679-1.176zM68.614.98c-.865 0-1.567.702-1.567 1.568v27.818c0 .866.702 1.567 1.567 1.567h27.819c.865 0 1.567-.701 1.567-1.567V2.547c0-.866-.702-1.568-1.567-1.568z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  }

  const people = [
    {
      id: "1",
      name: "Dervin E. Dimanche",
      title: "Project Lead, Founder",
      bio: "Born & raised Haitian American, Dervin is a Technologist and Networker with extensive experience building high performance teams, advising Start-Ups, Product Development & leveraging Technology trends to Seize Market Opportunities - namely coming from Google & Meta. Dervin has an insatiable thirst for leveraging technology to push the global Diaspora forward and has made it a LifeLong Quest. He is passionate about History, Traveling, Design, Fashion, Philanthropy and the synergy of them all with Tech.",
      image: "/images/team-images/Dutty-Boukman-Face.png",
      linkedIn: "https://www.linkedin.com/in/dervindimanche/",
      cyber: "https://www.cyber.xyz/w0rldpr0test",
    },
    {
      id: "2",
      name: "Isaac Udogwu",
      title: "Artist & Co-Founder",
      bio: "A Nigerian-American digital Artist & Martial Artist that creates worlds that allow people of the African Diaspora to be fully liberated and just simply exist as humans. Using afro-futurism as a means to create these worlds because, as a friend once told him, “Afro-Futurism is simply black people existing in the future”. ",
      image: "/images/team-images/isaac-udogwu.png",
      dribbble: "https://masterpiece.so/artist/12559",
      instagram: "https://www.instagram.com/eyesackudawgoo/?hl=en",
      foundation: "https://foundation.app/@eyesackudawgoo",
    },
    {
      id: "3",
      name: "Jesse Aridoux",
      title: "Design Lead",
      bio: "A seasoned visual designer with over a decade of experience, and a diverse background in the design field. He has built many brands and worked with companies in various industries from fashion/lifestyle, cosmetics, tech and more. He also leverages his craft as a fine artist to influence his design work.",
      image: "/images/team-images/jesse-aridoux.png",
      linkedIn: "https://www.linkedin.com/in/jesse-aridoux-337b20b5/",
      instagram: "https://www.instagram.com/aridoux_art/",
      streetArt: "https://mainstreetartscs.org/blog/jesse-aridoux/",
    },
    {
      id: "4",
      name: "Farrah Jean",
      title: "Social Media",
      bio: "Farrah is a social media connoisseur and software engineer. She has a passion for helping others in achieving their vision and finding innovative ways to connect clients to brands. She has worked with the likes of Sony Music/ RED Music, Cornerstone Agency, Future Boston Alliance as well as Hill Holliday predominantly within the digital marketing departments.",
      image: "/images/team-images/farrah-jean.jpg",
      linkedIn: "https://www.linkedin.com/in/farrah-jean/",
      instagram: "https://instagram.com/farrahevita?igshid=YmMyMTA2M2Y=",
    },
    {
      id: "5",
      name: "Corey Neufville",
      title: "Program & Partnerships Lead",
      bio: "Multi Disciplined background in the tech space for over 13 years. Has experience in leading strategic initiatives from brand building to product development.  Spent 12+ years at Meta helping external partners & businesses fulfilling their business objectives on the platform.",
      image: "/images/team-images/corey-neufville.png",
      linkedIn: "https://www.linkedin.com/in/corey-neufville-3424346b/",
    },
    {
      id: "6",
      name: "Luc Succès",
      title: "Technical Lead",
      bio: "A 2x Start up Founder, Web and Mobile Engineer with 10+ Years of Development experience. He has worked namely at Spotify on discover weekly, and at Artsy as a Tech Lead. Luc has a passion for music production and Traveling.",
      image: "/images/team-images/luc-succes.jpg",
      linkedIn: "https://www.linkedin.com/in/lucsucces/",
      twitter: "https://twitter.com/lucsucces",
    },
    {
      id: "7",
      name: "Pedro Acosta",
      title: "Sr. Software Engineer",
      bio: "Passionate about the future of the world and what innovative Tech can bring, Pedro pivoted careers transitioning from Law Enforcement to Tech. Building his expertise at an AI company, and founding TrueBonds - a platform that enables planning Funeral Services online. Pedro is also in addition to Engineering an avid Real Estate & Crypto investor by day- while holding top 75 ranking in NYC on Super Smash Brothers Ultimate by night. (Greninja main)",
      image: "/images/team-images/pedro-acosta.jpg",
      linkedIn: "https://www.linkedin.com/in/pedro-j-acosta/",
      instagram: "https://www.instagram.com/pedro.acosta824/",
    },
    {
      id: "8",
      name: "Rashawn Evans",
      title: "Sr. Software Engineer",
      bio: "User Centered Product Strategist and Gifted Front-End Developer with a passion for building and designing technology of the future. Rashawn is also founder of Start-up ‘PledgeNexus’ an Video Streaming Platform for Poets, Musicians, & Comedians giving young amateur artists a platform to grow, collaborate, and gain exposure. ",
      image: "/images/team-images/rashawn-evans.png",
      linkedIn: "https://www.linkedin.com/in/rashawn-evans-41b782a0/",
    },
  ]

  return (
    <Layout>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {people.map((person, i) => (
            <Person key={i} {...person} />
          ))}
        </div>
      </div>
      {/*<div className="fixed bottom-10 right-10">
        <Nav />
      </div>*/}
    </Layout>
  )
}

export default Team