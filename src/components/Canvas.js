import React, { Suspense } from "react"

import { VRCanvas } from "react-xr"
import { OrbitControls, Sky, Stars, Plane, Text } from "drei"
import Model from "./buildComponents/ModelGLTF.js"

const Fallback = () => (
    <Text
        rotation={[0, (3 * Math.PI / 2), 0]}
        color="black" anchorX="center" anchorY="middle" fontSize={1} >
        Loading
    </Text>
)
const MyCanvas = ({ models, mannequin }) => {
    return (
        <VRCanvas camera={{ position: [-15, 0, 0] }}>
            <fog attach="fog" args={["#dde5e7", 25, 100]} />
            <Sky />
            <Stars />
            <Plane args={[400, 400]} position={[0, -16, 0]} rotation={[-Math.PI / 2, 0, 0]} >
                <meshPhysicalMaterial attach="material" color="#e1ba74" />
            </Plane>
            {
                models ? models.map(({ path, rotation, position, visible }, key) => (
                    <Suspense key={key} fallback={<Fallback />} >
                        <Model visible={visible} path={path} rotation={rotation} position={position} />
                    </Suspense>
                )) : null
            }
            {mannequin ? <Model path="mannequin Head.glb" /> : null}

            <OrbitControls />
            <ambientLight />
            <spotLight position={[5, 5, 5]} penumbra={1} />
        </VRCanvas>
    )
}

export default MyCanvas
