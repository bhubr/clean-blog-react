import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class PostList extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.posts.map((post, i) => <Post key={i} id={ post.id } title={ post.title } content={ post.content } />)
        }
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array
}

export default PostList
