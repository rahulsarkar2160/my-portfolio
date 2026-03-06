import { icons } from "../../data/iconsData";
import { useMemo } from "react";

export default function AboutBackground() {

    const bgIcons = useMemo(() =>
        Array.from({ length: 40 }).map((_, i) => {
            const icon = icons[Math.floor(Math.random() * icons.length)];

            return {
                id: i,
                src: icon.src,
                top: 10 + Math.random() * 80,   // avoid edges
                left: 5 + Math.random() * 90,
                size: 25 + Math.random() * 20,
                duration: 20 + Math.random() * 20
            };
        }),
        []
    );

    return (
        <div className="about-bg-icons">
            {bgIcons.map((icon) => (
                <img
                    key={icon.id}
                    src={icon.src}
                    alt=""
                    className="bg-icon"
                    style={{
                        top: `${icon.top}%`,
                        left: `${icon.left}%`,
                        width: `${icon.size}px`,
                        animationDuration: `${icon.duration}s`
                    }}
                />
            ))}
        </div>
    );
}