import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProjectComponent = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState({
      projectName: '',
      description: '',
      startDate: '',
      endDate: '',
      teamSize: 0,
      projectImage: '',
      gitHubUrl: '',
      deployLink: '',
      demoVideo: '',
    
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setProjects({
      ...projects,
      [name]: value,
    });
  };

  const handleNextPage = async () => {
    await handleSubmit('next');
    setProjects({
      projectName: '',
      description: '',
      startDate: '',
      endDate: '',
      teamSize: 0,
      projectImage: '',
      gitHubUrl: '',
      deployLink: '',
      demoVideo: '',
    });
  };


  const handleSubmit = async (navigateTo) => {

    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem('accessToken');

    const apiUrl = `https://profileforge.azurewebsites.net/project/user/${userId}`;
    console.log(projects);
    console.log(mytoken);
    console.log(userId);
    try {
      const response = await axios.post(apiUrl, projects, {
        headers: {
          Authorization: `Bearer ${mytoken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('Project data submission successful:', response);
      if (navigateTo === 'home') {
        navigate('/portfolio_experience-component');
      } else {
        navigate('/portfolio_project-component'); 
      }
    } catch (error) {
      console.error('Error submitting Project data:', error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>

      <div>
          <h2>Project Details</h2>
          
          <label>
            Project Name
            <input
              type="text"
              name="projectName"
              value={projects.projectName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              value={projects.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Github Link
            <textarea
              name="gitHubUrl"
              value={projects.gitHubUrl}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Date
            <textarea
              name="startDate"
              value={projects.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            End Date
            <textarea
              name="endDate"
              value={projects.endDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Demo Video
            <textarea
              name="demoVideo"
              value={projects.demoVideo}
              onChange={handleChange}
            />
          </label>
        </div>
      
        <button type="button" onClick={handleNextPage}>
        Next Project
      </button>
      <button type="button" onClick={() => handleSubmit('home')}>
        Submit
      </button>
    </form>
  );
};

export default ProjectComponent;
