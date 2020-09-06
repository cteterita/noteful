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

const BASE_URL = 'http://localhost:9090';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
    };
  }

  componentDidMount() {
    // Fetch folders and notes before loading both into state
    const fetchFolders = fetch(`${BASE_URL}/folders`);
    const fetchNotes = fetch(`${BASE_URL}/notes`);
    Promise.all([fetchFolders, fetchNotes])
      .then((responses) => {
        responses[0].json()
          .then((folders) => this.setState({ folders }));
        responses[1].json()
          .then((notes) => this.setState({ notes }));
      });
  }

  deleteNote = (noteId) => {
    // Delete the note from the server
    const { notes } = this.state;
    fetch(`${BASE_URL}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    // Filter state.notes to remove the note
    this.setState({ notes: notes.filter((n) => n.id !== noteId) });
  }

  addFolder = (name) => {
    // Add the folder to the server
    const body = { name };
    fetch(`${BASE_URL}/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      // Add the folder to state.folders
      .then((folder) => {
        const { folders } = this.state;
        this.setState({ folders: [...folders, folder] });
      });
  }

  addNote = (name, content, folderId) => {
    // Add the note to the server
    const body = {
      name,
      content,
      folderId,
      modified: Date.now().toString(),
    };
    fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      // Add the note to state.notes
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
