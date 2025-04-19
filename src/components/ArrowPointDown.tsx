import { motion } from "motion/react"

const ArrowPointDown = () => {

    const ArrowPointDownVariant = {

        initial: { 
            y: -20
          },
          animate: {
            y: 20,
            repeat: Infinity,
            yoyo: true,
            transition: {
                duration: 2,
                ease: "none",
            }
          }
    }

  return (
    <motion.svg variants={ArrowPointDownVariant} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#1E3E62" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="4" x2="12" y2="16" className="w-5" />
    <polyline points="7 12 12 20 17 12" />
  </g>
</motion.svg>
  )
}

export default ArrowPointDown