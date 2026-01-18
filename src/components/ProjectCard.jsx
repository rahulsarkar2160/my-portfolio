export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3>
                <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
            </h3>
            <p>{project.description}</p>
            <div>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
    );
}
