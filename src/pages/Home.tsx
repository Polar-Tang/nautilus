import { About, Wavy, Crab } from '@/components/'
import { motion } from 'motion/react'

import "@/output.css"
import { Link } from 'react-router-dom'
import {ArrowDown} from 'lucide-react'


const Home = () => {

    return (
        <>
            <div className="relative flex flex-col h-dvh w-full overflow-hidden z-0">
                {/* Background Layer */}
                <div className="absolute h-dvh w-full  inset-0 bg-sand z-0">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-sand via-clsand to-clsand" />
                </div>

                <div className="flex items-start p-4 z-10">
                    <motion.img
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        src="/starfish.png" alt="Starfish" className="h-26 md:h-28 -rotate-15 w-auto" />
                </div>

                <div className="flex-grow flex flex-col justify-center items-center z-10">
                    <img src="/nautilus.png" alt="Logo" className="h-auto w-140 md:w-180 xl:240" />
                    <style>{`
                        @font-face {
                            font-family: 'RubikGemstones';
                            src: url('/fonts/PoiretOne-Regular.ttf') format('truetype');
                        }
                            @font-face {
                            font-family: 'TASAOrbiter';
                            src: url('/fonts/TASAOrbiter-Regular.ttf') format('truetype');
                        }
                    `}</style>
                    <h3 className="text-center text-3xl pt-8" style={{ fontFamily: 'RubikGemstones' }}>Fullstack developer</h3>
                    <h5 className="text-center text-xl pt-8 text-dark-500" > Let's build games.</h5>
                </div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="flex justify-center z-10 absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <ArrowDown className="h-8 w-8" />
                </motion.div>
                <div className="flex justify-end items-end  z-10">
                    <div className="relative z-10">
                        <Crab className="h-36 w-56 xl:-mt-20 z-10 " />
                    </div>
                </div>
            </div>



            <div className="relative h-[200vh] z-0 overflow-x-hidden">
                <Wavy />
            </div>

            <About />

            <div className='bg-masoscuro bg-cover bg-no-repeat w-full h-[100dvh] relative z-7 flex items-end space-between justify-around' >
            
            <img src='/footerShore.png' alt='footer' className='h-full w-full absolute inset-0 top-0 left-0 z-0 ' />
                
                <Link to={"https://discord.com/users/1229054445602607174"} target="_blank" className='h-48 w-36 basis-38 z-1 '>
                    <img src='/discord.png' alt='footer'  />
                </Link>
                   
                <Link to={"https://www.roblox.com/users/8742003634/profile/#!#creations"} target="_blank" className='h-48 w-16 basis-24 z-1'>
                    <img src='/Roblox.png' alt='footer' className='h-full w-full object-contain' />
                </Link>
            </div>
        </>


    )
}

export default Home