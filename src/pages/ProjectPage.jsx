import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LuArrowBigLeft, LuCheckCheck, LuUserCheck } from 'react-icons/lu'
import { doneProject } from '../utils'
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

const ProjectPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const ProjPage = doneProject.find((x) => x.id === parseInt(id))

    if (!ProjPage) {
      return (
        <div className='h-[50vh] mt-10'>
          <button onClick={() => navigate('/Projects')} className='flex items-center ml-8 my-10 bg-blue-600/80 text-white p-2 rounded-lg'>
              <LuArrowBigLeft  className='text-xl'/>
              Back to Project
          </button>
          <h className="text-4xl pt-10 flex  justify-center items-center">
            Project Not Found !
          </h>
        </div>
      );
    }

  return (
    <div>
      <button onClick={() => navigate('/Projects')} className='font-Raleway flex items-center ml-8 my-10 bg-blue-600/80 text-white p-2 rounded-lg'>
            <LuArrowBigLeft  className='text-xl'/>
            Back to Project
        </button>
        <div className='my-20 pt-14 pb-5 bg-slate-200/20  px-8'>
          <span className='bg-blue-600 text-white rounded-xl py-1 px-2 font-Raleway text-sm'>{ProjPage.Status}</span>
          <h1 className='mt-2 text-5xl sma:text-3xl mda:text-3xl font-semibold font-Raleway'>{ProjPage.Title}</h1>
          <h4 className='text-xl font-Raleway leading-7 w-[80%] mt-5 tracking-wide text-slate-500'>{ProjPage.intro}</h4>
        <div className='flex gap-4 my-5'>
          <span className='flex items-center gap-2'>
            <FaMapMarkerAlt className='text-sm text-neutral-600'/>
            <span className='font-Raleway'>{ProjPage.location}</span>
          </span>
          <span className='flex items-center gap-2'>
            <FaCalendar className='text-sm text-neutral-600'/>
            <span className='font-Raleway'>{ProjPage.date}</span>
          </span>
          <span className='flex items-center gap-2'>
            <FaClock className='text-sm text-neutral-600'/>
            <span className='font-Raleway'>{ProjPage.duration}</span>
          </span>
          <span className='flex items-center gap-2 font-Raleway'>
           <FaUsers className='text-sm text-neutral-600'/>
            {ProjPage.engineers} Engineers
          </span>
        </div>
        <div className='text-xl font-normal font-Oswald'>
          Architect: 
          <span className='ml-1 font-light text-lg font-Raleway'>
             {ProjPage.Architect}
          </span>
        </div>
        </div>
        <div className='px-6  bg-center mb-6 h-[70vh]'>
          <img src={ProjPage.image} loading='lazy' className='lg:h-full bg-center lg:w-[90%] bg-cover rounded-md' alt="" />
        </div>
        <div className=' my-10 px-6'>
          <div className='lg:w-[90%]'>
            <h1 className='text-2xl font-Oswald font-semibold mb-5'>Project Overview</h1>
            <p className='text-base font-Raleway font-normal mb-3'>{ProjPage.Overview}</p>
            <p className='text-base font-Raleway font-normal'>{ProjPage.Overview2}</p>
          </div>
          <div className='mt-5 px-2 py-2'>
            <h1 className='text-2xl font-Oswald font-semibold mb-3'>Client</h1>
            <span className='font-Raleway'>{ProjPage.Client}</span>
          </div>
        </div>
        <div className='mb-8 mt-20'>
          <div className='flex justify-center gap-5'>
          {
            ProjPage.sideImage.map((x) => (
                <img key={x.id} loading='lazy' className='w-[350px] h-[300px] shadow-lg rounded-md' src={x.img} alt="" />
            ))
          }
              </div>
        </div>
    </div>
  )
}

export default ProjectPage