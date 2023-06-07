import React from "react";
import { Projects_Data } from "../MyData";
import { Link } from "react-router-dom";

const Projects = ({ links }) => {
  return (
    <>
      <section className={links === 6 ? "mt-4" : "hidden"}>
        <div className='flex flex-column '>
          <h2 className='md:text-7xl mb-4 text-rose-800 uppercase'>Projects</h2>

          <ul className='flex flex-col gap-4'>
            {Projects_Data.map((data) => {
              const {
                id,
                title,
                description,
                img_link,
                github_link,
                live_link,
              } = data;
              const myClass = `md:col-span-6 col-span-full gap-3 flex flex-col md:mb-0 mb-4 order-1 ${
                id % 2 === 0 ? "order-2" : "order-3"
              }`;
              const my_Class = `md:col-span-6 sm:col-span-full flex md:justify-end sm:justify-center border-2 p-2 rounded-3xl order-0 drop-shadow ${
                id % 2 === 0 ? "order-3" : "order-2"
              }`;
              return (
                <li
                  className='md:grid grid-cols-12 items-center gap-4'
                  key={id}>
                  <div className={myClass}>
                    <h3 className='sub-font font-medium'>{title}</h3>
                    <p>{description}</p>
                    <div className='flex gap-6'>
                      <Link
                        className='no-underline capitalize text-xl border border-slate-950 text-rose-600 hover:bg-rose-600 transition-all hover:text-white px-8 py-1 rounded-full'
                        to={github_link} target="_blank">
                        code
                      </Link>
                      <Link
                        className='no-underline capitalize text-xl border border-slate-950 text-rose-600 hover:bg-rose-600 transition-all hover:text-white px-8 py-1 rounded-full'
                        to={live_link} target="_blank">
                        Live
                      </Link>
                    </div>
                  </div>
                  <div className={my_Class}>
                    <img
                      src={img_link}
                      alt={title}
                      className='rounded-3xl order-4'
                    />
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
