import React from 'react';
// Make sure to update the CSS import!
import './Main.css'; 

// Use destructuring to get the 'content' prop
function Main({ content }) {
  return (
    // Use React.Fragment (<>) because 'content' might be HTML
    <div className="main">
      {content}
    </div>
  );
}

export default Main;