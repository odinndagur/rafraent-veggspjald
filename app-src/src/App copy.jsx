import { useRef, useState } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { UnrealBloomPass } from 'three-stdlib'
import { OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { useLoader } from '@react-three/fiber';
import { useControls } from 'leva'
import { Effects } from '@react-three/drei'
 
// import { Model } from './Ingolfsstraeti2';
// import { Model } from './Test1';
// import { Model } from './Test2';
// import { Model } from './Aegir';
// import { Model } from './Aegir6013myndbandpaelinggata';
// import { Model } from './Hanna-landslag';
import { Harmaborg8 } from './Harmaborg8';
import { Aegircolor } from './Aegircolor';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

extend({ UnrealBloomPass })


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : props.scale || 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function AegirHead (props){
  const obj = useLoader(OBJLoader, '/head3d.obj')
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => (ref.current.rotation.y += delta))
  return (
    <mesh>
      <primitive
        {...props}
        object={obj}
        scale={0.01}
        ref={ref}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App() {
  const [val, setVal] = useState(0)
  function handleSliderChange(e) {
    console.log(e.target.value)
    setVal(e.target.value/40.0)
  }

  const { intensity, radius } = useControls({
    intensity: { value: 1, min: 0, max: 1.5, step: 0.01 },
    radius: { value: 0.4, min: 0, max: 1, step: 0.01 }
  })

  return (
    <>
    <input
      type={'range'}
      onChange={handleSliderChange}
      />
    <Canvas orthographic camera={{ zoom: 100 }}>
    <color attach="background" args={['#111']} />
    <Effects disableGamma>
        {/* threshhold has to be 1, so nothing at all gets bloom by default */}
        <unrealBloomPass threshold={1} strength={intensity} radius={radius} />
      </Effects>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Harmaborg8 transparent opacity={val} toneMapped={false} color={[1, 20, 10]}/>
      {/* <AegirHead position={[9,3,0]} /> */}
      {/* <AegirHead position={[val,1.5,0]} /> */}
      <Aegircolor position={[val,1.5,0]} scale={0.2} rotation={[0,1.7,6.28]}/>
      <Box position={[-1.2, 0, 0]} scale={0.2} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />

      <EffectComposer>
        {/* <UnrealBloomPass /> */}
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
        {/* <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
      </EffectComposer>
    </Canvas>
    </>
  )
}
