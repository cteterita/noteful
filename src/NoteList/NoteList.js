import React from 'react';
import './NoteList.css';
import NotePreview from '../NotePreview/NotePreview';

function NoteList(props) {
  const { notes, filters } = props;
  let filteredNotes = notes;
  filters.forEach((filter) => {
    const { attr, value } = filter;
    if (value) {
      filteredNotes = notes.filter((n) => n[attr] === value);
    }
  });
  return (
    <section className="NoteList">
      <ul>
        {filteredNotes.map((f) => (
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

NoteList.defaultProps = {
  notes: [],
  filters: [],
};

export default NoteList;
