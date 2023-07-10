import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const Mode = () => {
  const [mode, setMode] = useState(false);

  // Toggle Mode
const handleMode = () => {
setMode(!mode);
};

  // Mode Types
const handleDarkClick = () => {
document.body.classList.add("dark-mode");
document.body.classList.remove("green-mode");
document.body.classList.remove("lime-mode");
};

const handleDefaultClick = () => {
document.body.classList.remove("dark-mode");
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
    <div className={`fixed bg-teal-900 ${ !mode ? "-right-48" : "right-0" } bottom-8 text-white z-10`}>
    <ul className='p-2 flex gap-3 items-center m-0 cursor-pointer'>
      <li onClick={handleMode} title="Mode">
        {!mode ? (
        <MdArrowBackIos className='text-2xl' />
        ) : (
        <MdArrowForwardIos className='text-2xl' />
        )}{" "}
      </li>
      <li onClick={handleDefaultClick} className='w-7 h-7 bg-white border-4 border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleDarkClick} className='w-7 h-7 bg-black border-4 border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleLimeClick} className='w-7 h-7 bg-lime-300 border-4 border-solid border-gray-500 rounded-full'>
      </li>
      <li onClick={handleGreenClick}
        className='w-7 h-7 bg-green-900 border-4 border-solid border-gray-500 rounded-full'></li>
    </ul> 
  </div>
    </>
  )
}


export default Mode;