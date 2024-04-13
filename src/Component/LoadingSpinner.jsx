import React from 'react';

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
  </div>
);

export default LoadingSpinner;
