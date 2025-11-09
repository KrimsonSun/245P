import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidenav">
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
}

export default Sidebar;