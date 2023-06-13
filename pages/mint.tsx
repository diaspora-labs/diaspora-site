import React, { useState, useEffect } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Layout } from "../components/Layout"
import Image from "next/image"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Discord } from "../components/Icons/Discord"
import { PreMintMasks } from "../components/PreMintMasks/PreMintMasks"
import dynamic from "next/dynamic"
import { safeFetchNft } from "../lib/mpl/tokenMetadata/fetchNft"
import { EditionMintModule } from "@/components/MintModule"
import ReactPlayer from "react-player"

type Nft = {
  id: string
  url: string
  name: string
  cost: string
  title: string[]
  details: string[]
  description: string
  nftId: string
  fpsMarketId: string
  scanner: string
  filter: string
  modalDescription: string
}

const Wallet = dynamic(() => import("../components/Wallet"), {
  ssr: false,
})

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

          {showModal && <Modal nft={minted} setModal={setShowModal} />}

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

// create a modal component
const Modal = ({ nft, setModal }: { nft: Nft; setModal: any }) => {
  const [editionNft, setEditionNft] = useState(undefined)

  useEffect(() => {
    const loadData = async () => {
      if (nft && nft.nftId) {
        const editionNft = await safeFetchNft({
          publicKey: nft.nftId,
          loadJson: true,
        })
        console.log("edition nft", editionNft)
        setEditionNft(editionNft)
      }
    }
    loadData()
  }, [nft])

  if (!nft) {
    return null
  }

  const { id, url, name, title, details, description, nftId, fpsMarketId, scanner, modalDescription, filter } = nft

  return (
    <div className="z-100 fixed inset-0 overflow-x-auto overflow-y-auto">
      <div className="relative mt-20 flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0 md:mt-0 ">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
          &#8203;
        </span>

        <div className="relative inline-block transform items-center overflow-hidden rounded-lg bg-black text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle">
          <div className="transform items-center overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:align-middle md:flex">
            <div className="mb-30 lg:mb-30 mr-7 ml-7 pt-10 md:pt-5 lg:mr-5 lg:ml-7">
              <div>
                {/* <PreMintMasks id={id} url={url} /> */}
                <ReactPlayer width={"300px"} height={"450px"} url={scanner} playing={true} loop={true} />
              </div>
            </div>
            <div className="visible relative bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mb-5 mt-3 text-3xl font-bold text-white">{name}</div>
                  {/* <h3 className="text-md gray-med font-light" id="modal-headline">
                    {title.map((maskTitle) => {
                      return (
                        <div key={maskTitle} className="text-md gray-med font-light">
                          {maskTitle}
                        </div>
                      )
                    })}
                  </h3> */}
                  {/* <div className="mt-4">
                    {details.map((detail) => {
                      return (
                        <li key={detail} className="text-md gray-med font-light">
                          {detail}
                        </li>
                      )
                    })}
                  </div> */}

                  <div className="mx-5 my-10 max-w-3xl lg:mx-auto">
                    {editionNft && (
                      <EditionMintModule editionNft={editionNft} fpsMarketId={fpsMarketId} primaryColor="#000" />
                    )}
                  </div>

                  <div className="text-md gray-med scrollbar-thumb-gray-500 scrollbar-track-gray-300 my-2 mt-3 max-h-40 overflow-y-auto font-light md:pr-8">
                    {modalDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-50 absolute top-0 right-0 mb-4 py-3 text-center sm:px-6">
            <button
              onClick={() => setModal(false)}
              type="button"
              className="inline-flex w-full justify-center px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-neutral-800 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Mask = ({
  id,
  url,
  name,
  cost,
  nftId,
  fpsMarketId,
  description,
  image,
  windowSize,
  title,
  details,
  hideText,
  setHideText,
  address,
  onMint,
  scanner,
  filter,
  modalDescription,
}) => {
  return (
    <div className="mx-auto mb-10 w-full flex-col items-center justify-center text-center lg:mx-5 lg:w-[250px]">
      <div className="mb-2  scroll-smooth sm:mr-6">
        <PreMintMasks id={id} url={url} />
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-white">{name}</div>

        <div className="text-bold my-3 flex flex-row items-center justify-center">
          <Image src="/images/logos/solana-sol-logo.png" width="20" height="20" />
        </div>
        <div className="mt-1">
          <button
            onClick={() =>
              onMint(address, id, url, name, cost, title, details, description, scanner, filter, modalDescription)
            }
            className="mt-2 w-44 rounded-lg bg-purple-med px-4 py-2 text-white"
          >
            Mint
          </button>
        </div>

        <div
          className="text-md gray-med my-2 mt-5 items-center font-light md:invisible"
          onClick={() => setHideText(!hideText)}
        >
          <div className="inline-block pr-2">Memeber benefits</div>
          <Image
            className="inline-block"
            src={!hideText ? "/images/arrow-up.png" : "/images/arrow-down.png"}
            width="12"
            height="12"
          />
        </div>

        {!hideText && (
          <div className="md:left-88 ml-20 mt-10 text-left sm:w-44 md:ml-5 md:w-64">
            <div className="mb-8">
              {title.map((maskTitle) => {
                return (
                  <div key={maskTitle} className={"text-md gray-med font-light"}>
                    {maskTitle}
                  </div>
                )
              })}
            </div>

            <div>
              {details.map((detail) => {
                return (
                  <li key={detail} className={"text-md gray-med font-light"}>
                    {detail}
                  </li>
                )
              })}
            </div>

            <div className="text-md gray-med my-2 mt-5 pr-16 font-light md:pr-0">{description}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Mint
