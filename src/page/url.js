import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
require('../styles/App.css');
const url = ({match}) => (
  <Router basename={match.url}>
    <div>
      <h2>url参数</h2>
      <ul>
        <li><NavLink to="/react" activeClassName="selected">react</NavLink></li>
        <li><NavLink to="/router" activeClassName="selected">router</NavLink></li>
        <li><NavLink to={{
          pathname:'/redux',
          state: {argument: '1'}
        }} activeClassName="selected">redux</NavLink></li>
      </ul>
      <br/>
      <Route path="/:path" component={pathComponent}/>
    </div>
  </Router>
)
const pathComponent = (props) => (<h3>{props.match.params.path}</h3>)
export default url