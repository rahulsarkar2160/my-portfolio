import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import './styles/Projects.css'

export default function Projects() {
    return (
        <section id="projects" className="section">
            <h1 className="fade-in">Projects</h1>

            <div className="projects-grid reveal-children">
                {projects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}
            </div>
        </section>
    );
}
