import React from "react"
import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { draco } from "drei"

const Loading = () => {
    const { nodes, materials } = useLoader(GLTFLoader, "/models/scene-draco.glb", draco())
    return (
        <group position={[0, -7, 0]} rotation={[-Math.PI / 2, 0, 0]} dispose={null}>
            <mesh material={materials["Scene_-_Root"]} geometry={nodes.mesh_0.geometry} castShadow receiveShadow />
        </group>
    )
}

export default Loading