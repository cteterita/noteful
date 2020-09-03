import React from 'react';
import PropTypes from 'prop-types';
import './AddFolder.css';
import Context from '../Context';

class AddFolder extends React.Component {
  static contextType = Context;

  static propTypes = {
    back: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addFolder } = this.context;
    addFolder(e.target.folderName.value);
    e.target.folderName.value = '';
  }

  render() {
    const { back } = this.props;
    return (
      <div className="form-holder">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="folderName">Folder Name *</label>
          <input required type="text" id="folderName" />
          <button type="submit">Submit</button>
        </form>
        <button type="submit" onClick={back}>Back</button>
      </div>
    );
  }
}

export default AddFolder;
