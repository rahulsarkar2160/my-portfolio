import githubDark from "../assets/icons/github-dark.png";
import githubLight from "../assets/icons/github-light.png";
import linkedinDark from "../assets/icons/linkedin-dark.png";
import linkedinLight from "../assets/icons/linkedin-light.png";
import emailDark from "../assets/icons/email-dark.png";
import emailLight from "../assets/icons/email-light.png";
import { useEffect, useState } from "react";

export default function Contact() {
    const [darkMode, setDarkMode] = useState(
        document.body.classList.contains("dark")
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setDarkMode(document.body.classList.contains("dark"));
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>Let’s connect or work together 🚀</p>

            <div className="contact-icons">
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
        </section>
    );
}
