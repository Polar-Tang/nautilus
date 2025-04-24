import TurbulenceTitle from "./TurbulenceTitle"
import {  useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import initScrollAnimations from "@/helpers/initScroll";
const UlWave = () => {

    const aboutContainerRef = useRef<HTMLDivElement>(null)
  const section = aboutContainerRef.current;

  gsap.registerPlugin(ScrollTrigger);


  const [clipPathState, setclipPathState] = useState("");

  let numPoints = 8
  let delayPointsMax = 0.9;
  let duration = 0.9;
  let pointsDelay: number[] = [];
  let points: number[] = []

  useGSAP(() => {
    if (!section) return;

    let tl = gsap.timeline({
      onUpdate: render,
      defaults: {
        ease: "power2.inOut",
        duration: duration,
      }
    });

    const lastWave = document.getElementById("lastWave")
    ScrollTrigger.create({
      trigger: lastWave,
      start: "top bottom",
      end: "center top",
      scrub: true,
      markers: true,
      animation: tl
    });

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
    setclipPathState(d);
    }
  }, [])

  useEffect(() => {
    const cleanup = initScrollAnimations("last-wave")
    
    return cleanup
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
          <path d={clipPathState}
          />
        </clipPath>

      </svg>
    <div
          className="ul bg-masoscuro z-5 h-full"
          id="lastWave"
          style={{
            clipPath: `url(#wave-clip)`,
          }}
        >
          {/* <TurbulenceTitle className="about-item text-4xl absolute bottom-[10%]" title={"Backend Engeneering"} /> */}
          
        </div>
    </div>
    <div className="bg-masoscuro z-1 relative h-[200dvh] w-full text-white
      "
    id="last-wave"
    >
     
          <ul
          className=" absolute w-full h-[200dvh] z-1 mx-auto -mt-[150px] py-32 bg-transparent text-white
          "

        >
          <div className="absolute top-[30%] -right-[10%] w-40 h-40 z-10">
          <div 
            className="absolute -top-[60%] right-[100%] w-20 h-40 z-10">
            <img 
            src="/nodejs.png" 
            data-rotate
            data-rotate-end="10"
            data-rotate-start="-26"
            className="shape-overlays"
            />
            </div>
            <span className="shape-overlays text-3xl text-white absolute top-0 right-3/4 p-1"
            data-rotate
            data-rotate-end="16"
            data-rotate-start="-14"
            >NodeJS</span>
          </div>
          <div className="absolute top-[20%] left-[10%] w-40 h-40 z-10">
            <span className="shape-overlays text-3xl text-white absolute top-0 right-1/4 p-1"
            data-rotate
            data-rotate-end="-14"
            data-rotate-start="4"
            >Golang</span>
            
          </div>

          <div className="absolute bottom-[40%] left-[5%] w-40 h-40 z-10">
            <span className="shape-overlays text-3xl text-white absolute top-0 left-1/4 p-1 right-3/4 p-1 z-2"
            data-rotate
            data-rotate-end="-28"
            data-rotate-start="3"
            >Owasp</span>
            
            <div className="absolute bottom-[-30%] w-40 h-40 z-1 mt-100">
              <img className="shape-overlays rotate-3" 
              data-rotate
              data-rotate-end="-36"
              data-rotate-start="3"
              src="/owasp.png"/>
            </div>
          </div>
        </ul>

    </div>
    </>
  )
}

export default UlWave