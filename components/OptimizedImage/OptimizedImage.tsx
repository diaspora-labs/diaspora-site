import { Box, BoxProps, Image as ChakraImage, ImageProps as ChakraImageProps, Skeleton } from "@chakra-ui/react"
import { OptimizedImageSize } from "@creator-experience/types"
import {
  getCloudflareImagePipelineUrl,
  // getOptimizedImageUrl,
} from "@creator-experience/utils"
import { ImageProps } from "next/image"
import React, { useMemo, useState } from "react"

export interface OptimizedImageProps extends ImageProps {
  wrapper?: BoxProps
  imageSize?: OptimizedImageSize
  sx?: ChakraImageProps["sx"]
  // This is if you want to show the skeleton loader even if there is an image
  showSkeleton?: boolean
}

export const OptimizedImage: React.FC<OptimizedImageProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const imageSize = props.imageSize ?? OptimizedImageSize.LARGE

  const src: string = useMemo(() => {
    // if (!props.src.toString().includes('/ipfs/') || error) {
    return props.src.toString()
    // }

    // return getOptimizedImageUrl(props.src.toString(), imageSize);
  }, [imageSize, props.src, error])

  const handleImageLoad = () => {
    setLoading(false)
  }

  const handleImageError = () => {
    // If there is an error and the image is being fetched from the image pipeline, try to load the image from the true src
    if (src.includes(getCloudflareImagePipelineUrl())) {
      setError(true)
    }
  }

  return (
    <Box
      sx={{
        img: {
          height: "auto !important",
          width: "100% !important",
        },
      }}
      position={"relative"}
      {...props.wrapper}
    >
      {loading || props.showSkeleton ? (
        <Skeleton className="image-skeleton" height={"100%"} width={"100%"} position={"absolute"} />
      ) : null}
      <ChakraImage
        className={props.className}
        src={src as string}
        alt={props.alt}
        onClick={props.onClick}
        onLoad={handleImageLoad}
        onError={handleImageError}
        opacity={loading ? 0 : 1}
        sx={{
          aspectRatio: loading ? "1/1" : "initial",
          ...props.sx,
        }}
      />
    </Box>
  )
}
