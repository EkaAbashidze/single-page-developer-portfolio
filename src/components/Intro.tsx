import React from "react";
import ProfileImg from "../assets/images/image-profile-mobile.webp";
import ProfileImgTablet from "../assets/images/image-profile-tablet.webp"
import ProfileImgDesktop from "../assets/images/image-profile-desktop.webp"
import IconFrontEnd from "../assets/svg/IconFrontEnd";
import IconGithub from "../assets/svg/IconGithub";
import IconLinkedin from "../assets/svg/IconLinkedin";
import IconTwitter from "../assets/svg/IconTwitter";
import Stack from "./Stack";

export default function intro() {
  return (
    <div className="flex flex-col items-center sm:text-center relative text-white w-full">

      <div className="absolute top-[20px] flex flex-col gap-y-[22px] md:flex-row md:justify-between md:items-center md:top-[29px] md:left-0 md:w-full md:px-[30px]">
        <h2 className="font-grotesk-bold text-2xl leading-[36px]"> adamkeyes</h2>
        <div className="flex justify-between gap-x-[20px]">
          <IconGithub />
          <IconFrontEnd />
          <IconLinkedin />
          <IconTwitter />
        </div>
      </div>




      <img src={ProfileImg} alt="" className="w-[174px] h-auto md:hidden lg:hidden" />


      
      <div className="md:flex md:items-end md:justify-end md:w-full" >


        <div className="hidden md:flex md:order-1 md:bg-patter-circle md:bg-no-repeat bg-[right_-63px_bottom_0px]" >
        <img src={ProfileImgTablet} alt="" className="w-[322px] h-auto sm:hidden lg:hidden z-[-1]" />
        </div>
      <img src={ProfileImgDesktop} alt="" className="w-[444px] h-auto sm:hidden md:hidden" />



      

  <div className="md:flex md:flex-col md:mr-[-32px] md:z-10 md:items-start" >

      <div className="flex flex-col items-end pt-[40px] mb-[20px] md:items-start md:mb-[60px]">
        
        <h1 className="font-grotesk-bold text-[40px] leading-[40px] max-w-[343px] tracking-[-1.14px] md:text-[72px] md:leading-[72px] md:max-w-[455px]">
          Nice to <br className="hidden md:block"/> meet you! I’m <br className="hidden md:block"/> Adam Keyes.
        </h1>
        
        <div className="w-[225px] h-[4px] bg-green mr-[32px] md:w-[410px] "></div>
      </div>

      <p className="text-grey font-grotesk-medium font-medium text-base leading-[26px] max-w-[343px] md:max-w-[400px] md:text-[18px] md:leading-[28px]">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>

      <div className="pt-6 flex flex-col items-center md:pt-[34px]">
        <button className="font-grotesk-bold font-bold text-base leading -[26px] tracking-[2.28px] pb-[10px]">
          CONTACT ME
        </button>

        <div className="w-[120px] h-[2px] bg-green"></div>
      </div>

</div>


</div>



      <div className="bg-white w-full max-w-[calc(100%-32px)] md:m-x-[16px] h-[1px] mt-[80px] mb-[40px] md:mt-[60px] md:mb-[52px] "></div>

      <Stack stackName="HTML" years={4} />

      <Stack stackName="CSS" years={4} />

      <Stack stackName="Javascript" years={4} />

      <Stack stackName="Accessibility" years={4} />

      <Stack stackName="React" years={3} />

      <Stack stackName="Sass" years={3} />

      <div className="bg-white w-full  h-[1px] mt-[16px] mb-[80px] max-w-[calc(100%-32px)]"></div>
    </div>
  );
}
