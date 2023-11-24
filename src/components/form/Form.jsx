import React, { useState } from "react";
import axios from "axios";

import {useNavigate} from "react-router-dom";
import "../form.scss";


function PortfolioForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    email: "",
    userUrl: "",
    password: "",
    firstName: "",
    lastName: "",
    bio: "",
    phoneNo: "",
    profileImage: "",
    profileImageUrl: "",
    resuleFileUrl: "",
    address: {
      id: 0,
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
    socialHandel: {
      gmail: "",
      linkedin: "",
      x: "",
      thread: "",
      instagram: "",
      leetCode: "",
      codechief: "",
      codeforce: "",
      geeksForGeeks: "",
      id: 0,
    },
    educations: [
      {
        educationId: "",
        instituteName: "",
        startDate: "",
        endDate: "",
        field: "",
        country: "",
        city: "",
        degree: "",
        gpa: 0,
      },
    ],
    skillsList: [
      {
        id: 0,
        skills: {
          id: "",
          skillName: "",
          skillLogoUrl: "",
        },
      },
    ],
    experiences: [
      {
        id: "",
        organizationName: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
        organisationLogoUrl: "",
      },
    ],
    achievements: [
      {
        id: "",
        description: "",
        certificateFile: "",
        cerificateName: "",
        organisation: "",
      },
    ],
    projects: [
      {
        projectId: "",
        projectName: "",
        description: "",
        startDate: "",
        endDate: "",
        teamSize: 0,
        projectImage: "",
        gitHubUrl: "",
        deployLink: "",
        demoVideo: "",
      },
    ],
    resumeFile: "",
  });

  // const [socialHandle, setSocialHandle] = useState({
  //   gmail: '',
  //   linkedin: '',
  //   x: '',
  //   thread: '',
  //   instagram: '',
  //   leetCode: '',
  //   codechief: '',
  //   codeforce: '',
  //   geeksForGeeks: '',

  // });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have the userId and authToken available
    const userId = localStorage.getItem('userId');
    const mytoken = localStorage.getItem("accessToken");
      // console.log();
      console.log(userId);


    console.log("Bearer" + " " + mytoken);
  
    // Your API endpoint
    const apiUrl = `https://profileforge.azurewebsites.net/user/${userId}`;

    try {
      const response = await axios.put(apiUrl,formData

      , {
        headers: {
          'Authorization': "Bearer" + " " + mytoken,
          'Content-Type': 'application/json',
        },
      });

      const { userUrl } = response.data;

      console.log('Form submission successful:', response);
      localStorage.setItem('username', userUrl);
      navigate('/portfolio_social-component');

      // You can perform any necessary actions after the form is submitted successfully
    } catch (error) {
      console.error('Error submitting Social Handles:', error);
      // Handle error scenarios
    }
  };

  return (
    <form 
    onSubmit={handleSubmit}
    >
      {/* Personal Details */}
       <div>
        <h2>Personal Details</h2>
        <label>
          Username*
          <input
            type="text"
            name="userUrl"
            value={formData.userUrl}
            onChange={handlePersonalChange}
            required
          />
        </label>
        <label>
          First Name*
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handlePersonalChange}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Bio
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Phone Number
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Profile Image
          <input
            type="file"
            name="profileImage"
            value={formData.profileImage}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Profile Image URL
          <input
            type="text"
            name="profileImageUrl"
            value={formData.profileImageUrl}
            onChange={handlePersonalChange}
          />
        </label>
        <label>
          Result File URL
          <input
            type="file"
            name="resuleFileUrl"
            value={formData.resuleFileUrl}
            onChange={handlePersonalChange}
          />
        </label>
      </div> 
      {/* Link to the SocialComponent */}
      {/* <Link to="/social-component">Go to Social Component</Link>
      <SocialComponent/> */}

      <button type="submit">Submit </button>
    </form>
  );
}

export default PortfolioForm;
