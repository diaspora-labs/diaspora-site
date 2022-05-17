import dynamic from "next/dynamic"
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
})

export default function GoldMaskLogo() {
  return <Spline scene="https://prod.spline.design/9I5EiVB3Oko8EpdM/scene.splinecode" className="absolute inset-0" />
}
