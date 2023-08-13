import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#424549] flex justify-center items-center p-4'>
      <form
        method='POST'
        action='https://getform.io/f/5b64bad7-b13a-4b76-b87e-307b5c814b06'
        className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#18fff9] text-yellow-300'>
            Contact
          </p>
          <p className='text-yellow-500 py-4'>
            Submit the form below or shoot me an email -
            chambers.chase@gmail.com
          </p>
        </div>
        <input
          className='bg-gray-200 p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-gray-200'
          type='text'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-gray-200 p-2'
          name='message'
          rows='10'
          placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
