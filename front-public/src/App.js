import React, { Component } from 'react'
import Post from './Post'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}

export default App
