import React from 'react';
import usePopcorn from '../assets/usePopcorn.jpg';
import farAway from '../assets/farAway.jpg';
import eatNSplit from '../assets/eat-n-split.jpg';
import ruleOfCool from '../assets/ruleOfCool.jpg';
import blackjack from '../assets/blackjack.jpg';
import javascriptQuiz from '../assets/javascriptQuiz.jpg';
import { ProjectCard } from './ProjectCard';

const projectInfo = [
  {
    title: 'usePopcorn',
    codeUrl: 'https://github.com/chasechambers/usePopcorn',
    demoUrl: 'https://chasechambers.github.io/usePopcorn',
    image: usePopcorn,
  },
  {
    title: 'Far Away',
    codeUrl: 'https://github.com/chasechambers/PackYourBags',
    demoUrl: 'https://chasechambers.github.io/PackYourBags',
    image: farAway,
  },
  {
    title: 'Eat-N-Split',
    codeUrl: 'https://github.com/chasechambers/Eat-n-Split',
    demoUrl: 'https://chasechambers.github.io/Eat-n-Split',
    image: eatNSplit,
  },
  {
    title: 'Dungeons and Dragons Compendium',
    codeUrl: 'https://github.com/chasechambers/Full-Circle',
    demoUrl: 'https://rule-of-cool-779c8e563c30.herokuapp.com',
    image: ruleOfCool,
  },
  {
    title: 'Blackjack',
    codeUrl: 'https://github.com/chasechambers/Team-BlackJack-People',
    demoUrl: 'https://chasechambers.github.io/Team-BlackJack-People',
    image: blackjack,
  },
  {
    title: 'Javascript Quiz',
    codeUrl: 'https://github.com/chasechambers/JavaScript-Quiz',
    demoUrl: 'https://chasechambers.github.io/Javascript-Quiz',
    image: javascriptQuiz,
  },
];

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full md:h-screen text-yellow-500 bg-[#36393e]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-yellow-300 border-[#18fff9]'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent projects</p>
        </div>
        {/* Project Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          {projectInfo.map(project => (
            <ProjectCard
              title={project.title}
              codeUrl={project.codeUrl}
              demoUrl={project.demoUrl}
              image={project.image}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
