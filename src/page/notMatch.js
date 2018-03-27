import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'

const notMathRouter = ({location}) => (
  <Router basename={location.pathname}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/oldMatch">oldMatch</Link></li>
        <li><Link to="/newMatch">newMatch</Link></li>
        <li><Link to="/aa">aa</Link></li>
        <li><Link to="/bb">bb</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Redirect from="/oldMatch" to="/newMatch"/>
        <Route path="/newMatch" component={() => (<div>newMatch</div>)}/>
        <Route component={() => (<div>not found page</div>)}/>
      </Switch>
    </div>
  </Router>
)

const Home = () => (<p>home</p>)

export default notMathRouter