import UlWave from "./UlWave"



const About = () => {
  

  return (
    <>
      <div 
        className="shape-overlays z-1 absolute w-full h-[200dvh]
      z-2 mx-auto -mt-100 py-32 bg-trasparent
      text-white
      "
      >

        <ul
          className="ul bg-trasparent z-4 h-full "

        >
          {/* <TurbulenceTitle title={"Frontend Engeneering"} />
*/}

          <p className="about-item text-lg mb-8">React Developing</p>
          <p className="about-item text-lg mb-8">Animations</p>
        </ul>

      </div>
      <UlWave/>
    </>
  )
}

export default About