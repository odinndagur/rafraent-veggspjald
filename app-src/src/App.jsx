import { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import { Kronan } from './KronanScene'
import { StigiScene } from './StigiScene'
import { IcelandScene } from './IcelandScene'

import ReactDOM from 'react-dom/client'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'

function Settings({ setIsChecked, isChecked, showLabels, setShowLabels }) {
	const checkHandler = () => {
		setIsChecked(!isChecked)
	}

	const labelHandler = () => {
		setShowLabels(!showLabels)
	}
	return (
		<div
			style={{
				backgroundColor: '#f0f0f0',
				maxWidth: 'fit-content',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: '1rem',
				fontSize: '1.5rem',
			}}
		>
			<div>
				<label>
					Sjónskilyrði
					<input
						type='checkbox'
						id='checkbox'
						checked={isChecked}
						onChange={checkHandler}
					/>
				</label>
			</div>

			<div style={{ width: '2rem' }}></div>

			<div>
				<label>
					Merkingar
					<input
						type='checkbox'
						id='checkbox'
						checked={showLabels}
						onChange={labelHandler}
					/>
				</label>
			</div>
		</div>
	)
}

export default function App() {
	const [isChecked, setIsChecked] = useState(true)
	const [showLabels, setShowLabels] = useState(true)
	return (
		<>
			<HashRouter>
				<div className='menu'>
					<nav>
						{/* <Link to={'/iceland'}>Gatnamót 1</Link>
						<Link to={'/kronan'}>Gatnamót 2</Link>
						<Link to={'/stigi'}>Stigi</Link> */}
						<Settings
							setIsChecked={setIsChecked}
							isChecked={isChecked}
							showLabels={showLabels}
							setShowLabels={setShowLabels}
						/>
					</nav>
				</div>
				<Canvas>
					<Routes>
						<Route
							path='iceland'
							element={<IcelandScene seeing={isChecked} showLabels={showLabels} />}
						/>
						<Route path='kronan' element={<Kronan opacity={isChecked} showLabels={showLabels} />} />
						<Route path='stigi' element={<StigiScene seeing={isChecked} showLabels={showLabels} />} />
					</Routes>
					<color attach='background' args={['#f0f0f0']} />
					<ambientLight intensity={1} />
					<PerspectiveCamera makeDefault position={[9, 4, 8]} fov={70} />
					<CameraControls />
				</Canvas>
			</HashRouter>
		</>
	)
}
