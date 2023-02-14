import React from "react";

export default function Stack({
  stackName,
  years,
}: {
  stackName: string;
  years: number;
}) {
  return (
    <div className="flex flex-col items-center text-center relative text-white pb-[24px]">
      <h2 className="font-grotesk-bold text-[32px] leading-[40px] pb-[1px]">
        {stackName}
      </h2>
      <p className="text-grey font-grotesk-medium font-medium text-base leading-[26px]">
        {years} Years Experience
      </p>
    </div>
  );
}