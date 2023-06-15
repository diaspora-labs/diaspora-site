import { Box, BoxProps, Flex, Text } from "@chakra-ui/react"
import { useLanguage } from "@creator-experience/language"
import { isPnft } from "@creator-experience/mpl"
import { Nft, OptimizedImageSize } from "@creator-experience/types"
import { useMemo, useState } from "react"
import { OptimizedImage } from "../OptimizedImage"

type NftMultiMediaProps = {
  nft: Nft
  alt?: string
  onClick?: () => void
  wrapper?: BoxProps
  imageSize?: OptimizedImageSize
}

const NftMultiMediaContent = ({ nft, alt, onClick, wrapper, imageSize }: NftMultiMediaProps) => {
  const category: "image" | "video" = useMemo(() => {
    if (nft.json?.properties?.["category"] === "video") {
      return "video"
    }

    return "image"
  }, [nft])
  const image = nft?.json?.image ?? ""
  const animationUrl = (nft?.json?.["animation_url"] as string) ?? ""
  const defaultedAlt = alt || nft?.json?.name || ""

  // TODO: this is an IPFS CID image override for the raccs mint page, remove once their mint is complete
  const raccsOrSrcImage = useMemo(() => {
    return image.replace(
      "bafkreiedtknmjb5ocik5yy2v7bgwz7tr7qqxzknpssb7uoh4pobi4fxqwa",
      "bafybeic3eaoeey2mnh5o4vmexunr32huis2qi63svy5lcsq3ihdfww7ndy"
    )
  }, [image])

  switch (category) {
    case "image": {
      return (
        <OptimizedImage
          src={raccsOrSrcImage}
          alt={defaultedAlt}
          objectFit="fill"
          onClick={onClick}
          wrapper={wrapper}
          imageSize={imageSize}
        />
      )
    }
    case "video":
      return (
        <Box borderRadius={"large"} overflow={"hidden"}>
          <video controls width={"100%"} poster={image} autoPlay muted loop>
            <source src={animationUrl} />
          </video>
        </Box>
      )
    default:
      return null
  }
}

export const NftMultiMedia = (props: NftMultiMediaProps) => {
  const [mouseOver, setMouseOver] = useState(false)
  const language = useLanguage()
  const showPnftBadge = useMemo(() => isPnft(props.nft), [props.nft])

  return (
    <Box position="relative" onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
      <NftMultiMediaContent {...props} />
      {showPnftBadge && (
        <Flex
          position={"absolute"}
          height={"2rem"}
          top={"1.5rem"}
          left={"1.5rem"}
          gap={".5rem"}
          paddingX={".5rem"}
          background={"transparency.bgt4"}
          backdropFilter={"blur(24px)"}
          borderRadius={"xsmall"}
          alignItems={"center"}
          opacity={mouseOver ? 1 : 0}
          transition={"opacity 100ms ease-in"}
        >
          <Text variant={"textSmBold"}>{language.hub.pages.candyMachine.pnftTooltip}</Text>
        </Flex>
      )}
    </Box>
  )
}
