import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class PostList extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {
              this.props.posts.map((post, i) => <Post key={i} id={ post.id } title={ post.title } content={ post.content } />)
            }
          </div>
        </div>
      </div>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.array
}

export default PostList
