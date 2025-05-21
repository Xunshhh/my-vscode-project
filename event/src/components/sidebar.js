import React from 'react';
import './style.css';
import ubLogo from './assets/ub-logo.png';
import { FaTachometerAlt, FaCalendarAlt, FaUsers, FaCogs, FaRegUser } from 'react-icons/fa';

function Sidebar({ handleNavigation }) {
  return (
    <div className="col-md-2 sidebar p-4 cpess-sidebar">
      <div className="d-flex align-items-center mb-4">
        <img
          src={ubLogo}
          className="ub-logo"
          alt="UB Logo"
        />
        <div className="ms-2">
          <h6 className="mb-0 text-white">EventEase</h6>
          <small className="text-white">UB Student</small>
        </div>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a 
            className="nav-link active cpess-link" 
            href="#" 
            onClick={() => handleNavigation('dashboard')}
          >
            <FaTachometerAlt className="me-2" />
            Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a 
            className="nav-link cpess-link" 
            href="#" 
            onClick={() => handleNavigation('allEvents')}
          >
            <FaCalendarAlt className="me-2" />
            All Events
          </a>
        </li>
        <li className="nav-item mb-2">
          <a 
            className="nav-link cpess-link" 
            href="#" 
            onClick={() => handleNavigation('joined')}
          >
            <FaUsers className="me-2" />
            Joined Events
          </a>
        </li>
        <li className="nav-item mb-2">
          <a 
            className="nav-link cpess-link" 
            href="#" 
            onClick={() => handleNavigation('clubs')}
          >
            <FaUsers className="me-2" />
            Clubs
          </a>
        </li>
        <li className="nav-item mb-2">
          <a 
            className="nav-link cpess-link" 
            href="#" 
            onClick={() => handleNavigation('settings')}
          >
            <FaCogs className="me-2" />
            Settings
          </a>
        </li>
        <li className="nav-item mb-2">
          <a 
            className="nav-link cpess-link" 
            href="#" 
            onClick={() => handleNavigation('profile')}
          >
            <FaRegUser className="me-2" />
            Profile
          </a>
        </li>
      </ul>

      <hr className="cpess-divider" />
      
      <h6 className="text-light mt-3">Filter by</h6>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link cpess-link" href="#">📅 Date</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cpess-link" href="#">🎯 Category</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
