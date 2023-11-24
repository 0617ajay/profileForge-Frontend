// src/components/LoginPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://profileforge.azurewebsites.net/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      // Assuming the server returns a token upon successful login
      const { jwtToken, user } = response.data;


      // Store the token securely (e.g., in localStorage or as an HttpOnly cookie)
      localStorage.setItem('accessToken', jwtToken);
      localStorage.setItem('userId', user.userId);
      
      const mytoken = localStorage.getItem("accessToken");
      console.log(mytoken, user);

      // Redirect to the home page or another authorized area
      navigate('/portfolio_form');
    } catch (error) {
      // Handle errors (network issues, server errors, etc.)
      window.alert('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
        <Link to="/portfolio_signup">Don't have an account? Signup here</Link>
    </div>
  );
};

export default LoginForm;
