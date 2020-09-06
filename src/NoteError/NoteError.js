import React from 'react';
import './NoteError.css';

class NoteError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
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
