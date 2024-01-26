import GridExperience from "../components/GridExperience";

const Projects = () => {

  return (
    <div className="flex flex-column w-full items-center justify-around px-16 text-white">

      {/* <ProjectsGrid /> */}
      <div className="font-mono max-w-md">
        <h2 className="text-4xl py-4 font-bold">Career</h2>
        <ul className="">
          <li className="p-2">
            <h2 className="font-bold text-2xl">Floid</h2>
            <p>Jan 2023 - Jan 2024 <br /> QA Engineer</p>
            </li>
          <li className="p-2">
            <h2 className="font-bold text-2xl">AltaVenta SPA</h2>
            <p>Jan 2022 - December 2022 <br />Full Stack</p>
          </li>
          <li className="p-2">
            <h2 className="font-bold text-2xl">Internship</h2>
            <p>Jan 2023 - Jan 2024 <br /> QA Engineer</p>
          </li>
        </ul>
        <button className="p-3 mt-4 bg-green-500 rounded-md transition duration-500 ease-in-out hover:scale-110">
          Resume
          <span className="ml-2">→</span>
        </button>
      </div>
      <div className="text-white">
        <h2 className="font-mono text-3xl ">Experience</h2>
        <GridExperience /> 
      </div>
    </div>
    
  );

}

export default Projects;