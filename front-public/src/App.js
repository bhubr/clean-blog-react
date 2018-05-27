import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PostListWithEditor from './PostListWithEditor'
import About from './About'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Post list with editor</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={PostListWithEditor} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default App
