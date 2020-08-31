import React from 'react';
import './NoteDetail.css';

function NoteDetail(props) {
  return (
    <div className="NoteDetail">
      <div className="NotePreview">
        {props.name} <br />
        {props.modified}
        <button class="delete-note-button">Delete</button>
      </div>
      {props.content}
    </div>
  );
}

export default NoteDetail;
