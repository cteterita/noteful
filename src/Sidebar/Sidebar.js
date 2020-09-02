import React from 'react';
import './Sidebar.css';
import Folder from '../Folder/Folder.js';
import Context from '../Context';

function Sidebar(props) {
  return (
    <Context.Consumer>
      {(context) => {
        return <section className="sidebar">
            <ul>
              {context.folders.map(f =>
                <Folder
                  name={f.name}
                  id = {f.id}
                  key={f.id} />
              )}
            </ul>
          <button className="add-folder-button">Add Folder</button>
        </section>
      }}
    </Context.Consumer>
  );
}

export default Sidebar;
