import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-evenly px-[2.5rem] ">
      <h1 className="text-6xl text-white font-bold pb-4 text-center ">About</h1>
      <div className="about-cards mb-12 flex gap-8 flex-col md:flex-row font-bold">
        <AboutCard title="Education" imageUrl="educat.svg"  
          content={
            
            <p className="text-white text-center">Degree in Computer Science Engineering
              <br/>
              Universidad Austral de Chile
              <br/>
              <p>2015 - 2021</p>
            </p>
          } />
        <AboutCard title="Other Experiences" imageUrl="exper.svg" content={
          <ul className="list-none space-y-2 text-white">
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              English and spanish fluent
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Entrepeneur Person
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Lived a year in Australia
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Experience in Data Science
            </li>
          </ul>
        } />
        <AboutCard title="Skills" imageUrl="skills.svg" content={
          <ul className="list-none space-y-2 text-white">
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Resilience
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Self-motivated
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Responsible
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Team Player
            </li>
          </ul>
        } />
        <AboutCard title="Hobbies" imageUrl="hobbies.svg" content={
          <ul className="list-none space-y-2 text-white">
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Passionate about padel
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Avid hiker
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Keen reader
            </li>
            <li className="flex items-center">
              <span className="h-2 w-2 mr-2 bg-green-400 inline-block rounded-full"></span>
              Coffee Lover
            </li>
          </ul>
        } />
      </div>
    </div>
  )
}

export default About;