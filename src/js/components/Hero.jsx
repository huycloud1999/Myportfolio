import React from "react";
import "../../css/styles/stylesComp/_hero.scss";
import html from "../../assets/imgs/html.svg";
import css3 from "../../assets/imgs/css3.svg";
import js from "../../assets/imgs/javascript.svg";
import react from "../../assets/imgs/react.svg";
import scss from "../../assets/imgs/scss.svg";
import tailwind from "../../assets/imgs/tailwind.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faFacebook } from "@fortawesome/free-brands-svg-icons"
function Hero() {
  const skillsIcons = [
    {
      img: html,
      title: "HTML5",
    },
    {
      img: css3,
      title: "CSS3",
    },
    {
      img: js,
      title: "Java Script",
    },
    {
      img: react,
      title: "React",
    },
    {
      img: tailwind,
      title: "Tailwind CSS",
    },
    {
      img: scss,
      title: "SCSS",
    },
  ];
  return (
    <div>
      <section id="Home" className="hero">
        <div className="container">
          <div className="content">
            <div className="heroMain">
              <div className="heroText">
              
                <h1> <span>Front-End React</span> Developer </h1>
    
              
                <p>
                  Hi, I'm Bùi Quang Huy. A passionate{" "}
                  <span>Front-end React Developer</span> in Ha Noi,Viet Nam . 📍
                </p>
                <div className="icon">
                  <a href="https://www.facebook.com/huycloud1999">
                  <FontAwesomeIcon icon={faGithub} className="iconContact" />
                  </a>
                  <a href="https://github.com/huycloud1999">
                  <FontAwesomeIcon icon={faFacebook} className="iconContact"   /> 
                  </a>
                </div>
 
              </div>
              < div className="heroimg"></div>
            </div>
            <div className="skills">
              <p>Tech stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
