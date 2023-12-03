import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

const EducationComponent = () => {
  const navigate = useNavigate();
  const[loading,setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleNextPage = async () => {
    await handleSubmit('next');
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
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username')
    const mytoken = localStorage.getItem('accessToken');
    // console.log( `token to access is : Bearer ${mytoken}`)
    const apiUrl = `https://profileforge.azurewebsites.net/education/user/${userId}`;
    setLoading(true);

    try {
      const response = await axios.post(apiUrl, education, {
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      });

      // console.log('Education data submission successful:', response);
      if (navigateTo === 'home') {
        navigate(`/portfolio/${username}`);
      } else {
        navigate('/portfolio_education-component'); 
      }
    } catch (error) {
      if(error.response.status==409){
        window.alert('Please fill the required fields to proceed to next page');
      }
      // console.error('Error submitting Education data:', error);
    }finally {
      setLoading(false);

    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {loading?<Loader/>:
         ( <>
      <div>
        <h2>Education Details</h2>
        <label>
          Institute Name <span></span>
          <input
            type="text"
            name="instituteName"
            value={education.instituteName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date <span></span>
          <input
            type="text"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date <span></span>
          <input
            type="text"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Field <span></span>
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
          City <span></span>
          <input
            type="text"
            name="city"
            value={education.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Degree <span></span>
          <input
            type="text"
            name="degree"
            value={education.degree}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          GPA <span></span>
          <input
            type="number"
            name="gpa"
            value={education.gpa}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button type="submit" onClick={handleNextPage}>
        Next Education
      </button>
      <button type="submit" onClick={() => handleSubmit('home')}>
        Submit
      </button>
      </> )}
    </form>
  );
};

export default EducationComponent;
