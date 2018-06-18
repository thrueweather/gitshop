import React, { Component } from 'react';
import logo from './logo.svg';
import Products from './containers/Products'
import Cart from './containers/Cart'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </div>
        </header>
        <div className="app-main">
          <div className="container">
            <div className="wrapp-shop">
              <Products/>
              <Cart/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
