import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import HTML from '../assets/html.png';
import { SkillsItem } from './SkillsItem';

const skillList = [
  {
    description: 'Javascript',
    image: Javascript,
  },
  {
    description: 'React',
    image: ReactImg,
  },
  {
    description: 'Node',
    image: Node,
  },
  {
    description: 'Github',
    image: Github,
  },
  {
    description: 'Mongo',
    image: Mongo,
  },
  {
    description: 'HTML',
    image: HTML,
  },
];

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          {skillList.map(skill => (
            <SkillsItem
              description={skill.description}
              image={skill.image}
              key={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
