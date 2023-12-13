import React from "react";
import ProBox from "./ProBox";
import img from "../../assets/imgs/sb-shopping-frontend.vercel.app_.png";
import img1 from "../../assets/imgs/todo-list-eight-ochre.vercel.app_.png";
import img2 from "../../assets/imgs/kaka.png";
import "../../css/styles/stylesComp/_project.scss";
function Projects() {
  return (
    <>
      <section id="project" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="E-commerce"
                img={img}
                description="With a focus on simplicity and clean design, this store prioritizes user experience, helping customers easily find and purchase the products they need. It is responsive, ensuring compatibility with various screen sizes."
                techno1="NextJS"
                techno2="SCSS"
                code="https://github.com/huycloud1999/SB_shopping"
                demo="https://sb-shopping-frontend.vercel.app/"
                icon="🏪"
              />

              <ProBox
                title="TodoList"
                img={img2}
                description="Building a social networking system for travel enthusiasts, allowing them to share details
                of their journeys."
                techno1="NextJS"
                techno2="SCSS"
                code="https://github.com/X-Career/X17-Project-HDT"
                demo="• https://x17-project-hdt.vercel.app/"
                icon="🏖️"
                cName="reversed-proj"
              />
              <ProBox
                title="TodoList"
                img={img1}
                description="A user-friendly web to-do list app for efficient task management, offering features like task creation, organization, deadlines, and real-time updates."
                techno1="React"
                techno2="Tailwindcss"
                code="A user-friendly web to-do list app for efficient task management, offering features like task creation, organization, deadlines, and real-time updates."
                demo="https://todo-list-eight-ochre.vercel.app/"
                icon="📋"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
