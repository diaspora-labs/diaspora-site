import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { CREATE_TOKEN_METADATA_FEE_SOL } from "@creator-experience/constants"
import { useMintButtonStyling } from "@creator-experience/hooks"
import { useLanguage } from "@creator-experience/language"
import { getSolFromWallet } from "@creator-experience/utils"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import React, { ReactNode, useEffect, useState } from "react"
import { SolanaCurrencyIcon } from "components/Icons"
import { IEditionMintDetails, IMintButtonConfig } from "./EditionMintModule"

export interface EditionMintDetailsProps {
  mintDetails: IEditionMintDetails
  buttonConfig: IMintButtonConfig
  primaryColor?: string
}

export const EditionMintDetails: React.FC<EditionMintDetailsProps> = ({ buttonConfig, mintDetails, primaryColor }) => {
  const { connection } = useConnection()
  const { publicKey, connected } = useWallet()
  const { visible, setVisible } = useWalletModal()

  const { components } = useLanguage()
  const { mintStartedDetails } = components

  const { buttonStyling } = useMintButtonStyling(primaryColor)
  const [button, setButton] = useState<ReactNode | undefined>()
  const [solInWallet, setSolInWallet] = useState(0)

  const onConnectClick = () => {
    if (!visible) setVisible(true)
  }

  // Based on if the user has their wallet connected and available funds will depend what button is present
  useEffect(() => {
    const getButton = async () => {
      // This the user is not connected or there is no publickey from the wallet show they need to connect
      if (!connected || !publicKey) {
        return setButton(
          <Button size={"wideLg"} sx={buttonStyling} onClick={onConnectClick}>
            {mintStartedDetails.connectWalletButton}
          </Button>
        )
      }

      const onChainSolPrice = mintDetails?.price !== undefined ? Number(mintDetails.price) : undefined

      // If there is a SOL price make sure they have enough funds in there wallet
      const notEnoughSol =
        onChainSolPrice !== undefined && solInWallet < onChainSolPrice + 0.014 + CREATE_TOKEN_METADATA_FEE_SOL
      if (notEnoughSol) {
        return setButton(
          <Button size={"wideLg"} sx={buttonStyling} disabled>
            {mintStartedDetails.notEnoughFundsButton}
          </Button>
        )
      }

      if (mintDetails.mintLimitReached) {
        return setButton(
          <Button size={"wideLg"} sx={buttonStyling} disabled>
            {mintStartedDetails.mintLimitReached}
          </Button>
        )
      }

      // This means they can mint! :D
      return setButton(
        <Button size={"wideLg"} sx={buttonStyling} onClick={buttonConfig.onClick} disabled={buttonConfig.disabled}>
          {buttonConfig.label}
        </Button>
      )
    }

    getButton()
  }, [primaryColor, publicKey, connected, buttonStyling, mintDetails, buttonConfig])

  useEffect(() => {
    if (!connected || !publicKey) return

    const updateSolInWallet = async () => {
      setSolInWallet(await getSolFromWallet(connection, publicKey))
    }
    updateSolInWallet()
  }, [connection, publicKey])

  return (
    <Box>
      {mintDetails?.price && (
        <Box mt={4} p={4} bg={primaryColor ? `${primaryColor}0D` : "transparency.fgt1"} borderRadius={"medium"}>
          <Flex mb={4}>
            <Box>
              <Text variant={"helpText"} color={"foreground.secondary"}>
                {mintDetails?.priceLabel}
              </Text>
              <Text variant={"textLgBold"}>
                <SolanaCurrencyIcon fontSize={"xs"} mb={0.5} mr={1} />
                {mintDetails?.price}
                <Text as={"span"} fontWeight={"regular"} color={"foreground.secondary"} ml={2}>
                  {mintDetails?.priceInUsd}
                </Text>
              </Text>
            </Box>
            <Box ml={"auto"} textAlign={"right"}>
              <Text variant={"helpText"} color={"foreground.secondary"}>
                {mintDetails?.typeLabel}
              </Text>
              <Text variant={"textLgBold"}>{mintDetails?.typeValue}</Text>
            </Box>
          </Flex>
          {button}
        </Box>
      )}
    </Box>
  )
}
