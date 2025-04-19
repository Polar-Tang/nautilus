import TurbulenceTitle from "./TurbulenceTitle"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"


const About = () => {
    const aboutContainerRef = useRef<HTMLDivElement>(null)

    gsap.registerPlugin(useGSAP)

        
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
        <div ref={aboutContainerRef} className="container mx-auto px-4 py-32">
            <ul>
            <TurbulenceTitle title={"Frontend Eninering"}/>

            <p className="about-item text-lg mb-8">React Developing</p>
            <p className="about-item text-lg mb-8">Animations</p>
            </ul>
            <ul>
            <TurbulenceTitle title={"Backend Eninering"}/>
            <p className="about-item text-lg mb-8">NodeJS, Golang</p>
            <p className="about-item text-lg mb-8">Owasp top ten</p>
            </ul>
        </div>
    )
}

export default About