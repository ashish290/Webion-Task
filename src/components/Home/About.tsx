import "./About.css";
import Medal from "../../assets/medal.png";
import Throught from "../../assets/thought.png";
import Training from "../../assets/training.png";
import Dashboard from "../../assets/AboutDashboard.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <div>
          <p>Open Source Theme and UI Components</p>
          <div className="heading" style={{width: '100vh'}}>
          <h1>Geaux Astro helps you craft beautiful websites efficiently</h1>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="features-container">
          <div className="feature">
            <div>
              <img src={Medal} alt="Medal" />
            </div>
            <div className="feature-text">
              <h2>Certificate Distribution</h2>
              <p>
                We offer certificates to validate and recognize<br></br> your
                achievement.
              </p>
            </div>
          </div>
          <div className="feature">
            <div>
              <img src={Throught} alt="Thought" />
            </div>
            <div className="feature-text">
              <h2>Knowledge</h2>
              <p>
                We deliver transformative knowledge that<br></br> empowers and
                inspires.
              </p>
            </div>
          </div>
          <div className="feature">
            <div>
              <img src={Training} alt="Training" />
            </div>
            <div className="feature-text">
              <h2>Hands-on Experience</h2>
              <p>
                We provide hands-on experience for real-<br></br>world learning.
                You learn best by doing.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-image-container">
          <img src={Dashboard} alt="Dashboard" />
        </div>
      </div>
    </div>
  );
}

export default About;
