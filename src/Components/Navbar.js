import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!user) {
    return null;
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mx-2" to="/tasks">Task Management</Link>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/tasks">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/tasks">About</Link>
          </li>
        </ul>
        <div className="form-inline mx-2">
          <input 
            className="form-control" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="navbar-text">
          <span className="mx-2">Hello, {user.name}</span>
          <button className="btn btn-outline-light mx-2" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
