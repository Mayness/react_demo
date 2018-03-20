import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const BasicExample = ({match}) => (
  <Router basename={match.url}>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>
      <br/>
      <Route exact path="/" component={() => (<div>首页</div>)}/>
      <Route path="/about" component={() => (<div>关于</div>)}/>
      <Route path="/topics" component={topics}/>
    </div>
  </Router>
)

const topics = ({match}) => (
  <div>
    <h2>主题列表</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          使用React渲染
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          组件
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/state`}>
          状态
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:props`} component={({match}) => (<h3>this is {match.params.props}</h3>)}/>
  </div>
)
export default BasicExample