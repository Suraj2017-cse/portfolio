import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import './themes.css';


const Themes = () => {
  const [Theme, setTheme] = useState(false);

  // Toggle Theme
const handleTheme = () => {
setTheme(!Theme);
};

  // Theme Types
const handleDefaultClick = () => {
document.body.classList.remove("dark-mode");
document.body.classList.remove("green-mode");
document.body.classList.remove("lime-mode");
};

const handleDarkClick = () => {
document.body.classList.add("dark-mode");
document.body.classList.remove("green-mode");
document.body.classList.remove("lime-mode");
};

const handleLimeClick = () => {
document.body.classList.add("lime-mode");
document.body.classList.remove("dark-mode");
document.body.classList.remove("green-mode");
};

const handleGreenClick = () => {
document.body.classList.add("green-mode");
document.body.classList.remove("lime-mode");
document.body.classList.remove("dark-mode");
};
  
  return (
    <>
    <div className={`fixed bg-teal-900 ${ !Theme ? "-right-48" : "right-0" } bottom-8 text-white z-10`}>
    <ul className='p-2 flex gap-3 items-center m-0 cursor-pointer'>
      <li onClick={handleTheme} title="Theme">
        {!Theme ? (
        <MdArrowBackIos className='text-2xl' />
        ) : (
        <MdArrowForwardIos className='text-2xl' />
        )}
      </li>
      <li onClick={handleDefaultClick} className='w-7 h-7 bg-white border-4 hover:-translate-y-1 shadow-md shadow-white border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleDarkClick} className='w-7 h-7 bg-black border-4 hover:-translate-y-1 shadow-md shadow-black border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleLimeClick} className='w-7 h-7 bg-lime-300 border-4 hover:-translate-y-1 shadow-md shadow-lime-300 border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleGreenClick}
        className='w-7 h-7 bg-green-900 border-4 hover:-translate-y-1 shadow-md shadow-green-950 border-solid border-gray-500 rounded-full'></li>
    </ul> 
  </div>
    </>
  )
}


export default Themes;