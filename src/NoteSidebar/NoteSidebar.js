import React from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import './NoteSidebar.css';
import Folder from '../Folder/Folder';

function NoteSidebar(props) {
  return (
    <Context.Consumer>
      {(context) => {
        const { match, history } = props;
        const { noteId } = match.params;
        const { goBack } = history;
        const { notes, folders } = context;
        const note = notes.find((n) => n.id === Number(noteId));
        let folderList = <></>;
        if (note) {
          const folder = folders.find((f) => f.id === note.folder_id);
          console.log(folder);
          const { id, name } = folder;
          folderList = (
            <ul>
              <Folder
                name={name}
                id={id}
                key={id}
              />
            </ul>
          );
        }
        return (
          <section className="sidebar">
            <button
              className="back-button"
              onClick={goBack}
              type="submit"
            >
              Back
            </button>
            {folderList}
          </section>
        );
      }}
    </Context.Consumer>
  );
}

NoteSidebar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      noteId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default NoteSidebar;
