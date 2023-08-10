import React from 'react';

export const SkillsItem = ({ image, description }) => {
  return (
    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
      <img className='w-20 mx-auto' src={image} alt={`${description} icon`} />
      <p className='my-4'>{description}</p>
    </div>
  );
};
