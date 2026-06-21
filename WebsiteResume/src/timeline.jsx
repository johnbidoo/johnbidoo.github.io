import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    title: "Started Web Development",
    description: "Learned HTML, CSS, and JavaScript basics."
  },
  {
    title: "Built First React App",
    description: "Created a personal portfolio using React and Vite."
  },
  {
    title: "Freelance Developer",
    description: "Started working on small client projects."
  },
  {
    title: "Freelance Developer",
    description: "Started working on small client projects."
  }
];

function Timeline() {
  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content-box">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;