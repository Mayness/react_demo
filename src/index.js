import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(
  <Router>
    <Route path='/a' component={App}/>
  </Router>,
  document.getElementById('app')
);
