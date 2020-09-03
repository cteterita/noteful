import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NotePreview.css';
import Context from '../Context';

class NotePreview extends React.Component {
  static contextType = Context;

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
  };

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
