import React, { useState } from "react";
import axios from "axios";
import Loader from "../Loader";

import { useNavigate } from "react-router-dom";
import "../form.scss";

function PortfolioForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const userId = localStorage.getItem("userId");
    const mytoken = localStorage.getItem("accessToken");
    // console.log();
    // console.log(userId);

    // console.log("Bearer" + " " + mytoken);

    const apiUrl = `https://profileforge.azurewebsites.net/user/${userId}`;

    try {
      const response = await axios.put(
        apiUrl,
        formData,

        {
          headers: {
            Authorization: "Bearer" + " " + mytoken,
            "Content-Type": "application/json",
          },
        }
      );

      const { userUrl } = response.data;

      // console.log("Form submission successful:", response);
      localStorage.setItem("username", userUrl);
      navigate("/portfolio_social-component");
      setLoading(false);
    } catch (error) {
      console.error("Error submitting Social Handles:", error);
    }
  };

  return (
    <>
    {loading ? (
        <Loader />
      ) : (
    <form onSubmit={handleSubmit}>
      
        
          {/* Personal Details */}

          <div>
            <h2>Personal Details</h2>
            <label>
              Username <span></span>
              <input
                type="text"
                name="userUrl"
                value={formData.userUrl}
                onChange={handlePersonalChange}
                required
              />
            </label>
            <label>
              First Name <span></span>
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
              Phone Number <span></span>
              <input
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handlePersonalChange}
                required
              />
            </label>
          </div>
          {/* Link to the SocialComponent */}
          {/* <Link to="/social-component">Go to Social Component</Link>
      <SocialComponent/> */}

          <button type="submit">Next </button>
        
    </form>
      )}
    </>
  );
}

export default PortfolioForm;
