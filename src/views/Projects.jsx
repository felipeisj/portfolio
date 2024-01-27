import GridExperience from "../components/GridExperience";

const Projects = () => {

  return (
    <div className="flex flex-column w-full items-start justify-around p-16 text-white">

      {/* <ProjectsGrid /> */}
      <div className="font-normal max-w-lg">
        <h2 className="text-4xl mb-4 font-bold">Career</h2>
        <ul className="">
          <li className="py-2">
            <h2 className="font-bold text-2xl py-2">Floid</h2>
            <p className="font-semibold">QA Engineer | Jan 2023 - Jan 2024 </p>
            <p>
              Software Development & Data Collection,
              Newman JavaScript Library, Web Scraping using PHP and Python.
              Slack Notification Integration, HTTP Requests Analysis.
            </p>
            </li>
          <li className="py-2">
            <h2 className="font-bold text-2xl py-2">AltaVenta SPA</h2>
            <p className="font-semibold">Full Stack Developer | Jan 2022 - December 2022 </p>
            <p>
              Docker Containers for web development, UNIX Server Management, API Development with Node.js and Express,
              Amazon SES, E-commerce development using NextJS, Prisma and PostgreSQL.
            </p>
          </li>
          <li className="py-2">
            <h2 className="font-bold text-2xl py-2">Internship</h2>
            <p className="font-semibold">Full Stack Dev | Jan 2022 - March 2022</p>
            <p>
              Front end development using React, Bootstrap and axios.
              Back end development using Python, Flask, SQLAlchemy.
            </p>
          </li>
        </ul>
        <hr className="h-px w-auto border-0 rounded md:my-10 bg-green-400"/>
        {/* <button className="p-3 mt-4 bg-green-500 rounded-md transition duration-500 ease-in-out hover:scale-110">
          Resume
          <span className="ml-2">→</span>
        </button> */}
      </div>
      <div className="text-white">
        <h2 className="font-bold text-4xl ">Experience</h2>
        <GridExperience /> 
      </div>
    </div>
    
  );

}

export default Projects;