import { Link } from "react-scroll";
import profile from "../assets/images/profile.jpg"

export default function Hero() {
    return (
        <section id="home">
            <img src={profile} alt="" className="hero-img" />
            <p>Hey👋 I'm Rahul. I learn by building, breaking, and rebuilding, and I care about making apps that feel good to use, not just look impressive. I value clear interfaces, readable code, and products that feel human.
                <br /><br />
                If something breaks, I’ll probably sigh, grab coffee, and fix it anyway — because I genuinely enjoy figuring things out and making the web a little nicer.</p>

            <Link
                to="projects"
                smooth={{ duration: 500, ease: "easeInOutCubic" }}
                style={{ fontFamily: "Handjet", fontSize: 25 }}
            >
                View My Work
            </Link>
        </section >
    );
}
