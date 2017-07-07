import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WeatherWidget from './Components/weatherWidget/weatherWidget';
import TrafficWidget from './Components/trafficWidget/trafficWidget';
import MbtaWidget from './Components/mbtaWidget/mbtaWidget';

class App extends Component {
  render() {
    // console.warn(WeatherWidget);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Matt's App</h2>
        </div>
        <WeatherWidget />
        <MbtaWidget />
        <TrafficWidget />
      </div>
    );
  }
}

export default App;
