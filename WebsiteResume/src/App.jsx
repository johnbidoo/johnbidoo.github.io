import pcImg from "./assets/pc-background.png";
import profilePic from "./assets/toadpfp.png";
import "./index.css";
import FallingPC from "./FallingPc";

function App() {
  return (
    <div className="app">
      
      <FallingPC imageSrc={pcImg} spawnIntervalMs={350} maxItems={30} />

      {/*navbar*/}
      <div className="navbar">
        <div className="logo">John Bernardo</div>

        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">GOALS</a>
          <a href="#">CV</a>
        </div>
      </div>

      <div className="profile-wrapper">
        <img src={profilePic} alt="John Bernardo" className="profile-pic" />
        <p className="profile-name">John Bernardo</p>
        <p className ="profile-description">Student, Gamer & Racer</p>
      </div>
    </div>
  );
}
export default App;