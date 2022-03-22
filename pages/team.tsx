import React from "react"

import { Layout } from "../components/Layout"
import { Nav } from "../components/Nav"

const Team = () => {
  const Person = ({ name, bio, image }: { name: string; bio: string; image: string }) => {
    return (
      <div className="my-5 mb-20 flex">
        <div className="">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={`relative h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-indigo-600 bg-cover bg-center`}
          ></div>
        </div>
        <div className="pl-10">
          <div className="mb-4 text-xl">{name}</div>
          <div className="text-neutral-500">{bio}</div>
        </div>
      </div>
    )
  }

  const people = [
    {
      id: "1",
      name: "Dervin E. Dimanche",
      title: "Project Lead, Founder",
      bio: "Born & raised Haitian American, Dervin is a Technologist and Networker with extensive experience building high performance teams, advising Start-Ups, Product Development & leveraging Technology trends to Seize Market Opportunities - namely coming from Google & Meta. Dervin has an insatiable thirst for leveraging technology to push the global Diaspora forward and has made it a LifeLong Quest. He is passionate about History, Traveling, Design, Fashion, Philanthropy and the synergy of them all with Tech.",
      image: "/images/dervin-dimanche.png",
    },
    {
      id: "2",
      name: "Isaac Udogwu",
      title: "Artist & Co-Founder",
      bio: "A Nigerian-American digital Artist & Martial Artist that creates worlds that allow people of the African Diaspora to be fully liberated and just simply exist as humans. Using afro-futurism as a means to create these worlds because, as a friend once told him, “Afro-Futurism is simply black people existing in the future”. ",
      image: "/images/isaac-udogwu.png",
    },
    {
      id: "3",
      name: "Jesse Aridoux",
      title: "Design Lead",
      bio: "A seasoned visual designer with over a decade of experience, and a diverse background in the design field. He has built many brands and worked with companies in various industries from fashion/lifestyle, cosmetics, tech and more. He also leverages his craft as a fine artist to influence his design work.",
      image: "/images/jesse-aridoux.png",
    },
    {
      id: "4",
      name: "Luc Sucess",
      title: "Technical Lead",
      bio: "A 2x Start up Founder, Web and Mobile Engineer with 10+ Years of Development experience. He has worked namely at Spotify on discover weekly, and at Artsy as a Tech Lead. Luc has a passion for music production and Traveling.",
      image: "/images/luc-succes.jpg",
    },
    {
      id: "5",
      name: "Corey Neufville",
      title: "Program & Partnerships Lead",
      bio: "Multi Disciplined background in the tech space for over 13 years. Has experience in leading strategic initiatives from brand building to product development.  Spent 12+ years at Meta helping external partners & businesses fulfilling their business objectives on the platform.",
      image: "/images/corey-neufville.png",
    },
    {
      id: "6",
      name: "Pedro Acosta",
      title: "Sr. Software Engineer",
      bio: "Passionate about the future of the world and what innovative Tech can bring, Pedro pivoted careers transitioning from Law Enforcement to Tech. Building his expertise at an AI company, and founding TrueBonds - a platform that enables planning Funeral Services online. Pedro is also in addition to Engineering an avid Real Estate & Crypto investor by day- while holding top 75 ranking in NYC on Super Smash Brothers Ultimate by night. (Greninja main)",
      image: "/images/pedro-acosta.png",
    },
    {
      id: "7",
      name: "Rashawn Evans",
      title: "Sr. Software Engineer",
      bio: "User Centered Product Strategist and Gifted Front-End Developer with a passion for building and designing technology of the future. Rashawn is also founder of Start-up ‘PledgeNexus’ an Video Streaming Platform for Poets, Musicians, & Comedians giving young amateur artists a platform to grow, collaborate, and gain exposure. ",
      image: "/images/rashawn-evans.png",
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
      <div className="absolute bottom-10 right-10">
        <Nav />
      </div>
    </Layout>
  )
}

export default Team
