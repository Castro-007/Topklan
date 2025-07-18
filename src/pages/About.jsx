import React from 'react'
import { motion } from 'motion/react'
import { AboutSec, CoreSec, TeamMembers } from '../utils'
import EngineAbt from '../assets/images/EngineerAbt.jpeg'
import { LuCircleCheckBig, LuEye, LuTarget } from 'react-icons/lu'
const About = () => {
  const RegisterId = [
    {
      id: 1,
      socialIcon: LuCircleCheckBig,
      txt: 'ISO 9001:2015 Certified Quality Management'

    },
    {
      id: 2,
      socialIcon: LuCircleCheckBig,
      txt: 'LEED Accredited Professionals on Staff'

    },
    {
      id: 3,
      socialIcon: LuCircleCheckBig,
      txt: 'Professional Engineering Licenses in 15+ States'

    },
    {
      id: 4,
      socialIcon: LuCircleCheckBig,
      txt: 'Member of National Society of Professional Engineers'

    },
  ]


  return (
    <div className=''>
      <div className='mt-20 py-6 bg-slate-100/20'>
      <h1 className="text-5xl font-Oswald font-medium text-center mt-10">About TOP<span className='text-blue-500'>KLAN</span></h1>
      <p className="text-lg font-Raleway text-center mt-5 px-4">
        Leading engineering excellence for over 15 years, delivering innovative solutions <br /> that shape the future of infrastructure and technology.
      </p>

      </div>
      <div className='mt-4'>
        <div className='flex justify-around flex-1 '>
          {
            AboutSec.map((x) => (
              <motion.div
                          key={x.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: x.id * 0.3 }}
                          >

              <div key={x.id} className=' flex flex-col justify-center items-center'>
                <span className='bg-blue-100/55 mb-3 p-4 rounded-full'>
                <x.socialIcon className='text-center text-blue-400 font-semibold sma:text-2xl mda:text-2xl text-4xl'/>
                </span>
                <h2 className='text-center text-3xl font-medium my-3 sma:text-xl mda:text-xl font-Oswald'>{x.headTxt}</h2>
                <p className='font-Raleway font-normal text-center'>{x.pTxt}</p>
              </div>
              </motion.div>
            ))
          }
        </div>
        <div className='my-10 px-8'>
          <div>
          <h2 className='text-4xl font-Oswald font-semibold pb-4'>Our Journey of Excellence</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-blue-700 to-purple-600'></div>
          </div>
          <div className='flex justify-around sma:flex-col mda:flex-col items-center my-6'>
            <div className='basis-[40%]'>
              <motion.div
                        
                        initial={{ opacity: 0, x: -140 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        >

              <p className='font-Raleway text-base text-neutral-800 mb-5'>Founded in 2009, TOPKLAN Engineering Services began as a small team of passionate engineers with a bold vision to transform the engineering landscape through innovation and unwavering excellence.</p>
              <p className='font-Raleway text-base text-neutral-800 mb-5'>Over the years, we've evolved into a leading engineering consultancy, serving clients across multiple industries and geographies. Our commitment to quality, safety, and sustainability has made us a trusted partner for the world's most complex and challenging engineering projects.</p>
              <p className='font-Raleway text-base text-neutral-800'>Today, we stand at the forefront of engineering innovation, combining cutting-edge technology with decades of experience to deliver solutions that don't just meet expectations—they exceed them.</p>
              <div className='grid grid-cols-2 mt-5 items-center justify-center'>
                
              {
                RegisterId.map((item) => (
                  <div key={item.id} className='flex items-start my-2'>
                    <item.socialIcon className='text-green-500 text-2xl mr-2' />
                    <span className='font-Raleway text-sm text-neutral-800'>{item.txt}</span>
                  </div>
                ))
              }
              </div>
              </motion.div>
            </div>
            <div className='basis-[40%] sma:mt-3 mda:mt-3'>
              <motion.div
                        
                        initial={{ opacity: 0, x: 140 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        >
              <img src={EngineAbt} alt="Engineer" className='w-[450px] h-[450px] sma:w-96 sma:h-96 mda:w-96 mda:h-96 rounded-lg shadow-lg' />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-around sma:flex-col mda:flex-col items-center gap-8 my-10 py-4 px-6'>
        <div className=' bg-gradient-to-r flex flex-col justify-start items-start p-3 rounded-md from-blue-700 to-purple-600'>
          <span className='bg-slate-400/20 rounded-lg mt-2 p-2'>
            <LuTarget className='text-white text-4xl mx-3 my-2' />
          </span>
          <h1 className='text-3xl font-Oswald text-white my-2'>Our Mission</h1>
          <p className='text-white font-Raleway'>To deliver innovative engineering solutions that exceed client expectations while contributing to sustainable development and technological advancement that shapes tomorrow.</p>
        </div>
        <div className=' bg-gradient-to-r flex flex-col justify-start items-start p-3 rounded-md from-green-600 to-green-700'>
          <span className='bg-slate-200/20 rounded-lg mt-2 p-2'>
            <LuEye className='text-white text-4xl mx-3 my-2' />
          </span>
          <h1 className='text-3xl font-Oswald text-white my-2'>Our Vision</h1>
          <p className='text-white font-Raleway'>To be the world's most trusted engineering partner, known for excellence, innovation, and positive impact on communities worldwide through transformative solutions.</p>
        </div>
      </div>
      <div className='mt-8 py-6'>
        <h1 className='text-center text-4xl font-semibold mb-4 font-Oswald'>Our Core Values</h1>
        <p className='text-base font-medium font-Raleway text-center'>The principles that guide our work and define our company culture.</p>
      <div>
        <div className='grid grid-cols-1 sma:grid-cols-2 mda:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4'>
          {
            CoreSec.map((x) => (
              <motion.div
                          key={x.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: x.id * 0.3 }}
                          >

              <div key={x.id} className={`flex flex-col border-[1px]  hover:shadow-md transition-shadow ease-in-out duration-100  border-slate-200 justify-center items-center p-6 rounded-lg ${x.styless}`}>
                <span className={`bg-slate-400/20 rounded-lg  p-2 `}>
                  <x.socialIcon className='text-center text-2xl text-blue-600' />
                </span>
                <h2 className='text-xl font- my-2 font-Oswald'>{x.headTxt}</h2>
                <p className={`text-center font-Raleway`}>{x.pTxt}</p>
              </div>
              </motion.div>
            ))
          }
        </div>
      </div>
      </div>
      <div className='mt-16 bg-slate-200 py-14 px-4'>
          <h1 className='text-center font-Oswald my-5 font-semibold text-3xl'>Leadership Team</h1>
          <p className='font-Raleway text-lg tracking-wide text-center'>Meet the experienced professionals leading our engineering excellence</p>
      <div className='grid grid-cols-1 sma:grid-cols-1 mda:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4'>
          {
            TeamMembers.map((member) => (
              <div key={member.id} className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-center'>
                <img src={member.Image} className='w-32 h-32 object-top rounded-full' loading='lazy' alt="team member" />
                <h1 className='font-Oswald text-2xl font-medium tracking-normal my-4'>{member.Name}</h1>
                <p className='text-base text-blue-500 font-Raleway tracking-tight mb-4'>{member.Position}</p>
                <p className='text-sm font-Raleway font-medium'>{member.Sector}</p>
                <p className='font-Manrope text-sm my-2'>{member.Exp}</p>
              </div>
            ))
          }
      </div>
      </div>
    </div>
  )
}

export default About