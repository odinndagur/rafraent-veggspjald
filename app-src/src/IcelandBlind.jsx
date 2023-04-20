/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 IcelandBlind.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function IcelandBlind(props) {
  const { nodes, materials } = useGLTF('/IcelandBlind-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} />
    </group>
  )
}

useGLTF.preload('/IcelandBlind-transformed.glb')