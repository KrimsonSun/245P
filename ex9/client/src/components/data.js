// This file holds the content for our different pages.
// We use JSX directly in the content property.

const MAIN_DATA = [
  {
    // Content for the Home Page (index 0)
    content: (
      <>
        <h2>Welcome to Starlight Studio!</h2>
        <p>We are a professional design studio specializing in beautiful, modern, and responsive websites to help your business shine in the digital world.</p>
        <h3>Our Philosophy</h3>
        <p>We believe in clean code, user-centric design, and a transparent collaboration process. We don't just build websites; we build partnerships for your success.</p>
      </>
    )
  },
  {
    // Content for the "Services" Page (index 1)
    content: (
      <>
        <h2>Our Services</h2>
        <p>We offer a complete suite of services to bring your digital vision to life.</p>
        <ul>
          <li>Web Design & UI/UX</li>
          <li>React Application Development</li>
          <li>E-Commerce Solutions</li>
          <li>Search Engine Optimization (SEO)</li>
        </ul>
      </>
    )
  }
];

export { MAIN_DATA };