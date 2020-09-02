import React from 'react';
import './Sidebar.css';
import Folder from '../Folder/Folder';
import Context from '../Context';

function Sidebar() {
  return (
    <Context.Consumer>
      {(context) => (
        <section className="sidebar">
          <ul>
            {context.folders.map((f) => (
              <Folder
                name={f.name}
                id={f.id}
                key={f.id}
              />
            ))}
          </ul>
          <button
            className="add-folder-button"
            type="submit"
          >
            Add Folder
          </button>
        </section>
      )}
    </Context.Consumer>
  );
}

export default Sidebar;
