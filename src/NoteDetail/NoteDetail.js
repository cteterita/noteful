import React from 'react';
import { withRouter } from 'react-router-dom';
import './NoteDetail.css';
import Context from '../Context';

class NoteDetail extends React.Component {
  static contextType = Context;

  static defaultProps = {
    name: '',
    modified: '',
    content: '',
  };

  deleteNote = () => {
    const { id, history } = this.props;
    const { deleteNote } = this.context;
    deleteNote(id);
    history.push('/');
  }

  render() {
    const { name, modified, content } = this.props;
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
}

export default withRouter(NoteDetail);
