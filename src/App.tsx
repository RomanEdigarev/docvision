import React from 'react';
import './style.scss';
import {Menu} from "./sections/Menu";
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className={'app'}>
        <Menu/>
      </div>
    </Router>
  );
}

export default App;
