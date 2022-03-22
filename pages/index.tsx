import type { NextPage } from "next"
import Head from "next/head"
import { Center, Box, Flex } from "@chakra-ui/react"
import { DiasporaLogo } from "../components/DiasporaLogo"

const Home: NextPage = () => {
  return (
    <Box bg="black" width="100%" height="100vh">
      <Head>
        <title>Diaspora</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center bg="black" color="white" height="100vh">
        <Flex padding="4" direction="column" align="center" justify="center">
          <DiasporaLogo />
          <Box m={4}>Coming soon</Box>
        </Flex>
      </Center>

      <footer></footer>
    </Box>
  )
}

export default Home
