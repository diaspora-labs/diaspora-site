import { Layout } from "../components/Layout"

const Player = () => {
  return (
    <Layout>
      <div className="w-screen h-screen flex items-center justify-center">
        <iframe className="w-full h-full" id="my-iframe" src="https://journey-taupe.vercel.app"></iframe>
        </div>
    </Layout>
  )
}

export default Player
