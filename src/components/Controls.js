import React from "react"

import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Button from "@material-ui/core/Button"

import Card from "./uiComponents/Card"

const Controls = ({ models, setVisibility, mannequin, setMannequinVisibility }) => {
    return (
        <Grid container justify="center">
            <FormControlLabel
                style={{ textAlign: "center", fontSize: 22 }}
                control={
                    <Checkbox checked={mannequin} onChange={setMannequinVisibility} name="checkedB" color="primary" size="medium" />
                }
                label="Mannequin"
            />
            <Button>Order</Button>
            {
                models.map(({ name, thumbnail, description }, key) => <Card setVisibility={setVisibility} key={key} name={name} thumbnail={thumbnail} description={description} />)
            }
        </Grid>
    )
}

export default Controls
