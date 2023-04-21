import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Kronan } from "./KronanScene";
import { StigiScene } from "./StigiScene";
import { IcelandScene } from "./IcelandScene";

import ReactDOM from "react-dom/client"
import App from "./App"
import { HashRouter, Route, Routes } from "react-router-dom"

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
        <HashRouter>
          <IcelandScene seeing={isChecked}/>
          <Kronan opacity={isChecked}/>
          <StigiScene seeing={isChecked}/>
        </HashRouter>
        <color attach="background" args={["#FFF"]} />
        <ambientLight intensity={1} />
        <PerspectiveCamera makeDefault position={[9,4,8]} fov={70}/>
        <CameraControls />
      </Canvas>
    </>
  );
}
