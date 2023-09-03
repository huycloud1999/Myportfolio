import React from 'react'
import ProBox from './ProBox';
import img from '../../assets/imgs/hehe.gif'
import '../../css/styles/stylesComp/_project.scss'
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
                title="Car Rental"
                img={img}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="SCSS"
                code="#"
                demo="#"
                scrollY="-83%"
                icon="🚗"
              />
                     <ProBox
                title="Car Rental"
                img={img}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="SCSS"
                code="#"
                demo="#"
                scrollY="-83%"
                icon="🚗"
                cName="reversed-proj"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  )
}

export default Projects