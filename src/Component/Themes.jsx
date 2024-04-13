import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import './themes.css';

const Themes = () => {
  const [isThemeVisible, setIsThemeVisible] = useState(false);

  // Toggle Theme Visibility
  const toggleThemeVisibility = () => {
    setIsThemeVisible(!isThemeVisible);
  };

  // Set Theme
  const setTheme = (theme) => {
    document.body.className = ''; // Clear all classes
    if (theme) {
      document.body.classList.add(theme);
    }
  };

  // Define Theme Buttons
  const themes = [
    { id: 'light-mode', color: 'bg-white' },
    { id: 'dark-mode', color: 'bg-black' },
    { id: 'lime-mode', color: 'bg-lime-300' },
    { id: 'green-mode', color: 'bg-green-900' }
  ];

  return (
    <div className={`fixed bg-teal-900 ${!isThemeVisible ? "-right-48" : "right-0"} bottom-8 text-white z-10`}>
      <ul className='p-2 flex gap-3 items-center m-0 cursor-pointer'>
        <li onClick={toggleThemeVisibility} title="Toggle Theme">
          {isThemeVisible ? <MdArrowForwardIos className='text-2xl' /> : <MdArrowBackIos className='text-2xl' />}
        </li>
        {themes.map((theme) => (
          <li key={theme.id}
              onClick={() => setTheme(theme.id === 'light-mode' ? '' : theme.id)}
              className={`${theme.color} w-7 h-7 border-4 hover:-translate-y-1 shadow-md border-solid border-gray-500 rounded-full`}>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Themes;
