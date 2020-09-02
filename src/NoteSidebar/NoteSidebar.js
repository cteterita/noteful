import React from 'react';
import './NoteSidebar.css';
import Folder from '../Folder/Folder';

function NoteSidebar(props) {
  const { folder, back } = props;
  const { id, name } = folder;
  return (
    <section className="sidebar">
      <button
        className="back-button"
        onClick={back}
        type="submit"
      >
        Back
      </button>
      <ul>
        <li>
          <Folder
            name={name}
            id={id}
            key={id}
          />
        </li>
      </ul>
    </section>
  );
}

export default NoteSidebar;
