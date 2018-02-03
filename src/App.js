import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import StockControl from './pages/stockControl';
import Navbar from './components/navbar';


const App = () => {
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home/dashboard" component={Dashboard} />
        <Route exact path="/home/inventory" component={Inventory} />
        <Route exact path="/home/orders" component={Orders} />
        <Route exact path="/home/stockcontrol" component={StockControl} />
        <Route exact path="/home/logout" component={Login} />
      </Switch>
    </div>
  </Router>;
  <Navbar />
}
export default App;
