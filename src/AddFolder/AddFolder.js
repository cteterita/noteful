import React from 'react';
import PropTypes from 'prop-types';
import './AddFolder.css';
import Context from '../Context';

class AddFolder extends React.Component {
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
    const { addFolder } = this.context;
    const folderForm = e.target;
    addFolder(folderForm.folderName.value);
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
        <button type="submit" onClick={goBack}>Back</button>
      </div>
    );
  }
}

export default AddFolder;
