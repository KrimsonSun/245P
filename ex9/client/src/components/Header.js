import "./Header.css";
import { Link } from "react-router-dom";
import React from 'react';
function Header() {
  return (
    <>
      <div className="header">
        <Link to="/" className="logo">
          ✨ Starlight Studio
        </Link>
        <div className="headerRight">
          <Link to="/" className="active">HOME</Link>
            <a href="https://github.com/KrimsonSun?tab=repositories">GitRepository</a>
        
        </div>
      </div>
    </>
  );
}

export default Header;