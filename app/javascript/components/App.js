import React, { Fragment } from 'react'
import { Route, Switch, Link as RouterLink } from 'react-router-dom'
import Post from './Post/Post'
import Posts from './Posts/Posts'
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/" {...props} />
  ));

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    }));

export default function App() {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    <Link component={LinkBehavior} color="inherit">Media Suite Blog</Link>
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
