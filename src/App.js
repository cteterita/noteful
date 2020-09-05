import React from 'react';
import { Route, Link } from 'react-router-dom';
import Context from './Context';
import Sidebar from './Sidebar/Sidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteDetail from './NoteDetail/NoteDetail';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
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

  addFolder = (name) => {
    const body = { name };
    fetch('http://localhost:9090/folders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((folder) => {
        const { folders } = this.state;
        this.setState({ folders: [...folders, folder] });
      });
  }

  addNote = (name, content, folderId) => {
    const body = {
      name,
      content,
      folderId,
      modified: Date.now().toString(),
    };
    fetch('http://localhost:9090/notes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((note) => {
        const { notes } = this.state;
        this.setState({ notes: [...notes, note] });
      });
  }

  render() {
    const contextValue = {
      ...this.state,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
    };
    return (
      <>
        <header>
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <main className="App">
          <Context.Provider value={contextValue}>
            {/* Route for root path */}
            <Route exact path="/" component={Sidebar} />
            <Route exact path="/" component={NoteList} />

            {/* Route for folder path */}
            <Route exact path="/folder/:folderId" component={Sidebar} />
            <Route exact path="/folder/:folderId" component={NoteList} />

            {/* Route for note path */}
            <Route exact path="/note/:noteId" component={NoteSidebar} />
            <Route exact path="/note/:noteId" component={NoteDetail} />

            {/* Route for add folder path */}
            <Route exact path="/add-folder" component={Sidebar} />
            <Route exact path="/add-folder" component={AddFolder} />

            {/* Route for add note path */}
            <Route exact path="/add-note" component={Sidebar} />
            <Route exact path="/add-note" component={AddNote} />
          </Context.Provider>
        </main>
      </>
    );
  }
}

export default App;
