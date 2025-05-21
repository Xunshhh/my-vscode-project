import React from 'react';
import { FaPowerOff, FaUserCircle } from 'react-icons/fa';

const Topbar = ({ username, handleLogout }) => {
  return (
    <div className="topbar d-flex justify-content-between align-items-center px-4 py-3 shadow-sm" style={{ backgroundColor: '#004080', color: 'white' }}>
      <h3 className="mb-0 fw-bold text-white">Welcome to EventEase</h3>

      <div className="d-flex align-items-center">
        <span className="me-3 fw-semibold text-white">
          {username ? `Hello, ${username}` : 'Hello, Guest'}
        </span>
        <FaUserCircle className="me-3" style={{ fontSize: '28px', color: '#ffffff' }} />
        <button className="btn btn-outline-light d-flex align-items-center" onClick={handleLogout}>
          <FaPowerOff className="me-2" style={{ fontSize: '20px' }} />
          <span className="fw-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
