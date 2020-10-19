import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
      },
  }));


export default function Posts() {
    const [posts, setPosts] = useState([])
    const classes = useStyles();

    useEffect(()=> {
        axios.get('/api/v1/posts.json')
        .then( resp =>  { setPosts(resp.data.posts) } )
    }, [posts.length])

    const grid = posts.map( item => {
        return (
        <Grid key={item.slug} item xs={4}>
            <Card attributes={item} />
        </Grid>
        )
    })

    return (
        <Fragment>
            <div className="grid-container">
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3} >
                        {grid}
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}