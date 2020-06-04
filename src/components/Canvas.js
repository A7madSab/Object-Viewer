import React, { Suspense } from "react"

import { VRCanvas } from "react-xr"
import { OrbitControls, Sky, Stars, Plane, Text } from "drei"

import * as THREE from "three"

import Model from "./buildComponents/ModelGLTF.js"

const Fallback = () => (
    <Text
        rotation={[0, (3 * Math.PI / 2), 0]}
        color="black" anchorX="center" anchorY="middle" fontSize={1} >
        Loading
    </Text>
)
const MyCanvas = ({ models }) => {
    return (
        <VRCanvas
            camera={{ position: [-15, 0, 0] }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}
        >
            <fog attach="fog" args={["#dde5e7", 25, 100]} />
            <Sky />
            <Stars />
            <Plane args={[400, 400]} receiveShadow position={[0, -16, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <meshPhysicalMaterial attach="material" color="#e1ba74" />
            </Plane>
            {
                models
                    ? models.map(({ path, rotation, position, visible }) => (
                        <Suspense fallback={<Fallback />} >
                            <Model visible={visible} path={path} rotation={rotation} position={position} />
                        </Suspense>
                    ))
                    : null
            }

            <Model path="mannequin Head.glb" />

            <OrbitControls />
            <ambientLight />
            <spotLight castShadow position={[5, 5, 5]} penumbra={1} />

        </VRCanvas>
    )
}

export default MyCanvas
