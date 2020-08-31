import React from 'react';
import './Folder.css';

function Folder(props) {
  return (
    <ul className="folder">
      {props.name}
    </ul>
  );
}

export default Folder;
