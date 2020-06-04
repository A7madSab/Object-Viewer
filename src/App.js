import React from "react"

import Grid from "@material-ui/core/Grid"

import Canvas from "./components/Canvas"
import Controls from "./components/Controls"

const models = [{
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
  return (
    <Grid container direction="row" justify="center" style={{ height: "100vh", width: "100vw" }}>
      <Grid item xs={8}>
        <Canvas models={models} />
      </Grid>
      <Grid item xs={4} style={{ backgroundColor: "red" }}>
        <Controls models={models} />
      </Grid>
    </Grid>
  )
}

export default App
