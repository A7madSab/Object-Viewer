import React, { useMemo } from "react"

import img from "../../images/logo512.png"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"

const Texture = () => {
    const texture = useMemo(() => new TextureLoader().load(img), [img])

    return (
        <mesh receiveShadow>
            <boxGeometry attach="geometry" args={[5, 5, 5]} />
            <meshStandardMaterial
                attach="material"
                map={texture}
            />
        </mesh>
    )
}

export default Texture