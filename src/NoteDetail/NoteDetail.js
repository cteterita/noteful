import React from 'react';
import PropTypes from 'prop-types';
import './NoteDetail.css';
import Context from '../Context';

class NoteDetail extends React.Component {
  static contextType = Context;

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        noteId: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  deleteNote = () => {
    // Delete the note using noteId from routeProps
    const { match, history } = this.props;
    const { noteId } = match.params;
    const { deleteNote } = this.context;
    deleteNote(noteId);
    // Navigate back to the root directory
    const { push } = history;
    push('/');
  }

  render() {
    const { match } = this.props;
    const { noteId } = match.params;
    const { notes } = this.context;
    const note = notes.find((n) => n.id === noteId);
    if (note) {
      const { name, modified, content } = note;
      return (
        <div className="NoteDetail">
          <div className="NotePreview">
            {name}
            <br />
            {modified}
            <button
              className="delete-note-button"
              type="submit"
              onClick={this.deleteNote}
            >
              Delete
            </button>
          </div>
          {content}
        </div>
      );
    }
    return <></>;
  }
}

export default NoteDetail;
