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

Folder.defaultProps = {
  id: '',
  name: '',
};

Folder.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Folder;
