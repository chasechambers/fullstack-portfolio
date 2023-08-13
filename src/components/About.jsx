const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1e2124] text-yellow-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#18fff9]'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold text-yellow-500'>
            <p>Hi. I'm Chase, nice to meet you. Please take a look around.</p>
          </div>
          <div className='text-yellow-500'>
            <p>
              I'm passionate about building excellent software that improves the
              lives of those around me. I specialize in creating software for
              clients ranging from indvidiauls and small-business all the way to
              large enterprise corporations. What would you do if you had a
              software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
