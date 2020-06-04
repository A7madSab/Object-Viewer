import React, { useState } from "react"

import Grid from "@material-ui/core/Grid"

import Canvas from "./components/Canvas"
import Controls from "./components/Controls"



const m = [{
  visible: true,
  position: [0, 0, 0],
  name: "Monster Mask",
  path: "/monster Mask.glb",
  thumbnail: "/monster Mask.png",
  rotation: [0, (3 * Math.PI / 2), 0],
  description: "Esse elit cillum officia qui veniam est minim aliqua in ipsum eiusmod in nulla magna.",
},
{
  visible: false,
  position: [0, 0, 0],
  name: "African Mask",
  path: "/african Mask.glb",
  thumbnail: "african-Mask.png",
  rotation: [0, (3 * Math.PI / 2), 0],
  description: "Esse elit cillum officia qui veniam est minim aliqua in ipsum eiusmod in nulla magna.",
}]

const App = () => {
  const [models, setModels] = useState(m)
  const [mannequin, setMannequin] = useState(true)

  const setMannequinVisibility = () => setMannequin(!mannequin)

  const setVisibility = selectedName => {
    const newModels = models.map(model => {
      if (selectedName === model.name) model.visible = true
      else model.visible = false

      return model
    })
    setModels(newModels)
  }

  return (
    <Grid container direction="row" justify="center" style={{ height: "100vh", width: "100vw" }}>
      <Grid item lg={8} md={8} xs={12}>
        <Canvas models={models} mannequin={mannequin} />
      </Grid>
      <Grid item lg={4} md={4} xs={12} style={{ opacity: 1, overflow: "scroll" }}>
        <Controls
          models={models}
          setVisibility={setVisibility}
          mannequin={mannequin}
          setMannequinVisibility={setMannequinVisibility}
        />
      </Grid>
    </Grid>
  )
}

export default App
