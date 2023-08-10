import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import HTML from '../assets/html.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>//These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={Javascript}
              alt='Javascript icon'
            />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='Github icon' />
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='Node icon' />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt='Mongo icon' />
            <p className='my-4'>Mongo</p>
          </div>
          <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt='ReactImg icon' />
            <p className='my-4'>React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
