import React, { useState, useRef } from 'react';
import './LoginForm.css'; // Import the stylesheet
import {  useNavigate } from 'react-router-dom';

const ADMIN_CREDENTIALS = {
  username: "admin", 
  password: "password123", // passwordfor admin
}
// The LoginForm component accepts an onSubmit prop
const LoginForm = ({ onSubmit }) => {
  // 1. useRef hooks to directly access input elements' values
  const usernameRef = useRef();
  const passwordRef = useRef();
    const navigate = useNavigate();
  // 2. useState hooks to manage controlled input values (for potential UI feedback)
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState("");
  // Handler for username input change
  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
    setError("");
  };

  // Handler for password input change
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
    setError("");
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser refresh
    
    const submittedData = {
      username: usernameRef.current.value, 
      password: passwordRef.current.value, 
    };
    
    // ⭐ Validation Logic: Check if submitted data matches the fixed credentials
    if (
      submittedData.username === ADMIN_CREDENTIALS.username &&
      submittedData.password === ADMIN_CREDENTIALS.password
    ) {
      // Success
      setError("");
      alert("Login Successful! Welcome, Admin."); 
      onSubmit(submittedData); // Call the onSubmit function passed from App.js
        navigate('/home');
      // Clear the form fields
      setUsernameValue('');
      setPasswordValue('');
      usernameRef.current.focus();}};

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameRef} // Attach ref
          label="username"
          id="username"
          type="text"
          value={usernameValue} // Controlled value
          onChange={handleUsernameChange} // Controlled change handler
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password-input">Password:</label>
        <input
          ref={passwordRef} // Attach ref
          label="password"
          id="password-input"
          type="password"
          value={passwordValue} // Controlled value
          onChange={handlePasswordChange} // Controlled change handler
          required
        />
      </div>
      
      <button
        id="login-button"
        type="submit"
      >
        Submit
      </button>
      <p>AdminUser: username: admin, password:password123</p>
    </form>
  );
};

export default LoginForm;