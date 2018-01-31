import React, { Component } from 'react';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Stock Control from './pages/stockControl';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home/dashboard" component={Dashboard} />
        <Route exact path="/home/inventory" component={Inventory} />
        <Route exact path="/home/orders" component={Orders} />
        <Route exact path="/home/stockcontrol" component={Stock Control} />
        <Route exact path="/home/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;
}

export default App;
