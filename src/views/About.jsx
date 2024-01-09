import Card from "../components/Card";

const About = () => {
  return (
    <div className="w-full flex-row mb-24 px-[2.5rem]">
      <h1 className="text-5xl text-white font-bold p-4 text-center mt-0">About me</h1>
      <div className="about-cards flex gap-10 flex-col md:flex-row font-bold mt-24">
        <Card title="Education" imageUrl="education.svg" content={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae atque nesciunt necessitatibus incidunt debitis labore, amet dolor quia, cum tempore deleniti aliquid veniam fugit vel temporibus, architecto aliquam mollitia.</p>} />
        <Card title="Experience" imageUrl="binary.svg" content={<p>React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years React and nodejs dev for the last 2 years</p>} />
        <Card title="Skills" imageUrl="back_code.svg" content={
          <ul>
            <li>Self-motivated</li>
            <li>Responsible</li>
            <li>Ambicius</li>
            <li>Friendly</li>
          </ul>
        } />
        <Card title="Hobbies" imageUrl="vite.svg" content={
          <h1 className="text-2xl font-bold pr-4 text-white">
          Felipe, <span className="text-green-400">Full Stack Dev</span>
          </h1>
        } />
      </div>
    </div>
  )
}

export default About;