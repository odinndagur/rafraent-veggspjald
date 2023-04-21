import { Html } from '@react-three/drei'

export function Merkimidi({ text, position, rotation, width, bad, good }) {
	return (
		<Html position={position} transform rotation={rotation}>
			<div
				style={{
					width: width,
					backgroundColor: 'white',
					textAlign: 'center',
					padding: '0.3rem 0.3rem',
          textDecoration:'strikethrough'
				}}
			>
				{bad && <s style={{color:'red'}}>{text}</s>}
        {good && <p style={{color:'green'}}>{text}</p>}
		{!bad && !good && <p>{text}</p>}
			</div>
		</Html>
	)
}