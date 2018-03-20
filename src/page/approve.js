import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const approve = ({match}) => (
  <Router basename={match.url}>
    <div>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/protected" component={Protected}/>
    </div>
  </Router>
)

const Public = () => (<h3>Public</h3>)
const Protected = () => (<h3>Protected</h3>)
export default approve