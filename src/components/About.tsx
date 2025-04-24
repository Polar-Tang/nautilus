import { useEffect } from "react";
import TurbulenceTitle from "./TurbulenceTitle"
import UlWave from "./UlWave"
import initScrollAnimations from "@/helpers/initScroll";


const About = () => {
 useEffect(() => {
    const cleanup = initScrollAnimations("first-wade")
    
    return cleanup
  }, [])

  return (
    <>
      <div
      id="first-wade"
        className="shape-overlays z-1 absolute w-full h-[200dvh]
      z-2 mx-auto -mt-150 py-32 bg-trasparent
      text-white
      overflow-x-hidden
      "
      >

        <ul
          className="shape-overlays absolute w-full h-[200dvh] z-1 mx-auto -mt-[150px] py-32 bg-transparent text-white
          "
        >
          <TurbulenceTitle className="ul bg-transparent z-4 h-full  relative text-4xl rotate-4 right-1/2 left-1/4" data-rotate  data-rotate-start="4"  data-rotate-end="-4" title={"Frontend Engeneering"} />  

          <div className="absolute top-[20%] right-[0] w-40 h-40 z-10">
            <span className="text-3xl text-white absolute top-0 right-3/4 p-1 -rotate-4" data-rotate  data-rotate-start="-4"  data-rotate-end="-8" >React</span>
            <div 
            className="absolute top-[30%] right-[10%] w-60 h-40 z-10">
            <img src="/react.png" 
            data-rotate
            data-rotate-start="-4"
            data-rotate-end="20"
            className="-rotate-4" />
            </div>
          </div>

          <div className="absolute bottom-[40%] left-[5%] w-40 h-40 z-10">
            <span className="text-3xl text-white absolute top-0 left-1/4 p-1 right-3/4 p-1 rotate-4 z-2"
            data-rotate
            data-rotate-start="8"
            data-rotate-end="-32"
            >Animations</span>
            
            <div className="absolute bottom-[-30%] w-40 h-40 z-1 mt-100">
              <img 
              data-rotate
              data-rotate-start="8"
              data-rotate-end="-35"
              // className="-rotate-15" 
              src="/greensock.png"/>
            </div>
          </div>
        </ul>

      </div>
      <UlWave />
    </>
  )
}

export default About