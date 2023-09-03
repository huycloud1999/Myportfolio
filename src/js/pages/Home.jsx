import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
