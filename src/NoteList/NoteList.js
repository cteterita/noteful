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
    const { notes } = this.context;
    return folderId ? notes.filter((n) => n.folderId === folderId) : notes;
  }

  render() {
    return (
      <section className="NoteList">
        <ul>
          {this.filteredNotes().map((f) => (
            <NotePreview
              name={f.name}
              id={f.id}
              key={f.id}
              modified={f.modified}
            />
          ))}
        </ul>
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
