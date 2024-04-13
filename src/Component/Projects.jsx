import React, { useState } from "react";
import { Projects_Data } from "../MyData";
import { Link } from "react-router-dom";
import { BsGithub, BsLink } from "react-icons/bs";

// Collect All Languages Categories
const allLanguages = ['All', ...new Set(Projects_Data.map((item) =>item.language))]

const Projects = () => {
const [projectData, setProjectData] = useState(Projects_Data);
const [projectLang, setProjectLang] = useState(allLanguages.sort());

// Filter Project Item Categories
const filterItem = (language) => {
if(language === 'All') {
setProjectData(Projects_Data);
return;
}
const newOptions = Projects_Data.filter(
(item) => item.language === language
);
setProjectData(newOptions);
};

return (
<>
  <section className="mt-4">
    <div className='flex flex-column '>
      <h2 className='md:text-7xl mb-4 text-rose-800 uppercase'>Projects</h2>

      {/* Select Projects */}
      <div className="text-center mb-4">
        <select name="" id=""
          className="bg-teal-900 text-white border border-gray-300 rounded-lg block lg:w-1/4 md:w-1/2 w-full m-auto capitalize p-2.5 focus:outline-none"
          onChange={(e)=>filterItem(e.target.value)}>
          {
          projectLang.map((lang, index)=>{
          return(
          <option value={lang} className="capitalize text-white checked:bg-teal-700" key={index}>{lang}</option>
          )
          })
          }
        </select>
      </div>

      <ul className='flex flex-col gap-4 p-0'>
        {projectData.map((data) => {
        const {
        id,
        title,
        description,
        img_link,
        code_link,
        live_link,
        } = data;
        return (
        <li className='grid md:grid-cols-12 items-center gap-4' key={id}>
          {/* Project Content */}
          <div className={`md:col-span-6 col-span-full gap-3 flex flex-col md:mb-0 mb-4 sm:order-2 max-[639px]:order-2  ${ id % 2===0
            ? "md:order-2" : "md:order-3" }`}>
            <h3 className='font-["Roboto Slab"] font-medium'>{title}</h3>
            <p>{description}</p>
            <div className='flex gap-6'>
              <Link
                className='no-underline text-4xl border p-2 bg-white text-red-500 hover:-translate-y-1 shadow-md shadow-red-500 rounded-full'
                to={code_link} target='_blank' title="github Link">
              <BsGithub />
              </Link>
              <Link
                className='no-underline text-4xl border p-2 bg-white text-red-500 hover:-translate-y-1 shadow-md shadow-red-500 rounded-full'
                to={live_link} target='_blank' title="Live Website">
              <BsLink />
              </Link>
            </div>
          </div>
          {/* Project Image */}
          <div className={`md:col-span-6 sm:col-span-full flex md:justify-end sm:justify-center z-0 shadow-inner
            shadow-teal-700 hover:shadow-md overflow-hidden border-2 p-2 rounded-3xl sm:order-1 max-[639px]:order-1 ${id % 2===0 ? "md:order-3"
            : "md:order-2" }`}>
            <img src={img_link} alt={title} className='rounded-3xl order-4 w-full h-full scale-100 hover:scale-110' />
          </div>
        </li>
        );
        })}
      </ul>
    </div>
  </section>
</>
);
};

export default Projects;