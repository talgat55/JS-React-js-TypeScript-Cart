import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './layout/main';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
      <Router >
        <Main/>
      </Router>
  );
}

export default App;
