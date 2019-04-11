import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <Router exact path="/" component={Home}/>
          <Router exact path="/about-us" component={About}/>
        </main>
      </div>
    );
  }
}

export default App;
