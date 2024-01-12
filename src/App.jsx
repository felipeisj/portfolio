
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
        className="h-screen flex justify-center items-center pt-16"
      >
        <Welcome />
      </section>

      <hr className="h-px w-4/5 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-500" />

      <section 
        id="projects" 
        className="bg-[#1F2937] flex justify-center min-h-screen text-lg p-16" 
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Projects />
      </section>

      <hr className="h-px w-4/5 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-200" />

      <section 
        id="about" 
        className="min-h-screen mb-12"
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
