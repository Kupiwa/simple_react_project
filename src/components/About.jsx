import Navigation from "./Navigation";
import "./components-styling/About.css";
import me from "../assets/me.jpeg";

function About() {
    return (
        <>
            <Navigation />
            <div className="about-container">
                <div className="about-content">
                    <img 
                        src={me} 
                        alt="Kupiwa Nangati" 
                        className="profile-pic"
                    />
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            I'm Kupiwa Nangati, a passionate software developer and computer science graduate with a strong interest in artificial intelligence, full-stack web development, and building impactful digital solutions.
                        </p>
                        <p>
                            I thrive on solving real-world problems using code and continuously upskill in technologies like React, Node.js, and AI-driven tools. My goal is to empower businesses and individuals through smart, scalable technology.
                        </p>
                        <p>
                            Outside of coding, I enjoy public speaking, exploring tech communities, and mentoring others to grow in the tech space.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
