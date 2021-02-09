  
import React, { Component } from 'react';
import Game from './components/Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p className="App-intro">
            <Game></Game>
          </p>
        </div>
      </div>
    );
  }
}

export default App;