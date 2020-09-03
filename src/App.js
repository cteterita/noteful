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
    const { notes } = this.state;
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    this.setState({ notes: notes.filter((n) => n.id !== noteId) });
  }

  listView(routeProps) {
    const { folderId } = routeProps.match.params;
    const filters = [{ attr: 'folderId', value: folderId }];
    return (
      <>
        <Sidebar />
        <NoteList filters={filters} />
      </>
    );
  }

  noteView(routeProps) {
    const { notes, folders } = this.state;
    const { noteId } = routeProps.match.params;
    const note = notes.find((n) => n.id === noteId) || null;
    const { name, modified, content, id } = note;
    return (
      <>
        <NoteSidebar
          folder={note ? folders.find((f) => f.id === note.folderId) : ''}
          back={routeProps.history.goBack}
        />
      <NoteDetail name={name} modified={modified} content={content} id={id} />
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
