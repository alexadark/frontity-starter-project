import React from "react";
import { connect } from "frontity";

const ProjectsBlock = ({ projects, title, subtitle, state }) => {
  console.log("projects", projects, "state", state);
  return (
    <>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      {projects.map(project => (
        <h3>
          <a
          // href={state.source.projects[project.id].acf.project_url}
          // target="_blank"
          // rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h3>
      ))}
    </>
  );
};

export default connect(ProjectsBlock);
