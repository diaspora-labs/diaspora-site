import { useGLTF } from "@react-three/drei"
import { PerspectiveCamera } from "@react-three/drei"

export default function Scene({ ...props }) {
  const gltf = useGLTF("./mask.glb")

  return <></>
}
