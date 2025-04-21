import TurbulenceTitle from "./TurbulenceTitle"
import { clipPathStateContext } from '@/context/clipPathContext';
import { useContext, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';


const About = () => {
  const aboutContainerRef = useRef<HTMLDivElement>(null)
  const section = aboutContainerRef.current;

  gsap.registerPlugin(useGSAP)

  const { clipPathState, setclipPathState } = useContext(clipPathStateContext)
  useEffect(() => {
    console.log(clipPathState)
  }, [clipPathState])


  useGSAP(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".about-item")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
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

  let numPoints = 10;
  let delayPointsMax = 0.3;
  let delayPerPath = 0.25;
  let duration = 0.9;
  let isOpened = true;
  let pointsDelay: number[] = [];
  let allPoints: number[][] = [];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!section) return;

    let numPaths = 2;
    let tl = gsap.timeline({
      onUpdate: render,
      defaults: {
        ease: "power2.inOut",
        duration: duration
      }
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top 80%",
      end: "bottom top",
      scrub: true,
      animation: tl,
      // markers: true
    })
    // create 2d array
    for (let i = 0; i < numPaths; i++) {
      let points: number[] = []
      allPoints.push(points) // allPoints.length = 3
      for (let j = 0; j < numPoints; j++) {
        // 100 reprecent the 100 % of the view in SVG
        points.push(200) // point.length = 10
      }
    }



    toggle();
    function toggle() {
      // reset the progess to start and clearthe later animation
      tl.progress(0).clear();

      // fill pointsDelay with random values
      for (let i = 0; i < numPoints; i++) {
        pointsDelay[i] = Math.random() * delayPointsMax
      }

      for (let i = 0; i < numPaths; i++) {
        let points: number[] = allPoints[i]
        // aplied to every path
        let pathDelay = delayPerPath * (isOpened ? i : (numPaths - i - 1)); // 0.25 * (1 || 2) || (2 || 1) || ( 3 || 0) || (4 || -1)

        for (let j = 0; j < numPoints; j++) {
          let delay = pointsDelay[j]; // using the values of math.random() * delayPointsMax
          tl.to(points, {
            [j]: 0                  // set points[j] to a smothly zero
          }, delay + pathDelay)       // random delay each 
        }
      }
    }

    //  reads the current state of points[] and dynamically rewrites the SVG d attribute to match the animation.
    function render() {

      for (let i = 0; i < numPaths; i++) {
        let points = allPoints[i] // each path will use allPoints[i]

        let d = "";
        // M 0 0 V C if isOpened but M 0 C if it's not, i guess this is an vectorial thing used for the height
        d += isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C` // use the randomly updated points in vectors

        for (let j = 0; j < numPoints - 1; j++) {
          // https://es.wikipedia.org/wiki/Curva_de_B%C3%A9zier
          // 
          let p = (j + 1) / (numPoints - 1) * 100
          let cp = p - (1 / (numPoints - 1) * 100) / 2 // Control point between two anchors
          // fixed X with dynamic Y points
          d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`
        }
        d += isOpened ? ` V 100 H 0`  // bttom of the screen V 100, then closes left H 0
          : ` V 0 H 0` // finished at the top
        setclipPathState(`${d}`) // not single quotes inside string
      }
    }
  }, [])

  return (
    <div ref={aboutContainerRef}
      className="shape-overlays z-1 absolute w-full h-full bg-clsand
      z-2 mx-auto py-32 bg-oscazul
      "
    >
      <svg
        viewBox="0 0 100 100"
      >
        <clipPath id="wave-clip" clipPathUnits="objectBoundingBox"
        >
          <path d={clipPathState}
          />
        </clipPath>

      </svg>

      <ul
        className="bg-clsand z-4 h-full  "
        style={{
          clipPath: `url(#wave-clip)`,

        }}
      >
        {/* <TurbulenceTitle title={"Frontend Engeneering"} />
*/}

        <p className="about-item text-lg mb-8">React Developing</p>
        <p className="about-item text-lg mb-8">Animations</p>
      </ul>


      <ul 
      className=" bg-azul z-5 h-full"
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

export default About