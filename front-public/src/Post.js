import React from 'react'
import PropTypes from 'prop-types'

class Post extends React.Component {
  render () {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <div>
          <p>{ this.props.content }</p>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Post
