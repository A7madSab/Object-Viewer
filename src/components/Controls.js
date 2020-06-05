import React from "react"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"

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
            <Button>
                <a style={{ color: "black", textDecoration: "none" }} target="_blank" rel="noopener noreferrer" href="https://forms.gle/3WxcwZdVsM5pMBgS8">
                    Order
                </a>
            </Button>
            {
                models.map(({ name, thumbnail, description, price }, key) => <Card key={key} price={price} setVisibility={setVisibility} name={name} thumbnail={thumbnail} description={description} />)
            }
        </Grid>
    )
}

export default Controls
