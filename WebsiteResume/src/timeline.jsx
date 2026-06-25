import { useEffect, useRef, useState } from "react";
import { FaCode, FaUniversity, FaBriefcase, FaShieldAlt, FaHtml5 } from "react-icons/fa";

const timelineData = [
  {
    year: "2026",
    title: "Creating projects",
    description: `As a second year university student I've now taken the opportunity to build software that I've planned through the years,
    utilizing AI as a guide onto developing different products me and my team have in store.`,
    icon: FaCode,
    color: "#00E676"
  },
  {
    year: "2025",
    title: "Bachelor in IT (Computer Science & Business Information Systems",
    description: `Starting university introduced me to basic concepts such as OOP, Data Structures & Abstractions and much more.
    Valuing OOP as a higlight onto how I understood programming and the benefits it could bring but also the nuisance it can create.`,
    icon: FaUniversity,
    color: "#2196F3"
  },
  {
    year: "2024",
    title: "Cert IV in Business",
    description: `Inspiration was given onto pursueing business as a way to bridge the gap between business and IT. 
    Focusing onto how to manage stakeholders, meetings, clients etc. My goal throughout this time was to explore opportunities
    and ways in which I can provide a more client-facing role towards developing as a person myself.`,
    icon: FaBriefcase,
    color: "#FFC107"
  },
  {
    year: "2023",
    title: "Certification in III IT (Cyber Security Focus)",
    description: `I gradually moved onto trying to get into cybersecurity as a whole. Tinkering with powershell
    and command prompt to get the feel of what cybersecurity has to offer. Also learning onto architecture, pen testing etc. `,
    icon: FaShieldAlt,
    color: "#9C27B0"
  },
  {
    year: "2022",
    title: "First HTML/CSS website",
    description: `My first introduction to HTML/CSS was in a project in Year 10, my gradual interest within
    website building/creating has always stayed consistent to become a full-stack developer since then.`,
    icon: FaHtml5,
    color: "#FF5722"
  }
];

function Timeline() {
  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div key={index} className="timeline-item"
          style={{"--circle-color": item.color}}
          >
          <div className="timeline-icon">
            <item.icon />
          </div> 
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="timeline-year">{item.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;