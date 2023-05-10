// components/LogoutIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

function LogoutIcon() {
  return (
    <FontAwesomeIcon id="logout-icon" icon={faSignOut} />
  );
}

export default LogoutIcon;
