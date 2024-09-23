import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  ,
  {
    title: 'The Food Delivery website',
    description: 'this is food ordering website like swiggy and zomato you can select your favorite food and order the food',
    // Replace with your live demo video link
    github: 'https://github.com/Sominath1212/frontendFoodDilevery.git',
    Tecnologies: " REACT JS AND TAILWIND CSS"
  },
  {
    title: 'Movie app ',
    description: 'This is a react project .In this project I use a tailwind css to style it.And Also use free API to fetch the data from the internet ',
    video: 'https://youtu.be/9ubpqM-jfjo?si=qWEWUqmm1eijD_hQ', // Replace with your live demo video link
    github: 'https://github.com/Sominath1212/MOVIEAPP.git',
    Tecnologies: " REACT JS AND TAILWIND CSS"
  },
  {
    title: 'Amazon Landing page clone',
    description: 'This is simple clone of Amazon . I start to lear fronted development that time i Build this project to uderstan the basics and structure  of the web page ',
    github: 'https://github.com/Sominath1212/amazon.git',
    Tecnologies: " HTML 5 AND CSS 3"

  },
  {
    title: 'Responcive portfolio ',
    description: 'this a my personal portfolio for show case my devwlopment skills',
    github: 'https://github.com/Sominath1212/Portfolio.git',
    Tecnologies: "react and Tailwind css"

  },
  // Add more projects here
];

const minorProjects = [
  {
    title: 'Todo list app',
    Techstack: "React and tailwind",
    github: "https://github.com/Sominath1212/PYTHON.git",
    description: "this is a minor project I was developed in the beginer phace learing in react js"
  },
  {
    title: 'math calulation time calculator',
    Techstack: "Python",
    github: "https://github.com/Sominath1212/PYTHON.git",
    description: "In this game a robot give the user a equation and how many time a user take time to solve equations and compaire with other users and decalre a winner "
  },

  {
    title: 'Stone paper scissor',
    Techstack: "Python",
    github: "https://github.com/Sominath1212/PYTHON.git",
    description: "Stone paper scissor game in python this is console based game"
  },
  {
    title: 'Guessing the word',
    Techstack: "Python",
    github: "https://github.com/Sominath1212/PYTHON.git",
    description: "In this game a robot give the word to the user and user can guess the word based on their vocablary"
  },
  {
    title: 'Tic Tack Toe',
    Techstack: "Python",
    github: "https://github.com/Sominath1212/PYTHON.git",
    description: "this is a tic tack toe game i was developed in python this is a console based project"
  },
  {
    title: 'snack ladder',
    Techstack: "Python",
    github: "https://github.com/Sominath1212/PYTHON.git",
    description: "this is a snack ladder game developed in python"
  },


]
function Projects() {
  return (
    <div name="projects" className='bg-[#6DAFFE] p-5 pt-[4rem] space-y-2'>
      <hr className=' h-[1px] ' />
      <h2 className='text-3xl text-[#437fc7]'> Peojects:</h2>
      <hr className=' h-[1px] ' />
      <div className="flex flex-wrap justify-center  text-black">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div>
        <hr />
        <h2 className='text-xl underline my-5'>Here I have build a some minor project :</h2>
        <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center gap-4 ' >
          {
            minorProjects.map((mp, i) => {
              return (
                <div className=' drop-shadow-md border space-y-4 p-5 self-center min-h-48   rounded-lg max-w-[300px]  ' key={i}>
                  <h1 className='text-md font-bold uppercase'>{mp?.title}</h1>
                  <p className='text-sm font-thin text-gray-700 line-clamp-2'>{mp?.description}</p>
                  <p>Tech Stack:{mp?.Techstack}</p>
                  <a href={mp?.github}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >GitHub Repo</a>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Projects;
