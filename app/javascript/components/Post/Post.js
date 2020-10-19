import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Post(props) {
    const [post, setPost] = useState({})

    useEffect(()=> {
        const slug = props.match.params.slug
        const url = `/api/v1/posts/${slug}`
        
        axios.get(url)
        .then( resp => console.log(resp))
    }, [])

    return (
        <div>
            I am the posts view
        </div>
    )
}
