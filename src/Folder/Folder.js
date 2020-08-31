import React from 'react';
import './Folder.css';

function Folder(props) {
  return (
    <ul className="Folder">
      {props.name}
    </ul>
  );
}

export default Folder;
