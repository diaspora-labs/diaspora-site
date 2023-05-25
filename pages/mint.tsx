import React, { useState, useEffect } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useProgram, useNFTs, useClaimNFT } from "@thirdweb-dev/react/solana"
import { HomeFooter } from "../components/Home/HomeFooter"
import { Layout } from "../components/Layout"
import Image from "next/image"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Discord } from "../components/Icons/Discord"
import { PreMintMasks } from "../components/PreMintMasks/PreMintMasks"
// import  {mintAdditionalSupplyTo}  from "@thirdweb-dev/sdk/solana";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana"
import { NFTCollection } from "@thirdweb-dev/sdk"
import dynamic from "next/dynamic"
import { Closeinactive } from "../components/Icons/Closeinactive"

const Wallet = dynamic(() => import("../components/Wallet"), {
  ssr: false,
})

const Mint = () => {
  // const { contract } = useContract("<CONTRACT_ADDRESS>");
  const { program } = useProgram<"nft-collection">("8Wbv9yLw1GSG4d5x5Drr4xwUTiUTvz9NsBVtUzRZNxev")
  const wallet = useWallet()
  const [mobile, setMobile] = useState(undefined)
  const [hideText, setHideText] = useState(false)
  const [nfts, setNfts] = useState([])
  // create a new state variable for a modal 
  const [showModal, setShowModal] = useState(false)
  const [minted, mintNFT] = useState({
    nftAddress: "",
    id: "",
    url: "",
    name: "",
    cost: "",
    title: "",
    details: "",
    description: "",
  })
  
  useEffect(() => {
    fetch("/api/masks")
      .then((res) => res.json())
      .then((data) => {
        setNfts(data)
      })
  }, [])

  // program.totalSupply().then((totalSupply) => {
  //   console.log("totalSupply", totalSupply)
  // });


  const mintMembership = async (nftAddress, id, url, name, cost, title, details, description) => {

    const sdk = ThirdwebSDK.fromNetwork("devnet");
    // Signer can be a keypair or browser wallet adapter
    // sdk.wallet.connect(signer);
    // Here, we pass in the address of our deployed program
    
    const program = await sdk.getNFTCollection(nftAddress);
    // // And now we can read data off our program, like getting all the NFTs from our collection
    const nfts = await program.getAll()
    // // The amount of additional NFTs to mint
    const amount = 1
    // // Mint an additional NFT of the original NFT
    const mint = await program.mintAdditionalSupplyTo(wallet.publicKey.toString(), nftAddress, amount)
    // console.log('mint ', mint)

    const programNFTDrop = await sdk.getNFTDrop(nftAddress);
    // const tx = await programNFTDrop.lazyMint(metadata);

    // we'll add the boolean value of mint to the state
    if ( mint ) {
      mintNFT({
        ...minted,
        nftAddress,
        id,
        url,
        name,
        cost,
        title,
        details,
        description
      });
      setShowModal(true);
    }

  };

  return (
    <Layout>
      <div className="absolute inset-0 z-0 w-full bg-roadmap-bg bg-contain"></div>
      <div className="fixed inset-0 z-10 w-full bg-black opacity-40"></div>

      <div className="mb-30 relative z-20 mx-auto mt-40 lg:max-w-4xl">
        <div className="my-10 flex flex-col">
          <div className="mx-5 lg:mx-auto lg:w-full lg:max-w-3xl">
            {/* <p className="mb-2 text-sm text-neutral-700 lg:pt-24">October 09, 2022</p> */}
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

          <div>
            <Wallet />
          </div>

          <div className="mx-auto mt-20 flex flex-row flex-wrap">
            {nfts.map((item) => {
              return <Mask key={item.id} {...item} onMint={mintMembership} hideText={hideText} setHideText={setHideText} />
            })}
          </div>

          { showModal && <Modal {...minted} setModal={setShowModal}/> }

          <div className="mt-20 mb-20 text-center">
            <p className="mb-10 text-lg text-white">
              Mint a mask. <span className="text-orange">#TakeTheJourney</span>
              {/* Join our 245 collections. */}
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
                <div className="absolute -left-[-46%] top-0 text-center text-neutral-500">
                  {/* <div>80k</div> */}
                  {/* <div className="text-xs">We&apos;re here</div> */}
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
                {/* Diaspora is reimagining what lineage and self discovery looks like in a decentralized world.  We will be
                connecting thousands of years of history globally to a community that will both look at the past as well
                as create opportunities for communities in future. */}
                Diaspora DAO is a decentralized autonomous organization leveraging the Solana blockchain to bridge the gap 
                and enable equal access to opportunities in both the physical and digital worlds. We are committed to utilizing 
                cutting-edge Web3 technologies to empower communities across the African, Latin, and Caribbean diaspora.
              </p>
              <p className="mb-5">
                Our mission is to create a vibrant ecosystem where members can participate in the decision-making process, 
                contribute to innovative projects, and benefit from a range of exclusive rewards. We strive to tackle real-world
                issues and foster a diverse, inclusive environment that celebrates the unique heritage of our global community.
              </p>
              <p className="mb-5">
                At Diaspora DAO, our initiatives include the launch of limited NFT collections, AR experiences, and the 
                development of decentralized applications that focus on promoting cultural heritage, education, and financial 
                inclusion. We invite you to join us in shaping a more equitable and interconnected future for everyone.
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
const Modal = ({ id, url, name, cost, title, details, description, setModal }) => {

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto overflow-x-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        
        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                  
        <div className="items-center inline-block align-bottom bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="md:flex items-center bg-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full">
            <div className="mb-30 mr-7 ml-7 lg:mb-30 lg:mr-5 lg:ml-7">
              <div
                className={`h-[350px] md:h-[380px] md:w-[250px]`}
              >
                <PreMintMasks id={id} url={url}/>
              </div>
            </div>
            <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mt-16">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="text-3xl font-bold text-white mb-5 mt-3">{name}</div>
                  <h3 className="text-md font-light gray-med" id="modal-headline">
                    {title.map((maskTitle) => {
                      return (
                        <div key={maskTitle} className="text-md font-light gray-med">
                          {maskTitle}
                        </div>
                      )
                    })}
                  </h3>
                  <div className="mt-4">
                    {details.map((detail) => {
                      return (
                        <li key={detail} className="text-md font-light gray-med">
                          {detail}
                        </li>
                      )
                    })}
                  </div>

                  <div className="mt-3 text-md my-2 font-light gray-med md:pr-16">{description}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black-50 px-4 py-3 sm:px-6 text-center">
            <button onClick={() => setModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
              Success!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
      
const Mask = ({ id, url, name, cost, description, image, windowSize, title, details, hideText, setHideText, address, onMint }) => {
  
  return (
    <div className="mx-auto mb-10 w-full flex-col items-center justify-center text-center lg:mx-5 lg:w-[250px]">
      {/* sm:mr-6 md:ml-6 */}
      <div className="mb-2  sm:mr-6 scroll-smooth">
        <PreMintMasks id={id} url={url}/>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-white">{name}</div>
        
        <div className="text-bold my-3 flex flex-row items-center justify-center">
          {/* <span className="mr-2 mt-1">{cost}</span>{" "} */}
          <Image src="/images/logos/solana-sol-logo.png" width="20" height="20" />
          
        </div>
        <div className="mt-1">
                                                                                                                                          {/* bg-purple-med */}
          <button disabled onClick={() => onMint(address, id, url, name, cost, title, details, description)} className="mt-2 rounded-lg bg-purple-dark px-4 w-44 py-2 text-white">
            Mint
          </button>
        </div>

        <div className="mt-5 text-md my-2 font-light gray-med md:invisible items-center" onClick={() => setHideText(!hideText)}>
          <div className='inline-block pr-2'>Memeber benefits</div>
          <Image className='inline-block' src={!hideText ? "/images/arrow-up.png":"/images/arrow-down.png"} width="12" height="12" />
        </div>

        { (!hideText) && <div className="md:w-64 sm:w-44 ml-20 md:ml-5 md:left-88 mt-10 text-left">
          <div className='mb-8'> 
            {title.map((maskTitle) => {
              return (
                <div key={maskTitle} className={"text-md font-light gray-med"}>
                  {maskTitle}
                </div>
              )
            })}
          </div>

          <div>
            {details.map((detail) => {
              return (
                <li key={detail} className={"text-md font-light gray-med"}>
                  {detail}
                </li>
              )
            })}
          </div>

          <div className="mt-5 text-md my-2 font-light gray-med md:pr-0 pr-16">{description}</div>
        </div>}

      </div>
    </div>
  )
}

export default Mint
