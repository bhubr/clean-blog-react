import React from 'react'
import PropTypes from 'prop-types'
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

PostList.propTypes = {
  posts: PropTypes.array
}

export default PostList
