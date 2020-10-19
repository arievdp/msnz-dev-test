import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Post from './Post/Post'
import Posts from './Posts/Posts'

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/:slug" component={Post} />
        </Switch>
    )
}
