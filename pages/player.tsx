import { Layout } from "../components/Layout"

const Player = () => {
  return (
    <Layout>
      <div className="w-full h-full bg-contain">
        <iframe id="my-iframe" src="https://journey-taupe.vercel.app"></iframe>
      </div>
    </Layout>
  )
}

export default Player
