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
          <li className="NotePreview">
            <Link to={`/note/${id}`}>{name}</Link>
            <br />
            {modified}
            <button
              className="delete-note-button"
              onClick={() => deleteNote(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      }}
    </Context.Consumer>
  );
}

NotePreview.defaultProps = {
  modified: '',
};

NotePreview.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string,
};

export default NotePreview;
