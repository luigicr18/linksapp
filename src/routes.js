import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import App from './containers/App';
//import Links from './containers/App'

//localStorage.removeItem('user');

//const componentIndex = localStorage.getItem('user') ? Pedidos : Login;
export default (
  <Router>
    <Route path="/" component={App}>
        
    </Route>
  </Router>
)