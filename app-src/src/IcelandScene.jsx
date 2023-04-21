import { useControls } from 'leva'
import { map, clamp } from './map'
import { Merkimidi } from './Merkimidi'
import { HjaKronunniBlindViewNyttTest } from './HjaKronunniBlindViewNyttTest'
import { HjaKronunniSeeingViewNyttTest } from './HjaKronunniSeeingViewNyttTest'
import { useEffect, useState } from 'react'
import { StigiBlind } from './StigiBlind'
import { StigiSeeing } from './StigiSeeing'
import { IcelandSeeing } from './IcelandSeeing'
import { IcelandBlind } from './IcelandBlind'
// function Merkimidi({ text, position, rotation, width, bad }) {
// 	return (
// 		<Html position={position} transform rotation={rotation}>
// 			<div
// 				style={{
// 					width: width,
// 					backgroundColor: 'white',
// 					textAlign: 'center',
// 					padding: '0.5rem 0.5rem',
//           textDecoration:'strikethrough'
// 				}}
// 			>
// 				{bad && <s style={{color:'red'}}>{text}</s>}
//         {!bad && <p style={{color:'green'}}>{text}</p>}
// 			</div>
// 		</Html>
// 	)
// }

export function IcelandScene(props) {
	const position = [0, -1, -4]
	const scale = [1, 1, 1]
	return (<>
		{props.showLabels && <group>
			<Merkimidi
				position={[3.5, 0.2, -3.5]}
				rotation={[0, Math.PI * 1.5 + 0.2, 0]}
				width='100px'
				text={'Ómerkt miðja'}
        bad
        />
		<Merkimidi
				position={[-2, 0.2, -3.5]}
				rotation={[0, Math.PI * 1.5 + 0.2, 0]}
				width='150px'
				text={'Punktar merkja byrjun gangbrautar'}
        good
        />
        <Merkimidi
				position={[11, -0.1, -3.5]}
				rotation={[0, Math.PI * 1.5 + 0.2, 0]}
				width='100px'
				text={'Sprungur í gangstétt'}
        bad
        />
			</group>}
      <group>
				{props.seeing && (
          <IcelandSeeing
          position={position}
          scale={scale}
          rotation={[0, 0, 0]}
					/>
          )}
				{!props.seeing && <IcelandBlind position={position} scale={scale} />}

				{/* <HjaKronunniBlindViewNyttTest opacity={1-opacity} position={position} scale={scale} />
        <HjaKronunniSeeingViewNyttTest opacity={opacity} position={position} scale={scale}/> */}
			</group>
		{/* </group> */}

        </>

	)
}
