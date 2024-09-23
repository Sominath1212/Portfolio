import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-[#000000] flex flex-wrap bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base mb-4">{project.description}</p>
                <div className="mb-4">
                   

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
