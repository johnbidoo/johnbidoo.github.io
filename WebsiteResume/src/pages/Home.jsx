import { TbBrandLinkedin, TbBrandGithub, TbBrandDiscord } from "react-icons/tb";

import FallingPC from "../FallingPc";
import About from "../aboutme";
import Timeline from "../timeline";
import Footer from "../footer";

import pcImg from "../assets/pc-background.png";
import profilePic from "../assets/toadpfp.png";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/john-bernardo18/", Icon: TbBrandLinkedin },
  { name: "GitHub", href: "https://github.com/johnbidoo", Icon: TbBrandGithub },
  { name: "Discord", href: "https://discord.com/users/524884176214949918", Icon: TbBrandDiscord },
];

function Home() {
  return (
    <>
      <FallingPC imageSrc={pcImg} spawnIntervalMs={350} maxItems={30} />

      <div className="profile-wrapper">
        <img src={profilePic} alt="John Bernardo" className="profile-pic" />
        <p className="profile-name">John Bernardo</p>
        <p className="profile-description">Student, Gamer & Racer</p>
        <div className="social-links">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} profile (opens in a new tab)`}
              data-tooltip={name}
            >
              <Icon aria-hidden="true" focusable="false" />
            </a>
          ))}
        </div>
      </div>

      <About />

      <section className="timeline-section">
        <h2 className="timeline-title">Timeline</h2>
        <Timeline />
      </section>

      <Footer />
    </>
  );
}

export default Home;