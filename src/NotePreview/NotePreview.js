import React from 'react';
import { Link } from 'react-router-dom';
import './NotePreview.css';
import Context from '../Context';

class NotePreview extends React.Component {
  static contextType = Context;

  render() {
    const { id, name, modified } = this.props;
    const { deleteNote } = this.context;
    return (
      <ul className="NotePreview">
        <Link to={`/note/${id}`}>{name}</Link>
        <br />
        {modified}
        <button
          className="delete-note-button"
          onClick={() => deleteNote(id)}
          type="submit"
        >
          Delete
        </button>
      </ul>
    );
  }
}

export default NotePreview;
