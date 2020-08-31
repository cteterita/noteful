import React from 'react';
import { Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import NoteList from './NoteList/NoteList';
import NoteDetail from './NoteDetail/NoteDetail';
import store from './dummy-store.js';
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
          <Sidebar folders={this.state.folders} />
          <NoteList notes={this.state.notes} />
        </main>
      </>
    );
  }
}

export default App;
