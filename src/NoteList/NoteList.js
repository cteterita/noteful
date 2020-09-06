import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NoteList.css';
import NotePreview from '../NotePreview/NotePreview';
import Context from '../Context';

class NoteList extends React.Component {
  static contextType = Context;

  static defaultProps = {
    match: {
      params: {
        folderId: '',
      },
    },
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        folderId: PropTypes.string,
      }),
    }),
  }

  filteredNotes() {
    const { match } = this.props;
    const { folderId } = match.params;
    const { notes, folders } = this.context;
    let filteredNotes = notes;
    // If there is a folderId in match.params, filter for notes in that folder
    if (folderId) {
      const folder = folders.find((f) => f.id === folderId);
      if (!folder) return (<h4>Folder not found</h4>);
      filteredNotes = notes.filter((n) => n.folderId === folderId);
    }
    if (filteredNotes.length === 0) return (<h4>No notes found</h4>);
    // Return the full list of filteredNotes
    return (
      <ul>
        {filteredNotes.map((f) => (
          <NotePreview
            name={f.name}
            id={f.id}
            key={f.id}
            modified={f.modified}
          />
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section className="NoteList">
        {this.filteredNotes()}
        <Link to="/add-note">
          <button
            className="add-note-list"
            type="submit"
          >
            Add Note
          </button>
        </Link>
      </section>
    );
  }
}

export default NoteList;
