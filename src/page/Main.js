require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import base from './base'
import url from './url'
import approve from './approve'
import customLink from './customLink'
import notMatch from './notMatch'
import Error from './Error'
import config from './config'
import Nav from '../router/index_nav'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Router>
          <div>
            <Nav/>
            <Switch>
              <Route exact path="/base" component={base}/>
              <Route path="/url" component={url}/>
              <Route path="/approve" component={approve}/>
              <Route path="/customLink" component={customLink}/>
              <Route path="/notMatch" component={notMatch}/>
              <Route path="/config" component={config}/>
              <Redirect from="/redirect" to="/b"/>
              <Route component={Error}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
