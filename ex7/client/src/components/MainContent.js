import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main">
      <h2>Main Content Area</h2>
      <p>This is the main content. It is pushed to the right to make
         room for the sidebar.</p>
      <p>Scroll down to see the fixed footer in action.</p>
      <br />
      
      <p>This is the bottom of the content.</p>
    </div>
  );
}

export default MainContent;