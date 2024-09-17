import * as THREE from 'three'
import crystalColor from '../../assets/backgroundTextures/graident.png'
import crystalBump from '../../assets/backgroundTextures/gradient_background.jpeg'
export default function AnimatedBackground() {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10,
  )

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.shadowMap.enabled = true
  document.body.appendChild(renderer.domElement)

  const geometry = new THREE.SphereGeometry(1.8, 32, 32)

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(crystalColor)
  const bumpMap = textureLoader.load(crystalBump)

  const material = new THREE.MeshStandardMaterial({
    map: texture,
    bumpMap: bumpMap,
    bumpScale: 0.5,
    roughness: 0.5,
    metalness: 0.5,
  })

  const sphere = new THREE.Mesh(geometry, material)
  sphere.castShadow = true
  sphere.receiveShadow = true
  scene.add(sphere)

  const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
  scene.add(light)

  const directionalLight = new THREE.AmbientLight()
  directionalLight.position.set(7, 5, 5)
  scene.add(directionalLight)

  camera.position.z = 2

  sphere.rotation.y += 0
  function animate() {
    sphere.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  renderer.setClearColor(new THREE.Color('rgb(41, 14, 24)'))
  renderer.setAnimationLoop(animate)
  return <></>
  // return <div className="t-0 l-0 -z-20 h-screen w-screen bg-black">Hey</div>
}

// const material = new THREE.MeshDepthMaterial()
// const displacementMap = new THREE.TextureLoader().load(
//   '../../assets/displacementMap.jpg',
// )
// material.displacementMap = displacementMap
