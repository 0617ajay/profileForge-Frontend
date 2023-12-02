import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";


const Education = ({education}) => {
  return (
    <section id="education">
      {education ? (
        <>
          <h5>What Education I Have</h5>
          <h2>My Education</h2>

          {education.map(
            ({
              educationId,
              instituteName,
              field,
              country,
              city,
              gpa,
              startDate,
              endDate
            }) => {
              return (
                <div key={educationId} className="container experience_container">
                  <div className="experience_frontend">
                    <h4> 
                      <em>
                      &nbsp;&nbsp;&nbsp; {startDate} : {endDate}
                      </em>
                    </h4>
                    <h3>
                      <b>{instituteName}</b>
                    </h3>
                    <small className="text-light">{city} , {country} - (CGPA : {gpa})</small>
                    <p>{field}</p>
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
}

export default Education