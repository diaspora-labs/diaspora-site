import React from "react"
import Image from "next/image"
import MaskImage from "../public/images/roadmap/mask.png"
import { Layout } from "../components/Layout"
import { CrowdFundingIcon } from "../components/Roadmap/CrowdFundingIcon"
import { MintAncestorIcon } from "../components/Roadmap/MintAncestorIcon"
import { StructureIcon } from "../components/Roadmap/StructureIcon"
import { PathwaysIcon } from "../components/Roadmap/PathwaysIcon"
import { InstitutionIcon } from "../components/Roadmap/InstitutionIcon"
import { HomeFooter } from "../components/Home/HomeFooter"
import { JourneyIcon } from "../components/JourneyIcon"


const Roadmap = () => {
  return (
    <Layout>
      <div className="absolute inset-0 z-0 w-full bg-roadmap-bg bg-cover"></div>

      <div className="container mx-auto flex flex-col pb-60 lg:relative  lg:align-top ">
        <div className=" lg:relative flex items-center justify-center md:row">
          <div className="max-w-lg px-9 flex flex-row content-center items-center">
            <div className="flex flex-col lg:mt-5">
              <p className="py-8 text-3xl font-bold tracking-wide text-white md:text-4xl lg:pt-24">{pageTitle}</p>
              <p className="text-lg font-light text-white">{pageSubTitle}</p>
            </div>
          </div>
          <div className="pl-3" >
            <Image src={MaskImage} />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 mt-[50px] p-[40px]" >

              {sections.map((item, index) => {
                const Icon = item.icon

                return (
                  <div className="w-45 h-140">
                    <div key={index} className=" flex my-20 justify-center items-center ">
                      <div className="flex">
                        <h1 className="text-[300px] mr-[-50px] mt-[-90px] opacity-30 text-gray-600 font-bold tracking-wide ">{index + 1}</h1>

                      </div>
                      <div>
                          <div className="mb-10 w-[150px] h-[100px]">
                            <Icon />
                          </div>  
                          <div className="mb-5">
                            <div>
                              <p className={"my-5 max-w-2xl text-3xl font-bold tracking-wide text-gray-200"}>{item.title}</p>

                              <ul className="ml-5 ">
                                {item.list.map((item) => {
                                  return (
                                    <li key={item} className={"mt-2 mr-2 w-full list-disc text-xl font-light text-gray-300"}>
                                      {item}
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>


      <HomeFooter />
    </Layout>
  )
}

const sections = [
  {
    icon: CrowdFundingIcon,
    title: "Launch Crowdfund",
    list: [],
    completed: false,
  },
  {
    icon: JourneyIcon,
    title: "The Journey",
    list: ["Crowdfund & Mint Pass"],
    completed: true,
  },
  {
    icon: MintAncestorIcon,
    title: "Mint an Ancestor",
    list: ["Launch NFT Collection", "Holder Incentives"],
    completed: false,
  },
  {
    icon: StructureIcon,
    title: "Lay the Cultural Foundation",
    list: ["Partnerships", "Artifact Airdrop", "ARHead Space Launch"],
    completed: false,
  },
  {
    icon: PathwaysIcon,
    title: "Building the Pathways",
    list: ["Upskilling in the palm of your hand"],
    completed: false,
  },
  {
    icon: InstitutionIcon,
    title: "Decentralized Powernomics",
    list: ["DAO", "Exploring Real Estate acquisition to diversify the assets in the Treasury. "],
    completed: false,
  },
]

const pageTitle = `A "Nonlinear" Journey
Through Lineage and Future`
const pageSubTitle = `Transparency is key for the Diaspora DAO. It is important that we share our journey as we build the community. Decentralization is not only a part of the foundation of the organization, but also the pathway through lineage. Diaspora’s journey to building a DAO, as well as every members own journey within it, is a non linear path. We will continue to iterate and learn from the past to create pathways for the future.`

export default Roadmap
