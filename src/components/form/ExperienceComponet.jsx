// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the ExperienceComponent functional component
const ExperienceComponent = () => {
  // Initialize the necessary state variables
  const navigate = useNavigate();
  const [experience, setExperience] = useState({
    organizationName: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    organisationLogoUrl: '',
  });

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  };

  // Handle the form submission
  const handleNextPage = async () => {
    await handleSubmit('next');
    // Reset the input values to empty
    setExperience({
      organizationName: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      organisationLogoUrl: '',
    });
  };

  const handleSubmit = async (navigateTo) => {
    // Assuming you have the userId and authToken available
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem('accessToken');

    // Your API endpoint for experience
    const apiUrl = `https://profileforge.azurewebsites.net/experience/user/${userId}`;

    try {
      // Sending experience data to the API
      const response = await axios.post(apiUrl, experience, {
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Experience data submission successful:', response);
      if (navigateTo === 'home') {
        navigate('/portfolio_achievement-component');
      } else {
        // If navigateTo is not 'home', it means 'next', navigate back to the same page
        // You may want to update the path accordingly
        navigate('/portfolio_experience-component'); // Update this path as needed
      }
      // You can perform any necessary actions after the form is submitted successfully
    } catch (error) {
      console.error('Error submitting Experience data:', error);
      // Handle error scenarios
    }
  };

  // Render the form for experience details
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2>Experience Details</h2>
        <label>
          Organization Name*
          <input
            type="text"
            name="organizationName"
            value={experience.organizationName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Position
          <input
            type="text"
            name="position"
            value={experience.position}
            onChange={handleChange}
            
          />
        </label>
        <label>
          Start Date*
          <input
            type="text"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date*
          <input
            type="text"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description*
          <textarea
            name="description"
            value={experience.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Organisation Logo URL
          <input
            type="text"
            name="organisationLogoUrl"
            value={experience.organisationLogoUrl}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="button" onClick={handleNextPage}>
        Next Experience
      </button>
      <button type="button" onClick={() => handleSubmit('home')}>
        Submit
      </button>
    </form>
  );
};

// Export the ExperienceComponent for use in other components or files
export default ExperienceComponent;
