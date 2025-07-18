import React, { useState} from 'react'

const Accordion = (props) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className='  sma:w-[300px] mda:w-[300px] p-2 rounded-md '>
      <button className='flex justify-center w-full transition transform-[.3s] items-start gap-6' onClick={() => setAccordionOpen(!accordionOpen)}>
        <h2 className='text-2xl sma:text-xl font-Manrope mda:text-xl '>{props.head}</h2>
        {accordionOpen ? <span className='text-2xl sma:text-xl mda:text-xl cursor-pointer text-blue-600'>-</span> : <span className='text-2xl sma:text-xl mda:text-xl cursor-pointer text-blue-600'>+</span>}
      </button>
      <div className={`grid overflow-hidden transition-all mt-2 duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <span className='overflow-hidden font-Raleway w-[700px] sma:w-full mda:w-full p-2 '>
        {props.answer}
      </span>

      </div><hr className='w-full bg-slate-800' />
    </div> 
  )
}

export default Accordion
