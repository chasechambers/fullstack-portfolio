import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#141415]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-yellow-200'>
          Chase Chambers
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-yellow-400'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-yellow-500 py-4 max-w-[700px]'>
          I'm a full-stack developer speciailizing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link
            to='projects'
            className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-300'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
