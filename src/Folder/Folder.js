import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

function Folder(props) {
  const { id, name } = props;
  return (
    <NavLink to={`/folder/${id}`}>
      <ul className="Folder">
        {name}
      </ul>
    </NavLink>
  );
}

export default Folder;
