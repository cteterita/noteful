import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NotePreview.css';
import Context from '../Context';

function NotePreview(props) {
  return (
    <Context.Consumer>
      {(context) => {
        const { id, name, modified } = props;
        const { deleteNote } = context;
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
      }}
    </Context.Consumer>
  );
}

NotePreview.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
};

export default NotePreview;
