
import Navbar from './components/Navbar'
import About from './views/About'
import Footer from './views/Footer'
import Projects from './views/Projects'
import Welcome from './views/Welcome'


function App() {
  return (
  <div className=" text-[#4ADE80] bg-[#1F2937]">
    <Navbar />
    <section 
        id="welcome" 
        className="flex flex-col md:flex-row justify-evenly items-center h-screen "
      >
        <Welcome />
      </section>

      <hr className="h-px w-4/5 hidden md:block mx-auto border-0 rounded my-10 bg-gray-200"/>

      <section 
        id="projects" 
        className="bg-[#1F2937] flex flex-col md:flex-row md:justify-center h-auto md:min-h-screen p-16" 
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Projects />
      </section>

      {/* <hr className="h-px w-4/5 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200" /> */}

      <section 
        id="about" 
        className="h-auto md:h-screen flex flex-col md:flex-row"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <About />
      </section>
      <section>
        <Footer />
      </section>
  </div>
  )
}

export default App
