import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        </section>
    );
}
