import React from 'react'
import Project from './Project';
import Thumb1 from "../assets/images/thumbnail-project-1-small.webp"
import Thumb2 from "../assets/images/thumbnail-project-2-small.webp"
import Thumb3 from "../assets/images/thumbnail-project-3-small.webp"
import Thumb4 from "../assets/images/thumbnail-project-4-small.webp"
import Thumb5 from "../assets/images/thumbnail-project-5-small.webp"
import Thumb6 from "../assets/images/thumbnail-project-6-small.webp"

export default function Projects() {


  const stacks: string[] = ["HTML", "CSS"];
  const stacksAll: string[] = ["HTML", "CSS", "JAVASCRIPT"];


  return (
    <>
      <div className="text-white pb-[40px] flex justify-between max-w-[343px] mx-auto items-center">
        <h1 className="font-grotesk-bold text-[40px] leading-[40px] tracking-[-1.14px]">
          Projects
        </h1>
        <button className="flex flex-col items-center gap-y-[10px]">
          <h2 className="font-grotesk-bold text-base leading-[26px] tracking-[2.26px]">
            CONTACT ME
          </h2>
          <div className="w-[120px] h-[2px] bg-green"></div>
        </button>
      </div>

      <div>
        <Project photo={Thumb1} title="DESIGN PORTFOLIO" arr={stacks} />
        <Project photo={Thumb2} title="E-LEARNING LANDING PAGE" arr={stacks}/>
        <Project photo={Thumb3} title="TODO WEB APP" arr={stacksAll}/>
        <Project photo={Thumb4} title="ENTERTAINMENT WEB APP" arr={stacksAll}/>
        <Project photo={Thumb5} title="MEMORY GAME" arr={stacksAll}/>
        <Project photo={Thumb6} title="ART GALLERY SHOWCASE" arr={stacksAll}/>
      </div>
    </>
  );
}