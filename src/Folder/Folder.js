import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

function Folder(props) {
  return (
    <NavLink to={`/folder/${props.id}`}>
      <ul className="Folder">
        {props.name}
      </ul>
    </NavLink>
  );
}

export default Folder;
