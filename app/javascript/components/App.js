import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Post from './Post/Post'
import Posts from './Posts/Posts'
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
}));

export default function App() {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Media Suite Blog
                </Typography>   
                </Toolbar>
            </AppBar>
            <Container>
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/posts/:slug" component={Post} />
            </Switch>
            </Container>
        </Fragment>   
    )
}
