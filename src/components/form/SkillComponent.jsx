import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SkillsComponent = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(
    {
  
      skillName: '',
      skillLogoUrl: '',
    },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkills({
        ...skills,
        [name]: value,
      });
    
  };

  const handleNextSkill = async () => {
    await handleSubmit('next');
    setSkills({
        skillName: '',
        skillLogoUrl: '',
      });
    
  };

  const handleSubmit = async (navigateTo) => {
    // Assuming you have the userId and authToken available
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem('accessToken');

    console.log(skills);
    // Your API endpoint for skills
    const apiUrl = `https://profileforge.azurewebsites.net/skills`;

    try {
      // Sending skills data to the API
      const response = await axios.post(apiUrl,skills, {
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Skills data submission successful:', response);
      if (navigateTo === 'home') {
        navigate('/profolio/demo');
      } else {
        navigate('/portfolio_skill-component'); // Update this path as needed
      }// Navigate to the next page as needed
      // You can perform any necessary actions after the form is submitted successfully
    } catch (error) {
      console.error('Error submitting Skills data:', error);
      // Handle error scenarios
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <h2>Skills</h2>
        
          <div >
            <label>
              Skill Name*
              <input
                type="text"
                name="skillName"
                value={skills.skillName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Skill Logo URL
              <input
                type="text"
                name="skillLogoUrl"
                value={skills.skillLogoUrl}
                onChange={handleChange}
                required
              />
            </label>
          </div>
        
      </div>
        <button type="button" onClick={handleNextSkill}>
          Next Skill
        </button>
      <button type="button" onClick={() => handleSubmit('home')}>
        Submit Skills
      </button>
    </form>
  );
};

export default SkillsComponent;
