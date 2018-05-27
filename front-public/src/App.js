import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PostListWithEditor from './PostListWithEditor'
import Navigation from './Navigation'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import SinglePost from './SinglePost'
import Error404 from './Error404'

const withContainer = (Component) => props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
      <Component {...props} />
      </div>
    </div>
  </div>

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Header />

      <Switch>
        <Route exact path="/" component={withContainer(PostListWithEditor)} />
        <Route path="/about" component={withContainer(About)} />
        <Route path="/contact" component={withContainer(Contact)} />
        <Route path="/:id" component={withContainer(SinglePost)} />
        <Route component={Error404} />
      </Switch>

      <hr />
      <Footer />
    </div>
  </Router>
)

export default App
