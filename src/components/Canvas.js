import React from "react"
import { Canvas } from "react-three-fiber"
import Model from "./buildComponents/Model"

import MaskMURL from "../models/Mask.mtl"
import MaskURL from "../models/Mask.obj"
import MaskDesignMURL from "../models/MaskDesign.mtl"
import MaskDesignURL from "../models/MaskDesign.obj"
import { Stars, OrbitControls } from "drei"


const MyCanvas = () => {
    return (
        <Canvas style={{ background: "black" }} camera={{ position: [-28, 0, 0] }}>
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
            />
            <Model url={MaskDesignURL} murl={MaskDesignMURL} />
            <Model url={MaskURL} murl={MaskMURL} />

            <OrbitControls />
            <ambientLight />
            <pointLight position={[-20, -5, 0]} />
        </Canvas >
    )
}

export default MyCanvas
