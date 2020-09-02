import React from 'react';
import { withRouter } from "react-router-dom";
import './NoteDetail.css';
import Context from '../Context';

class NoteDetail extends React.Component {
  static contextType = Context;
  deleteNote = () => {
    this.context.deleteNote(this.props.id);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="NoteDetail">
        <div className="NotePreview">
          {this.props.name} <br />
          {this.props.modified}
          <button
            className="delete-note-button"
            onClick={this.deleteNote}>
              Delete
          </button>
        </div>
        {this.props.content}
      </div>
    );
  }

}

export default withRouter(NoteDetail);
