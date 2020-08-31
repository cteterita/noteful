import React from 'react';
import './NoteList.css';
import Folder from '../Folder/Folder';

function NoteList(props) {
  return (
    <section className="NoteList">
      <ul>
        {props.notes.map(f => <Folder name={f.name} id = {f.id} key={f.id} />)}
      </ul>
    </section>
  );
}

export default NoteList;
