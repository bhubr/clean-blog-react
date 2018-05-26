import React, { Component } from 'react'
import PostList from './PostList'
import PostEditor from './PostEditor'

class App extends Component {
  render () {
    return (
      <div className="App">
        <PostList />
        <PostEditor />
      </div>
    )
  }
}

export default App
