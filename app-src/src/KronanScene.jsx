import { useControls } from "leva";
import { map, clamp } from "./map";
import { Html } from "@react-three/drei";
import { HjaKronunniBlindViewNyttTest } from "./HjaKronunniBlindViewNyttTest";
import { HjaKronunniSeeingViewNyttTest } from "./HjaKronunniSeeingViewNyttTest";
import { useEffect, useState } from "react";
import { Merkimidi } from './Merkimidi'
// function Merkimidi({text, position, rotation, width}){
//   return <Html position={position} transform rotation={rotation}>
//           <div style={{
//             width:width,
//             backgroundColor:'white',
//             textAlign:'center',
//             padding:'0.5rem 0.5rem',
//             }}>
//               {text}
//             </div>
//          </Html>
// }

export function Kronan(props) {
  const [opacity, setOpacity] = useState(props.opacity)
  useEffect(() => {
    setOpacity(props.opacity)
  },[props.opacity])
  const position = [0,-1,-4]
  const scale = [1,1,1]
  return (
    <>
    {props.showLabels && 
        <group>
      
        <Merkimidi good position={[0,-1,-7]} transform rotation={[0,0,0]} width='150px' text={'Áferð merkir umferðareyju á miðri gangbraut'} />
        <Merkimidi good position={[0,-0.5,-18]} rotation={[0,Math.PI/2,0]} width='200px' text={'Línur beina vegfaranda út á gangbraut'} />
        <Merkimidi good position={[0,-1,4]} rotation={[0,Math.PI/2,0]} width='200px' text={'Línur beina vegfaranda út á gangbraut'} />
        <Merkimidi good position={[0,-1,-13]} rotation={[0,0,0]} width='200px' text={'Biðsvæði merkt með punktum á gangstétt'} />
        <Merkimidi good position={[0,-1,-0.5]} rotation={[0,0,0]} width='200px' text={'Biðsvæði merkt með punktum á gangstétt'} />
      </group>}

    <group>
      {/* <StigiSeeing /> */}
        <HjaKronunniBlindViewNyttTest opacity={1-opacity} position={position} scale={scale} />
        <HjaKronunniSeeingViewNyttTest opacity={opacity} position={position} scale={scale}/>
    </group>
    </>
  );
}
