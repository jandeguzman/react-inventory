import React, { Component } from 'react';
import './App.css';

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
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;
}

export default App;
