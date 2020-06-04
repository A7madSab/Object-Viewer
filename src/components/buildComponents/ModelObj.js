import React, { useState, useMemo } from "react"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

const ObjModel = (props) => {
    const [obj, set] = useState()

    useMemo(() => {
        new MTLLoader().load(props.murl, material => {
            material.preload()
            new OBJLoader().setMaterials(material).load(props.url, set)
        })
    }, [props.url, props.murl])

    return obj ? <primitive rotation={[0, (-Math.PI / 2), 0]} scale={[2, 2, 2]} position={[0, 0, 0]} object={obj} /> : null
}

export default ObjModel