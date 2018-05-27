import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PostListWithEditor from './PostListWithEditor'
import Navigation from './Navigation'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import SinglePost from './SinglePost'
import Error404 from './Error404'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Header />

      <Switch>
        <Route exact path="/" component={PostListWithEditor} />
        <Route path="/about" component={About} />
        <Route path="/:id" component={SinglePost} />
        <Route component={Error404} />
      </Switch>

      <Footer />
    </div>
  </Router>
)

export default App
