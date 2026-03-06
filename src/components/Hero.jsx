import { Link } from "react-scroll";
import profile from "../assets/images/profile.jpg";
import ParticlesHero from "./ParticlesHero.jsx";

export default function Hero() {
    return (
        <section id="home" className="section">
            <ParticlesHero />

            <div className="hero-img-wrapper fade-in delay-1">
                <img
                    src={profile}
                    alt="Rahul Sarkar"
                    className="hero-img"
                />
            </div>

            <div className="hero-text fade-in delay-2">

                <h2>Hey! I'm Rahul</h2>

                <p className="fade-in">
                    I enjoy building and experimenting with software, learning by building, breaking, and improving things along the way. My focus is on creating applications that are both technically solid and enjoyable to use.

                </p>

                <p className="particle-hint">
                    click anywhere to create more particles
                </p>

                <p className="fade-in">
                    I care about clear interfaces, maintainable code, and thoughtful product design. Most of the projects here are built while exploring modern web technologies and solving practical problems through code.

                </p>

                <p className="fade-in">
                    For me, debugging and improving systems is part of the process — every problem is a chance to learn something new.
                </p>


            </div>

            <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hero-cta fade-in delay-3"
                style={{ fontFamily: "HandjetBold", fontSize: 25 }}
            >
                View My Work
            </Link>

        </section>
    );
}
