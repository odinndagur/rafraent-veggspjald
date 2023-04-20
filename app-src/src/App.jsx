import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Kronan } from "./KronanScene";
import { StigiScene } from "./StigiScene";
import { IcelandScene } from "./IcelandScene";


function Settings({setIsChecked,isChecked}){
  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div style={{backgroundColor:'white',maxWidth:'fit-content',display:'flex',flexDirection:'column',padding:'1rem'}}>
      <label>
        <div>
          Sjónskilyrði

        </div>
        <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={checkHandler}
      />
      </label>
    </div>
  )
}

export default function App() {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <>
      <div style={{
        position:'absolute',
        top:'3rem',
        zIndex:999,
        width:'50vw',
        left:'50%'
        }}>
        <Settings setIsChecked={setIsChecked} isChecked={isChecked}/>
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
        <Kronan opacity={isChecked}/>
        {/* <StigiScene seeing={isChecked}/> */}
        {/* <IcelandScene seeing={isChecked}/> */}
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
