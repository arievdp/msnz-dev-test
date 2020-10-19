import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('/api/v1/posts.json')
        .then( resp =>  {setPosts(resp.data.posts) } )
    }, [posts.length])

    const list = posts.map( item => {
        return (
            <li key={item.title}>{item.title}</li>
        )
    })

    return (
        <div>
            <p>Our great posts!</p>
            <ul>{list}</ul>
        </div>
    )
}
