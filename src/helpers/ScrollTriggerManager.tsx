import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

type CreateFunction = () => ScrollTrigger[] | ScrollTrigger | undefined

if (!gsap.plugins?.ScrollTriggerInstance) {
  gsap.registerPlugin(ScrollTrigger)
}

export const createScrollTrigger = (config: ScrollTrigger.StaticVars): ScrollTrigger => {
  const trigger = ScrollTrigger.create(config)
  
  return trigger
}

export const useScrollTrigger = (createFunc: CreateFunction, deps: React.DependencyList = []) => {
  useEffect(() => {
    ScrollTrigger.refresh()
    
    const triggers = createFunc()
    
    return () => {
      if (Array.isArray(triggers)) {
        triggers.forEach(trigger => trigger?.kill())
      } else if (triggers?.kill) {
        triggers.kill()
      }
      ScrollTrigger.refresh()
    }
  }, deps)
}

export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh()
}