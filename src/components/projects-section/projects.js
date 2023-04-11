import React from 'react';
import ProjectItem from './project-item';
import './projects-style.scss';
import projects from './projects-list';

const ProjectsSection = () => {
    return (
        <div className='projects-container'>
            <h1 className='projects-title'>These are my projects<hr className='project-line'></hr></h1>
            <div className='items-container'>
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project}/>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;
