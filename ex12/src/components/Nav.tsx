import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      {/* Internal Routing Links (Required for the task) */}
      <ul className="internal-links">
        {/* Note: The class name needs to be modified in CSS or inline style applied 
           if the original CSS for nav ul li a is too specific.
           Using simple inline style here for guaranteed Glitch aesthetic on internal links: */}
        <li><Link to="/" style={{ color: '#00FFFF', textShadow: '1px 1px 0 #FF00FF' }}>[ A$AP Albums ]</Link></li>
        <li><Link to="/about" style={{ color: '#00FFFF', textShadow: '1px 1px 0 #FF00FF' }}>[ What is A$AP? ]</Link></li>
      </ul>
      
      {/* External Links (Using your provided URLs) */}
      <ul>
        <li><a href="https://en.wikipedia.org/wiki/ASAP_Mob#Formation_and_early_beginnings_(2006%E2%80%932012)" target="_blank" rel="noopener noreferrer">What is A$AP?</a></li>
        <li><a href="https://www.formula1.com/en/latest/article/ausdap-rocky-named-the-creative-director-of-puma-and-formula-1s-partnership.3f2ym3ZcsvfeT7YxaYYRMd" target="_blank" rel="noopener noreferrer">PUMA x A$AP: High Fashion Meets F1</a></li>
      </ul>
    </nav>
  );
};

export default Nav;