import { useControls } from "leva";
import { map, clamp } from "./map";
import { Html } from "@react-three/drei";
import { HjaKronunniBlindViewNyttTest } from "./HjaKronunniBlindViewNyttTest";
import { HjaKronunniSeeingViewNyttTest } from "./HjaKronunniSeeingViewNyttTest";
import { useEffect, useState } from "react";
import { StigiBlind } from "./StigiBlind";
import { StigiSeeing } from "./StigiSeeing";
import { IcelandSeeing } from "./IcelandSeeing";
import { IcelandBlind } from "./IcelandBlind";
function Merkimidi({text, position, rotation, width}){
  return <Html position={position} transform rotation={rotation}>
          <div style={{
            width:width,
            backgroundColor:'white',
            textAlign:'center',
            padding:'0.5rem 0.5rem',
            }}>
              {text}
            </div>
         </Html>
}

export function IcelandScene(props) {
  const position = [0,-1,-4]
  const scale = [1,1,1]
  return (
        <group>
      

      <Merkimidi position={[4,-0.5,-3.1]} rotation={[0,Math.PI,0]} width='100px' text={'Ekkert handrið - grindverk nær aðeins hálfa leið'} />
      <Merkimidi position={[-0.5,-0.3,-4.3]} rotation={[0,Math.PI*0.5,0]} width='180px' text={'Punktar merkja byrjun (of mjó merking)'} />
      <Merkimidi position={[6,-3,-4.3]} rotation={[Math.PI/2,Math.PI,Math.PI*1.5]} width='120px' text={'Punktar merkja enda'} />
      <Merkimidi position={[1.5,-1,-7.3]} rotation={[Math.PI/2,Math.PI,Math.PI*1.5]} width='200px' text={'Brött brekka beint við hliðina á stiganum'} />

    <group>
      {props.seeing && <IcelandSeeing position={position} scale={scale} />}
      {!props.seeing && <IcelandBlind position={position} scale={scale}/>}

        {/* <HjaKronunniBlindViewNyttTest opacity={1-opacity} position={position} scale={scale} />
        <HjaKronunniSeeingViewNyttTest opacity={opacity} position={position} scale={scale}/> */}
      </group>
    </group>
  );
}
