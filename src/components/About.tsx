import TurbulenceTitle from "./TurbulenceTitle"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useContext } from "react"
import { ClipPathContext } from '@/context/clipPathContext';


const About = () => {
    const aboutContainerRef = useRef<HTMLDivElement>(null)

    gsap.registerPlugin(useGSAP)

    const {clipPath} = useContext(ClipPathContext)

        
useGSAP(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".about-item")
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      })
      
      items.forEach((item, i) => {
        item &&
        tl.to(item, {
          rotate: gsap.utils.random(-4, 4),
          yPercent: gsap.utils.random(-5, 5),
          duration: 1,
          ease: "sine.inOut",
        }, i * 0.1)
      })
    }, aboutContainerRef)
  
    return () => ctx.revert()
  }, [])

    return (
        <div ref={aboutContainerRef} 
             
        className=""
       
        >
          <svg>
  <clipPath id="myClip" viewBox="0 0 100 100" clipPathUnits="objectBoundingBox">
    <path d={`${clipPath}`}/>
  </clipPath>
</svg>
            <ul
            className="wave-section bg-oscazul w-[100dvh] relative z-[10] "
            style={{
              clipPath: `url(resources.svg#myClip)`,
              // WebkitClipPath: `url(resources.svg#myClip)`,
              
            }}   
            >
            <TurbulenceTitle title={"Frontend Eninering"}/>

            <p className="about-item text-lg mb-8">React Developing</p>
            <p className="about-item text-lg mb-8">Animations</p>
            </ul>
            <ul className="wave-section bg-clsand w-full relative z-[20] "
            style={{
              clipPath: `url(resources.svg#myClip)`,
              WebkitClipPath: `url(resources.svg#myClip)`,
            }} 
            >
            <TurbulenceTitle title={"Backend Eninering"}/>
            <p className="about-item text-lg mb-8">NodeJS, Golang</p>
            <p className="about-item text-lg mb-8">Owasp top ten</p>
            </ul>
        </div>
    )
}

export default About