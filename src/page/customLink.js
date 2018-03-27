import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const customLink = ({location}) => (
  <Router basename={location.pathname}>
    <div>
      <NewLink to="/home" label="Home"/>
      <NewLink to="/about" label="about"/>
      <br/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const NewLink = ({to, label}) => (
  <Route path={to} children={({match}) => (
      <div>
        {match ? '>' : ''}
        <Link to={to}>
          {label}
        </Link>
      </div>
    )}/>
)

const Home = () => (<div>Home</div>)
const About = () => (<div>About</div>)

export default customLink