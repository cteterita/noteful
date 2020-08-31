import React from 'react';
import { Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import NoteList from './NoteList/NoteList';
import NoteDetail from './NoteDetail/NoteDetail';
import store from './dummy-store.js';
import './App.css';

class App extends React.Component {
  state = store;
  listView(routeProps) {
    const { notes, folders } = this.state;
    const folderId = routeProps.match.params.folderId;
    return (
      <>
        <Sidebar folders={folders} selectedFolderId={folderId}/>
        <NoteList notes={folderId ? notes.filter(n => n.folderId === folderId) : notes} />
      </>
    );
  }
  noteView(routeProps) {
    const { notes, folders } = this.state;
    const noteId = routeProps.match.params.noteId;
    const note = notes.find(n => n.id === noteId)
    return (
      <>
        <Sidebar folders={folders.filter(f => f.id === note.folderId )} />
        <NoteDetail {...note} />
      </>
    );
  }
  render() {
    return (
      <>
        <header>
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <main className="App">
         <Route exact path ="/" render={(props) => this.listView(props)} />
         <Route exact path ="/folder/:folderId" render={(props) => this.listView(props)} />
         <Route exact path ="/note/:noteId" render={(props) => this.noteView(props)} />
        </main>
      </>
    );
  }
}

export default App;
