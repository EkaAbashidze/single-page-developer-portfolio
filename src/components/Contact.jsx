import React, { useState } from "react";
import IconError from "../assets/svg/IconError";
import IconFrontEnd from "../assets/svg/IconFrontEnd";
import IconGithub from "../assets/svg/IconGithub";
import IconLinkedin from "../assets/svg/IconLinkedin";
import IconTwitter from "../assets/svg/IconTwitter";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValidated = emailPattern.test(email);
  const namePattern = /^[A-Za-z\s]{2,}$/;
  const nameValidated = namePattern.test(name);

  return (
    <div
      className="text-white w-full mx-auto text-center flex flex-col items-center bg-darkgrey h-[834px] px-4 py-[60px] bg-patter-rings bg-no-repeat bg-[left_-343px_bottom_269px] md:bg-[left_-368px_bottom_130px] md:px-8 md:py-[0px] md:pt-[60px] md:pb-[40px] md:h-[806px] lg:mt-[70px]

      lg:bg-[left_-205px_bottom_2019px] lg:px-[165px] lg:py-[0px] lg:pt-[84px] lg:pb-[92px] lg:h-[675px] 
    
    "
    >
      <div className="lg:flex lg:justify-between lg:w-full">
        <div className="lg:flex lg:flex-col lg:text-start">
          <h1
            className="text-[40px] font-grotesk-bold leading-[40px] tracking-[-1.14px] md:text-[72px] md:leading-[72px] md:tracking-[-2.05px]

          lg:text-[88px] lg:leading-[88px] lg:tracking-[-2.5px]
        
        
        
        "
          >
            Contact
          </h1>

          <p
            className=" text-grey max-w-[343px] font-grotesk-medium text-base leading-[26px] pt-[20px] pb-[50px] md:pb-[48px] md:max-w-[445px] md:text-[18px] md:leading-[28px] 
        
        
        lg:pb-[0px] lg:pt-[36px]  lg:max-w-[445px] lg:text-[18px] lg:leading-[28px]
        
        "
          >
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div>
          <div className="flex flex-col justify-start text-start pb-8 relative">
            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={`bg-transparent border-b-[1px] w-[343px] focus:outline-none font-grotesk-medium h-[43px] md:w-[445px] lg:w-[445px] text-base leading-[26px] tracking-[-0.22px] pb-[16px] pl-[24px] uppercase ${
                name && !nameValidated
                  ? "border-b-red"
                  : name && nameValidated
                  ? "border-b-green"
                  : ""
              } `}
            />

            {name && !nameValidated ? (
              <div className="absolute right-0 flex flex-col items-end gap-y-[24px]">
                <div className="">
                  <IconError />
                </div>
                <p className="text-[12px] text-red leading-[16px] tracking-[-0.17px]">
                  Sorry, invalid format here
                </p>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col justify-start text-start pb-8 relative">
            <input
              type="text"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`bg-transparent border-b-[1px] w-[343px] focus:outline-none font-grotesk-medium h-[43px] md:w-[445px] lg:w-[445px] text-base leading-[26px] tracking-[-0.22px] pb-[16px] pl-[24px] uppercase ${
                email && !emailValidated
                  ? "border-b-red"
                  : email && emailValidated
                  ? "border-b-green"
                  : ""
              } `}
            />

            {email && !emailValidated ? (
              <div className="absolute right-0 flex flex-col items-end gap-y-[24px]">
                <div className="">
                  <IconError />
                </div>
                <p className="text-[12px] text-red leading-[16px] tracking-[-0.17px]">
                  Sorry, invalid format here
                </p>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col justify-start text-start pb-8">
            <input
              type="text"
              placeholder="MESSAGE"
              className="bg-transparent border-b-[1px] w-[343px] focus:outline-none font-grotesk-medium h-[90px] md:w-[445px] lg:w-[445px]
          text-base leading-[26px] tracking-[-0.22px] pb-[64px] pl-[24px] uppercase"
            />
          </div>

          <div className="flex flex-col items-end w-[343px] h-[125px] border-b-[1px] border-b-white mb-[39px] md:mb-[30px] md:border-b-0 md:h-[104px] md:w-[445px] lg:border-b-0 lg:mb-[0px] lg:h-auto lg:w-[445px]">
            <button className="flex flex-col items-center gap-y-[10px]">
              <h2 className="font-grotesk-bold text-base leading-[26px] tracking-[2.26px] hover:text-green active:scale-[0.96] transition-colors ease-in-out delay-200 ">
                SEND MESSAGE
              </h2>
              <div className="w-full h-[2px] bg-green"></div>
            </button>
          </div>
        </div>
      </div>

      <div
        className="sm:hidden bg-white w-full max-w-[calc(100%-32px)] md:m-x-[16px] pt-[1px] mb-[30px]
          lg:lg:max-w-full lg:mt-[92px] lg:mb-[47px]"
      ></div>

      <div
        className="flex flex-col gap-y-[22px] md:flex-row md:justify-between md:items-center md:top-[29px] md:left-0 md:w-full md:px-[30px]
              lg:flex lg:flex-row lg:justify-between lg:items-center lg:top-[39px] lg:left-0 lg:w-full lg:px-[0px]"
      >
        <h2 className="font-grotesk-bold text-2xl leading-[36px] lg:text-[32px] lg:leading-[32px]">
          adamkeyes
        </h2>
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
