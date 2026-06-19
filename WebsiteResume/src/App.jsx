import pcImg from "./assets/pc-background.png";
import "./index.css";

function App() {
  return (
    <div className ="app">
      
      <img src={pcImg} className="float f1" />
      <img src={pcImg} className="float f2" />
      <img src={pcImg} className="float f3" />

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