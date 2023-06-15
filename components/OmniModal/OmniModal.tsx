import { Button, Flex, Heading, Modal, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { Nft, OptimizedImageSize } from "@creator-experience/types"
import { useEffect } from "react"
import { LinkButton } from "../LinkButton"
import { ModalCloseButton } from "./ModalCloseButton"
import { NftMultiMedia } from "../NftMultiMedia"
import { OptimizedImage } from "../OptimizedImage"

export enum OmniModalButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
  Destructive = "destructive",
  Warning = "warning",
}

export enum OmniModalButtonType {
  Link = "link",
  Click = "click",
}

export interface OmniModalLinkButton {
  variant: OmniModalButtonVariant
  label: string
  type: OmniModalButtonType.Link
  href: string
  closeModal?: boolean
  isLoading?: boolean
}

export interface OmniModalClickButton {
  variant: OmniModalButtonVariant
  label: string
  type: OmniModalButtonType.Click
  onClick: () => void
  closeModal?: boolean
  isLoading?: boolean
}

export interface OmniModalIcon {
  icon: any
  spin: boolean
  color: string
}

export enum OmniModalImageSize {
  THUMBNAIL = "thumbnail",
  PREVIEW = "preview",
}

export type OmniModalButton = OmniModalLinkButton | OmniModalClickButton

export interface OmniModalProps {
  iconConfig?: OmniModalIcon
  imageSrc?: string
  imageSkelton?: boolean
  imageSize?: OmniModalImageSize
  nft?: Nft
  title: string
  freeMarkup?: JSX.Element
  description?: string
  allowClose?: boolean
  buttons?: [OmniModalButton, OmniModalButton?]
  footnote?: string
  isOpen?: boolean
  isCentered?: boolean
  onClose?: () => void
}

export const OmniModal: React.FC<OmniModalProps> = ({
  iconConfig,
  imageSrc,
  nft,
  imageSize,
  title,
  freeMarkup,
  imageSkelton,
  description,
  allowClose = true,
  // shareButtons,
  // shareButtonsConfig,
  // copyWidgetProps,
  buttons,
  footnote,
  isOpen,
  isCentered = true,
  onClose,
}: OmniModalProps) => {
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
  useEffect(() => {
    onModalOpen()
  }, [onModalOpen])

  const handleButtonClick = (button: OmniModalButton) => {
    if (button.closeModal) {
      onClose ? onClose() : onModalClose()
    }
  }

  return (
    <Modal
      autoFocus={false}
      closeOnOverlayClick={allowClose}
      closeOnEsc={allowClose}
      isOpen={isOpen ?? isModalOpen}
      isCentered={isCentered}
      onClose={onClose ?? onModalClose}
    >
      <ModalOverlay />
      <ModalContent mx={6}>
        {allowClose && <ModalCloseButton />}
        <Flex
          flexDirection={"column"}
          bg={"background.secondary"}
          borderRadius={"large"}
          px={{ base: 4, tablet: 10 }}
          pt={15}
          pb={{ base: 4, tablet: 10 }}
          alignItems={"center"}
        >
          {imageSrc || imageSkelton ? (
            <OptimizedImage
              src={imageSrc ?? ""}
              alt={"Modal Image"}
              showSkeleton={imageSkelton}
              imageSize={
                imageSize === OmniModalImageSize.PREVIEW ? OptimizedImageSize.PREVIEW : OptimizedImageSize.THUMBNAIL
              }
              wrapper={{
                sx: {
                  img: {
                    mb: 9,
                    borderRadius: "medium",
                    height: imageSize === OmniModalImageSize.PREVIEW ? "auto" : 16,
                    width: {
                      base: imageSize === OmniModalImageSize.PREVIEW ? 40 : 16,
                      tablet: imageSize === OmniModalImageSize.PREVIEW ? 64 : 16,
                    },
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  },
                  ".image-skeleton": {
                    borderRadius: "medium",
                    aspectRatio: "1/1",
                    height: {
                      base: imageSize === OmniModalImageSize.PREVIEW ? 40 : 16,
                      tablet: imageSize === OmniModalImageSize.PREVIEW ? 64 : 16,
                    },
                    width: {
                      base: imageSize === OmniModalImageSize.PREVIEW ? 40 : 16,
                      tablet: imageSize === OmniModalImageSize.PREVIEW ? 64 : 16,
                    },
                  },
                },
              }}
            />
          ) : null}
          {nft && (
            <Flex alignItems={"center"} justifyContent={"center"} height={64} width={64} mb={9}>
              <NftMultiMedia
                nft={nft}
                imageSize={
                  imageSize === OmniModalImageSize.PREVIEW ? OptimizedImageSize.PREVIEW : OptimizedImageSize.THUMBNAIL
                }
                wrapper={{
                  sx: {
                    img: {
                      borderRadius: "medium",
                      height: imageSize === OmniModalImageSize.PREVIEW ? "auto" : 16,
                      width: {
                        base: imageSize === OmniModalImageSize.PREVIEW ? 40 : 16,
                        tablet: imageSize === OmniModalImageSize.PREVIEW ? 64 : 16,
                      },
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    },
                    ".image-skeleton": {
                      borderRadius: "medium",
                      aspectRatio: "1/1",
                      height: {
                        base: imageSize === OmniModalImageSize.PREVIEW ? 40 : 16,
                        tablet: imageSize === OmniModalImageSize.PREVIEW ? 64 : 16,
                      },
                      width: {
                        base: imageSize === OmniModalImageSize.PREVIEW ? 40 : 16,
                        tablet: imageSize === OmniModalImageSize.PREVIEW ? 64 : 16,
                      },
                    },
                  },
                }}
              />
            </Flex>
          )}

          <Heading variant={"h3"} mb={2} textAlign={"center"} whiteSpace={"pre-wrap"}>
            {title}
          </Heading>
          {freeMarkup && freeMarkup}
          {description && (
            <Text
              variant={"textSmRegular"}
              textAlign={"center"}
              color={"foreground.secondary"}
              mb={4}
              whiteSpace={"pre-wrap"}
            >
              {description}
            </Text>
          )}
          {buttons?.map((button, index) => {
            return button?.type === OmniModalButtonType.Link ? (
              <LinkButton
                key={index}
                variant={button.variant}
                href={button.href}
                onClick={() => handleButtonClick(button)}
                size={"lg"}
                w={"full"}
                mt={index === 0 ? 4 : 0}
                mb={index === 0 ? 4 : 0}
              >
                {button.isLoading ? (
                  <Text variant={"buttonBold"}>Loading...</Text>
                ) : (
                  <Text variant={"buttonBold"}>{button.label}</Text>
                )}
              </LinkButton>
            ) : (
              button?.type === OmniModalButtonType.Click && (
                <Button
                  key={index}
                  variant={button.variant}
                  onClick={() => {
                    button.onClick()
                    handleButtonClick(button)
                  }}
                  size={"lg"}
                  w={"full"}
                  mt={index === 0 ? 4 : 0}
                  mb={index === 0 ? 4 : 0}
                >
                  {button.isLoading ? (
                    <Text variant={"buttonBold"}>Loading...</Text>
                  ) : (
                    <Text variant={"buttonBold"}>{button.label}</Text>
                  )}
                </Button>
              )
            )
          })}
          {footnote && (
            <Text
              variant={"helpText"}
              color={"foreground.secondary"}
              w={"full"}
              bg={"extra.secondary"}
              mt={buttons?.length === 1 ? 4 : 8}
              p={4}
              borderRadius={"small"}
              whiteSpace={"pre-wrap"}
              textAlign={"center"}
            >
              {footnote}
            </Text>
          )}
        </Flex>
      </ModalContent>
    </Modal>
  )
}
