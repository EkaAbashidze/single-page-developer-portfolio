import React from "react";

export default function Stack({
  stackName,
  years,
}: {
  stackName: string;
  years: number;
}) {
  return (
    <div className="flex flex-col items-center text-center relative text-white pb-[24px] md:pb-[52px] md:items-start ">
      <h2 className="font-grotesk-bold text-[32px] leading-[40px] pb-[1px] md:pb-[14px] md:text-[48px] md:leading-[56px] md:tracking-[-1.5px]">
        {stackName}
      </h2>
      <p className="text-grey font-grotesk-medium font-medium text-base leading-[26px] md:text-[18px] md:leading-[28px]">
        {years} Years Experience
      </p>
    </div>
  );
} 