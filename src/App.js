import './App.css';
import NavBar from './components/header/NavBar';
import Hero from './components/hero/Hero';
import About from './components/aboutpage/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import useDarkmode from './useDarkmode';

function App() {
  useDarkmode()
  return (
    <div className='transition duration-400'>
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
