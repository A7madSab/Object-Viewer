import React, { useState } from "react"

import Grid from "@material-ui/core/Grid"
import Canvas from "./components/Canvas"

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
      <Canvas
        models={models}
        mannequin={mannequin}
        setVisibility={setVisibility}
        setMannequinVisibility={setMannequinVisibility}
      />
    </Grid>
  )
}

export default App
