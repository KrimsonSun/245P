import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main">
      <h2>Welcome to Starlight Studio!</h2>
      <p>We are a professional design studio specializing in beautiful, modern, and responsive websites to help your business shine in the digital world.</p>
      
      <h3>Our Philosophy</h3>
      <p>We believe in clean code, user-centric design, and a transparent collaboration process. We don't just build websites; we build partnerships for your success.</p>
      <p>This page ('MainContent') has its padding carefully adjusted to avoid the 'Header' at the top, the 'Sidebar' on the left, and the 'Footer' at the bottom.</p>
      <br />

      <div style={{ height: '800px' }}>
        <p>... Scroll Down ...</p>
      </div>
      <p>This is the bottom of the content.</p>
    </div>
  );
}

export default MainContent;