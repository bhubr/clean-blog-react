import React from 'react'
import Post from './Post'
import Error404 from './Error404'
import posts from './posts'

const SinglePost = props => {
  const postId = Number(props.match.params.id)
  const post = posts.find(p => p.id === postId)
  return post ? <Post title={post.title} content={post.content} /> :
    <Error404 />
}

export default SinglePost