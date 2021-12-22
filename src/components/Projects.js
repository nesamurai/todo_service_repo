import React from 'react';

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{ project.title }</td>
            <td>{ project.link }</td>
            <td>{ project.users }</td>
        </tr>
    );
}

const Projects = ({projects}) => {
  return (
    <table>
        <th>
            Title
        </th>
        <th>
            Link
        </th>
        <th>
            Users
        </th>
        {projects.map((project) => <ProjectItem project={project} />)}
    </table>
  );
}

export default Projects;
