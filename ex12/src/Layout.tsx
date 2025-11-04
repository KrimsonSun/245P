import React from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* Header component, using your original H1/H2 structure */}
      <header>
        {/* H1 title in original code, converted to simple text here */}
        <h1>Don't be dumb. </h1>
        <h2>AWGE IS COMIN' BACK SOON.</h2>
      </header>
      
      <section>
        {/* Navigation is the fixed left column */}
        <Nav />
        
        {/* Outlet renders the content of the current route (Home or About) */}
        <Outlet /> 
      </section>
      
      <footer>
        <h2>Yammmmborgini high!</h2>
        <p>GitHub:https://github.com/KrimsonSun/245P/tree/main/exercise1</p>
      </footer>
    </>
  );
};

export default Layout;