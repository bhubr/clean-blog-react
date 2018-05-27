import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Post extends React.Component {
  render () {
    return (
      <div>
        <div className="post-preview">
          <Link to={ '/' + this.props.id }>
            <h2 className="post-title">
              { this.props.title }
            </h2>
            <h3 className="post-subtitle">
              { this.props.content }
            </h3>
          </Link>
          <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2018</p>
        </div>
        <hr />
      </div>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post
