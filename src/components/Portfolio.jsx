import React from "react";
import IMG1 from "../assests/portfolio1.jpg";
import IMG2 from "../assests/portfolio2.jpg";
import IMG3 from "../assests/portfolio3.jpg";
import IMG4 from "../assests/portfolio4.jpg";
import IMG5 from "../assests/portfolio5.png";
const Portfolio = ({project}) => {
  return (
    <section id="portfolio">

{(project) ? (
  <>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfoilo_container">
  
        {project.map(({ projectId , projectName,startDate, endDate ,description  ,projectImage ,gitHubUrl ,demoVideo}) => {
          return (
            <article key={projectId} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={projectImage} alt="projectImage" />
              </div>
              
              <h3>{projectName}</h3>
              <small><em>{startDate} : {endDate}</em></small>
              <h4>{description}</h4>
              <div className="portfolio_item-cta">
                <a href={gitHubUrl} target="blank" className="btn">
                  Github
                </a>
                <a
                  href={demoVideo}
                  className="btn btn-primary"
                  target="blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        
      </div>
      </> 
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Portfolio;
