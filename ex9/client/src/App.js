// CSS
import "./App.css";

// External Libraries
// Import the new components from react-router-dom
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import React,{useState} from "react";
// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer";

// View Components
// no longer import Main.js here!
import LandingView from "./components/LandingView";
import ServiceView from "./components/ServiceView"; 
import LoginForm  from "./components/LoginForm";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    
    // Clearing and logging the submitted data to the console
    console.clear(); 
    console.log("--- Form Data Submitted ---");
    console.log(json); 
    console.log("-------------------------");
    setIsAuthenticated(true);
  };

  const ProtectedRoute = ({ children }) => {
    // if user not login ,navigate back to login 
    if (!isAuthenticated) {
      
      return <Navigate to="/login" replace />; 
    }
    // if user login ,allow access.
    return children;
  };


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
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="home" element={<ProtectedRoute><LandingView /></ProtectedRoute>} />
          {/* This creates a new page at "/ServiceView" */}
          <Route path="serviceview" element={<ProtectedRoute><ServiceView /></ProtectedRoute>} />

          <Route 
            path="login" 
            element={<LoginForm onSubmit={handleSubmit} />} // 传入 handleSubmit 函数
          />

        </Routes>
          
          

        {/* 4. This component is also persistent */}
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;