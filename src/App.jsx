import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/form/Form.jsx';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import SocialComponent from './components/form/SocialComponent.jsx';
import ProjectComponent from './components/form/ProjectComponent.jsx';
import ExperienceComponent from './components/form/ExperienceComponet.jsx';
import EducationComponent from './components/form/EducationComponent.jsx';
import AchievementComponent from './components/form/AchievementComponent.jsx';
import SkillsComponent from './components/form/SkillComponent.jsx';
import axios from 'axios';
import './style.scss';
import './index.scss';

const PortfolioDetails = () => {
  const [apidata , setApidata] = useState(null);
  // const [myObject , setMyObject] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [socialHandle, setSocialHandle] = useState(null);
  const [education, setEducation] = useState(null);
  const [personalDetails, setPersonalDetails] = useState(null);
  const [project, setProject] = useState(null);
  const [achievement, setAchievement] = useState(null);
  const [experience, setExperience] = useState(null);
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {

          const response = await axios.get(`https://profileforge.azurewebsites.net/user/username/${id}`);
          const data = response.data;

          // console.log(data);
          
          if(data) {
            setApidata(data);
            // Extract and set social handle data
          setSocialHandle(data.socialHandel);

          // Extract and set education data
          setEducation(data.educations);
          setExperience(data.experiences);
          setAchievement(data.achievements);
          setProject(data.projects);

          // Extract and set personal details
          const { userUrl, firstName, lastName, email, bio, phoneNo, address, profileImage } = data;
          setPersonalDetails({userUrl, firstName, lastName, email, bio, phoneNo, address, profileImage });
    
          }

          // console.log("apidata is now :  ", apidata);

      } catch (error) {
        const {status} =error.request;
      }
    };

    fetchData();
  }, [id,navigate]);

  useEffect(() => {
    // Now you can perform actions or log the updated apidata
    console.log("apidata is now:", apidata);
    console.log("socialHandle is now:", socialHandle);
    console.log("education is now:", education);
    console.log("personalDetails is now:", personalDetails);
    console.log("project is now:", project);
  }, [apidata, socialHandle, education, personalDetails , project ,achievement ,experience]);

  // if (!apidata) {
  //   return null; // or loading indicator
  // }

  return (
    
    <>

      {/* <p>{apidata.firstName}</p> */}
      <Header personalDetails = {personalDetails} 
      />
      <Nav />
      <About />
      <Experience  />
      <Portfolio  />
      <Contact info = {personalDetails}/>
      <Footer />
    </>
  );
};

const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Navigate to the default route when the component mounts
  //   navigate('/portfolio/demo');
  // }, [navigate]);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`https://profileforge.azurewebsites.net/user/username/${id}`);
  //       const data = response.data;
  //       console.log('Data from API:', data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/portfolio_form" element={<Form />} />
        <Route path="/portfolio_signup" element={<SignupForm />} />
        <Route path="/portfolio_login" element={<LoginForm />} />
        <Route path="/portfolio_social-component" element={<SocialComponent />} />
        <Route path="/portfolio_project-component" element={<ProjectComponent />} />
        <Route path="/portfolio_experience-component" element={<ExperienceComponent />} />
        <Route path="/portfolio_education-component" element={<EducationComponent />} />
        <Route path="/portfolio_achievement-component" element={<AchievementComponent />} />
        <Route path="/portfolio_skill-component" element={<SkillsComponent />} />
        <Route path="/:id" element={<PortfolioDetails />} />
      </Routes>
    </Router>
  );
};

export default App;