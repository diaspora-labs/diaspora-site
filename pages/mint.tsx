import { useWallet } from "@solana/wallet-adapter-react"
import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Layout } from "../components/Layout"
import Image from "next/image"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Discord } from "../components/Icons/Discord"

const Mint = () => {
  const ntfs = [
    {
      url: "/images/masks/nft-1.jpg",
      name: "Cote D'Ivoire",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      cost: 0.2,
    },
    {
      url: "/images/masks/nft-2.jpg",
      name: "DAN",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      cost: 0.5,
    },
    {
      url: "/images/masks/nft-3.jpg",
      name: "Red Mbambi",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      cost: 0.7,
    },
  ]

  const Mask = ({ url, name, cost, description }) => {
    return (
      <div className="mx-5 w-[250px] flex-col">
        <div className="mb-2">
          <Image width="250" height="250" src={url} />
        </div>

        <div className="text-center">
          <div className="text-lg font-bold text-white">{name}</div>
          <div className="text-md my-2 font-light text-neutral-400">{description}</div>
          <div className="text-bold my-3 flex flex-row items-center justify-center">
            <Image src="/images/logos/solana-sol-logo.png" width="20" height="20" />{" "}
            <span className="ml-2">{cost}</span>
          </div>
          <div className="mt-1">
            <button className="mt-2 rounded-lg bg-purple-med px-4 py-2 text-white">Mint Membership</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="absolute inset-0 z-0 w-full bg-roadmap-bg bg-cover"></div>

      <div className="mb-30 mx-auto mt-40 max-w-4xl">
        <div className="my-10 flex flex-col">
          <div className="mx-auto max-w-3xl">
            <p className="py-8 text-3xl tracking-wide text-white md:text-4xl lg:pt-24">
              Introducing "Masks" NFT pre-mint
              <br />
              for Diaspora DAO.
            </p>
            <p className="my-4 mr-20 text-lg font-light text-neutral-400">
              Experience unique rare NFTs that will give a sneak peek to the Diaspora DAO NFT collection. Masks have
              deep cultural history across the world, which includes access to the metaphysical. The “Masks” collection
              will unlock many benefits to users that purchase the NFT.
            </p>
          </div>

          <div className="mx-auto mt-20 flex flex-row flex-wrap">
            {ntfs.map((item) => {
              return <Mask key={item.url} {...item} />
            })}
          </div>

          <div className="mt-20 mb-20 text-center">
            <p className="mb-10 text-lg text-white">
              Mint a mask. Join our 245 collections. <span className="text-orange">#TakeTheJourney</span>
            </p>

            <div className="mx-10 rounded-lg border border-neutral-700 p-10">
              <div className="h-[5px] w-full rounded bg-purple-light">
                <div className="h-[5px] w-[50%] rounded bg-orange"></div>
              </div>
              <div className="mt-5 flex flex-row justify-between"></div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <h3 className="mb-10 text-2xl">Why Diaspora DAO</h3>

            <div className="mt-2 font-light text-neutral-400">
              <p className="mb-5">
                Diaspora is reimagining what lineage and self discovery looks like in a decentralized world.  We will be
                connecting thousands of years of history globally to a community that will both look at the past as well
                as create opportunities for communities in future.
              </p>
              <p className="mb-5">
                Early access to our pre-mint will give users insight into the community we are building along with early
                projects that are in the works.
              </p>
              <p className="mb-5">
                While building bridges between *past* and *future* is important to Diaspora DAO, using DeFi to bring
                transparency and opportunity to organizations that are dedicated to improving a way of life for those in
                the Diaspora. Our “Masks” will give access to some of these early projects and show team vision for the
                future.
              </p>
            </div>
          </div>

          <div className="mt-10 mb-20  rounded-lg border border-neutral-700 p-10 text-center">
            <h3 className="mb-10 text-2xl">Stay connected.</h3>
            <div className="flex flex-row justify-center">
              <span className=" flex flex-row items-center space-x-20">
                <a className="block" href="">
                  <Discord color="rgba(255,255,255,0.5)" size={35} />
                </a>
                <a
                  className="block"
                  href="https://www.instagram.com/diasporaxyz/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram color="rgba(255,255,255,0.5)" size={35} />
                </a>
                <a className="block" href="https://twitter.com/OurDiaspora" target="_blank" rel="noreferrer">
                  <Twitter color="rgba(255,255,255,0.5)" size={35} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <HomeFooter />
    </Layout>
  )
}

export default Mint
