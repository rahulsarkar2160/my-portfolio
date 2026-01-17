import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section id="home">
            <h1>Hi, I'm Rahul 👋</h1>
            <p>Front-End Developer | JavaScript | React</p>

            <Link
                to="projects"
                smooth={{ duration: 500, ease: "easeInOutCubic" }}
                className="hero-cta"
            >
                View My Work
            </Link>
        </section>
    );
}
