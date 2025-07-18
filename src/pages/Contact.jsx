import React from 'react'
import { motion } from 'motion/react'
import { contacGrid } from '../utils';
import { LuLandmark, LuMessageSquare, LuMessagesSquare, LuPhone } from 'react-icons/lu';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Maps from '../components/Maps';
import Accordion from '../components/Accordion';

const Contact = () => {
  return (
    <div>
      <motion.div
        
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay:0.3 }}
      >

      <div className="mt-20 py-6 bg-slate-100/20">
        <h1 className="text-5xl font-Oswald font-medium text-center mt-10">
          Contact <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-lg font-Raleway text-center mt-5 px-4">
          Ready to discuss your engineering project? Our team of experts is here
          to help you <br /> transform your vision into reality. Get in touch with us
          today.
        </p>
      </div>
      </motion.div>

      <div className='grid my-6 grid-cols-4 mx-6 gap-4 sma:grid-cols-1 mda:grid-cols-1'> 
      {
        contacGrid.map((x) => (
          <div key={x.id} className={` flex bg-slate-100/60 py-4 rounded-md border-l-2 border-l-${x.color} flex-col justify-center items-center`}>
            <span className={`py-1 px-2 items-center text-center  rounded-md bg-slate-100`}>
            <x.socialIcon  className={`text-${x.color} mt-3 text-3xl`}/>
            </span>
            <h1 className={`text-${x.color}text-3xl mt-3 font-Manrope font-semibold `}>{x.Txt}</h1>
            <div className='text-center mt-5'>
              <p className='font-Raleway text-sm'>{x.pTxt}</p>
              <p className='font-Raleway text-sm'>{x.pTxt2}</p>
            </div>
          </div>
        ))
      }
      </div>
      <div className='mt-10 bg-slate-200 py-10'>
        <div className='py-5 flex sma:flex-col mda:flex-col justify-between px-6 items-start'> 
          <div className=''>
            <h1 className='text-3xl mb-5 font-Oswald font-semibold'>Send us a Message</h1>
            <div className='w- px-5 rounded-md bg-slate-100'>
              <h1 className='flex gap-3 pt-3 text-3xl font-Raleway items-center'>
                <LuMessageSquare className='text-xl text-blue-600 font-semibold'/>
                Project Inquiry
              </h1>
              <p className='font-Raleway text-sm text-slate-600 mt-1'>Fill out the form below and we'll get back to you as soon as possible</p>
              <form action="" className='my-3 py-5'>
                <div className='mt-5 flex gap-6 '>
                  <div>
                    <label htmlFor="Firstname" className='mb-4 font-Raleway'>First name<span className='text-red-600'>*</span></label>
                    <input type="text" name="Firstname" required className='px-2 outline-1 focus:outline-blue-400 h-8 w-full block rounded outline-none border-[1px] border-gray-200 ' id="" />
                  </div>
                  <div>
                    <label htmlFor="Firstname" className='mb-4 font-Raleway'>Last name<span className='text-red-600'>*</span></label>
                    <input type="text" name="Firstname" required className='px-2 outline-1 focus:outline-blue-400 h-8 w-full block rounded outline-none border-[1px] border-gray-200 ' id="" />
                  </div>
                </div>
                <div className='mt-6'>
                <label htmlFor="email" className='mb-4 font-Raleway'>Email Address</label>
                <input type="email" required name="email" placeholder='johndoe@gmail.com' className='mt-2 block px-2 outline-1 focus:outline-blue-400 h-8 w-full  rounded outline-none border-[1px] border-gray-200' id="" />
                </div>
                <div className='mt-6'>
                <label htmlFor="Company" className='mb-4 font-Raleway'>Company Name</label>
                <input type="email"  name="Company" placeholder='Your Company name' className=' mt-2 block px-2 outline-1 focus:outline-blue-400 h-8 w-full  rounded outline-none border-[1px] border-gray-200' id="" />
                </div>
                <div className='mt-6'>
                  <label htmlFor="Phone number" className='mb-4 font-Raleway' placeholder> Phone Number</label>
                  <input type="tel" className='mt-2 block px-2 outline-1 focus:outline-blue-400 h-8 w-full  rounded outline-none border-[1px] border-gray-200' name="Phone number" id="" />
                </div>
                <div className='mt-5'>
                  <label htmlFor="Services" className='mb-5 font-Raleway'>Service of interest</label>
                <select name="Services" className='block h-9 rounded-md px-3' id="">
                  <option value="">Select a service</option>
                  <option value="">Structural Engineering</option>
                  <option value="">Mechanical Engineering</option>
                  <option value="">Electrical Engineering</option>
                  <option value="">Safety Engineering</option>
                  <option value="">Project Management</option>
                </select>

                </div>
                <div className='my-6'>
                  <label htmlFor="Project" className='pb-4'>Project Description*</label>
                  <textarea name="Project" cols={20} rows={8} className='block resize-none mt-4 rounded-lg border-[1px] border-blue-400 w-full h-full bg-transparent outline-1  px-2 py-1' id="" ></textarea>
                </div>
                <button className='flex text-center justify-center items-center gap-4 rounded-md bg-blue-600 p-2 text-white' type="submit">Send message <FaPaperPlane/></button>
              </form>
            </div>
          </div>
          <div className='basis-[50%]'>
            <h1 className='text-3xl mb-5 font-Oswald font-semibold'>Our Offices</h1>
            <div>
              <Maps />
            </div>
            <div className='bg-[#f9f9f9] hover:shadow-lg p-4 mt-8 transition-shadow shadow rounded-md'>
              <h1 className='text-3xl font-Oswald text-start text-blue-600 mb-4'>Lagos Office</h1>
              <p className='flex items-center gap-4 font-Raleway text-lg mb-2'><LuLandmark className='text-neutral-600'/> 123 Engineering Plaza, Tech City, TC 12345.</p>
              <p className='flex items-center gap-4 font-Raleway text-lg mb-2'><LuPhone className='text-neutral-600'/> +234 9030867276.</p>
              <p className='flex items-center gap-4 font-Raleway text-lg mb-2'><FaEnvelope className='text-neutral-600'/>info@topklan.com, topklan@topklan.com .</p>

            </div>
          </div>
        </div>
        <div className='bg-[#f2f2f2]'>
<motion.div
        
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay:0.3 }}
      >

      <div className="mt-14 py-6 bg-slate-100/20">
        <h1 className="text-5xl sma:text-3xl mda:text-3xl font-Oswald font-medium text-center mt-10">
          Frequently asked <span className="text-blue-500">Questions</span>
        </h1>
        <p className="text-lg font-Raleway text-center mt-5 px-4">
          Common questions about our engineering services and process
        </p>
      </div>
      <div className='text-center flex justify-center self-center px-5 '>
        <div className='w-fit bg-[#FFFFFA] px-6 rounded-md py-4 my-5'>


        <Accordion
        head = 'What types of engineering projects do you handle?'
        answer = 'We handle a wide range of projects including structural, mechanical, electrical, and safety engineering across various industries. You can check out our services page for more Informations on this'
        />
        <Accordion
        head = 'How long does a typical project take?'
        answer = 'Project timelines vary based on complexity and scope. We provide detailed schedules during the initial consultation phase.'
        />
        <Accordion
        head = 'Do you provide 24/7 support?'
        answer = 'We offer emergency support for critical projects and maintain regular business hours for standard inquiries.'
        />
        <Accordion
        head = 'What is your project approval process?'
        answer = 'Our process includes consultation, design, review, and delivery phases with client approval at each milestone.'
        />
        </div>
        </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact