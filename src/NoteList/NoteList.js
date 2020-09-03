import React from 'react';
import './NoteList.css';
import NotePreview from '../NotePreview/NotePreview';
import Context from '../Context';

class NoteList extends React.Component {
  static contextType = Context;

  static defaultProps = {
    notes: [],
    filters: [],
  };

  filteredNotes() {
    const { filters } = this.props;
    const { notes } = this.context;
    let filteredNotes = notes;
    filters.forEach((filter) => {
      const { attr, value } = filter;
      if (value) {
        filteredNotes = notes.filter((n) => n[attr] === value);
      }
    });
    return filteredNotes;
  }

  render() {
    return (
      <section className="NoteList">
        <ul>
          {this.filteredNotes().map((f) => (
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
}

export default NoteList;
