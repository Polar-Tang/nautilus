import TurbulenceTitle from "./TurbulenceTitle"
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import VideoFrame from "./VideoFrame";
import { Diamond } from 'lucide-react';

const UlWave = () => {
  gsap.registerPlugin(ScrollTrigger);

  const aboutContainerRef = useRef<HTMLDivElement>(null)


  const [clipPathState] = useState("");

  let numPoints = 8
  let delayPointsMax = 0.9;
  let duration = 0.9;
  let pointsDelay: number[] = [];
  let points: number[] = []

  useGSAP(() => {
    const section = aboutContainerRef.current;
    if (!section) return;
    const lastWave = document.getElementById("lastWave")
    let tl = gsap.timeline({
      onUpdate: render,
      defaults: {
        ease: "power2.inOut",
        duration: duration,
      }
    });
    ScrollTrigger.create({
      trigger: lastWave,
      start: "top bottom",
      end: "center top",
      scrub: true,
      // markers: true,
      animation: tl
    })

    for (let j = 0; j < numPoints; j++) {
      points.push(0.5)
    }



    toggle();
    function toggle() {
      tl.progress(0).clear();


      for (let i = 0; i < numPoints; i++) {
        pointsDelay[i] = Math.random() * delayPointsMax
      }

      for (let j = 0; j < numPoints; j++) {
        let delay = pointsDelay[j];
        tl.to(points, {
          [j]: 0
        }, delay)
      }
    }


    function render() {
      let d = `M 0 0 V ${points[0]} C`;
      for (let j = 0; j < numPoints - 1; j++) {
        let p = (j + 1) / (numPoints - 1)
        let cp = p - (1 / (numPoints - 1)) / 2

        d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`
      }
      d += ` V 100 H 0`;
      const path = document.getElementById("wave-clip-path")
      path && path.setAttribute("d", d)

    }




    const rotatingElements = document.querySelectorAll('[data-rotate]');

    rotatingElements.forEach((element) => {
      // Get custom rotation values from data attributes (or use defaults)
      const startRotation = element instanceof HTMLElement && element.dataset.rotateStart || 0;
      const endRotation = element instanceof HTMLElement && element.dataset.rotateEnd || 360;
      const scrubValue = element instanceof HTMLElement && element.dataset.rotateScrub === 'false' ? false : 1;

      // Create the animation
      gsap.fromTo(element,
        { rotation: startRotation },
        {
          rotation: endRotation,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
            end: "bottom 50%",
            scrub: scrubValue,

          }
        }
      );
    });
  }, [])



  return (
    <>

      <div
        ref={aboutContainerRef}
        className="z-1 relative h-[200dvh] w-full bg-oscazul text-white
    overflow-x-hidden
      "
      >
        <svg
          viewBox="0 0 100 100"
          className="h-0 w-0"

        >
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox"
          >
            <path id="wave-clip-path" d={clipPathState}
            />
          </clipPath>

        </svg>
        <div
          className="ul bg-masoscuro z-5 h-full relative"
          id="lastWave"
          style={{
            clipPath: `url(#wave-clip)`,
          }}
        >
          <TurbulenceTitle
            className="about-item text-6xl absolute left-1/2 w-full  -translate-x-1/2 bottom-[10%] text-center"
            title={"Your combat"}
          />
        </div>
      </div>
      <div className="bg-masoscuro z-1 relative h-[200dvh] w-full text-white
      "
        id="last-wave"
      >

        <div
          className=" absolute w-full h-[200dvh] z-1 mx-auto -mt-[150px] py-32 bg-transparent text-white
          "

        >
          <div className="w-full max-w-none">
            <div className="relative w-full md:w-3/4 lg:w-3/4 mx-auto aspect-[16/9]">
              {/* uCCKj7ojKfc  */}
              <VideoFrame videoid="8eqoF32qjNk" />


            </div>
            <p className="w-full md:w-3/4 lg:w-3/4 mx-auto text-xl pt-8">
              I implement combat systems using <strong>Client-Side Hit Detection</strong> that run smoothly in-game. My custom NPC system uses proximity prompts to start rendering and activate behavior only when a player is nearby—this improve allows to run several npcs at the same place. It even integrates with NPC quest givers that initialize quests dynamically based on the player's <strong>DataStore</strong> profile.
            </p>
            {/* List placed directly below the video container */}
            <ul className="mt-6 md:mt-8 flex flex-col gap-4 justify-center items-center text-white text-sm md:text-base w-full">
              <li className="w-full md:w-3/4 flex items-center gap-3 px-4 py-2 rounded-md">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
                <span>m1 Combat</span>
              </li>
              <li className="w-full md:w-3/4 flex items-center gap-3 px-4 py-2 rounded-md">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
                <span>PVP & PVE</span>
              </li>
              <li className="w-full md:w-3/4 flex items-center gap-3 px-4 py-2 rounded-md">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
                <span>Attacks</span>
              </li>
            </ul>
          </div>
          <div className="relative md:w-3/4 lg:w-3/4 mx-auto mt-12 gap-3 flex flex-col gap-4 justify-end items-end">
            <img
              src="bubble.png"
              className="
      absolute -z-10
      top-0 right-0
      w-68 h-68
      translate-x-2 -translate-y-8
      sm:w-86 sm:h-86
      sm:translate-x-10 sm:-translate-y-18
      
      md:translate-x-10 md:-translate-y-22
      md:w-92 md:h-92
      xl:w-112 xl:h-112
      xl:translate-x-12 xl:-translate-y-32
    "
              alt="image bubble"
            />
            <h3 
            className="absolute
            absolute -z-10
      top-0 right-0
      text-xl
      -translate-x-18 translate-y-8
      sm:-translate-x-18 sm:translate-y-2
      sm:text-3xl
      md:-translate-x-18 mdtranslate-y-2
      md:text-4xl
      xl:-translate-x-18 xl:translate-y-2
      xl:text-4xl
            ">Animations?</h3>
            <ul className="relative text-white sm:text-lg text-lg md:text-xl  xl:text-3xl flex flex-col gap-2 
            p-16
             xl:p-16  sm:p-16 ">
              <li className="flex items-center rounded-md 
              pr-18 z-10">
                <Diamond className="w-4 h-4" />
                <span>r-15</span>
              </li>
              <li className="flex items-center rounded-md z-10 pr-18">
                <Diamond className="w-4 h-4" />
                <span>r-6</span>
              </li>
              <li className="flex items-center rounded-md z-10 pr-18">
                <Diamond className="w-4 h-4" />
                <span>any</span>
              </li>
            </ul>
          </div>
        </div>

      </div >
    </>
  )
}

export default UlWave