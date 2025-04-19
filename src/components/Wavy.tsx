import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';

const Wavy = () => {
    const [animationState, setanimationState] = useState<gsap.core.Tween>()
    const overlayRef = useRef<SVGSVGElement>(null);

    let numPoints = 10;
    let delayPointsMax = 0.3;
    let delayPerPath = 0.25;
    let duration = 0.9;
    let isOpened = true;
    let pointsDelay: number[] = [];
    let allPoints: number[][] = [];
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const overlay = overlayRef.current;
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
            // trigger: bod,        // the element to observe scroll against
            start: "top bottom",        // when overlay hits top of viewport
            end: "bottom top",       // when overlay leaves viewport
            scrub: true,             // tie animation to scroll position!
            animation: tl            // connect the GSAP timeline
        })
        // create 2d array
        for (let i = 0; i < numPaths; i++) {
            let points: number[] = []
            allPoints.push(points) // allPoints.length = 3
            for (let j = 0; j < numPoints; j++) {
                // 100 reprecent the 100 % of the view in SVG
                points.push(100) // point.length = 10
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
                path.setAttribute("d", d)
            }
        }
    }, [])


    return (


        <svg className="shape-overlays absolute w-full h-full bg-clsand" ref={overlayRef} viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"  stopColor="#55c4d7" /> 
                    <stop offset="100%" stopColor="#1a748e"  /> 
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00ff65" /> 
                    <stop offset="100%" stopColor="#ff009a" /> 
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1E3E62" />
                    <stop offset="100%" stopColor="#0B192C" />
                </linearGradient>
            </defs>
            <path className="shape-overlays__path" 
            stroke="#ffffff"
            strokeWidth="0.6"
            fill="url(#gradient1)"></path>
            <path className="shape-overlays__path" 
            strokeWidth="0.6"
            fill="url(#gradient1)"></path>
            { /*<path className="shape-overlays__path" 
            fill="url(#gradient3)"></path> */}
        </svg>


    )
}

export default Wavy