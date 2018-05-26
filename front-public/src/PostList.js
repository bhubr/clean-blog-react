import React from 'react'
import Post from './Post'

class PostList extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.posts.map((post, i) => <Post key={i} title={ post.title } content={ post.content } />)
        }
      </div>
    )
  }
}

export default PostList
