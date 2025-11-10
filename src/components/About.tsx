import { useGSAP } from "@gsap/react"
import UlWave from "./UlWave"
import gsap from 'gsap'
import TurbulenceTitle from "./TurbulenceTitle"

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
        className="shape-overlays z-1 absolute w-full h-[200dvh]
      z-2 mx-auto -mt-60 py-32 bg-transparent 
      text-white
      overflow-x-hidden
      "
      >
        <TurbulenceTitle
            className="about-item text-6xl absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2 z-50 text-white text-3xl md:text-5xl w-full text-center mb-20 font-bold pointer-events-none drop-shadow-lg"
            title={"Create Simulators"}
          />
        {/* Full-width responsive YouTube iframe with white overlay title */}
        <div className="w-full max-w-none">
          <div className="relative w-full md:w-3/4 lg:w-3/4 mx-auto aspect-[16/9]">
            <iframe
              className="absolute inset-0 w-full h-full z-0"

              src="https://www.youtube.com/embed/uCCKj7ojKfc?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
        
            
          </div>

          {/* List placed directly below the video container */}
            <ul className="mt-6 md:mt-8 flex flex-col gap-4 justify-center items-center text-white text-sm md:text-base w-full">
            <li className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
              <span>Quest & Leveling</span>
            </li>
            <li className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
              <span>Dynamic UIs</span>
            </li>
            <li className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
              <span>Data store</span>
            </li>
            <li className="w-full md:w-3/4 mx-auto flex items-center gap-3 px-4 py-2 rounded-md">
              <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" aria-hidden="true"></span>
              <span>PVE</span>
            </li>
            </ul>
        </div>

      </div>
      <UlWave />
    </>
  )
}

export default About