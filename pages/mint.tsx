import React, { useState, useEffect } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Layout } from "../components/Layout"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Discord } from "../components/Icons/Discord"
import { NFTModal, Nft } from "@/components/NFTModal"
import { Mask } from "@/components/Mask"

const Mint = () => {
  const wallet = useWallet()
  const [nfts, setNfts] = useState([])
  // create a new state variable for a modal
  const [showModal, setShowModal] = useState(false)
  const [minted, mintNFT] = useState<Nft | null>(null)

  useEffect(() => {
    fetch("/api/masks")
      .then((res) => res.json())
      .then((data) => {
        setNfts(data)
      })
  }, [])

  const mintMembership = async (nft) => {
    mintNFT(nft)
    setShowModal(true)
  }

  return (
    <Layout>
      <div className="absolute inset-0 z-0 w-full bg-roadmap-bg bg-contain"></div>
      <div className="fixed inset-0 z-10 w-full bg-black opacity-40"></div>

      <div className="mb-30 relative z-20 mx-auto mt-40 lg:max-w-4xl">
        <div className="my-10 flex flex-col">
          <div className="mx-5 lg:mx-auto lg:w-full lg:max-w-3xl">
            <p className="pb-8 text-2xl tracking-wide text-white lg:text-4xl">
              Introducing &ldquo;Masks&rdquo;
              <br />
              <span className="mt-1 font-light lg:text-3xl">NFT pre-mint for Diaspora DAO.</span>
            </p>
            <p className="my-4 text-lg font-light leading-relaxed text-neutral-400 lg:mr-20">
              Experience unique rare NFT’s that give a sneak peak into the Diaspora NFT collection. Masks have deep
              cultural history across the world with some believed to have metaphysical properties. The “Mask” passes
              unlock many benefits to holders that mint.
            </p>
          </div>

          <div className="mx-auto mt-20 flex flex-row flex-wrap">
            {nfts.map((item) => (
              <Mask key={item.id} {...item} onMint={mintMembership.bind(this, item)} />
            ))}
          </div>

          {showModal && <NFTModal nft={minted} setModal={setShowModal} />}

          <div className="mt-20 mb-20 text-center">
            <p className="mb-10 text-lg text-white">
              Mint a mask. <span className="text-orange">#TakeTheJourney</span>
            </p>

            <div className="mx-10 rounded-lg border border-neutral-700 px-10 py-20 md:px-20">
              <div className="h-[5px] w-full rounded bg-purple-light">
                <div className="h-[5px] w-[50%] rounded bg-orange"></div>
              </div>
              <div className="relative mt-5 w-full">
                <div className="absolute -left-[50%] top-0 w-full text-center text-neutral-500">
                  <div>0</div>
                  <div className="hidden text-xs md:block">We started here</div>
                </div>
                <div className="absolute -left-[-93%] top-0 text-center text-neutral-500">
                  <div>200k</div>
                  <div className="hidden w-[100px] text-xs md:block">Where we&apos;re going</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 mt-10 max-w-3xl lg:mx-auto">
            <h3 className="mb-10 text-2xl">Why Diaspora DAO</h3>

            <div className="mt-2 text-lg font-light leading-relaxed text-neutral-400">
              <p className="mb-5">
                Diaspora DAO is a decentralized autonomous organization leveraging the Solana blockchain to bridge the
                gap and enable equal access to opportunities in both the physical and digital worlds. We are committed
                to utilizing cutting-edge Web3 technologies to empower communities across the African, Latin, and
                Caribbean diaspora.
              </p>
              <p className="mb-5">
                Our mission is to create a vibrant ecosystem where members can participate in the decision-making
                process, contribute to innovative projects, and benefit from a range of exclusive rewards. We strive to
                tackle real-world issues and foster a diverse, inclusive environment that celebrates the unique heritage
                of our global community.
              </p>
              <p className="mb-5">
                At Diaspora DAO, our initiatives include the launch of limited NFT collections, AR experiences, and the
                development of decentralized applications that focus on promoting cultural heritage, education, and
                financial inclusion. We invite you to join us in shaping a more equitable and interconnected future for
                everyone.
              </p>
            </div>
          </div>

          <div className="mx-5 mt-10 mb-20  rounded-lg border border-neutral-700 p-10 text-center">
            <h3 className="mb-10 text-2xl">Stay Connected. Discord Soon.</h3>
            <div className="flex flex-row justify-center">
              <span className=" flex flex-row items-center space-x-20">
                <a
                  className="block"
                  href="https://discord.com/channels/1033040339763728505/1042523085057839135/1111076313017626705"
                  target="_blank"
                  rel="noreferrer"
                >
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
