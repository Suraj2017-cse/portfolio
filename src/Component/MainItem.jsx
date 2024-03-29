import React from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Certification from "./Certification";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import ContactUs from "./ContactUs";


const MainItem = ({ link }) => {
  return (
    <>
      <main className='md:w-4/5 w-full px-4 sm:mt-4'>
        <About links={link} />
        <Education links={link} />
        <Skills links={link} />
        <Hobbies links={link} />
        <Certification links={link} />
        <Projects links={link} />
        <ContactUs links={link} />
      </main>
    </>
  );
};

export default MainItem;
