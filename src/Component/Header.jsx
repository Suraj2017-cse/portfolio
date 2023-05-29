import React, { useState } from "react";
import "./Header.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { NavLinksItem } from "../MyData";

const Header = ({ handleClick }) => {
  const [isClose, setIsClose] = useState(false);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setIsClose(!isClose);
  };

  const handleShow = () => {
    setShow(!show);
  };

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

  const my_Class = `fixed bg-teal-900 ${
    !show ? "-right-48" : "right-0"
  } bottom-8 text-white`;

  return (
    <>
      <header className='bg-teal-900 text-white md:w-1/5 sm:w-full md:h-screen sm:h-auto sticky-top flex md:flex-col md:justify-center md:items-center navItem'>
        <nav className='flex md:flex-col items-center justify-between gap-4 px-3 px-lg-0 w-full'>
          <div className='navbar-brand hover:cursor-pointer'>
            <img
              src='asset/image/suraj.png'
              alt='Suraj_Img'
              className='rounded-full h-40 p-2 bg-teal-700 drop-shadow md:block hidden'
            />
            <img
              src='asset/image/logo.gif'
              alt='Name'
              className='md:hidden block w-1/2'
            />
          </div>
          <button className='md:hidden block' onClick={handleToggle}>
            {!isClose ? (
              <HiBars3BottomRight className='text-5xl' />
            ) : (
              <TfiClose className='text-3xl text-white' />
            )}
          </button>
          <ul
            className={`list-none md:flex ${
              !isClose ? "hidden" : ""
            } flex-col gap-2 navFont text-uppercase hover:cursor-pointer sm:bg-teal-900`}>
              {
                NavLinksItem.map(({id,name})=> {
                  return (
                    <li onClick={() => handleClick(id)} key={id}>
              <Link className='no-underline text-white'>{name}</Link>
            </li>
                  )
                })
              }
          </ul>
        </nav>
      </header>

      <div className={my_Class}>
        <ul className='p-2 flex gap-3 items-center m-0 cursor-pointer'>
          <li onClick={handleShow} title="Mode">
            {!show ? (
              <MdArrowBackIos className='text-2xl' />
            ) : (
              <MdArrowForwardIos className='text-2xl' />
            )}{" "}
          </li>
          <li
            onClick={handleDefaultClick}
            className='w-7 h-7 bg-white border-4 border-solid border-gray-500 rounded-full'></li>
          <li
            onClick={handleDarkClick}
            className='w-7 h-7 bg-black border-4 border-solid border-gray-500 rounded-full'></li>
          <li
            onClick={handleLimeClick}
            className='w-7 h-7 bg-lime-300 border-4 border-solid border-gray-500 rounded-full'></li>
          <li
            onClick={handleGreenClick}
            className='w-7 h-7 bg-green-900 border-4 border-solid border-gray-500 rounded-full'></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
