import React, { useState, Suspense } from "react"

import { OrbitControls, Sky, Stars, Plane, Text, HTML } from "drei"
import Model from "./components/buildComponents/ModelGLTF.js"
import Controls from "./components/Controls"
import Text3D from "./components/buildComponents/Text"
import Grid from "@material-ui/core/Grid"
import { VRCanvas } from "react-xr"

const m = [{
  price: 50,
  visible: true,
  position: [0, 0, 0],
  name: "Monster Mask",
  path: "/objs/monster Mask.glb",
  thumbnail: "/imgs/monster Mask.png",
  rotation: [0, (3 * Math.PI / 2), 0],
  description: "Esse elit cillum officia qui veniam est minim aliqua in ipsum eiusmod in nulla magna.",
}, {
  price: 50,
  visible: false,
  position: [0, 0, 0],
  name: "African Mask",
  path: "/objs/african Mask.glb",
  thumbnail: "/imgs/african-Mask.png",
  rotation: [0, (3 * Math.PI / 2), 0],
  description: "Esse elit cillum officia qui veniam est minim aliqua in ipsum eiusmod in nulla magna.",
}, {
  price: 50,
  visible: false,
  position: [0, 0, 0],
  name: "Vampire",
  path: "/objs/vampire.glb",
  thumbnail: "/imgs/vampire.png",
  rotation: [0, (3 * Math.PI / 2), 0],
  description: "Esse elit cillum officia qui veniam est minim aliqua in ipsum eiusmod in nulla magna.",
}, {
  price: 50,
  visible: false,
  position: [0, 0, 0],
  name: "Sweets",
  path: "/objs/sweets.glb",
  thumbnail: "/imgs/sweets.png",
  rotation: [0, (3 * Math.PI / 2), 0],
  description: "Esse elit cillum officia qui veniam est minim aliqua in ipsum eiusmod in nulla magna.",
}]

const App = () => {
  const [models, setModels] = useState(m)
  const [mannequin, setMannequin] = useState(false)

  const setMannequinVisibility = () => setMannequin(!mannequin)

  const setVisibility = selectedName => {
    const newModels = models.map(model => {
      if (selectedName === model.name) model.visible = true
      else model.visible = false
      return model
    })
    setModels(newModels)
  }

  const Fallback = () => (
    <Text rotation={[0, (3 * Math.PI / 2), 0]} color="black" anchorX="center" anchorY="middle" fontSize={1}>
      Loading
    </Text>
  )

  return (
    <Grid container direction="row" justify="center" style={{ height: "100vh", width: "100vw" }}>
      <VRCanvas camera={{ position: [-15, 0, 0] }}>

        {/* Light  */}
        <OrbitControls />
        <ambientLight />

        {/* Enviroment */}
        <fog attach="fog" args={["#dde5e7", 25, 100]} />
        <Sky />
        <Stars />
        <spotLight position={[5, 5, 5]} penumbra={1} />
        <Plane args={[400, 400]} position={[0, -16, 0]} rotation={[-Math.PI / 2, 0, 0]} >
          <meshPhysicalMaterial attach="material" color="#e1ba74" />
        </Plane>

        {/* Masks */}
        {
          models ? models.map(({ path, rotation, position, visible }, key) => (
            <Suspense key={key} fallback={<Fallback />} >
              <Model visible={visible} path={path} rotation={rotation} position={position} />
            </Suspense>
          )) : null
        }

        {/* Mannequin */}
        {mannequin ? <Model path="/objs/mannequin Head.glb" /> : null}

        {/* Text */}
        <Suspense fallback={null}>
          <Text3D text="M a s k r" position={[50, 0, -17]} scale={6} />
        </Suspense>

        {/* Controls */}
        <HTML prepend center fullscreen scaleFactor={11}>
          <Grid>
            <Controls
              models={models}
              setVisibility={setVisibility}
              mannequin={mannequin}
              setMannequinVisibility={setMannequinVisibility}
            />

          </Grid>
        </HTML>

      </VRCanvas>
    </Grid >
  )
}

export default App
