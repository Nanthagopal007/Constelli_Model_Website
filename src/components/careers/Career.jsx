import React from "react";
import "../../Styles/Career.css";

const jobList = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Looking for a React developer with experience in responsive UI and REST API integration.",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Seeking Node.js developer familiar with MongoDB and Express.js.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Chennai, India",
    type: "Part-time",
    description: "Creative designer needed to work closely with frontend and product team.",
  },
];

const Careers = () => {
  return (
    <div className="careers-container container">
      <div className="careers-banner">
        <h1>Join Our Team</h1>
        <p>Be part of something meaningful. Grow your career with us.</p>
      </div>

      <div className="job-listings">
        {jobList.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p>{job.description}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
