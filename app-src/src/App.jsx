import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Kronan } from "./KronanScene";

function Settings({setVisibilitySlider}){

  return (
    <div style={{backgroundColor:'white',maxWidth:'fit-content',display:'flex',flexDirection:'column',padding:'1rem'}}>
      <label>
        <div>
          Sjónskilyrði

        </div>
        <input type="range" defaultValue={1} min={0} max={1} step={0.001} onChange={(e) => setVisibilitySlider(e.target.value)}/>
      </label>
    </div>
  )
}

export default function App() {
  const [visibilitySlider, setVisibilitySlider] = useState(1.0);
  return (
    <>
      <div style={{
        position:'absolute',
        top:'3rem',
        zIndex:999,
        width:'50vw',
        left:'50%'
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
        <Kronan opacity={visibilitySlider}/>
        <color attach="background" args={["#FFF"]} />
        <ambientLight intensity={1} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        {/* <pointLight position={[-10, -10, -10]} /> */}
        <PerspectiveCamera makeDefault position={[9,4,8]} fov={70}/>
        <CameraControls />
      </Canvas>
    </>
  );
}
