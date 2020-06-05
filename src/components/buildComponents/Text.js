import React, { useMemo } from "react"
import { useLoader } from "react-three-fiber"
import * as THREE from "three"


const TextGeometry = ({ scale = 1, visible = true, rotation = [0, -Math.PI / 2, 0], position = [0, 0, 0], text, vAlign = "center", hAlign = "center", size = 1, color = "#000000", ...props }) => {
    const font = useLoader(THREE.FontLoader, "/helvetiker_regular.typeface.json")
    const config = useMemo(
        () => ({ font, size: 12, height: 12, curveSegments: 0, bevelEnabled: true, vAlign: vAlign, bevelThickness: 1, bevelSize: 1, bevelOffset: 0, bevelSegments: 0 }),
        [font, vAlign]
    )

    return (
        <mesh
            scale={[scale * 0.1, scale * 0.1, scale * 0.1]}
            visible={visible}
            rotation={rotation}
            position={position}
            {...props}
        >
            <textGeometry attach="geometry" args={[text, config]} />
            <meshNormalMaterial attach="material" color={color} />
        </mesh>

    )
}

export default TextGeometry

