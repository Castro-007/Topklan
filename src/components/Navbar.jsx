import React from 'react'
import { useState, useEffect } from 'react'
import Fulllogo from '../assets/images/FULLLOGO.png'
import { NavLink } from 'react-router-dom'
import { NavBlink } from '../utils'
import { FaBars, FaTimes} from 'react-icons/fa'
import Headroom from 'react-headroom'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);



return (
  <div className='mb-5'>
    <Headroom style={{WebkitTransition: 'all .5s ease-in-out',
     
      transition: 'all .5s ease-linear'
    }}>

    <nav className="flex justify-between items-center bg-gray-50 p-4 shadow-md">
      <img src={Fulllogo} alt="Topklan Logo" className="w-48" />
      <div className="sma:hidden mda:hidden">
        <ul className="flex space-x-6">
          {NavBlink.map((x) => (
            <li key={x.Id} className="font-Oswald group text-lg">
              <NavLink
                to={x.Link}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFCE00] underline transition hover:"
                    : "text-black"
                }
              >
                {x.name}
              </NavLink>
              <div className="h-0.5 bg-[#FFCE00] w-0 group-hover:w-full transition-all delay-100"></div>
            </li>
          ))}
          <li>
            <NavLink
              to="/Contact"
              className={
                "bg-[#FFCE00] p-2 rounded-lg text-lg font-Oswald text-black font-medium group "
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="lg:hidden mdaa:hidden">
        <div className="relative">
          <button onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
          {/* Mobile menu */}
          <div
            className={`fixed top-0 left-0 mt-14 h-[350px] w-full bg-gray-50 shadow-md  transform transition-transform duration-300 ease-in-out
                        ${
                            isMobile
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }`}
          >
            <ul className="flex flex-col w-full space-y-4 p-8">
              {NavBlink.map((x) => (
                <li key={x.Id} className="font-Oswald group text-lg">
                  <NavLink
                    to={x.Link}
                    onClick={() => setIsMobile(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FFCE00] underline transition hover:"
                        : "text-black"
                    }
                  >
                    {x.name}
                  </NavLink>
                  
                </li>
              ))}
              <li>
                <NavLink
                  to="/Contact"
                  className={
                    "bg-[#FFCE00] p-2 rounded-lg text-lg font-Oswald text-black font-medium group "
                  }
                  onClick={() => setIsMobile(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </Headroom>
  </div>
);
}

export default Navbar