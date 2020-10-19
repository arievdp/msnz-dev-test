import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('/api/v1/posts.json')
        .then( resp =>  console.log(resp) )
    }, [posts.length])

    return (
        <div>
            I am the posts index
        </div>
    )
}
