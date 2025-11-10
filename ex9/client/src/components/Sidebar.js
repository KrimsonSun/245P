import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidenav">
      
      <Link to="/">Home</Link>
      <Link to="serviceview">Services</Link>
    </div>
  );
}

export default Sidebar;