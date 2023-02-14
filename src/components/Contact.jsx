import React from 'react'
import IconFrontEnd from '../assets/svg/IconFrontEnd';
import IconGithub from '../assets/svg/IconGithub';
import IconLinkedin from '../assets/svg/IconLinkedin';
import IconTwitter from '../assets/svg/IconTwitter';

export default function Contact() {
  return (
    <div className="text-white w-full mx-auto text-center flex flex-col items-center bg-darkgrey h-[834px] px-4 py-[60px] bg-patter-rings bg-no-repeat bg-[left_-343px_bottom_269px] " >
      <h1 className='text-[40px] font-grotesk-bold leading-[40px] tracking-[-1.14px]' >Contact</h1>
      <p className=' text-grey max-w-[343px] font-grotesk-medium text-base leading-[26px] pt-[20px] pb-[50px]' >I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>


      <div>

        <div className='flex flex-col justify-start text-start pb-8' >

          <label htmlFor="name" className='ml-[24px] font-grotesk-medium text-base leading-[26px] tracking-[-0.22px] opacity-50'>NAME</label>
          <input type="text" className='bg-transparent border-b-[1px] w-[343px] focus:outline-none font-grotesk-medium h-4' />

        </div>
          
        

        <div className='flex flex-col justify-start text-start pb-8' >

          <label htmlFor="name" className='ml-[24px] font-grotesk-medium text-base leading-[26px] tracking-[-0.22px] opacity-50'>EMAIL</label>
          <input type="text" className='bg-transparent border-b-[1px] w-[343px] focus:outline-none font-grotesk-medium h-4' />

        </div>
          
        

        <div className='flex flex-col justify-start text-start pb-8' >

          <label htmlFor="name" className='ml-[24px] font-grotesk-medium text-base leading-[26px] tracking-[-0.22px] opacity-50 pb-[64px]'>MESSAGE</label>
          <input type="text" className='bg-transparent border-b-[1px] w-[343px] focus:outline-none font-grotesk-medium h-4' />

        </div>
          
        



        
      </div>


      <div className='flex flex-col items-end w-[343px] h-[125px] border-b-[1px] border-b-white mb-[39px]' >
        <button className="flex flex-col items-center gap-y-[10px]">
          <h2 className="font-grotesk-bold text-base leading-[26px] tracking-[2.26px]">
            SEND MESSAGE
          </h2>
          <div className="w-full h-[2px] bg-green"></div>
        </button>
      </div>


      <div className="flex flex-col gap-y-[22px]">
        <h2 className="font-grotesk-bold text-2xl leading-[36px]">adamkeyes</h2>
        <div className="flex justify-between gap-x-[20px]">
          <IconGithub />
          <IconFrontEnd />
          <IconLinkedin />
          <IconTwitter />
        </div>
      </div>


    </div>
  );
}
