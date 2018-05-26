import React, { Component } from 'react'
import Post from './Post'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Post title="React rocks" content="React was created by Facebook engineers to address complex UI synchronization problems." />
        <Post title="Angular is nice too" content="Angular was created by Google. Since v2 it's no more compatible with former AngularJS" />
        <Post title="Vue.js is the new kid on the block" content="Blah blah" />
      </div>
    )
  }
}

export default App
