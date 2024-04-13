import React from "react";
import { ExperienceData } from "../MyData";

const Experience = () => {
return (
<>
    <section>
        <h2 className='text-5xl max-[639px]:text-3xl mb-4 text-rose-800 uppercase main-font font-black'>
            Experience
        </h2>

        {ExperienceData.map((data) => {
        const { id, company, position, desc1, desc2, desc3, duration, icon } = data;
        return (
        <div className='flex flex-column flex-md-row mb-5' key={id}>
            <div className='me-auto md:w-3/4 sm:w-full max-[639px]:w-full'>
                <h3 className='mb-0 uppercase text-2xl font-["Roboto Slab"] font-medium'>
                    {company}
                </h3>
                <div className='mb-3 text-xs uppercase text-gray-400 ["Roboto Slab"] font-normal'>
                    {position}
                </div>
                <ul className="p-0 m-0">
                    {desc1=== '' ? '' : <li className="p-2 flex gap-2 items-center font-['Quicksand']"><span>{icon}</span> {desc1} </li>}
                    {desc2=== '' ? '' : <li className="p-2 flex gap-2 items-center font-['Quicksand']"><span>{icon}</span> {desc2} </li>}
                    {desc3=== '' ? '' : <li className="p-2 flex gap-2 items-center font-['Quicksand']"><span>{icon}</span> {desc3} </li>}
                </ul>
            </div>
            <div className='md:text-end'>
                <span className='text-teal-800 font-["Roboto Slab"] font-medium'>
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

export default Experience;