import React from 'react'
import { NavLink } from 'react-router-dom'
import { LuArrowBigLeft, LuCheckCheck, LuUserCheck } from 'react-icons/lu'
import { useNavigate, useParams } from 'react-router-dom'
import { ServiceCont } from '../utils'

const ServicePage = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const ServPages = ServiceCont.find((x) => x.id === parseInt(id))
const gradientMap = {
  'blue-600': 'from-blue-100',
  'red-600': 'from-red-100',
  'green-600': 'from-green-100',
  'purple-600': 'from-purple-100',
};
  if (!ServPages) {
    return (
      <div className='h-[50vh] mt-10'>
        <button onClick={() => navigate('/Services')} className='flex items-center ml-8 my-10 bg-blue-600/80 text-white p-2 rounded-lg'>
            <LuArrowBigLeft  className='text-xl'/>
            Back to Services
        </button>
        <h className="text-4xl pt-10 flex  justify-center items-center">
          Service Not Found !
        </h>
      </div>
    );
  }
  return (
    <div>
        <button onClick={() => navigate('/Services')} className='font-Raleway flex items-center ml-8 my-10 bg-blue-600/80 text-white p-2 rounded-lg'>
            <LuArrowBigLeft  className='text-xl'/>
            Back to Services
        </button>
        <div className='mt-20 mb-12 py-6 bg-slate-100/20'>
            <div className={`bg-gradient-to-b  ${gradientMap[ServPages.onlyColor]} to-slate-200 rounded flex sma:w-fit mda:w-fit sma:items-start mda:items-start w-8/12 items-center sma:flex-col mda:flex-col sma:gap-1 mda:gap-1 gap-6 justify-around px-6 mx-8 pb-4`}>
                <div className='flex justify-center rounded bg-slate-200 p-3 '>
                    <ServPages.socialIcon className={`${ServPages.color} text-5xl`} />
                </div>
                <div className=''>
                    <h1 className="text-5xl sma:text-2xl mda:text-2xl font-Oswald font-medium mt-10">{ServPages.Name}</h1>
                    <p className='text-lg sma:text-sm mda:text-sm font-Raleway mt-5'>{ServPages.ServiceTxt}</p>
                </div>
            </div>

            <div className='flex sma:flex-col mda:flex-col justify-between items-start mt-10 mx-8'>
              <div>
              <h1 className='text-3xl font-Oswald'>{ServPages.offerTxt}</h1>
              <div>
                {
                  ServPages.offerList.map((x) => (
                    <ul className={`flex justify-start gap-5 items-start my-6`}>
                      <LuCheckCheck className={`${ServPages.color}`}/>
                      <li className='font-Raleway' key={id}>{x.liTxt}</li>
                    </ul>

                  ))
                }
              </div>
              </div>
              <div className='basis-[50%]'>
                <h1 className='text-3xl font-Oswald'>{ServPages.ChooseTxt}</h1>
                <div className='my-4' key={id}>
                  {
                    ServPages.ChooseList.map((x) => (
                      <div key={x.id} className='my-3'>
                        <h1 className='font-Raleway text-2xl font-semibold'>{x.listHtxt}</h1>
                        <p className='font-Raleway'>{x.listPTxt}</p>
                      </div>
                    ))
                  }
                  <h1></h1>
                  <p></p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ServicePage