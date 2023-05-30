// @ts-nocheck
// import { Canvas } from "@react-three/fiber"
import SplineLoader from "@splinetool/loader"

import { Canvas, useGraph, useLoader } from "@react-three/fiber"
import { OrthographicCamera } from "@react-three/drei"
import type { Object3D } from "three"

export default function GoldMaskLogo({ ...props }) {
  const scene = useLoader(SplineLoader, "https://prod.spline.design/QZQ39MAcUPi3F1Dl/scene.splinecode")
  const { nodes, materials } = useGraph(scene as unknown as Object3D)

  console.log(nodes, materials)

  if (!nodes) {
    return null
  }

  return (
    <Canvas camera={{ position: [0, 0, -120] }}>
      <color attach="background" args={["#4b4d52"]} />
      <group {...props} dispose={null}>
        <group name="Group 19947" position={[0, 0, -100]}>
          <mesh
            name="Group19766"
            geometry={nodes.Group19766.geometry}
            material={nodes.Group19766.material}
            castShadow
            receiveShadow
            position={[0, -3614.65, 137.97]}
            rotation={[-0.09, 0, 0]}
            scale={4.41}
          />
          <mesh
            name="Group19946"
            geometry={nodes.Group19946.geometry}
            material={nodes.Group19946.material}
            castShadow
            receiveShadow
            position={[0, -3614.65, 137.97]}
            rotation={[-0.09, 0, 0]}
            scale={4.41}
          />
          <mesh
            name="Group197661"
            geometry={nodes.Group197661.geometry}
            material={nodes.Group197661.material}
            castShadow
            receiveShadow
            position={[0, -3614.65, 137.97]}
            rotation={[-0.09, 0, 0]}
            scale={4.41}
          />
          <mesh
            name="Group199461"
            geometry={nodes.Group199461.geometry}
            material={nodes.Group199461.material}
            castShadow
            receiveShadow
            position={[0, -3614.65, 137.97]}
            rotation={[-0.09, 0, 0]}
            scale={4.41}
          />
        </group>
        <group name="lights" position={[-229.18, 3048.95, 3741.66]}>
          <spotLight
            name="Spot Light 4"
            castShadow
            intensity={7.2}
            angle={0.28}
            penumbra={1}
            distance={2337}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={2500}
            color="#e7c300"
            position={[294.02, -628.71, -8489.75]}
            rotation={[1.58, 0, -0.03]}
          />
          <spotLight
            name="Spot Light 3"
            castShadow
            intensity={0.6}
            angle={0.21}
            penumbra={0.9}
            decay={0.5}
            distance={2577}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={3599.174}
            color="#bc8200"
            position={[331.94, -569.06, -3989.47]}
            rotation={[1.55, 0.1, -0.03]}
          />
          <spotLight
            name="Spot Light 5"
            castShadow
            intensity={5.2}
            angle={Math.PI / 2}
            decay={0.6}
            distance={2535}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={4429.132}
            color="#957c00"
            position={[-1519.74, -99.03, -5219.78]}
            rotation={[1.57, 0.18, 1]}
          />
          <spotLight
            name="Spot Light"
            castShadow
            intensity={2.6}
            angle={Math.PI / 2}
            decay={0.8}
            distance={3015}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-fov={119.99999999999999}
            shadow-camera-near={100}
            shadow-camera-far={4429.132}
            color="#b89a00"
            position={[1736.33, -123.39, -5317.27]}
            rotation={[1.57, 0.18, -1]}
          />
        </group>
        {/* <mesh
          name="Cube 2"
          geometry={nodes["Cube 2"].geometry}
          material={materials["Cube 2 Material"]}
          castShadow
          receiveShadow
          position={[-135.67, 2466, -6845.14]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[21.91, 14.82, 14.82]}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["Cube Material"]}
          castShadow
          receiveShadow
          position={[-130.67, 2461, -6844.14]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[21.91, 14.82, 14.82]}
        /> */}
        <OrthographicCamera
          name="Personal Camera"
          makeDefault={true}
          zoom={1.11}
          far={100000}
          near={-100000}
          position={[134.02, 2817.74, -994.23]}
          rotation={[-0.11, 0.04, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#e4be00" position={[0, 1, 0]} />
      </group>
    </Canvas>
  )
}
