import React from 'react'
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 220,
        margin: 15
    },
    media: {
        padding: 5,
        height: 140,
    }
})

const MyCard = ({ name, thumbnail, description, setVisibility, price }) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => setVisibility(name)}>
                <img
                    alt="mask"
                    title="name"
                    src={thumbnail}
                    className={classes.media}
                />
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h3">{name}, {price} EGP</Typography>
                    <Typography align="center" variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MyCard
