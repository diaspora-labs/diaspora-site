import * as THREE from "three"
import { useEffect } from "react"
import { GLTFLoader } from "three-stdlib"
import { Easing, Tween, update } from "@tweenjs/tween.js"

export const PreMintMasks = (mask) => {
  useEffect(() => setupScene(mask), [mask])

  return (
    <>
      <canvas id={mask.id} mask={mask.url} className="webgl"></canvas>
    </>
  )
}

function setupScene(mask) {
  const canvas = document.querySelector("canvas.webgl")
  mask = mask.url
  console.log("mask ", mask)
  // scene
  const scene2 = new THREE.Scene()

  const isMobile = window.innerWidth < 768

  const sizes = {
    width: 200,
    height: 220,
  }

  // camera
  const camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 100)
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 2
  scene2.add(camera)

  // spline scene
  const loader = new GLTFLoader()

  let obj
  loader.load(
    // resource URL
    mask,
    // called when the resource is loaded
    function (gltf) {
      obj = gltf.scene
      scene2.add(obj)
      const scale = isMobile ? 0.12 : 0.12
      obj.scale.set(scale, scale, scale)

      setTimeout(animateOnLoad, 100)
    }
  )
  // renderer
  const renderer = createRenderer({ canvas, sizes, animate })

  setupLights(scene2)

  if (200 > 600) {
    window.addEventListener("resize", onWindowResize)
  }

  function onWindowResize() {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = 200 / 200
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(200, 200)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  document.addEventListener("mousemove", onDocumentMouseMove)

  let mouseX = 0
  let mouseY = 0

  let targetX = 0
  let targetY = 0

  const windowX = window.innerWidth / 2
  const windowY = window.innerHeight / 2

  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowX
    mouseY = event.clientY - windowY
  }

  // const updateOnScroll = () => {
  //   targetY = (windowY - window.scrollY) * 0.0002

  //   if (obj) {
  //     if (200 > 600) {
  //       obj.position.z = window.scrollY * -0.002
  //     } else {
  //       obj.rotation.x += 0.5 * targetY
  //     }
  //   }
  // }

  // window.addEventListener("scroll", updateOnScroll)

  function animateOnLoad() {
    const coords = { z: camera.position.z }

    new Tween(coords)
      .to({ z: 2 })
      .easing(Easing.Quadratic.InOut)
      .duration(1000)
      .onUpdate(() => {
        camera.position.set(camera.position.x, camera.position.y, coords.z)
      })
      .start()
  }

  function animate() {
    targetX = mouseX * 0.001
    targetY = mouseY * 0.001

    //Update objects
    if (obj) obj.rotation.y += 0.5 * (targetX - obj.rotation.y)
    if (obj) obj.rotation.x += 0.05 * (targetY - obj.rotation.x)

    renderer.render(scene2, camera)
    update()
  }
}

function setupLights(scene2) {
  // Lights
  const light = new THREE.AmbientLight(0xffffff, 1) // soft white light
  scene2.add(light)

  var light2a = new THREE.DirectionalLight(0xffffff, 3)
  light2a.position.set(0, 0, 2)
  scene2.add(light2a)
  var light2 = new THREE.DirectionalLight(0xffffff, 5.5)
  light2.position.set(-0.95, 0.95, 0.95)
  scene2.add(light2)
  var light3 = new THREE.DirectionalLight(0xffffff, 5.5)
  light3.position.set(-1, -1, 1)
  scene2.add(light3)
  var light4 = new THREE.DirectionalLight(0xffffff, 5.5)
  light4.position.set(1, -1, 1)
  scene2.add(light4)
  var light4s = new THREE.DirectionalLight(0xffffff, 5.5)
  light4s.position.set(0, 0, 3)
  scene2.add(light4s)
  var light2a2 = new THREE.DirectionalLight(0xffffff, 2.5)
  light2a2.position.set(2, 0, 2)
  scene2.add(light2a2)
  var light222 = new THREE.DirectionalLight(0xffffff, 2.5)
  light222.position.set(-2, 0, 2)
  scene2.add(light222)
  var light32 = new THREE.DirectionalLight(0xffffff, 2.5)
  light32.position.set(0, 0, -1)
  scene2.add(light32)
  var light42 = new THREE.DirectionalLight(0xffffff, 1)
  light42.position.set(0, 0, 2)
  scene2.add(light42)
  var light4s = new THREE.DirectionalLight(0xffffff, 1.5)
  light4s.position.set(0, 0, 3)
  scene2.add(light4s)
  var light4sa = new THREE.DirectionalLight(0xffffff, 1.5)
  light4sa.position.set(1, 1, 1)
  scene2.add(light4sa)
}

function createRenderer({ canvas, sizes, animate }) {
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true })
  renderer.setAnimationLoop(animate)
  renderer.setSize(200, 200)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // scene2 settings
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap

  renderer.setClearAlpha(1)
  return renderer
}