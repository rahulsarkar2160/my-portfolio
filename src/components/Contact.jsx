import githubDark from "../assets/icons/GitHubDark.svg";
import githubLight from "../assets/icons/GitHubLight.svg";
import linkedinDark from "../assets/icons/linkedin-dark.png";
import linkedinLight from "../assets/icons/linkedin-light.png";
import emailDark from "../assets/icons/email-dark.png";
import emailLight from "../assets/icons/email-light.png";
import resumeDark from "../assets/icons/resume-dark.png";
import resumeLight from "../assets/icons/resume-light.png";
import { useEffect, useState } from "react";

export default function Contact() {
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        const syncTheme = () => {
            setDarkMode(document.body.classList.contains("dark"));
        };

        // 🔥 runs on first render (fixes refresh bug)
        syncTheme();

        // 🔁 runs on toggle
        window.addEventListener("theme-change", syncTheme);

        return () => {
            window.removeEventListener("theme-change", syncTheme);
        };
    }, []);


    return (
        <section id="contact" className="section">
            <h1 className="fade-in delay-1">Contact Me</h1>

            <p className="fade-in delay-2">
                Let’s connect or work together 🚀
            </p>

            <div className="contact-icons reveal-children">
                <a
                    className="fade-in"
                    href="https://github.com/rahulsarkar2160"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                >
                    <img src={darkMode ? githubDark : githubLight} alt="GitHub" />
                </a>

                <a
                    className="fade-in"
                    href="https://linkedin.com/in/rahul-sarkar-1150b5202"
                    target="_blank"
                    rel="noreferrer"
                    title="LinkedIn"
                >
                    <img src={darkMode ? linkedinDark : linkedinLight} alt="LinkedIn" />
                </a>

                <a
                    className="fade-in"
                    href="mailto:rahulsarkar4320@gmail.com"
                    title="Email"
                >
                    <img src={darkMode ? emailDark : emailLight} alt="Email" />
                </a>

                <a
                    className="fade-in"
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
