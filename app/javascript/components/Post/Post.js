import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

export default function Post(props) {
    const [post, setPost] = useState({})

    useEffect(()=> {
        const slug = props.match.params.slug
        const url = `/api/v1/posts/${slug}`
        
        axios.get(url)
        .then( resp => { setPost(resp.data.post[0]) })
    }, [])

    return (
        <Fragment >
            <h1>Title: {post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <div>
                <h4>Author: {post.author}</h4>
                <p>Tags: {post.tags}</p>
                <img src={post.img_url} />
            </div>
        </Fragment>
    )
}
