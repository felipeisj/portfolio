import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Team } from './pages/Team';
import { Index } from './pages/IndexPage';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Layout>
          <Header />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </Layout>
      </Router>
    </>
  )
}

export default App
