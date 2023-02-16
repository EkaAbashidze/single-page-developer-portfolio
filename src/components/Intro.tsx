import React from "react";
import ProfileImg from "../assets/images/image-profile-mobile.webp";
import ProfileImgTablet from "../assets/images/image-profile-tablet.webp";
import ProfileImgDesktop from "../assets/images/image-profile-desktop.webp";
import IconFrontEnd from "../assets/svg/IconFrontEnd";
import IconGithub from "../assets/svg/IconGithub";
import IconLinkedin from "../assets/svg/IconLinkedin";
import IconTwitter from "../assets/svg/IconTwitter";
import Stack from "./Stack";

export default function intro() {
  return (
    <div className="flex flex-col items-center sm:text-center relative text-white w-full">
      <div
        className="absolute top-[20px] flex flex-col gap-y-[22px] md:flex-row md:justify-between md:items-center md:top-[29px] md:left-0 md:w-full md:px-[30px]
        lg:flex lg:flex-row lg:justify-between lg:items-center lg:top-[39px] lg:left-0 lg:w-full lg:px-[165px]
      "
      >
        <h2 className="font-grotesk-bold text-2xl leading-[36px] lg:text-[32px] lg:leading-[32px]">
          adamkeyes
        </h2>
        <div className="flex justify-between gap-x-[20px] lg:mr-[30px]">
          <IconGithub />
          <IconFrontEnd />
          <IconLinkedin />
          <IconTwitter />
        </div>
      </div>

      <img
        src={ProfileImg}
        alt=""
        className="w-[174px] h-auto md:hidden lg:hidden"
      />

      <div
        className="md:flex md:items-end md:justify-end md:w-full
      lg:flex lg:items-center lg:justify-end lg:w-full lg:max-w-[calc(100%-335px)]"
      >
        <div className="hidden md:flex md:order-1 md:bg-patter-circle md:bg-no-repeat md:bg-[right_-63px_bottom_0px]">
          <img
            src={ProfileImgTablet}
            alt=""
            className="w-[322px] h-auto sm:hidden lg:hidden z-[-1]"
          />
        </div>

        <div className="hidden lg:flex lg:order-1 lg:bg-patter-circle lg:bg-no-repeat lg:bg-[left_-63px_bottom_70px]">
          <img
            src={ProfileImgDesktop}
            alt=""
            className="w-[444px] h-auto sm:hidden md:hidden z-[-1]"
          />
        </div>

        <div
          className="md:flex md:flex-col md:mr-[-32px] md:z-10 md:items-start
        lg:flex lg:flex-col lg:mr-[-44px] lg:z-10 lg:items-start"
        >
          <div
            className="flex flex-col items-end pt-[40px] mb-[20px] md:items-start md:mb-[60px] 
          lg:items-end lg:mb-[37px] lg:pt-[100px] "
          >
            <h1
              className="font-grotesk-bold text-[40px] leading-[40px] max-w-[343px] tracking-[-1.14px] md:text-[72px] md:leading-[72px] md:max-w-[455px] 
            lg:text-[88px] lg:leading-[88px] lg:max-w-[730px] lg:tracking-[-2.5px]"
            >
              Nice to <br className="hidden md:block" /> meet you!{" "}
              <br className="hidden lg:block" /> I’m
              <br className="hidden md:block" /> Adam Keyes.
            </h1>

            <div
              className="w-[225px] h-[4px] bg-green mr-[32px] md:w-[410px]
            lg:w-[492px] lg:mr-[78px] lg:h-[6px]"
            ></div>
          </div>

          <p className="text-grey font-grotesk-medium font-medium text-base leading-[26px] max-w-[343px] md:max-w-[400px] md:text-[18px] md:leading-[28px] lg:max-w-[445px] lg:text-[18px] lg:leading-[28px]">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>

          <div className="pt-6 flex flex-col items-center md:pt-[34px] lg:pt-[66px]">
            <button className="font-grotesk-bold font-bold text-base leading-[26px] tracking-[2.28px] pb-[10px] hover:text-green active:scale-[0.96] transition-colors ease-in-out delay-200 ">
              CONTACT ME
            </button>

            <div className="w-[120px] h-[2px] bg-green"></div>
          </div>
        </div>
      </div>

      <div
        className="bg-white w-full max-w-[calc(100%-32px)] lg:lg:max-w-[calc(100%-335px)] md:m-x-[16px] h-[1px] mt-[80px] mb-[40px] md:mt-[60px] md:mb-[52px] 
      lg:mt-[104px] lg:mb-[72px] "
      ></div>

      <div className="md:grid md:grid-cols-2 md:items-start md:w-[calc(100%-32px)] lg:grid lg:grid-cols-3 lg:items-start lg:w-[calc(100%-335px)]  ">
        <Stack stackName="HTML" years={4} />

        <Stack stackName="CSS" years={4} />

        <Stack stackName="Javascript" years={4} />

        <Stack stackName="Accessibility" years={4} />

        <Stack stackName="React" years={3} />

        <Stack stackName="Sass" years={3} />
      </div>

      <div className="md:hidden lg:hidden bg-white w-full  h-[1px] mt-[16px] mb-[80px] max-w-[calc(100%-32px)]"></div>
    </div>
  );
}
