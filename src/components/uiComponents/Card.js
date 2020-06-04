import React from 'react'
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 15
    },
    media: {
        height: 140,
        alignItems: "center",
        textAlign: "center"
    }
})

const MyCard = ({ name, thumbnail, description, setVisibility }) => {
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
                    <Typography align="center" gutterBottom variant="h5" component="h2">{name}, 75 EGP</Typography>
                    <Typography align="center" variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MyCard
