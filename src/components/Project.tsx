import React from 'react'

export default function Project({photo, title, arr, photoDesk}: {photo: string, title: string, arr: string[], photoDesk: string}) {
  return (
    <div className="text-white max-w-[343px] mx-auto pb-[40px] md:pb-[60px] lg:max-w-[540px]  lg:pb-[69px] lg:relative">
      <img src={photo} alt="" className='cursor-pointer lg:hidden' />
      <img src={photoDesk} alt="" className='hidden cursor-pointer lg:block' />
      <h2 className=' font-grotesk-bold text-[24px] leading-[32px] pt-[20px] cursor-pointer'>{title}</h2>

      <div className='flex gap-x-[18px] text-grey font-grotesk-medium text-[18px] leading-[28px] pt-[7px] pb-[20px]' >


        {arr.map(stack => <h3>{stack}</h3>)}    


      </div>

      <div className="flex gap-x-8 lg:absolute lg:bg-black lg:top-0 lg-left-0 lg:w-full lg:h-[400px] lg:opacity-0 hover:lg:opacity-75 lg:flex-col lg:justify-center lg:gap-y-[48px] cursor-pointer">
        <button className="flex flex-col items-center gap-y-[10px]">
          <h2 className="font-grotesk-bold text-base leading-[26px] tracking-[2.26px]">
            VIEW PROJECT
          </h2>
          <div className="w-full h-[2px] bg-green lg:w-[138px] "></div>
        </button>

        <button className="flex flex-col items-center gap-y-[10px]">
          <h2 className="font-grotesk-bold text-base leading-[26px] tracking-[2.26px]">
            VIEW CODE
          </h2>
          <div className="w-full h-[2px] bg-green lg:w-[103px]"></div>
        </button>
      </div>
    </div>
  );
}