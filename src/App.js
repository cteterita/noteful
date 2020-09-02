import React from 'react';
import { Route, Link } from 'react-router-dom';
import Context from './Context';
import Sidebar from './Sidebar/Sidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteDetail from './NoteDetail/NoteDetail';
import store from './dummy-store.js';
import './App.css';

class App extends React.Component {
  state = store;
  deleteNote(noteId) {
    //To implement
    console.log(`deleting note ${noteId}`);
  }
  listView(routeProps) {
    const { notes, folders } = this.state;
    const folderId = routeProps.match.params.folderId;
    return (
      <>
        <Sidebar folders={folders} selectedFolderId={folderId} />
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
        <NoteSidebar
          folder={folders.find(f => f.id === note.folderId )}
          back={routeProps.history.goBack} />
        <NoteDetail {...note} />
      </>
    );
  }
  render() {
    const contextValue = {
      ...store,
      deleteNote: this.deleteNote
    }
    return (
      <>
        <header>
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <main className="App">
          <Context.Provider value={contextValue}>
            <Route exact path ="/" render={(props) => this.listView(props)} />
            <Route exact path ="/folder/:folderId" render={(props) => this.listView(props)} />
            <Route exact path ="/note/:noteId" render={(props) => this.noteView(props)} />
          </Context.Provider>
        </main>
      </>
    );
  }
}

export default App;
