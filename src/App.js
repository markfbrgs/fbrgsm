import React, { useState, useEffect, useContext } from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar/navbar';
import Home from './section/home/home';
import About from './section/about/about';
import Skills from './section/skills/skills';
import Project from './section/project/project';
import Contact from './section/contact/contact';
import Footer from './component/footer/footer';
import Toggle from './component/toggle/toggle';
import { ThemeProvider, ThemeContext } from './context/context';
import Loading from './component/loading/loading';

const AppContent = () => {
  const { lightMode } = useContext(ThemeContext)

  return (
    <div className={`App ${lightMode ? "light" : " "}`}>
      <Navbar />
      <Toggle />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? <Loading /> : <AppContent />}
    </ThemeProvider>
  );
}

export default App;
