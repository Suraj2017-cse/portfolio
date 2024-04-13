import React from "react";

const Hobbies = () => {
return (
<>
  <section className="sm:mt-4 max-[639px]:mt-4">
    <div className='flex flex-column '>
      <h2 className='md:text-7xl mb-4 text-rose-800 uppercase'>Hobbies</h2>

      <ul className='fa-ul font-["Courgette"] mb-0'>
        <li>
          <i className='fa-li fa fa-check text-red-300'></i>
          Writing Coding
        </li>
        <li>
          <i className='fa-li fa fa-check text-red-300'></i>
          Cycling
        </li>
        <li>
          <i className='fa-li fa fa-check text-red-300'></i>
          Playing Cricket
        </li>
      </ul>
    </div>
  </section>
</>
);
};

export default Hobbies;