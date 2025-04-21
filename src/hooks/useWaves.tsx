import { useContext } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import { clipPathStateContext } from '@/context/clipPathContext';

const useWaves = (ref: SVGSVGElement | null) => {
    const {setclipPathState} = useContext(clipPathStateContext)

    let numPoints = 10;
    let delayPointsMax = 0.3;
    let delayPerPath = 0.25;
    let duration = 0.9;
    let isOpened = true;
    let pointsDelay: number[] = [];
    let allPoints: number[][] = [];
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const overlay = ref;
        if (!overlay) return;

        const paths = overlay.querySelectorAll(".shape-overlays__path");
        let numPaths = paths.length;
        let tl = gsap.timeline({
            onUpdate: render,
            defaults: {
                ease: "power2.inOut",
                duration: duration
            }
        });


        ScrollTrigger.create({
            trigger: ref,         
            start: "top bottom",     
            end: "center top",       
            scrub: true,             
            animation: tl,            
            markers: true
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
                let points: number[] = allPoints[i]  // 
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
                let path = paths[i]
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

                path.setAttribute("d", d)
            }
        }
    }, [])
//   return 
}

export default useWaves