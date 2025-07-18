import React from 'react'
import { FooterLinks } from '../utils'
import FULLLOGO from '../assets/images/FULLLOGO.png'
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
        <footer className='bg-[#7cc4f8] flex justify-around sma:flex-col mda:flex-col gap-6 items-start text-white py-6 px-10 '>
          <div className='basis-[30%] '>
            <img src={FULLLOGO} className='w-40 pb-6' alt="" />
            <p className='font-Raleway text-base text-black'>We are an independent firm of Multi-disciplinary Consultants engaged in the provision of Consultancy Services to Clients in the private and public sectors of the community.</p>
            <div className='flex gap-4 items-center mt-4'>
              <a href='mailto:sanniolayinka007@gmail.com' className='rounded-full transition-all delay-100 p-3 bg-red-600/20 group hover:bg-red-600'>
              <FaInstagram className='text-xl text-red-600 group-hover:text-white delay-100 cursor-pointer' />
              </a>
              <a href='https://www.linkedin.com/in/sanni-olayinka-0b1a3b1b2/' target='_blank' rel='noopener noreferrer' className='transition-all delay-100 rounded-full p-3 bg-blue-800/20 group hover:bg-blue-400'>
              <FaLinkedin className='text-xl text-black group-hover:text-white cursor-pointer delay-100' />
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='rounded-full p-3 transition-all delay-100 bg-blue-800/45 hover:bg-blue-600 group'>
              <FaTwitter className='text-xl text-blue-300 group-hover:text-white cursor-pointer delay-100' />
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-Oswald text-xl'>Quick Links</h3>
            {
              FooterLinks.map((x) => (
                <a href={x.link} key={x.id} className='text-base text-black font-Raleway font-medium hover:text-blue-600 transition-all delay-100 block my-2'>
                  {x.name}
                </a>
              ))
            }
          </div>
          <div>
            <h3 className='font-Oswald text-xl'>Engineering Services</h3>
            {
              'Structural Engineering, Electrical Engineering, Mechanical Engineering, Safety Consulting, Project Management,'.split(", ").map((service, index) => (
                <span key={index} className='text-base text-black font-Raleway font-medium hover:text-red-600 transition-all block my-2'>
                  {service}
                </span>
              ))
            }
          </div>
          <div>
            <h3 className='text-xl font-Oswald'>Get in Touch</h3>
            <div className='flex items-center gap-2 mt-2'>
              <FaMapMarkerAlt className='text-green-600 text-xl' />
              <p className='font-Manrope text-black'>292 Murtala Mohammed way, Yaba, Lagos</p>
            </div>
            <div className='flex items-center gap-2 my-4'>
              <FaPhoneAlt className='text-blue-600 text-xl' />
              <p className='font-Manrope text-black'>+2349030867276</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
              <FaEnvelope className='text-red-600 text-xl' />
              <p className='font-Manrope text-black'>info@topklan.com</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer