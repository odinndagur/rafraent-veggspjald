import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'

function Settings({ setVisibilitySlider }) {
	return (
		<div
			style={{
				backgroundColor: 'white',
				maxWidth: 'fit-content',
				display: 'flex',
				flexDirection: 'column',
				padding: '1rem',
			}}
		>
			<label>
				<div>Sjónskilyrði</div>
				<input
					type='range'
					defaultValue={1}
					min={0}
					max={1}
					step={0.001}
					onChange={(e) => setVisibilitySlider(e.target.value)}
				/>
			</label>
		</div>
	)
}

export function Adgengi({Scene}) {
	const [visibilitySlider, setVisibilitySlider] = useState(1.0)
	return (
		<>
			<div
				style={{
					position: 'absolute',
					top: '3rem',
					zIndex: 999,
					width: '50vw',
					left: '50%',
				}}
			>
				<Settings setVisibilitySlider={setVisibilitySlider} />
			</div>
			<Canvas>
				
				<Scene opacity={visibilitySlider} />
				<color attach='background' args={['#FFF']} />
				<ambientLight intensity={1.5} />
				<PerspectiveCamera makeDefault position={[9, 4, 8]} fov={70} />
				<CameraControls />
			</Canvas>
		</>
	)
}
