import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css';

function Folder(props) {
  return (
    <ul className="Folder {}">
      <Link to={`/folder/${props.id}`}>{props.name}</Link>
    </ul>
  );
}

export default Folder;
