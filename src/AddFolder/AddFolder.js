import React from 'react';
import PropTypes from 'prop-types';
import './AddFolder.css';
import Context from '../Context';

class AddFolder extends React.Component {
  static contextType = Context;

  static propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Pass folder name to addFolder function in App
    const { addFolder } = this.context;
    const folderForm = e.target;
    addFolder(folderForm.folderName.value);
    // Clear form
    folderForm.reset();
  }

  render() {
    const { history } = this.props;
    const { goBack } = history;
    return (
      <div className="form-holder">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="folderName">
            Folder Name
            <input required type="text" id="folderName" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <button type="button" onClick={goBack}>Back</button>
      </div>
    );
  }
}

export default AddFolder;
