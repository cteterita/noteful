import React from 'react';
import PropTypes from 'prop-types';
import './AddNote.css';
import Context from '../Context';

class AddNote extends React.Component {
  static contextType = Context;

  static defaultProps = {
    history: {
      goBack: () => {},
    },
  }

  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func,
    }),
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addNote } = this.context;
    const noteForm = e.target;
    addNote(noteForm.noteName.value, noteForm.noteContent.value, noteForm.folderId.value);
    noteForm.reset();
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
        <button type="submit" onClick={goBack}>Back</button>
      </div>
    );
  }
}

export default AddNote;
