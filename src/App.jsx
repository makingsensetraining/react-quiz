import React, { Component } from 'react';
import Header from './jsx/Header.jsx';
import Quiz from './jsx/Quiz.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Quiz />
      </div>
    );
  }
}

export default App;
