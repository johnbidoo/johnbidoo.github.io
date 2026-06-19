import pcImg from "./assets/pc-background.png";
import "./index.css";
import FallingPC from "./FallingPc";

function App() {
  return (
    <div className ="app">
      
      <FallingPC imageSrc={pcImg} spawnIntervalms={350} maxItems = {30} />

      {/*navbar*/}
      <div className="navbar">
        <div className="logo">John Bernardo</div>

        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">BLOG</a>
          <a href="#">CV</a>
        </div>
      </div>

    </div>
  );
}
export default App;