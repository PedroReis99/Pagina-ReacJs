import React, { Component } from 'react';
import Routes from './routes';
import './global.css';

class App extends Component{
  render(){
    return(
      <div className="container">
        <Routes />
      </div>
    );
  }
}

export default App;
