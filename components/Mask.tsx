import Image from "next/image"
import { PreMintMasks } from "../components/PreMintMasks/PreMintMasks"

export const Mask = ({
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
  modalDescription
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
