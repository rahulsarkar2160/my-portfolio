import { Link } from "react-scroll";
import githubDark from "../assets/icons/github-dark.png";
import githubLight from "../assets/icons/github-light.png";
import linkedinDark from "../assets/icons/linkedin-dark.png";
import linkedinLight from "../assets/icons/linkedin-light.png";
import emailDark from "../assets/icons/email-dark.png";
import emailLight from "../assets/icons/email-light.png";
import { useEffect, useState } from "react";


export default function Navbar() {
    const [darkMode, setDarkMode] = useState(
        document.body.classList.contains("dark")
    );
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);


    return (
        <nav className={menuOpen ? "menu-open" : ""}>
            <div className="nav-left">
                <button
                    className="theme-toggle"
                    aria-label="Toggle light and dark theme"
                    onClick={() => setDarkMode(!darkMode)}
                />
                <div className="nav-icons">
                    <a href="https://github.com/rahulsarkar2160" target="_blank" rel="noreferrer">
                        <img src={darkMode ? githubDark : githubLight} alt="GitHub" />
                    </a>

                    <a href="https://linkedin.com/in/rahul-sarkar-1150b5202" target="_blank" rel="noreferrer">
                        <img src={darkMode ? linkedinDark : linkedinLight} alt="LinkedIn" />
                    </a>

                    <a href="mailto:rahulsarkar4320@gmail.com">
                        <img src={darkMode ? emailDark : emailLight} alt="Email" />
                    </a>


                </div>

            </div>


            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>


            <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <Link smooth={true} duration={500} ease="easeInOutCubic" spy={true} activeClass="active" to="home" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link smooth={true} duration={500} ease="easeInOutCubic" spy={true} activeClass="active" to="about" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link smooth={true} duration={500} ease="easeInOutCubic" spy={true} activeClass="active" to="projects" onClick={() => setMenuOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link smooth={true} duration={500} ease="easeInOutCubic" spy={true} isDynamic={true} activeClass="active" to="contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>


            </div>


        </nav>
    );
}
