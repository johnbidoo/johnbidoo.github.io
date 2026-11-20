import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSupabase,
  SiGit,
  SiGithub,
  SiWordpress,
  SiCpanel,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandOffice } from "react-icons/tb";
import {
  LuCpu,
  LuWrench,
  LuDownload,
  LuGauge,
  LuNetwork,
  LuDatabase,
  LuFileText,
  LuLock,
  LuComponent,
  LuMonitorSmartphone,
} from "react-icons/lu";

import FallingPC from "../FallingPc";
import Footer from "../footer";
import SkillCategory from "../skillCategory";
import pcImg from "../assets/pc-background.png";
import "../styles/skills.css";

// No official Divi logo is available in react-icons, so use a simple text mark.
function DiviIcon(props) {
  return (
    <span className="skill-text-logo" {...props}>
      D
    </span>
  );
}

const categories = [
  {
    title: "Programming Languages & Web Development",
    skills: [
      { name: "C", Icon: SiC, color: "#A8B9CC", lightColor: "#3F51B5" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C", lightColor: "#00599C" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", lightColor: "#C9A900" },
      { name: "React", Icon: SiReact, color: "#61DAFB", lightColor: "#0A9DC7" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Visual Studio Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E", lightColor: "#24A36B" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "var(--color-text)" },
      { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
      { name: "Divi", Icon: DiviIcon, color: "#8F42EC" },
      { name: "cPanel", Icon: SiCpanel, color: "#FF6C2C" },
    ],
  },
  {
    title: "Technical Support & Hardware",
    skills: [
      { name: "PC Building", Icon: LuCpu },
      { name: "Hardware Troubleshooting", Icon: LuWrench },
      { name: "Software Installation & Configuration", Icon: LuDownload },
      { name: "Overclocking", Icon: LuGauge },
      { name: "Basic Networking", Icon: LuNetwork },
      { name: "Microsoft Office", Icon: TbBrandOffice, color: "#D83B01" },
    ],
  },
  {
    title: "Database & Development Technologies",
    skills: [
      { name: "Database Management", Icon: LuDatabase },
      { name: "File Input/Output", Icon: LuFileText },
      { name: "Basic Encryption (Caesar Cipher)", Icon: LuLock },
      { name: "Reusable React Components", Icon: LuComponent },
      { name: "Responsive Web Design", Icon: LuMonitorSmartphone },
    ],
  },
];

function Skills() {
  return (
    <>
      <FallingPC imageSrc={pcImg} spawnIntervalMs={350} maxItems={30} />

      <div className="skills-hero">
        <h1 className="skills-title">SKILLS</h1>
        <p className="skills-subtitle">By John Bernardo</p>
      </div>

      {categories.map((category, i) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          skills={category.skills}
          variant={i % 2 === 0 ? "white" : "dark"}
        />
      ))}

      <Footer />
    </>
  );
}

export default Skills;
