import FallingPC from "../FallingPc";
import About from "../aboutme";
import Timeline from "../timeline";
import Footer from "../footer";

import pcImg from "../assets/pc-background.png";
import profilePic from "../assets/toadpfp.png";

function Home() {
  return (
    <>
      <FallingPC imageSrc={pcImg} spawnIntervalMs={350} maxItems={30} />

      <div className="profile-wrapper">
        <img src={profilePic} alt="John Bernardo" className="profile-pic" />
        <p className="profile-name">John Bernardo</p>
        <p className="profile-description">Student, Gamer & Racer</p>
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