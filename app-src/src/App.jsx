import { useRef, useState } from "react";
import { Canvas, useFrame, extend, invalidate } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
import { CameraControls, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { Effects } from "@react-three/drei";
import { PerspectiveCamera, Html } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei";
import { Litir } from "./Litir";
import { Kronan } from "./KronanScene";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  BrightnessContrast,
  HueSaturation,
} from "@react-three/postprocessing";

import { map, clamp } from "./map";
import { Camera, Group } from "three";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : props.scale || 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function AegirHead(props) {
  const obj = useLoader(OBJLoader, "/head3d.obj");
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += delta));
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
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}


function Settings({setVisibilitySlider}){

  return (
    <div>
      {/* <div style={{color:'white'}}>lol</div> */}
      <label>
        Sjónskilyrði
        <input type="range" defaultValue={0} min={0} max={1} step={0.001} onChange={(e) => setVisibilitySlider(e.target.value)}/>
      </label>
    </div>
  )
}

export default function App() {
  const [visibilitySlider, setVisibilitySlider] = useState(0.0);
  return (
    <>
      {/* <input type="range" min={0} max={1} step={0.001} onChange={(e) => setVal(e.target.value)} /> */}
      <div style={{
        position:'absolute',
        bottom:'2rem',
        zIndex:999,
        width:'50vw',
        left:'50%'
        // margin:'auto'
        }}>
        <Settings setVisibilitySlider={setVisibilitySlider}/>
      </div>
      <Canvas>
        
        {/* <Environment preset="city" /> */}
        {/* <ContactShadows
          frames={1}
          scale={5}
          position={[0, -1, 0]}
          far={1}
          blur={5}
          opacity={0.5}
          color="#204080"
        /> */}
        {/* <Litir currentMaterial={litur} /> */}
        <Kronan opacity={visibilitySlider}/>
        {/* <color attach="background" args={['#111']} /> */}
        <color attach="background" args={["#FFF"]} />
        <ambientLight intensity={1} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        {/* <pointLight position={[-10, -10, -10]} /> */}

        <CameraControls />
      </Canvas>
    </>
  );
}
