import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './views/Home';
import About from './views/About';
import './styles.css'; // import css

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;