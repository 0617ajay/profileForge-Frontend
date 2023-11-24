import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AchievementComponent = () => {
  const navigate = useNavigate();
  const [achievement, setAchievement] = useState({
    description: '',
    certificateFile: '',
    cerificateName: '',
    organisation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievement({
      ...achievement,
      [name]: value,
    });
  };

  const handleNextPage = async () => {
    await handleSubmit('next');
    setAchievement({
      description: '',
      certificateFile: '',
      cerificateName: '',
      organisation: '',
    });
  };

  const handleSubmit = async (navigateTo) => {
    // Assuming you have the userId and authToken available
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem('accessToken');
    
    
    // Your API endpoint for achievements
    const apiUrl = `https://profileforge.azurewebsites.net/achievement/user/${userId}`;

    try {
      // Sending achievement data to the API
      const response = await axios.post(apiUrl, achievement, {
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Achievement data submission successful:', response);
      
      if (navigateTo === 'home') {
        navigate('/sunny12345');
      } else {
        navigate('/portfolio_achievement-component'); // Update this path as needed
      }
      // You can perform any necessary actions after the form is submitted successfully
    } catch (error) {
      console.error('Error submitting Achievement data:', error);
      // Handle error scenarios
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2>Achievement Details</h2>
        <label>
          Description*
          <input
            type="text"
            name="description"
            value={achievement.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Certificate File
          <input
            type="text"
            name="certificateFile"
            value={achievement.certificateFile}
            onChange={handleChange}
          />
        </label>
        <label>
          Certificate Name*
          <input
            type="text"
            name="cerificateName"
            value={achievement.cerificateName}
            onChange={handleChange}
            // required
          />
        </label>
        <label>
          Organisation*
          <input
            type="text"
            name="organisation"
            value={achievement.organisation}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="button" onClick={handleNextPage}>
        Next Achievement
      </button>
      <button type="button" onClick={() => handleSubmit('home')}>
        Submit
      </button>
    </form>
  );
};

export default AchievementComponent;
