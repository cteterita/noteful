import React from 'react';
import { Route, Link } from 'react-router-dom';
import Context from './Context';
import Sidebar from './Sidebar/Sidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteDetail from './NoteDetail/NoteDetail';
import store from './dummy-store';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then((response) => response.json())
      .then((response) => this.setState({ folders: response }));

    fetch('http://localhost:9090/notes')
      .then((response) => response.json())
      .then((response) => this.setState({ notes: response }));
  }

  deleteNote = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    this.setState({ notes: this.state.notes.filter((n) => n.id !== noteId) });
  }

  listView(routeProps) {
    const { notes } = this.state;
    const folderId = routeProps.match.params.folderId;
    return (
      <>
        <Sidebar />
        <NoteList notes={folderId ? notes.filter((n) => n.folderId === folderId) : notes} />
      </>
    );
  }

  noteView(routeProps) {
    const { notes, folders } = this.state;
    const noteId = routeProps.match.params.noteId;
    const note = notes.find((n) => n.id === noteId) || null;
    return (
      <>
        <NoteSidebar
          folder={note ? folders.find((f) => f.id === note.folderId) : ''}
          back={routeProps.history.goBack}
        />
        <NoteDetail {...note} />
      </>
    );
  }

  render() {
    const contextValue = {
      ...store,
      deleteNote: this.deleteNote,
    };
    return (
      <>
        <header>
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <main className="App">
          <Context.Provider value={contextValue}>
            <Route exact path="/" render={(props) => this.listView(props)} />
            <Route exact path="/folder/:folderId" render={(props) => this.listView(props)} />
            <Route exact path="/note/:noteId" render={(props) => this.noteView(props)} />
          </Context.Provider>
        </main>
      </>
    );
  }
}

export default App;
