import "./styles/About.css";
import { icons } from "../data/iconsData.js";
import AboutBackground from "./helperComponents/AboutBackground.jsx";

export default function About() {
    return (
        <section id="about" className="section about-section">

            <AboutBackground />
            <h1 className="fade-in">About Me</h1>

            <p className="about-text fade-in">
                I'm a frontend web developer focused on creating clean and
                beautiful interfaces using React and JavaScript. Recently I've
                started working with Next.js and I'm continuing to explore it.
            </p>

            <div className="tools fade-in">
                <h3>Tools I Have Used:</h3>

                <div className="tools-container reveal-children">
                    {icons.map(({ name }) => (
                        <div key={name} className="icon-wrapper">
                            <span className="skill-name">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}