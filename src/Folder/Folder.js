import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Folder.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Folder;
