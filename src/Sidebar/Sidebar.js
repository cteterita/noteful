import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Folder from '../Folder/Folder';
import Context from '../Context';

function Sidebar() {
  return (
    <Context.Consumer>
      {(context) => {
        const { folders } = context;
        return (
          <section className="sidebar">
            {folders.length === 0 ? <h4>No folders found</h4> : (
              <ul>
                {folders.map((f) => (
                  <Folder
                    name={f.name}
                    id={f.id}
                    key={f.id}
                  />
                ))}
              </ul>
            )}
            <Link to="/add-folder">
              <button
                className="add-folder-button"
                type="submit"
              >
                Add Folder
              </button>
            </Link>
          </section>
        );
      }}
    </Context.Consumer>
  );
}

export default Sidebar;
