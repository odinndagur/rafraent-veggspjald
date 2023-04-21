import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { Kronan } from './KronanScene'
import { StigiScene } from './StigiScene'
import { IcelandScene } from './IcelandScene'

import ReactDOM from 'react-dom/client'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'

function Settings({ setIsChecked, isChecked }) {
	const checkHandler = () => {
		setIsChecked(!isChecked)
	}

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
					type='checkbox'
					id='checkbox'
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

			<HashRouter>
				<div className='menu'>
					<nav>
						<Link to={'/iceland'}>Gatnamót 1</Link>
						<Link to={'/kronan'}>Gatnamót 2</Link>
						<Link to={'/stigi'}>Stigi</Link>
						<Settings setIsChecked={setIsChecked} isChecked={isChecked} />
					</nav>
				</div>
				<Canvas>
					<Routes>
						<Route
							path='iceland'
							element={<IcelandScene seeing={isChecked} />}
						/>
						<Route path='kronan' element={<Kronan opacity={isChecked} />} />
						<Route path='stigi' element={<StigiScene seeing={isChecked} />} />
					</Routes>
					<color attach='background' args={['#f0f0f0']} />
					<ambientLight intensity={1} />
					<PerspectiveCamera makeDefault position={[9, 4, 8]} fov={70}/>
					<CameraControls />
				</Canvas>
			</HashRouter>
		</>
	)
}
