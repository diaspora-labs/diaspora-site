import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import { Center, Box, Flex, Text } from "@chakra-ui/react"
import { DiasporaLogo } from "../components/DiasporaLogo"

const Home: NextPage = () => {
  return (
    <Box bg="black" width="100%" height="100vh">
      <Head>
        <title>Diaspora</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex color="white" alignItems="flex-end" width="100%" p="2">
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
              <a>About</a>
            </Link>
          </Box>
        </Flex>
      </Flex>

      <Center bg="black" color="white" height="100vh">
        <Flex padding="4" direction="column" align="center" justify="center">
          <Box m={4}>
            <Box mb="5">
              <Text fontSize="large" fontWeight="bold" textTransform="uppercase">
                Coming soon
              </Text>
            </Box>
            <DiasporaLogo />
          </Box>
        </Flex>
      </Center>

      <footer></footer>
    </Box>
  )
}

export default Home
