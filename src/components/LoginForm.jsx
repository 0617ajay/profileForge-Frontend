// src/components/LoginPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
// import Loader from './Loader';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const[loading,setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleLogin = async () => {
    try {
      setLoading(true);  
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

      const { jwtToken, user } = response.data;


      localStorage.setItem('accessToken', jwtToken);
      localStorage.setItem('userId', user.userId);
      
      const mytoken = localStorage.getItem("accessToken");
      console.log(mytoken, user);
      
      navigate('/portfolio_form');
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false); 
      // window.alert('Error during login:', error);
    }
  };

  if(error)
  return(<ErrorComponent message={"An error occurred during login. Please refresh the page and try again."}/>);


  return (
    <div id="login-form">
      {loading?<Loader/>:
         ( <>
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
      </>
         )}
    </div>
  );
};

export default LoginForm;
