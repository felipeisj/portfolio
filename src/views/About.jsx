import AboutCard from "../components/AboutCard";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-evenly px-[2.5rem] ">
      <h1 className="text-6xl text-white font-bold pb-4 text-center ">About</h1>
      <div className="about-cards mb-12 flex gap-8 flex-col md:flex-row font-bold text-green-400">
        <AboutCard title="Education" imageUrl="education.svg" content={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae atque nesciunt necessitatibus incidunt debitis labore, amet dolor quia, cum tempore deleniti aliquid veniam fugit vel temporibus, architecto aliquam mollitia.</p>} />
        <AboutCard title="Experience" imageUrl="binary.svg" content={<p>React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years</p>} />
        <AboutCard title="Skills" imageUrl="back_code.svg" content={
          <ul>
            <li>Self-motivated</li>
            <li>Responsible</li>
            <li>Ambicius</li>
            <li>Friendly</li>
          </ul>
        } />
        <AboutCard title="Hobbies" imageUrl="vite.svg" content={
          <h1 className="text-2xl font-bold pr-4 text-white">
          Felipe, <span className="text-green-400">Full Stack Dev</span>
          </h1>
        } />
      </div>
    </div>
  )
}

export default About;