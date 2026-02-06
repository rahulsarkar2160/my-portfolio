import githubDark from "../assets/icons/github-dark.png";
import githubLight from "../assets/icons/github-light.png";
import linkedinDark from "../assets/icons/linkedin-dark.png";
import linkedinLight from "../assets/icons/linkedin-light.png";
import emailDark from "../assets/icons/email-dark.png";
import emailLight from "../assets/icons/email-light.png";
import resumeDark from "../assets/icons/resume-dark.png";
import resumeLight from "../assets/icons/resume-light.png";
import { useEffect, useState } from "react";

export default function Contact() {
    const [darkMode, setDarkMode] = useState(
        document.body.classList.contains("dark")
    );

    useEffect(() => {
        const handleThemeChange = () => {
            setDarkMode(document.body.classList.contains("dark"));
        };

        window.addEventListener("theme-change", handleThemeChange);

        return () => {
            window.removeEventListener("theme-change", handleThemeChange);
        };
    }, []);

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Let’s connect or work together 🚀</p>

            <div className="contact-icons">
                <a
                    href="https://github.com/rahulsarkar2160"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                >
                    <img src={darkMode ? githubDark : githubLight} alt="GitHub" />
                </a>

                <a
                    href="https://linkedin.com/in/rahul-sarkar-1150b5202"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                >
                    <img src={darkMode ? linkedinDark : linkedinLight} alt="LinkedIn" />
                </a>

                <a href="mailto:rahulsarkar4320@gmail.com" title="Email">
                    <img src={darkMode ? emailDark : emailLight} alt="Email" />
                </a>

                <a
                    href="/resume/Rahul_Sarkar_FullStack_Developer.pdf"
                    download
                    title="Download Resume"
                >
                    <img src={darkMode ? resumeDark : resumeLight} alt="Resume" />
                </a>
            </div>
        </section>
    );
}
