import * as THREE from 'three'
import crystalColor from '../../assets/backgroundTextures/gradient.jpeg'
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

  const geometry = new THREE.CircleGeometry(4, 12)

  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load(crystalColor)
  const bumpMap = textureLoader.load(crystalColor)

  const material = new THREE.MeshStandardMaterial({
    map: texture,
    bumpMap: bumpMap,
    bumpScale: 0.5,
    roughness: 0.5,
    metalness: 0.5,
  })

  const circle = new THREE.Mesh(geometry, material)
  circle.castShadow = true
  circle.receiveShadow = true
  scene.add(circle)

  const light = new THREE.HemisphereLight(0xffffff, 0x000000, 10)
  scene.add(light)

  const directionalLight = new THREE.AmbientLight()
  directionalLight.position.set(0, 0, 5)
  scene.add(directionalLight)

  camera.position.z = 2

  function animate() {
    circle.rotation.z += 0.001

    renderer.render(scene, camera)
  }
  renderer.setClearColor(new THREE.Color('rgb(41, 14, 24)'))
  renderer.setAnimationLoop(animate)
  return <></>
}
