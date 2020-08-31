import React from 'react';
import './NoteSidebar.css';
import Folder from '../Folder/Folder.js';

function NoteSidebar(props) {
  const { folder } = props;
  return (
    <section className="sidebar">
      <button className="back-button" onClick={props.back}>Back</button>
      <ul>
        <li><Folder
            name={folder.name}
            id = {folder.id}
            key={folder.id} />
        </li>
      </ul>
    </section>
  );
}

export default NoteSidebar;
