import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PostListWithEditor from './PostListWithEditor'
import About from './About'
import SinglePost from './SinglePost'
import Error404 from './Error404'

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
        <li>
          <Link to="/1">Post #1</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/" component={PostListWithEditor} />
        <Route path="/about" component={About} />
        <Route path="/:id" component={SinglePost} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
)

export default App
