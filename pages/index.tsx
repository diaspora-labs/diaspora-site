import { NextPage } from "next"
import { Layout } from "../components/Layout"
import { NavHeader } from "../components/NavHeader"

const Home: NextPage = () => {
  return (
    <Layout showLogo>
      {/* <Canvas>
        <GoldMaskLogo />
      </Canvas> */}

      <section className="h-full min-h-screen p-10">
        <NavHeader />

        <div className="grid grid-cols-4">
          <div className="col-span-2 flex h-full flex-col items-start justify-center">
            <div className="my-[200px]">
              <div className="text-5xl font-light leading-tight text-neutral-600">
                Building a bridge
                <br />
                for the culture
                <br />& mint an ancestor
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
