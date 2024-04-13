import React, { useState, useEffect } from 'react';

const FormSubmitMsg = ({ message, show, type }) => {
  const [showCard, setShowCard] = useState(show);

  useEffect(() => {
    setShowCard(show);
  }, [show]);

  return (
    <div className={`fixed top-5 right-5 transition-transform duration-500 ${showCard ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className={`${type === 'success' ? 'bg-green-500': 'bg-red-500'} text-white p-4 rounded-lg shadow-lg`}>
        <h2 className="text-lg font-bold">{type === 'success' ? 'Success!' : 'Error!'}</h2>
        <p>{message}</p>

      </div>
    </div>
  );
};

export default FormSubmitMsg;
