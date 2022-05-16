import { NextPage } from "next"
import { GoldMaskLogo } from "../components/DiasporaLogo/GoldMaskLogo"
import { Discord } from "../components/Icons/Discord"
import { Envelop } from "../components/Icons/Envelop"
import { Instagram } from "../components/Icons/Instagram"
import { Twitter } from "../components/Icons/Twitter"
import { Layout } from "../components/Layout"
import { NavHeader } from "../components/NavHeader"

const Home: NextPage = () => {
  return (
    <Layout showLogo>
      {/* <Canvas>
        <GoldMaskLogo />
      </Canvas> */}

      <div className="fixed inset-0 z-0">
        <GoldMaskLogo />
      </div>

      <section className="z-10 h-full min-h-screen">
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
            <div className="col-span-2 ml-40 flex h-full flex-col items-center justify-center space-y-6">
              <div className="mt-[80px] text-center text-4xl font-light">
                Great things
                <br />
                are coming
              </div>
              <div className="text-lg font-normal">Connect with us to stay updated</div>
              <div className="flex  space-x-10">
                <Discord />
                <Instagram />
                <Twitter />
                <Envelop />
              </div>
              <div className="p-2">
                <button className="rounded-xl bg-[#F05E17] px-4 py-2 font-bold uppercase text-black">
                  Connect Wallet
                </button>
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
