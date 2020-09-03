import React from 'react';
import Context from '../Context';
import './NoteSidebar.css';
import Folder from '../Folder/Folder';

function NoteSidebar(props) {
  return (
    <Context.Consumer>
      {(context) => {
        const { noteId, back } = props;
        const { notes, folders } = context;
        const note = notes.find((n) => n.id === noteId);
        if (note) {
          const folder = folders.find((f) => f.id === note.folderId);
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
        return <></>;
      }}
    </Context.Consumer>
  );
}

NoteSidebar.defaultProps = {
  noteId: '',
};

export default NoteSidebar;
