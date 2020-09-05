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
        const note = notes.find((n) => n.id === noteId);
        if (note) {
          const folder = folders.find((f) => f.id === note.folderId);
          const { id, name } = folder;
          return (
            <section className="sidebar">
              <button
                className="back-button"
                onClick={goBack}
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
  match: {
    params: {
      noteId: '',
    },
  },
  history: {
    goBack: () => {},
  },
};

NoteSidebar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      noteId: PropTypes.string,
    }),
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

export default NoteSidebar;
