import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Slide from 'react-reveal/Slide';

export default function App() {
  return (
    <ScrollIndicator>
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Slide bottom>
        <Projects />
      </Slide>
      <Slide bottom>
        <Skills />
      </Slide>
      <Slide bottom>
        <Testimonials />
      </Slide>
      <Slide bottom>
      <Contact />
      </Slide>
      <Footer />
    </main>
    </ScrollIndicator>
  )
}

const ScrollIndicator = ({ children }) => {
  const [scroll, setScroll] = React.useState(0);
  const onScrollProgress = () => {
    const html = document.documentElement;
    const scrollPx = html.scrollTop;
    const winHeightPx = html.scrollHeight - html.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
    setScroll(scrolled);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', onScrollProgress);
    return () => {
      window.removeEventListener('scroll', onScrollProgress);
    };
  }, []);
  const inlineStyle = {
    height: '6px',
    background: '#4C1D95',
    width: scroll,
  };
  return (
    <div>
      <div className="top-0 left-0 w-screen h-1.5 fixed z-40 shadow-2xl bg-gray-300">
        <div style={inlineStyle} />
      </div>
      {children}
    </div>
  );
};