import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <img id="frame" width={60} src="/images/app-logo.png" />
      <Link to="/home">
        <h2 className='nav-title'>LEGACY🏈DRAFT</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/teams">
              Teams
            </Link>

            <Link className="navLink" to="/team-editor">
              Team Editor
            </Link>

            <Link className="navLink" to="/player-selector">
              Player Selector
            </Link>

            <LogOutButton className="navLink" />

          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
