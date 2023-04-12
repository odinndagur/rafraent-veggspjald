/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 HjaKronunniBlindViewNyttTest.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HjaKronunniBlindViewNyttTest(props) {
  const { nodes, materials } = useGLTF(
    "/HjaKronunniBlindViewNyttTest-transformed.glb",
  );
  materials.Material_0.transparent = true
  materials.Material_0.opacity = props.opacity
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        position={props.position}
        scale={props.scale}
      />
    </group>
  );
}

useGLTF.preload("/HjaKronunniBlindViewNyttTest-transformed.glb");
