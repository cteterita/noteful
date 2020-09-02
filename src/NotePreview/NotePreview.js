import React from 'react';
import { Link } from 'react-router-dom';
import './NotePreview.css';
import Context from '../Context';

class NotePreview extends React.Component {
  static contextType = Context;
  render() {
    return (
      <ul className="NotePreview">
        <Link to={`/note/${this.props.id}`}>{this.props.name}</Link> <br />
        {this.props.modified}
        <button className="delete-note-button" onClick={() => this.context.deleteNote(this.props.id)}>Delete</button>
      </ul>
    );
  }
}

export default NotePreview;
