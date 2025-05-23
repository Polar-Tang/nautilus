import { About, Wavy, Crab } from '@/components/'
import { motion } from 'motion/react'

import "@/output.css"
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <div className="relative flex flex-col h-dvh w-full overflow-hidden">
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

                <div className="flex-grow flex justify-center items-center z-10">
                    <img src="/nautilus.png" alt="Logo" className="h-auto w-140 md:w-100" />
                </div>

                <div className="flex justify-end items-end p-5 z-10">
                    <div className="relative">
                        <Crab className="h-36 m-0" />
                    </div>
                </div>
            </div>



            <div className="relative h-[200vh] z-0 overflow-x-hidden">
                <Wavy />
            </div>

            <About />

            <div className='bg-masoscuro bg-cover bg-no-repeat w-full h-[100dvh] relative z-10 flex items-end space-between justify-around' >
            
            <img src='/footerShore.png' alt='footer' className='h-full w-full absolute inset-0 top-0 left-0 z-0 ' />

                <Link to={"https://github.com/Polar-Tang"} target="_blank" className='h-48 w-36 basis-38 z-1 '>
                    <img src='/githubPhishing.png' alt='footer'  />
                </Link>
                
                <Link className='h-24 w-24 basis-24 z-1' target="_blank" to={"https://notes-one-gold.vercel.app/"}>
                <img src='/notes.png' alt='notes'  />
                </Link>
            </div>
        </>


    )
}

export default Home