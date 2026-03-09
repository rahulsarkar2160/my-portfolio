import { Link } from "react-scroll";
import signLight from "../assets/images/signature-light.png"
import signDark from "../assets/images/signature-dark.png"
import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import './styles/Navbar.css'


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    // active section from IntersectionObserver
    const active = useActiveSection(["home", "about", "projects", "contact"]);

    // sync dark mode with body + notify listeners
    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
        window.dispatchEvent(new Event("theme-change"));
    }, [darkMode]);

    return (
        <nav className={menuOpen ? "menu-open" : ""}>
            <div className="nav-left">

                <a
                    href="https://rahulsarkarportfolio.vercel.app/"
                    title="Rahul Sarkar"
                >
                    <img className="signature" src={darkMode ? signDark : signLight} alt="" />

                </a>





                {/* <div className="nav-icons">

                    <a
                        href="mailto:rahulsarkar4320@gmail.com"
                        title="Email"
                    >
                        <img src={darkMode ? emailDark : emailLight} alt="Email" />
                    </a>

                    <a
                        href="https://linkedin.com/in/rahul-sarkar-1150b5202"
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                    >
                        <img src={darkMode ? linkedinDark : linkedinLight} alt="LinkedIn" />
                    </a>

                    <a
                        href="https://github.com/rahulsarkar2160"
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                    >
                        <img src={darkMode ? githubDark : githubLight} alt="GitHub" />
                    </a>




                </div> */}

            </div>

            <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li className={active === "home" ? "active" : ""}>
                        <Link
                            to="home"
                            smooth
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>

                    <li className={active === "about" ? "active" : ""}>
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li>

                    <li className={active === "projects" ? "active" : ""}>
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>

                    <li className={active === "contact" ? "active" : ""}>
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>


            </div>

            <div className="nav-controls">
                <button
                    className="theme-toggle"
                    aria-label="Toggle light and dark theme"
                    onClick={() => setDarkMode(!darkMode)}
                    title="Toggle Theme"
                />


                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>



        </nav>
    );
}
