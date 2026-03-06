import { useEffect } from "react";
import "./styles/ParticlesHero.css";

export default function ParticlesHero() {

    const initParticles = () => {

        const particleColor = getComputedStyle(document.body)
            .getPropertyValue("--text-muted")
            .trim();

        if (!window.particlesJS) return;

        window.particlesJS("particles-js", {
            particles: {
                number: {
                    value: 100,
                    density: { enable: true, value_area: 800 }
                },

                color: { value: particleColor },

                shape: { type: "circle" },

                opacity: { value: 0.7 },

                size: { value: 2 },

                line_linked: {
                    enable: true,
                    distance: 140,
                    color: particleColor,
                    opacity: 0.4,
                    width: 1
                },

                move: {
                    enable: true,
                    speed: 0.7
                }
            },

            interactivity: {
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    }
                },

                modes: {
                    grab: {
                        distance: 140,
                        line_linked: { opacity: 0.3 }
                    }
                }
            },

            retina_detect: true
        });

    };

    useEffect(() => {

        initParticles();

        // watch for theme change (body.dark)
        const observer = new MutationObserver(initParticles);

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"]
        });

        return () => observer.disconnect();

    }, []);

    return <div id="particles-js"></div>;
}