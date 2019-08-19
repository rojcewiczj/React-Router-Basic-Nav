import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { Home, About, Contact, Navigation } from './components';
import { Route } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
const App = () => (
  <div>
    <Router>
    <Navigation />
      <Route path ="/Home" component={Home} />
      <Route path ="/contact" component={Contact} />
       <Route path ="/about" component={About} />
       </Router>
  </div>

);

export default App;

const rootElment = document.getElementById('root');
ReactDOM.render (<Router><App /></Router>, rootElment);

