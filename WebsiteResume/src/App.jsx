import pcImg from "./assets/pc-background.png";
import profilePic from "./assets/toadpfp.png";
import "./index.css";
import FallingPC from "./FallingPc";
import Navbar from "./navbar";
import Timeline from "./timeline";

function App() {
  return (
    <div className="app">

      <FallingPC imageSrc={pcImg} spawnIntervalMs={350} maxItems={30} />

      {/* navbar */}
      <Navbar />

      <div className="profile-wrapper">
        <img src={profilePic} alt="John Bernardo" className="profile-pic" />
        <p className="profile-name">John Bernardo</p>
        <p className="profile-description">Student, Gamer & Racer</p>
      </div>
      <section className="timeline-section">
        <h2 className="timeline-title">Timeline </h2>
              <Timeline />
      </section>
    </div>
  );
}

export default App;