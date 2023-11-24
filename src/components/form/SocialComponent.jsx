import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const SocialComponent = () => {
  const navigate = useNavigate();
  const [socialHandle, setSocialHandle] = useState({
    gmail: '',
    linkedin: '',
    x: '',
    thread: '',
    instagram: '',
    leetCode: '',
    codechief: '',
    codeforce: '',
    geeksForGeeks: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialHandle({
      ...socialHandle,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have the userId and authToken available
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem("accessToken");
      // console.log(socialHandle);
    // Your API endpoint
    const apiUrl = `https://profileforge.azurewebsites.net/social/user/${userId}`;

    try {
      const response = await axios.post(apiUrl,socialHandle, {
        headers: {
          'Authorization': "Bearer" + " " + mytoken,
          'Content-Type': 'application/json',
        },
      });

      console.log('Social Handles submission successful:', response);
      navigate('/portfolio_project-component');
      // You can perform any necessary actions after the form is submitted successfully
    } catch (error) {
      console.error('Error submitting Social Handles:', error);
      // Handle error scenarios
    }
  };
  return (
      <form onSubmit={handleSubmit}>
        
        {/* Social Handles */}
        <div>
          <h2>Social Handles</h2>
          <label>
            Gmail
            <input
              type="text"
              name="gmail"
              value={socialHandle.gmail}
              onChange={handleChange}
            />
          </label>
          <label>
            Linkedin
            <input
              type="text"
              name="linkedin"
              value={socialHandle.linkedin}
              onChange={handleChange}
            />
          </label>
          {/* Add other social handle inputs as needed */}
        </div>
  
        <button type="submit">Submit</button>
      </form>
    );
  
  
}

export default SocialComponent;