import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { NavLinksItem } from "../MyData";
import Themes from './Themes';

const Header = ({ onSelectionChange }) => {
const [isClose, setIsClose] = useState(false);
const [isActive, setIsActive] = useState("About");

// Toggle Bar for Mobile devices
const handleToggle = () => {
setIsClose(!isClose);
};



return (
<>
  <header
    className='bg-teal-900 text-white md:w-1/5 sm:w-full md:h-screen sm:h-auto sticky-top flex md:flex-col md:justify-center md:items-center navItem'>
    <nav className='flex md:flex-col items-center justify-between gap-3 px-3 px-lg-0 w-full'>
      <div className='navbar-brand hover:cursor-pointer'>

        {/* Image for Desktop  */}
        <figure className='rounded-full h-40 border-8 border-solid m-0 border-teal-700 overflow-hidden md:block hidden shadow-md shadow-red-500'>
          <img src='asset/images/suraj.png' alt='Suraj_Img' className="scale-100 hover:scale-110 h-full w-full" />
        </figure>

        {/* Img For Mobile */}
        <img src='asset/images/logo.gif' alt='Name' className='md:hidden block w-1/2' />
      </div>

      {/* toggle Button For Mobile Device */}
      <button className='md:hidden block' onClick={handleToggle}>
        {!isClose ? (
        <HiBars3BottomRight className='text-5xl max-[639px]:text-[2.71em]' />
        ) : (
        <TfiClose className='text-3xl text-white animate-pulse' />
        )}
      </button>

      {/* Nav Link Item */}
      <ul className={`list-none md:flex ${ !isClose ? "hidden" : "" } flex-col gap-2 font-["Inconsolata"] md:relative md:top-0 md:w-auto sm:absolute sm:top-10 sm:left-0 sm:w-full max-[639px]:absolute max-[639px]:top-10 max-[639px]:left-0 max-[639px]:w-full  text-uppercase
        hover:cursor-pointer sm:bg-teal-900 max-[639px]:bg-teal-900 md:bg-transparent m-0 p-0`}>
        {
        NavLinksItem.map(({id,name,icon})=> {
        return (
          <li className={`${isActive===name ? `bg-teal-700 text-lg shadow-md shadow-red-500` :""} lg:px-6 md:px-2 py-1 rounded-2xl transition-all hover:bg-teal-600 hover:transform-gpu hover:translate-x-1 hover:shadow-md hover:shadow-red-300 md:mt-0 md:mb-0 md:ml-0 md:mr-0 sm:mt-2 sm:mb-2 sm:ml-4 sm:mr-4 max-[639px]:mt-2 max-[639px]:mb-2 max-[639px]:ml-4 max-[639px]:mr-4`}
          onClick={() => onSelectionChange(name, setIsActive(name))} key={id}>
          <Link className='no-underline text-white flex md:justify-start md:ml-0 sm:justify-start sm:ml-4 max-[639px]:ml-4 gap-2 items-center'><span>{icon}</span>{name}</Link>
        </li>
        )
        })
        }

      </ul>
    </nav>
  </header>


    {/*  Themes  */}
  <Themes />
</>
);
};

export default Header;