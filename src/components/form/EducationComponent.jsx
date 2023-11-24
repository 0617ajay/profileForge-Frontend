// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the EducationComponent functional component
const EducationComponent = () => {
  // Initialize the necessary state variables
  const navigate = useNavigate();
  const [education, setEducation] = useState({
    instituteName: '',
    startDate: '',
    endDate: '',
    field: '',
    country: '',
    city: '',
    degree: '',
    gpa: 0,
  });

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  // Handle the form submission
  const handleNextPage = async () => {
    await handleSubmit('next');
    // Reset the input values to empty
    setEducation({
      instituteName: '',
      startDate: '',
      endDate: '',
      field: '',
      country: '',
      city: '',
      degree: '',
      gpa: 0,
    });
  };

  const handleSubmit = async (navigateTo) => {
    // Assuming you have the userId and authToken available
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem('accessToken');
    console.log( `token to access is : Bearer ${mytoken}`)
    // Your API endpoint for education
    const apiUrl = `https://profileforge.azurewebsites.net/education/user/${userId}`;

    try {
      // Sending education data to the API
      const response = await axios.post(apiUrl, education, {
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Education data submission successful:', response);
      if (navigateTo === 'home') {
        navigate('/portfolio_achievement-component');
      } else {
        // If navigateTo is not 'home', it means 'next', navigate back to the same page
        // You may want to update the path accordingly
        navigate('/portfolio_education-component'); // Update this path as needed
      }
      // You can perform any necessary actions after the form is submitted successfully
    } catch (error) {
      console.error('Error submitting Education data:', error);
      // Handle error scenarios
    }
  };

  // Render the form for education details
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2>Education Details</h2>
        <label>
          Institute Name*
          <input
            type="text"
            name="instituteName"
            value={education.instituteName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date*
          <input
            type="text"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date*
          <input
            type="text"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Field*
          <input
            type="text"
            name="field"
            value={education.field}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Country
          <input
            type="text"
            name="country"
            value={education.country}
            onChange={handleChange}
          />
        </label>
        <label>
          City*
          <input
            type="text"
            name="city"
            value={education.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Degree*
          <input
            type="text"
            name="degree"
            value={education.degree}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          GPA
          <input
            type="number"
            name="gpa"
            value={education.gpa}
            onChange={handleChange}
            
          />
        </label>
      </div>

      <button type="button" onClick={handleNextPage}>
        Next Education
      </button>
      <button type="button" onClick={() => handleSubmit('home')}>
        Submit
      </button>
    </form>
  );
};

// Export the EducationComponent for use in other components or files
export default EducationComponent;
