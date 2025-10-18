import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            link: 'https://enlace-a-proyecto1.com',
        },
        {
            id: 2,
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            link: 'https://enlace-a-proyecto2.com',
        },
        {
            id: 3,
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            link: 'https://enlace-a-proyecto3.com',
        },
    ];

    return (
        <div>
            <h1>Mis Proyectos</h1>
            <div className="project-list">
                {projects.map(project => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;