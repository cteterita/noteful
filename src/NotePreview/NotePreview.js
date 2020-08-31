import React from 'react';
import './NotePreview.css';

function NotePreview(props) {
  return (
    <ul className="NotePreview">
      {props.name} <br />
      {props.modified}
      <button className="delete-note-button">Delete</button>
    </ul>
  );
}

export default NotePreview;
