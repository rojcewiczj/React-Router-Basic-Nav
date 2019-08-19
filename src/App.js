import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { Home, About, Contact, Navigation } from './components';
import {BrowserRouter} from "react-router-dom";
const App = () => (
  <div>
    <Navigation />
  </div>
);

export default App;

const rootElment = document.getElementById('root');
ReactDOM.render (<BrowserRouter><App /></BrowserRouter>, rootElment);
