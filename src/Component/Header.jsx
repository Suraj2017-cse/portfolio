import React, { useState } from "react";
import "./Header.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { NavLinksItem } from "../MyData";
import Themes from './Themes';

const Header = ({ handleClick }) => {
const [isClose, setIsClose] = useState(false);
const [isActive, setIsActive] = useState(1);

// Toggle Bar for Mobile devices
const handleToggle = () => {
setIsClose(!isClose);
};


  // setTimeout(() => {
  //   if(handleClick){
  //     setIsClose(!isClose);
  //   }
  // }, 5000)


return (
<>
  <header
    className='bg-teal-900 text-white md:w-1/5 sm:w-full md:h-screen sm:h-auto sticky-top flex md:flex-col md:justify-center md:items-center navItem'>
    <nav className='flex md:flex-col items-center justify-between gap-3 px-3 px-lg-0 w-full'>
      <div className='navbar-brand hover:cursor-pointer'>
        {/* Image for Desktop  */}
        <figure className='rounded-full h-40 border-8 border-solid m-0 border-teal-700 drop-shadow md:block hidden shadow-md shadow-red-500'>
          <img src='asset/images/suraj.png' alt='Suraj_Img' />
        </figure>
        {/* Img For Mobile */}
        <img src='asset/images/logo.gif' alt='Name' className='md:hidden block w-1/2' />
      </div>

      {/* toggle Button For Mobile Device */}
      <button className='md:hidden block' onClick={handleToggle}>
        {!isClose ? (
        <HiBars3BottomRight className='text-5xl' />
        ) : (
        <TfiClose className='text-3xl text-white' />
        )}
      </button>
      {/* Nav Link Item */}
      <ul className={`list-none md:flex ${ !isClose ? "hidden" : "" } flex-col gap-2 navFont text-uppercase
        hover:cursor-pointer sm:bg-teal-900 m-0 p-0`}>
        {
        NavLinksItem.map(({id,name,icon})=> {
        return (
        <li className={`${isActive===id ? `bg-teal-700 text-lg shadow-md shadow-red-500` :""} lg:px-6 md:px-2 py-1 rounded-2xl transition-all hover:bg-teal-700 hover:transform-gpu hover:translate-x-1 hover:shadow-md hover:shadow-red-900`}
          onClick={()=> handleClick(id, setIsActive(id))} key={id}>
          <Link className='no-underline text-white flex md:justify-start justify-center gap-2 items-center'><span>{icon}</span>{name}</Link>
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