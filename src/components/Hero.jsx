import { Link } from "react-scroll";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
    return (
        <section id="home" className="section">
            {/* Animation wrapper */}
            <div className="hero-img-wrapper fade-in delay-1">
                <img
                    src={profile}
                    alt="Rahul Sarkar"
                    className="hero-img"
                />
            </div>

            <p className="fade-in delay-2">
                Hey 👋 I'm Rahul. I learn by building, breaking, and rebuilding, and I care
                about making apps that feel good to use, not just look impressive. I value
                clear interfaces, readable code, and products that feel human.
                <br /><br />
                If something breaks, I’ll probably sigh, grab coffee, and fix it anyway —
                because I genuinely enjoy figuring things out and making the web a little
                nicer.
            </p>

            <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-90}
                className="fade-in delay-3"
                style={{ fontFamily: "Handjet", fontSize: 25 }}
            >
                View My Work
            </Link>
        </section>
    );
}
