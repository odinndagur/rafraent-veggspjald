/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 HjaKronunniSeeingViewNyttTest.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/HjaKronunniSeeingViewNyttTest-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials['Material_0.001']} position={[-0.14, 0.06, -1.3]} scale={[1, 2.09, 1]} />
    </group>
  )
}

useGLTF.preload('/HjaKronunniSeeingViewNyttTest-transformed.glb')
