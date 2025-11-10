import TurbulenceTitle from "./TurbulenceTitle"
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

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
            title={"Battle royales"}
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
              <iframe
                className="absolute inset-0 w-full h-full z-2"
                src="https://www.youtube.com/embed/Zv2JpbNuZ_8?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

             
            </div>

            {/* List placed directly below the video container */}
            <ul className="mt-6 md:mt-8 flex flex-col gap-4 justify-center items-center text-white text-sm md:text-base w-full">
              <li className="w-full md:w-3/4 flex items-center gap-3 px-4 py-2 rounded-md">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
                <span>Combat system</span>
              </li>
              <li className="w-full md:w-3/4 flex items-center gap-3 px-4 py-2 rounded-md">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
                <span>PVP</span>
              </li>
             <li className="w-full md:w-3/4 flex items-center gap-3 px-4 py-2 rounded-md">
                <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
                <span>Attacks</span>
              </li>
            </ul>
          </div>

        </div>

    </div >
    </>
  )
}

export default UlWave