import About from '@/components/About'
import ArrowPointDown from '@/components/ArrowPointDown'
import SvgComponentNavbarSlime from '@/components/SvgComponentNavbarSlime'
import Wavy from '@/components/Wavy'
import "@/output.css"

const Home = () => {
    return (
        <>
            <div className="z-0 h-dvh w-full overflow-hidden">
                <div className="absolute inset-0 bg-sand">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-sand via-clsand to-clsand " />
                </div>

                {/* <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M0,0 C150,60 350,0 500,30 C650,60 700,0 900,40 C1050,70 1200,20 1200,20 L1200,0 L0,0 Z"
                            className="fill-current"
                        />
                    </svg>
                </div> */}
            </div>
            {/* <div className="fixed inset-0 z-0 h-dvh w-full overflow-hidden">
                <div className="absolute inset-0 bg-sand-300">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-sand-200 via-amber-300 to-amber-400 opacity-40" />
                </div>

                <div className="absolute top-0 left-0 right-0">
                    <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M0,0 C150,60 350,0 500,30 C650,60 700,0 900,40 C1050,70 1200,20 1200,20 L1200,0 L0,0 Z"
                            className="fill-current"
                        />
                    </svg>
                </div>
            </div>
            <div className="fixed inset-0 z-0 h-dvh w-full overflow-hidden">
                <div className="absolute inset-0 bg-amber-300">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    />
                     <div className="absolute inset-0 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 opacity-40" />
                </div>

                <div className="flex-grow flex items-center justify-center md:top-3/4 .-translate-y-50">
                    <img src='/nautilus1.png' className="bg-negro w-200" />
                </div>
                

                <div className="w-full flex items-end justify-between pb-8 px-6 z-1">
                    <div className="flex-shrink-0">
                        <svg className="w-16 h-16" viewBox="0 0 24 24">
                        </svg>
                    </div>

                    <div className="flex flex-col items-center ">
                        <h5 className="text-azul mb-2 text-3xl ">Dig deep into the ocean</h5>
                        <ArrowPointDown />
                    </div>

                    <div className="flex-shrink-0 w-16"></div>
                </div>
            </div> */}
            <div className="relative h-[200vh] bg-negro z-0">
                <Wavy />
            </div>
            <section className="bg-lastwave text-white min-h-screen relative z-2 bg-azul">
                <About />
            </section>
        </>


    )
}

export default Home