import React from 'react';
import PropTypes from 'prop-types';
import './NoteError.css';

class NoteError extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <>
          <h4 className="error-holder">This note is corrupted.</h4>
        </>
      );
    }
    return children;
  }
}

export default NoteError;
