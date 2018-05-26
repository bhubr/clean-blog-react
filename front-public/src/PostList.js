import React from 'react'
import Post from './Post'

import posts from './posts'

class PostList extends React.Component {
  render () {
    return (
      <div>
        {
          posts.map((post, i) => <Post key={i} title={ post.title } content={ post.content } />)
        }
      </div>
    )
  }
}

export default PostList
