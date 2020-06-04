import React, { useState, useEffect } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Cube = ({ position = [0, 0, 0], path, rotation = [0, (3 * Math.PI / 2), 0], visible = true }) => {
    const [model, setModel] = useState()

    useEffect(() => {
        new GLTFLoader().load(path, setModel)
    }, [path, setModel])

    return model ? <primitive visible={visible} castShadow position={position} rotation={rotation} object={model.scene} /> : null
}

export default Cube