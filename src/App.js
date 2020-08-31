import React from 'react';
import { Link } from 'react-router-dom';
import store from './dummy-store.js'
import './App.css';

class App extends React.Component {
  state = store;
  render() {
    return (
      <>
        <header>
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <main className='App'>
          {/* content goes here */}
        </main>
      </>
    );
  }
}

export default App;
