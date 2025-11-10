// CSS
import "./App.css";

// External Libraries
// Import the new components from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer";

// View Components
// no longer import Main.js here!
import LandingView from "./components/LandingView";
import ServiceView from "./components/ServiceView"; 

function App() {
  return (
    <div className="App">
      {/* 1. Wrap the entire app in BrowserRouter */}
      <BrowserRouter>
      
        {/* 2. These components are OUTSIDE <Routes> 
               so they stay on every page. */}
        <Header />
        <Sidebar />

        {/* 3. <Routes> defines where the page content will swap */}
        <Routes>
          {/* 'index' makes this the default route (e.g., "/") */}
          <Route index element={<LandingView />} />
          
          {/* This creates a new page at "/ServiceView" */}
          <Route path="serviceview" element={<ServiceView />} />
        </Routes>

        {/* 4. This component is also persistent */}
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;