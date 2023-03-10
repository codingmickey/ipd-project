import React from 'react';

export const Loader = ({ show }) => {
  return show ? (
    <div className='flex justify-center items-center space-x-2'>
      <div
        className='spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0 text-blue-300'
        role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  ) : null;
};
