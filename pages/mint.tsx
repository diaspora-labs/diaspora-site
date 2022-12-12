import { useWallet } from "@solana/wallet-adapter-react"
// import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Layout } from "../components/Layout"
import Image from "next/image"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Discord } from "../components/Icons/Discord"
import { PreMintMasks } from "../components/PreMintMasks/PreMintMasks"

const ntfs = [
  {
    id: 1,
    image: "/images/masks/mask-1.png",
    url: "/mask1.glb",
    name: "DAN",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    cost: 0.2,
  },
  {
    id: 2,
    image: "/images/masks/mask-2.png",
    url: "/mask2.glb",
    name: "Red Mbambi",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    cost: 0.5,
  },
  {
    id: 3,
    image: "/images/masks/mask-3.png",
    url: "/mask3.glb",
    name: "Cote D'Ivoire",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    cost: 0.7,
  },
]

const Mint = () => {
  const wallet = useWallet()

  return (
    <Layout>
      <div className="absolute inset-0 z-0 w-full bg-roadmap-bg bg-contain"></div>
      <div className="fixed inset-0 z-10 w-full bg-black opacity-40"></div>

      <div className="mb-30 relative z-20 mx-auto mt-40 lg:max-w-4xl">
        <div className="my-10 flex flex-col">
          <div className="mx-5 lg:mx-auto lg:w-full lg:max-w-3xl">
            <p className="mb-2 text-sm text-neutral-700 lg:pt-24">October 09, 2022</p>
            <p className="pb-8 text-2xl tracking-wide text-white lg:text-4xl">
              Introducing &ldquo;Masks&rdquo;
              <br />
              <span className="mt-1 font-light  lg:text-3xl">NFT pre-mint for Diaspora DAO.</span>
            </p>
            <p className="my-4 text-lg font-light leading-relaxed text-neutral-400 lg:mr-20">
              Experience unique rare NFT’s that give a sneak peak into the Diaspora NFT collection. Masks have deep
              cultural history across the world with some believed to have metaphysical properties. The “Masks”
              collection will unlock many benefits to holders that purchase the NFT.
            </p>
          </div>

          <div className="mx-auto mt-20 flex flex-row flex-wrap">
            {ntfs.map((item) => {
              return <Mask key={item.id} {...item} />
            })}
          </div>

          <div className="mt-20 mb-20 text-center">
            <p className="mb-10 text-lg text-white">
              Mint a mask. Join our 245 collections. <span className="text-orange">#TakeTheJourney</span>
            </p>

            <div className="mx-10 rounded-lg border border-neutral-700 p-20">
              <div className="h-[5px] w-full rounded bg-purple-light">
                <div className="h-[5px] w-[50%] rounded bg-orange"></div>
              </div>
              <div className="relative mt-5 w-full">
                <div className="absolute -left-[50%] top-0 w-full text-center text-neutral-500">
                  <div>0</div>
                  <div className="text-xs">We started here</div>
                </div>
                <div className="absolute -left-[-46%] top-0 text-center text-neutral-500">
                  <div>80k</div>
                  <div className="text-xs">We&apos;re here</div>
                </div>
                <div className="absolute -left-[-93%] top-0 text-center text-neutral-500">
                  <div>200k</div>
                  <div className="w-[100px] text-xs">Where we&apos;re going</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 mt-10 max-w-3xl lg:mx-auto">
            <h3 className="mb-10 text-2xl">Why Diaspora DAO</h3>

            <div className="mt-2 text-lg font-light leading-relaxed text-neutral-400">
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

          <div className="mx-5 mt-10 mb-20  rounded-lg border border-neutral-700 p-10 text-center">
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

const Mask = ({ id, url, name, cost, description, image }) => {

  return (
    <div className="mx-auto mb-10 w-full flex-col items-center justify-center text-center lg:mx-5 lg:w-[250px]">
      <div className="mb-2 md:ml-6 ml-24 scroll-smooth">
        {/* <Image width="250" height="250" src={image} /> */}
        
         <PreMintMasks id={id} url={url}/>
      </div>

      <div className="text-center">
        <div className="text-lg font-bold text-white">{name}</div>
        <div className="text-md my-2 font-light text-neutral-400">{description}</div>
        <div className="text-bold my-3 flex flex-row items-center justify-center">
          <Image src="/images/logos/solana-sol-logo.png" width="20" height="20" />{" "}
          <span className="ml-2 mt-1">{cost}</span>
        </div>
        <div className="mt-1">
          <button className="mt-2 rounded-lg bg-purple-med px-4 py-2 text-white">Mint Membership</button>
        </div>
      </div>
    </div>
  )
}

export default Mint
