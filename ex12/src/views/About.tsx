import React from 'react';

const About = () => {
  // We apply inline styles here to override the main Flexbox properties 
  // and force a single-column block layout for this view.
  return (
    <div style={{ flex: 3, padding: '10px', backgroundColor: '#f1f1f1', display: 'block' }}>
      <article style={{ flex: '1 1 100%', padding: 0, borderRight: 'none' }}>
        <h2>What is A$AP?</h2>
       <p>
    The A$AP Mob (Always Strive and Prosper) is a New York collective founded in 2006, primarily in Harlem. More than just a rap group, the Mob is a creative conglomerate spanning music, fashion, and visual art, uniting figures like A$AP Rocky, A$AP Ferg, and the late A$AP Yams.
</p>
<p>
    Their influence is rooted in blending Southern trap production with Harlem's streetwear swagger and psychedelic aesthetics. The Mob popularized the "Street Goth" look and pushed Hiphop firmly into the realm of high fashion, establishing a template for modern artistic collectives in the digital age.
</p>
      </article>
    </div>
  );
};

export default About;