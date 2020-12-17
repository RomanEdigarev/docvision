import React from 'react';
import './style.scss';
import {Menu} from "./sections/Menu";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Header} from "./sections/Header";
import Content from "./sections/Content";


function App() {
  return (
    <Router>
      <div className={'app'}>
        <Menu/>
        <div className="layout">
          <Header/>
          <Content/>
        </div>
      </div>
    </Router>
  );
}

export default App;
