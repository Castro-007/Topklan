import React from 'react'
import { NavLink } from 'react-router-dom'
import { ServiceCont, ServiceProc } from '../utils'

const Services = () => {
  return (
    <div>
      <div className='mt-20 mb-12 py-6 bg-slate-100/20'>
        <h1 className="text-5xl font-Oswald font-medium text-center mt-10">Our <span className='text-blue-500'>Engineering </span>Services</h1>
        <p className='text-lg font-Raleway text-center flex justify-center items-center mt-5 px-4'>Comprehensive engineering solutions across multiple disciplines, delivered with <br /> precision and expertise. From concept to completion, we provide world-class engineering services.</p>
      </div>
      <div className='mb-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-around px-4'>
          {
            ServiceCont.map((x) => (
              <NavLink to={`/ServicePage/${x.id}`} key={x.id}>

              <div key={x.id} className={`${x.containerStyles} group shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300`}>
                <span className={`   rounded-md`}>
                  <x.socialIcon className={`${x.iconStyles} group-hover:${x.bgColor} group-hover:text-white transition-all delay-100 bg-[#f9f9f9] text-5xl rounded-md p-2`}/>
                </span>
                <h1 className={`${x.color} text-2xl font-semibold font-Oswald my-3`}>{x.Name}</h1>
                <p className='font-Raleway text-sm '>{x.pTxt}</p>
                <ul className='mt-4 mb-3 space-y-2'>
                  {
                    x.listTxt.map((y) => (
                      <li key={y.id} className='flex items-center text-sm font-Raleway'>
                        <span className={`${x.color} mr-2 `}>•</span>
                        {y.liTxt}
                      </li>
                    ))
                  }
                </ul>
                  <button className={`text-center ${x.bgColor} text-white py-2 px-4 rounded-md  `}>Learn More</button>

              </div>
                </NavLink>
            ))
          }
        </div>
      </div>
      <div className='mt-20 mb-12 py-6 bg-slate-100/20'>
          <div className='text-center'>
            <h1 className='text-4xl font-Oswald font-semibold'>Our Engineering Process</h1>
            <p className='text-base  font-Raleway my-5'>A systematic approach to delivering exceptional engineering solutions</p>
          </div>
          <div>
            <div className='flex mt-16 justify-around  px-6 sma:grid mda:grid sma:grid-cols-2 mda:grid-cols-2 md:grid-cols-3'>
            {
              ServiceProc.map((x) => (
                <div className='text-center' key={x.id} >
                  <h2 className='text-2xl font-Oswald rounded-full py-2 inline px-4 bg-blue-600 mb-4 text-white'>{x.number}</h2>
                  <h3 className='text-xl font-semibold font-Raleway mt-5 block'>{x.Name}</h3>
                  <p className='text-[15px] font-Raleway my-5'>{x.Txt}</p>
                </div>
              ))
            }
          
            </div>
          </div>
      </div>
    </div>
  )
}

export default Services