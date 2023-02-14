import React from "react";
import ProfileImg from "../assets/images/image-profile-mobile.webp";
import IconFrontEnd from "../assets/svg/IconFrontEnd";
import IconGithub from "../assets/svg/IconGithub";
import IconLinkedin from "../assets/svg/IconLinkedin";
import IconTwitter from "../assets/svg/IconTwitter";
import Stack from "./Stack";

export default function intro() {
  return (
    <div className="flex flex-col items-center text-center relative text-white">
      <div className="absolute top-[20px] flex flex-col gap-y-[22px]">
        <h2 className="font-grotesk-bold text-2xl leading-[36px]">adamkeyes</h2>
        <div className="flex justify-between gap-x-[20px]">
          <IconGithub />
          <IconFrontEnd />
          <IconLinkedin />
          <IconTwitter />
        </div>
      </div>
      <img src={ProfileImg} alt="" className="w-[174px] h-auto" />

      <div className="flex flex-col items-end pt-[40px] pb-[20px]">
        <h1 className="font-grotesk-bold text-[40px] leading-[40px] max-w-[343px] tracking-[-1.14px]">
          Nice to meet you! I’m Adam Keyes.
        </h1>
        <div className="w-[225px] h-[4px] bg-green mr-[32px]"></div>
      </div>

      <p className="text-grey font-grotesk-medium font-medium text-base leading-[26px] max-w-[343px]">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>

      <div className="pt-6">
        <button className="font-grotesk-bold font-bold text-base leading -[26px] tracking-[2.28px] pb-[10px]">
          CONTACT ME
        </button>

        <div className="w-[120px] h-[2px] bg-green"></div>
      </div>

      <div className="bg-white w-[343px] h-[1px] mt-[80px] mb-[40px]"></div>

      <Stack stackName="HTML" years={4} />

      <Stack stackName="CSS" years={4} />

      <Stack stackName="Javascript" years={4} />

      <Stack stackName="Accessibility" years={4} />

      <Stack stackName="React" years={3} />

      <Stack stackName="Sass" years={3} />

      <div className="bg-white w-[343px] h-[1px] mt-[16px] mb-[80px]"></div>
    </div>
  );
}
