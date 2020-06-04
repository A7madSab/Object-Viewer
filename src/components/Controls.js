import React from 'react'
import Grid from "@material-ui/core/Grid"

const Controls = ({ models }) => {
    return (
        <Grid container direction="column" justify="center">
            {
                models.map(({ name, thumbnail, description }) => {
                    return (
                        <div>
                            <img alt="Mask" width={150} src={thumbnail} />
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </Grid>
    )
}

export default Controls
