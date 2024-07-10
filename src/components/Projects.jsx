import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Movie app ',
    description: 'This is a react project .In this project I use a tailwind css to style it.And Also use free API to fetch the data from the internet ',
    video: 'https://youtu.be/9ubpqM-jfjo?si=qWEWUqmm1eijD_hQ', // Replace with your live demo video link
    github: 'https://github.com/Sominath1212/MOVIEAPP.git',
    Tecnologies: " REACT JS AND TAILWIND CSS"
  },
  {
    title: 'Amazon clone',
    description: 'This is simple clone of Amazon . I start to lear fronted development that time i Build this project to uderstan the basics and structure  of the web page ',
    video: 'https://youtu.be/rqLSWF21L0w?si=Em7iaYE-n_SH9kpW', // Replace with your live demo video link
    github: 'https://github.com/Sominath1212/amazon.git',
    Tecnologies: " HTML 5 AND CSS 3"

  },
  // Add more projects here
];

function Projects() {
  return (
    <div name="projects" className='bg-[#6DAFFE] p-5 pt-[4rem]'>
      <h2 className='text-3xl text-[#437fc7]'> Peojects:</h2>
      <div className="flex flex-wrap justify-center  text-black">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>

  );
}

export default Projects;
