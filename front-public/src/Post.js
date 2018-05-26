import React from 'react'

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

export default Post
