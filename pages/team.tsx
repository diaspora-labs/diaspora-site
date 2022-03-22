import React from "react"
import { DiasporaLogoSmall } from "../components/DiasporaLogoSmall"
import { Layout } from "../components/Layout"
import { Nav } from "../components/Nav"

const Team = () => {
  const Person = ({ name, bio }: { name: string; bio: string }) => {
    return (
      <div className="my-5 flex">
        <div className="">
          <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full border-2 border-indigo-600">
            <img src="https://www.fillmurray.com/80/80" className="absolute inset-0" />
          </div>
        </div>
        <div className="pl-2">
          <div className="text-lg">{name}</div>
          <div className="text-neutral-500">{bio}</div>
        </div>
      </div>
    )
  }

  const people = [
    {
      name: "Luc Succès",
      bio: `A 2x startup founder, web and Mobile Engineer with 10+ years of development experience.
          He has worked namely at Spotify on discover weekly, and at Artsy as a tech lead. Luc has a passion for music
          production and traveling`,
    },
  ]

  return (
    <Layout>
      <DiasporaLogoSmall />
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
