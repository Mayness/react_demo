import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routes = [{
  path: '/',
  exact: true,
  name: '首页',
  content: () => (<div>首页</div>)
}, {
  path: '/content',
  name: '内容',
content: () => (<div>内容</div>)
}, {
  path: '/about',
  name: '关于',
  content: () => (<div>关于</div>)
}]

const config = ({location}) => (
  <Router basename={location.path}>
    <div>
      <ul>
        { routes.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        )) }
      </ul>
      { routes.map((item, index) => (
        <Route key={index} exact={item.exact} path={item.path} component={item.content}></Route>
      )) }
    </div>
  </Router>
)

export default config