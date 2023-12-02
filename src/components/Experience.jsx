import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = ({ experience }) => {
  return (
    <section id="experience">
      {experience ? (
        <>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>

          {experience.map(
            ({
              id,
              description,
              position,
              startDate,
              endDate,
              organizationName,
            }) => {
              return (
                <div key={id}className="container experience_container">
                  <div className="experience_frontend">
                    <h4>
                      <em>
                        {startDate} to {endDate}
                      </em>
                    </h4>
                    <h3>
                      <b>{organizationName}</b>
                    </h3>
                    <small className="text-light">{position}</small>
                    <p>{description}</p>
                  </div>
                </div>
              );
            }
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Experience;
