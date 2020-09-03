import React from 'react';
import PropTypes from 'prop-types';
import './NoteDetail.css';
import Context from '../Context';

class NoteDetail extends React.Component {
  static contextType = Context;

  static defaultProps = {
    noteId: '',
  };

  static propTypes = {
    noteId: PropTypes.string,
    push: PropTypes.func.isRequired,
  }

  deleteNote = () => {
    const { noteId, push } = this.props;
    const { deleteNote } = this.context;
    deleteNote(noteId);
    push('/');
  }

  render() {
    const { noteId } = this.props;
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
