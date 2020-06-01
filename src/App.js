import React from "react"

import Grid from "@material-ui/core/Grid"

import Canvas from "./components/Canvas"
import Controls from "./components/Controls"

const App = () => {
  return (
    <Grid container direction="row" justify="center" style={{ height: "100vh", width: "100vw" }}>
      <Grid item xs={8}>
        <Canvas />
      </Grid>
      <Grid item xs={4} style={{ backgroundColor: "red" }}>
        <Controls />
      </Grid>
    </Grid>
  )
}

export default App
