import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/commodity">Commodity Assets</Link></li>
        <li><Link to="/currency">Currency Assets</Link></li>
        <li><Link to="/rial">Rial Assets</Link></li>
        <li><Link to="/stock">Stock Assets</Link></li>
        <li className="navbar-auth">
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li className="navbar-auth">
          <Link to="/register">
            <FaUserPlus /> Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
