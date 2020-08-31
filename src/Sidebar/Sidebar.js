import React from 'react';
import './Sidebar.css';
import Folder from '../Folder/Folder.js';

function Sidebar(props) {
  return (
    <section className="sidebar">
      <ul>
        {props.folders.map(f => <Folder name={f.name} id = {f.id} key={f.id} />)}
      </ul>
      <button className="add-folder-button">Add Folder</button>
    </section>
  );
}

export default Sidebar;
