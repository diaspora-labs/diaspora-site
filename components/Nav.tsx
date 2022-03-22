import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import Link from "next/link"

export const Nav = () => {
  return (
    <Flex flexDirection="row">
      <Box mx="2">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Box>
      <Box mx="2">
        <Link href="/team">
          <a>Team</a>
        </Link>
      </Box>
      <Box mx="2">
        <Link href="/about">
          <a>White Paper</a>
        </Link>
      </Box>
    </Flex>
  )
}
