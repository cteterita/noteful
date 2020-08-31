import React from 'react';
import { Link } from 'react-router-dom';
import './NotePreview.css';

function NotePreview(props) {
  return (
    <ul className="NotePreview">
      <Link to={`/note/${props.id}`}>{props.name}</Link> <br />
      {props.modified}
      <button className="delete-note-button">Delete</button>
    </ul>
  );
}

export default NotePreview;
