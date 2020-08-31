import React from 'react';
import './NoteList.css';
import NotePreview from '../NotePreview/NotePreview';

function NoteList(props) {
  return (
    <section className="NoteList">
      <ul>
        {props.notes.map(f =>
          <NotePreview
            name={f.name}
            id = {f.id}
            key={f.id}
            modified={f.modified} />
        )}
      </ul>
      <button className="add-note-list">Add Note</button>
    </section>
  );
}

export default NoteList;
