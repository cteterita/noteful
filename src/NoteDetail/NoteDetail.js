import React from 'react';
import { withRouter } from 'react-router-dom';
import './NoteDetail.css';
import Context from '../Context';

class NoteDetail extends React.Component {
  static contextType = Context;

  static defaultProps = {
    noteId: '',
  };

  deleteNote = () => {
    const { id, history } = this.props;
    const { deleteNote } = this.context;
    deleteNote(id);
    history.push('/');
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

export default withRouter(NoteDetail);
