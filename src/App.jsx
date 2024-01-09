
import Navbar from './components/Navbar'
import About from './views/About'
import Footer from './views/Footer'
import Projects from './views/Projects'
import Welcome from './views/Welcome'


function App() {
  return (
  <div className=" text-[#04B404]">
    <Navbar />
    <section 
        id="welcome" 
        className="h-screen flex justify-center items-center"
      >
        <Welcome />
      </section>
      <section 
        id="projects" 
        className="bg-[#242424] min-h-screen text-[#04B404] font-mono text-lg p-5" 
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Projects />
      </section>
      <section 
        id="about" 
        className="min-h-screen flex items-center " 
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
