import React, { useState } from 'react'
import { motion } from 'motion/react'
import { doneProject } from '../utils'
import { NavLink } from 'react-router-dom'
import { FaCalendar, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const handleClick = (category) => {
    setFilter(category)
  }

  const filteredData = filter === 'all' ? doneProject : doneProject.filter(item => item.Category ===filter)

  return (
    <div>
      <div className="mt-20 mb-12 py-6 bg-slate-100/20">
        <h1 className="text-5xl font-Oswald font-medium text-center mt-10">
          Our <span className="text-blue-500">Projects </span>
        </h1>
        <p className="text-lg font-Raleway text-center flex justify-center items-center mt-5 px-4">
          Explore our portfolio of successful engineering projects across
          various industries and disciplines. Each project represents our
          commitment to excellence and innovation.
        </p>
      </div>

      <div>
        <div className="text-center mt-5 mb-10  ">
          <button
            className="mr-5 sma:mb-3 mda:mb-3 border border-transparent Projectbutton shadow-md font-Manrope border-black p-2 rounded-md"
            onClick={() => handleClick("all")}
          >
            ALL
          </button>
          <button
            className="mr-5 sma:mb-3 mda:mb-3 border border-transparent Projectbutton font-Manrope border-black p-2 rounded-md"
            onClick={() => handleClick("Mechanical")}
          >
            Mechanical Engineering
          </button>
          <button
            className="mr-5 sma:mb-3 mda:mb-3 border border-transparent Projectbutton font-Manrope border-black p-2 rounded-md"
            onClick={() => handleClick("Structural")}
          >
            Structural Engineering
          </button>
          <button
            className="mr-5 sma:mb-3 mda:mb-3 border border-transparent Projectbutton font-Manrope border-black p-2 rounded-md"
            onClick={() => handleClick("Electrical")}
          >
            Electrical Engineering
          </button>
        </div>
        <div className=' pt-10 pb-8'>
          <div className="grid lg:grid-cols-4 sma:grid-cols-1 mda:grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
            {filteredData.map((x) => (
              <motion.div
                key={x.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: x.id * 0.3 }}
              >
                <NavLink to={`/ProjectPage/${x.id}`}>

                <div key={x.id} className='overflow-hidden pb-4 lg:h-[500px] shadow-md rounded-md'>
                  <div className='relative'>
                    <img src={x.image} loading='lazy' className='h-48 rounded-md w-full' alt="" />
                    <span className='absolute top-2 bg-blue-600 text-white rounded-3xl px-3 right-1 text-xs font-Raleway'>{x.Status}</span>
                  </div>
                  <div className='px-4'>
                    <h1 className='text-2xl font-Oswald text-blue-500'>{x.Title}</h1>
                    <p className='text-xs font-Manrope my-3'>{x.services}</p>
                    <div className='flex justify-between'>
                    
                      <div className='flex mt-2 justify-between gap-1 items-center'>
                        <FaMapMarkerAlt className='text-sm text-neutral-600'/>
                        <span className='text-xs uppercase text-neutral-500'>{x.location}</span>
                      </div>
                      <div className='flex mt-2 justify-between gap-2 items-center'>
                        <FaCalendar className='text-sm text-neutral-600'/>
                        <span className='text-xs uppercase text-neutral-500'>{x.date}</span>
                      </div>
                    </div>
                    <p className='text-sm font-Manrope leading-5 mt-3'>{x.intro}</p>
                    <div className='flex justify-between'>
                      <div className='flex justify-around font-Oswald text-sm font-light gap-2 items-center '>
                        <FaUsers />
                        {x.engineers} Engineers
                      </div>
                      <span className='font-Oswald text-sm font-light'>{x.duration}</span>
                    </div>
                    <button className='bg-blue-600 text-white font-Oswald mt-5 text-center px-5 rounded-md'>View Details &rarr;</button>
                  </div>
                </div>
                </NavLink>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects