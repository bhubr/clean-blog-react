import React, { Component } from 'react'
import PostList from './PostList'
import PostEditor from './PostEditor'

import posts from './posts'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts
    }
    this.addPost = this.addPost.bind(this)
  }
  addPost (postData) {
    const { posts } = this.state
    // Use "spread operator" to make a copy of the posts array,
    // instead of modifying it directly
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    const newPosts = [ ...posts ]
    newPosts.push(postData)
    // Pass the newly created array as value for state's posts
    this.setState({
      posts: newPosts
    })
  }
  render () {
    return (
      <div className="App">
        <PostList posts={this.state.posts} />
        <PostEditor addPost={ this.addPost } />
      </div>
    )
  }
}

export default App
