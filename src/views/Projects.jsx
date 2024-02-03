import GridExperience from "../components/GridExperience";

const Projects = () => {

  return (
    <div className="flex flex-col md:flex-row w-full items-center text-center md:text-left md:items-start justify-around md:mt-16 text-white">

      {/* <ProjectsGrid /> */}
      <div className="font-normal max-w-lg h-max">
        <h1 className="text-5xl mb-2 font-bold">Career</h1>
        <ul className="">
          <li className="py-2">
            <h2 className="font-bold text-2xl py-2 text-green-400">Floid</h2>
            <p className="font-semibold">QA Engineer | Jan 2023 - Jan 2024 </p>
            <p>
              Software Development & Data Collection,
              Newman JavaScript Library, Web Scraping using PHP and Python.
              Slack Notification Integration, HTTP Requests Analysis.
            </p>
            </li>
          <li className="py-2">
            <h2 className="font-bold text-2xl py-2 text-green-400">AltaVenta SPA</h2>
            <p className="font-semibold">Full Stack Developer | Jan 2022 - December 2022 </p>
            <p>
              Docker Containers for web development, UNIX Server Management, API Development with Node.js and Express,
              Amazon SES, E-commerce development using NextJS, Prisma and PostgreSQL.
            </p>
          </li>
          <li className="pt-2">
            <h2 className="font-bold text-2xl py-2 text-green-400">Internship</h2>
            <p className="font-semibold">Full Stack Dev | Jan 2022 - March 2022</p>
            <p>
              Front end development using React, Bootstrap and axios.
              Back end development using Python, Flask, SQLAlchemy.
            </p>
          </li>
        </ul>
        {/* <hr className="h-px w-auto hidden md:block border-0 rounded md:my-10 bg-green-400"/> */}
      </div>
      <div className="text-white mt-12 md:mt-0">
        <h1 className="font-bold text-5xl my-4 text-center md:text-left md:my-0 md:mb-4">Experience</h1>
        <GridExperience /> 
      </div>
    </div>
    
  );

}

export default Projects;