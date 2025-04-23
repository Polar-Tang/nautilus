import TurbulenceTitle from "./TurbulenceTitle"
import {  useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
const UlWave = () => {

    const aboutContainerRef = useRef<HTMLDivElement>(null)
  const section = aboutContainerRef.current;

  gsap.registerPlugin(useGSAP)


  const [clipPathState, setclipPathState] = useState("");

  let numPoints = 10;
  let delayPointsMax = 0.3;
  let duration = 0.9;
  let pointsDelay: number[] = [];
  let points: number[] = []

  useGSAP(() => {
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);

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
      end: "50% top",
      scrub: true,
      markers: true,
      animation: tl
    });

      // fill of 100s
      for (let j = 0; j < numPoints; j++) {
        points.push(100)
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

  return (
    <div 
    ref={aboutContainerRef}
    className="shape-overlays z-1 relative h-[200dvh] w-full bg-oscazul
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
    <ul
          className="ul bg-masoscuro z-5 h-full"
          id="lastWave"
          style={{
            clipPath: `url(#wave-clip)`,
          }}
        >
          {/* <TurbulenceTitle title={"Backend Engeneering"} /> */}
          <p className="about-item text-lg mb-8">NodeJS, Golang</p>
          <p className="about-item text-lg mb-8">Owasp top ten</p>
        </ul>
    </div>
  )
}

export default UlWave