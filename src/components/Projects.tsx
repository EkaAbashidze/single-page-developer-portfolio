import React from 'react'
import Project from './Project';
import Thumb1 from "../assets/images/thumbnail-project-1-small.webp"
import Thumb2 from "../assets/images/thumbnail-project-2-small.webp"
import Thumb3 from "../assets/images/thumbnail-project-3-small.webp"
import Thumb4 from "../assets/images/thumbnail-project-4-small.webp"
import Thumb5 from "../assets/images/thumbnail-project-5-small.webp"
import Thumb6 from "../assets/images/thumbnail-project-6-small.webp"
import Thumb1Desk from "../assets/images/thumbnail-project-1-large.webp"
import Thumb2Desk from "../assets/images/thumbnail-project-2-large.webp"
import Thumb3Desk from "../assets/images/thumbnail-project-3-large.webp"
import Thumb4Desk from "../assets/images/thumbnail-project-4-large.webp"
import Thumb5Desk from "../assets/images/thumbnail-project-5-large.webp"
import Thumb6Desk from "../assets/images/thumbnail-project-6-large.webp"

export default function Projects() {


  const stacks: string[] = ["HTML", "CSS"];
  const stacksAll: string[] = ["HTML", "CSS", "JAVASCRIPT"];


  return (
    <>
      <div className="text-white pb-[40px] flex justify-between max-w-[343px] mx-auto items-center md:mt-[48px] md:max-w-[calc(100%-32px)] lg:max-w-[calc(100%-335px)] lg:mt-[82px]">
        <h1 className="font-grotesk-bold text-[40px] leading-[40px] tracking-[-1.14px]">
          Projects
        </h1>
        <button className="flex flex-col items-center gap-y-[10px]">
          <h2 className="font-grotesk-bold text-base leading-[26px] tracking-[2.26px] hover:text-green active:scale-[0.96] transition-colors ease-in-out delay-200">
            CONTACT ME
          </h2>
          <div className="w-[120px] h-[2px] bg-green"></div>
        </button>
      </div>

      <div className="md:grid md:grid-cols-2 md:mb-[40px] lg:grid lg:grid-cols-2 lg:mb-[40px] lg:ml-[165px] lg:mr-[165px]">
        <Project photo={Thumb1} photoDesk={Thumb1Desk} title="DESIGN PORTFOLIO" arr={stacks} />
        <Project photo={Thumb2} photoDesk={Thumb2Desk} title="E-LEARNING LANDING PAGE" arr={stacks} />
        <Project photo={Thumb3} photoDesk={Thumb3Desk} title="TODO WEB APP" arr={stacksAll} />
        <Project photo={Thumb4} photoDesk={Thumb4Desk} title="ENTERTAINMENT WEB APP" arr={stacksAll} />
        <Project photo={Thumb5} photoDesk={Thumb5Desk} title="MEMORY GAME" arr={stacksAll} />
        <Project photo={Thumb6} photoDesk={Thumb6Desk} title="ART GALLERY SHOWCASE" arr={stacksAll} />
      </div>
    </>
  ); 
}