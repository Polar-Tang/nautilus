import { useGSAP } from "@gsap/react"
import UlWave from "./UlWave"
import gsap from 'gsap'
import TurbulenceTitle from "./TurbulenceTitle"
import VideoFrame from "./VideoFrame"
import { Diamond } from "lucide-react"

const About = () => {

  useGSAP(() => {
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
            trigger: element, // Use your container as trigger
            start: "top 50%",
            end: "bottom top",
            scrub: scrubValue, // Smooth scrubbing effect
            // markers: true, // Helpful during development, remove in production
          }
        }
      );
    });

  })

  return (
    <>
      <div
        id="first-wade"
        className="shape-overlays z-1 absolute w-full h-[300dvh]
      z-2 mx-auto -mt-60 py-32 bg-transparent 
      text-white
      overflow-x-hidden
      bg-no-repeat
      bg-cover
      "
      // style={{ backgroundImage: 'url(/surf.png)' }}
      >
        
        <TurbulenceTitle
          className="about-item text-6xl absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2 z-50 text-white text-3xl md:text-5xl w-full text-center mb-20 font-bold pointer-events-none drop-shadow-lg"
          title={"Your simulator"}
        />
        {/* Full-width responsive YouTube iframe with white overlay title */}
        <div className="w-full max-w-none">
          <div className="relative w-full md:w-3/4 lg:w-3/4 mx-auto aspect-[16/9]">
            {/* uCCKj7ojKfc 8eqoF32qjNk */}
            <VideoFrame videoid="KdEYqfpB54c" />

          </div>
          <p className="w-full md:w-3/4 lg:w-3/4 mx-auto text-xl pt-8">
            I leverage my web development background and full-stack programming experience to build entire Roblox games solo. On the backend, I architect multiplayer systems with a zero-trust <strong>anti-exploit</strong> approach to the client, using clean and scalable code. On the frontend, I build optimized UIs in <strong>Roact</strong>, focusing on practical designs that run smoothly on the client.
          </p>
          {/* List placed directly below the video container */}
          <ul className="mt-6 md:mt-8 flex flex-col gap-4 justify-center items-center text-white text-sm md:text-base w-full">
            <li className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
              <span>Dynamic UIs (Roact)</span>
            </li>
            <li className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
              <span>Quest & Leveling</span>
            </li>
            <li className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
              <span>Data store</span>
            </li>
          </ul>
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
      md:-translate-x-18 md:translate-y-2
      md:text-4xl
      xl:-translate-x-18 xl:translate-y-2
      xl:text-4xl
            ">UI Anims?</h3>
            <ul className="relative text-white sm:text-lg text-lg md:text-xl  xl:text-3xl flex flex-col gap-2 
            p-16
             xl:p-16  sm:p-16 ">
              <li className="flex items-center rounded-md 
              md:pr-12
              xl:pr-18 z-10">
                <Diamond className="w-4 h-4" />
                <span>Tweens</span>
              </li>
              <li className="flex items-center rounded-md z-10 
              md:pr-12
              xl:pr-18">
                <Diamond className="w-4 h-4" />
                <span>After Effect</span>
              </li>
              <li className="flex items-center rounded-md z-10 
              md:pr-12
              xl:pr-18">
                <Diamond className="w-4 h-4" />
                <span>PSHP even</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="xl:h-[300dvh] relative bg-oscazul">

      </div>
      <UlWave />
    </>
  )
}

export default About