import FallingPC from "../FallingPc";
import Footer from "../footer";
import pcImg from "../assets/pc-background.png";
import "../styles/goals.css";

function Goals() {
  return (
    <>
      <FallingPC imageSrc={pcImg} spawnIntervalMs={350} maxItems={30} />

      <div className="goals-hero">
        <h1 className="goals-title">GOALS</h1>
        <p className="goals-subtitle">By John Bernardo</p>
      </div>

      <section className="goal-section white">
        <h2>Fitness Goals</h2>
        <ul>
          <li>Run 5km</li>
          <li>Run 10km</li>
          <li>Build 3+ portfolio projects</li>
        </ul>
      </section>

      <section className="goal-section dark">
        <h2>Medium Term Goals</h2>
        <ul>
          <li>Land internship in IT / tech support</li>
          <li>Learn backend development (Node.js)</li>
          <li>Work with APIs and databases</li>
        </ul>
      </section>

      <section className="goal-section white">
        <h2>Long Term Goals</h2>
        <ul>
          <li>Become a software engineer</li>
          <li>Work in cloud/data centre industry</li>
          <li>Secure graduate IT role</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}

export default Goals;