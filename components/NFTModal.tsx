import React, { useState, useEffect } from "react"
import { safeFetchNft } from "../lib/mpl/tokenMetadata/fetchNft"
import { EditionMintModule } from "@/components/MintModule"
import ReactPlayer from "react-player"

export type Nft = {
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

export const NFTModal = ({ nft, setModal }: { nft: Nft; setModal: any }) => {
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
