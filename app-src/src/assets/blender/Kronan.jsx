/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Kronan.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Kronan-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.blind} position={[-0.14, 0.06, -1.3]} />
    </group>
  )
}

useGLTF.preload('/Kronan-transformed.glb')
