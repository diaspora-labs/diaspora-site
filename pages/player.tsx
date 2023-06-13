import { Layout } from "../components/Layout"

const Player = () => {
  return (
    <Layout>
      <div className="relative h-screen flex flex-col justify-center items-center max-2xl:h-[90vh] max-xl:h-[75vh] max-lg:h-[40vh] max-md:h-[40vh] max-sm:h-[35vh] max-smm-[18vh]">
        <iframe className="w-full h-5/6" id="my-iframe" src="https://journey-taupe.vercel.app"></iframe>
      </div>
    </Layout>
  )
}

export default Player
