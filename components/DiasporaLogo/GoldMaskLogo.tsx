// // import Spline from '@splinetool/react-spline';
// import dynamic from 'next/dynamic';


// const Spline = dynamic(() => import('@splinetool/react-spline'), {
//   ssr: false,
// });

// export default function GoldMaskLogo() {
//   return (
//       <Spline scene="https://prod.spline.design/z9ZrPk6mKAs97Rxq/scene.splinecode" />
//   );
// }


import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function GoldMaskLogo() {
  console.log("useGLTF('/gold.gltf') ", useGLTF('/gold.gltf'))
  const { nodes, materials } = useGLTF('/gold.gltf')
  return (
    <group dispose={null}>
      <group name="camera" position={[10, 0, 50]} rotation={[Math.PI / 2, 0, 0]}>
        <PerspectiveCamera fov={40} near={10} far={1000} />
      </group>
      <group name="sun" position={[100, 50, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <pointLight intensity={10} />
      </group>
      <mesh geometry={nodes.robot.geometry} material={materials.metal} />
      <mesh geometry={nodes.rocket.geometry} material={materials.wood} />
    </group>
  )
}

useGLTF.preload('/gold.gltf')