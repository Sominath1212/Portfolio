import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-[#6DAFFE] flex flex-wrap bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base mb-4">{project.description}</p>
                <div className="mb-4">
                   
                    <a href={project.video}></a> <iframe
                        width="100%"
                        height="200"
                        src={project.video}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mb-4 ">
                    <a
                        href={project.github}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub repo
                    </a>
                </div>
                <div>
                    {project.Tecnologies}
                </div>
               
            </div>
        </div>
    );
};

export default ProjectCard;
