export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> |{" "}
                <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
            </div>
        </div>
    );
}
