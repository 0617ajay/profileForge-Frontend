// src/components/SignupPage.jsx

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import Loader from "./Loader";
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
      // const[loading,setLoading] = useState(false);

  const navigate = useNavigate();

  // const handleSignup =() => {
  //     console.log({email,password});
  //     navigate('/login')
  // }
  const handleSignup = async () => {
    try {
      const { data } = await axios.post(
        "https://profileforge.azurewebsites.net/user",
        {
          email,
          password,
        },
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
      // setLoading(false);
      navigate("/portfolio_login");
      // const responseData = response.data;

      // window.alert('Server response:', responseData);

      // // Check response status and handle accordingly
      // if (response.status === 201) {
      //   // Successful signup
      //   window.alert('User successfully created:', responseData);
      // } else {
      //   // Handle other status codes
      //   window.alert('Unexpected response status:', response.status);
      // }
    } catch (error) {
      console.error("Error during signup:", error.request);

      if (error.response) {
        console.log(
          "Server responded with status code:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        console.log(
          "No response received. The request was made but no response was received."
        );
      } else {
        console.log("Error setting up the request:", error.message);
      }
    }
  };
  // const handleSignup = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://profileforge.azurewebsites.net/user',
  //       {
  //         email,
  //         password,
  //       },
  //       {
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     window.error('Signup successful:', response.data);
  //     navigate('/login');
  //   } catch (error) {
  //     console.error('Signup failed:', error.request);
  //   }
  // };

  return (
   
    <div>
    {/* {loading ? <Loader/>:
         (<> */}
      <h2>Signup Page</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Signup</button>
      </form>
      <Link to="/portfolio_login">Already Signed Up?</Link>
    {/* </>
     )} */}
    </div>

   
  );
};

export default SignupPage;
