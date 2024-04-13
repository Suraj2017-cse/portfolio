import React from "react";
import { CertificationData } from "../MyData";

const Certification = () => {
  return (
    <>
      <section>
        <div className='my-auto'>
          <h2 className='md:text-7xl max-[639px]:text-4xl text-rose-800 uppercase font-["Roboto Slab"] font-black'>
            Certifications
          </h2>

          {CertificationData.map(({ id, organisation, course, duration }) => {
            return (
              <div
                className='resume-item flex flex-column flex-md-row mb-12'
                key={id}>
                <div className='me-auto'>
                  <h3 className='mb-0 text-4xl uppercase sub-font font-medium'>
                    {course}
                  </h3>
                  <div className='mb-3 text-2xl uppercase text-gray-400 font-["Roboto Slab"] font-light'>
                    {organisation}
                  </div>
                </div>
                <div className='md:text-end'>
                  <span className='text-teal-800 font-["Roboto Slab"] font-light'>
                    {duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Certification;
