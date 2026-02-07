import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <h2 className="fade-in">Projects</h2>

            <div className="projects-grid reveal-children">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        </section>
    );
}
