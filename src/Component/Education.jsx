import React from "react";
import { EducationData } from "../MyData";

const Education = () => {
  return (
    <>
      <section> 
        <h2 className='text-7xl max-[639px]:text-3xl mb-4 text-rose-800 uppercase main-font font-black'>
          EDUCATION
        </h2>

        {EducationData.map((data) => {
          const { id, organisation, stream, branch, marks, duration } = data;
          return (
            <div className='flex flex-column flex-md-row mb-5' key={id}>
              <div className='me-auto'>
                <h3 className='mb-0 uppercase text-4xl font-["Roboto Slab"] font-medium'>
                  {organisation}
                </h3>
                <div className='mb-3 text-2xl uppercase text-gray-500 ["Roboto Slab"] font-normal'>
                  {stream}
                </div>
                <div className='text-gray-400 text-xl font-family font-["Roboto Slab"] font-light'>
                  {branch}
                </div>
                <p className='text-gray-400 text-xl min-font min-font font-extralight'>
                  {marks < 11 ? `CGPA: ${marks}` : `Percentage: ${marks}`}
                </p>
              </div>
              <div className='md:text-end'>
                <span className='text-teal-800 font-["Roboto Slab"] font-light'>
                  {duration}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Education;
