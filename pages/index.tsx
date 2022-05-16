import { NextPage } from "next"
import { Layout } from "../components/Layout"
import { NavHeader } from "../components/NavHeader"

const Home: NextPage = () => {
  return (
    <Layout showLogo>
      {/* <Canvas>
        <GoldMaskLogo />
      </Canvas> */}

      <section className="h-full min-h-screen">
        <div className="p-10">
          <NavHeader />

          <div className="grid grid-cols-4">
            <div className="col-span-2 flex h-full flex-col items-start justify-center">
              <div className="my-[200px] mb-[160px]">
                <div className="text-5xl font-light leading-tight text-neutral-600">
                  Building a bridge
                  <br />
                  for the culture
                  <br />& mint an ancestor
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t-[1px] border-neutral-800 py-10 px-10">
          <div className="flex">
            <div className="shrink rounded-tl-lg rounded-bl-lg bg-neutral-800 py-2 px-4">
              <input placeholder="Email address" className="bg-transparent pr-10" />
            </div>
            <div className="rounded-tr-lg rounded-br-lg bg-purple-light py-2 px-4">
              <button>Add me to the list</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
