import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

function setupRotationAnimations(id: string) {
    // Select all elements with the data-rotate attribute
    const rotatingElements = document.querySelectorAll('[data-rotate]');
    
    rotatingElements.forEach((element) => {
      // Get custom rotation values from data attributes (or use defaults)
      const startRotation = element instanceof HTMLElement && element.dataset.rotateStart || 0;
      const endRotation = element instanceof HTMLElement &&  element.dataset.rotateEnd || 360;
      const scrubValue = element instanceof HTMLElement &&  element.dataset.rotateScrub === 'false' ? false : 1;
      const triggerElement = document.getElementById(`${id}`)

      // Create the animation
      gsap.fromTo(element, 
        { rotation: startRotation },
        {
          rotation: endRotation ,
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement, 
            start: "top 60%", 
            end: "bottom bottom", 
            scrub: scrubValue, 
            markers: true
          }
        }
      );
    });
  }

  function initScrollAnimations(id: string) {
    // Wait for DOM to be ready
    if (document.readyState === 'complete') {
      setupRotationAnimations(id);
    } else {
      window.addEventListener('load', () => setupRotationAnimations);
    }
    
    // Clean up function for React components
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('load', () => setupRotationAnimations);
    }
  }
  export default initScrollAnimations