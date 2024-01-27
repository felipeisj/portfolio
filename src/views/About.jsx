import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-evenly px-[2.5rem] ">
      <h1 className="text-6xl text-white font-bold pb-4 text-center ">About</h1>
      <div className="about-cards mb-12 flex gap-8 flex-col md:flex-row font-bold">
        <AboutCard title="Education" imageUrl="educat.svg"  
          content={
            <p className="text-green-400">Computer Science Engineering
              <br/>
              Universidad Austral de Chile
              <br/>
              2015 - 2022
            </p>
          } />
        <AboutCard title="Experience" imageUrl="exper.svg" content={
          <p className="text-green-400">
            React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years
          </p>
        } />
        <AboutCard title="Skills" imageUrl="skills.svg" content={
          <ul className="list-disc text-green-400">
            <li>Resilience</li>
            <li>Self-motivated</li>
            <li>Responsible</li>
            <li>Ambicius</li>
            <li>Team Player</li>
            <li>Friendly</li>
          </ul>
        } />
        <AboutCard title="Hobbies" imageUrl="hobbies.svg" content={
          <ul className="list-disc text-green-400">
            <li>Padel</li>
            <li>Hiking</li>
            <li>Read</li>
            <li>Soccer</li>
            <li>Gym</li>
          </ul>
        } />
      </div>
    </div>
  )
}

export default About;