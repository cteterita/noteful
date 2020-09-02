import React from 'react';
import './NoteList.css';
import NotePreview from '../NotePreview/NotePreview';

function NoteList(props) {
  const { notes } = props;
  return (
    <section className="NoteList">
      <ul>
        {notes.map((f) => (
          <NotePreview
            name={f.name}
            id={f.id}
            key={f.id}
            modified={f.modified}
          />
        ))}
      </ul>
      <button
        className="add-note-list"
        type="submit"
      >
        Add Note
      </button>
    </section>
  );
}

export default NoteList;
