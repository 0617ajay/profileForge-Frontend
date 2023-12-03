// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

// Create the ExperienceComponent functional component
const ExperienceComponent = () => {
  // Initialize the necessary state variables
  const navigate = useNavigate();
  const[loading,setLoading] = useState(false);
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
    setLoading(true);

    // Assuming you have the userId and authToken available
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem('accessToken');

    // Your API endpoint for experience
    const apiUrl = `https://profileforge.azurewebsites.net/experience/user/${userId}`;

    try {
      const response = await axios.post(apiUrl, experience, {
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      });

      // console.log('Experience data submission successful:', response);
      if (navigateTo === 'home') {
        navigate('/portfolio_education-component');
      } else {
        navigate('/portfolio_experience-component'); 
      }
    } catch (error) {
      if(error.response.status==409){
        window.alert('Please fill the required fields to proceed to next page');
      }
      // console.error('Error submitting Experience data:', error);
    } finally {
      setLoading(false);

    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {loading?<Loader/>:
         ( <>
      <div>
        <h2>Experience Details</h2>
        <label>
          Organization Name <span></span>
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
          Start Date <span></span>
          <input
            type="text"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date <span></span>
          <input
            type="text"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description <span></span>
          <textarea
            name="description"
            value={experience.description}
            onChange={handleChange}
            required
          />
        </label>
        {/* <label>
          Organisation Logo URL
          <input
            type="text"
            name="organisationLogoUrl"
            value={experience.organisationLogoUrl}
            onChange={handleChange}
          />
        </label> */}
      </div>

      <button type="submit" onClick={handleNextPage}>
        Next Experience
      </button>
      <button type="submit" onClick={() => handleSubmit('home')}>
        Next Page
      </button>
      </> )}
    </form>
  );
};

export default ExperienceComponent;
