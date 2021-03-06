import React from 'react';
import PropTypes from 'prop-types';
import './AddNote.css';
import Context from '../Context';

class AddNote extends React.Component {
  static contextType = Context;

  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Pass note name to addNote function in App
    const { addNote } = this.context;
    const { history } = this.props;
    const noteForm = e.target;
    addNote(noteForm.noteName.value, noteForm.noteContent.value, noteForm.folderId.value);
    // Go to the root route
    history.push('/');
  }

  render() {
    const { history } = this.props;
    const { goBack } = history;
    const { folders } = this.context;
    return (
      <div className="form-holder">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="noteName">
            Note Name
            <input required type="text" id="noteName" />
          </label>
          <br />
          <label htmlFor="noteContent">
            Note Content
            <textarea type="text" id="noteContent" />
          </label>
          <br />
          <label htmlFor="folderId">
            Folder
            <select id="folderId">
              {folders.map((f) => <option value={f.id} key={f.id}>{f.name}</option>)}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={goBack}>Back</button>
      </div>
    );
  }
}

export default AddNote;
