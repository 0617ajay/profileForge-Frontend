import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import Loader from '../Loader';

const SocialComponent = () => {
  const navigate = useNavigate();
  const[loading,setLoading] = useState(false);
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
    setLoading(true);
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem("accessToken");
      // console.log(socialHandle);
    const apiUrl = `https://profileforge.azurewebsites.net/social/user/${userId}`;

    try {
      const response = await axios.post(apiUrl,socialHandle, {
        headers: {
          'Authorization': "Bearer" + " " + mytoken,
          'Content-Type': 'application/json',
        },
      });

      // console.log('Social Handles submission successful:', response);
      navigate('/portfolio_project-component');
      setLoading(false); 
    } catch (error) {
      console.error('Error submitting Social Handles:', error);
    }
  };
  return (
      <form onSubmit={handleSubmit}>
        {loading?<Loader/>:
         ( <>

        {/* Social Handles */}
        <div>
          <h2>Social Handles</h2>
          <label>
            Gmail <span></span>
            <input
              type="text"
              name="gmail"
              value={socialHandle.gmail}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Linkedin <span></span>
            <input
              type="text"
              name="linkedin"
              value={socialHandle.linkedin}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Twitter <span></span>
            <input
              type="text"
              name="x"
              value={socialHandle.x}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Instagram <span></span>
            <input
              type="text"
              name="instagram"
              value={socialHandle.instagram}
              onChange={handleChange}
              required
            />
          </label>
        </div>
  
        <button type="submit">Next</button>
      </>
         )}
      </form>

    );
  
  
}

export default SocialComponent;