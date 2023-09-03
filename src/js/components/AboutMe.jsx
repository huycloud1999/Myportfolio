import React from "react";
import WorkingEmoji from "../../assets/imgs/giphy.gif";
import AboutImg from "../../assets/imgs/aa.jpg";
import RoundedText from "../../assets/imgs/text2.svg";
import "../../css/styles/stylesComp/_about.scss";
function AboutMe() {
  return (
    <>
      <section className="about" id="About">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Ha Noi, Viet
                Nam 📍
              </h4>
              <p>
                Im a Fresher Front-End Developer with a primary focus on React.
                I have a basic understanding of HTML, CSS, JavaScript, React,
                Tailwind, and SCSS and am seeking opportunities to apply this
                knowledge in real-world scenarios, particularly in web
                application development using React. I'm self-driven and have
                been self-learning and practicing to grasp the fundamentals of
                working with React components, state management, and routing. My
                eagerness to learn is one of my strengths, and I aspire to work
                in a team environment where I can learn from experts and
                contribute to building impressive web products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
