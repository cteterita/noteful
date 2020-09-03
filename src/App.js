import React from 'react';
import { Route, Link } from 'react-router-dom';
import Context from './Context';
import Sidebar from './Sidebar/Sidebar';
import NoteSidebar from './NoteSidebar/NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteDetail from './NoteDetail/NoteDetail';
import AddFolder from './AddFolder/AddFolder';
import './App.css';

function listView(routeProps) {
  const { folderId } = routeProps.match.params;
  const filters = [{ attr: 'folderId', value: folderId }];
  return (
    <>
      <Sidebar />
      <NoteList filters={filters} />
    </>
  );
}

function noteView(routeProps) {
  const { noteId } = routeProps.match.params;
  return (
    <>
      <NoteSidebar
        noteId={noteId}
        back={routeProps.history.goBack}
      />
      <NoteDetail noteId={noteId} push={routeProps.history.push} />
    </>
  );
}

function addFolderView(routeProps) {
  return (
    <>
      <Sidebar />
      <AddFolder
        back={routeProps.history.goBack}
      />
    </>
  );
}

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

  addFolder = (folderName) => {
    const body = { name: folderName };
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

  render() {
    const contextValue = {
      ...this.state,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
    };
    return (
      <>
        <header>
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <main className="App">
          <Context.Provider value={contextValue}>
            <Route exact path="/" component={listView} />
            <Route exact path="/folder/:folderId" component={listView} />
            <Route exact path="/note/:noteId" component={noteView} />
            <Route exact path="/add-folder" component={addFolderView} />
          </Context.Provider>
        </main>
      </>
    );
  }
}

export default App;
