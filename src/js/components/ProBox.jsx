import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons"
function ProBox({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  cName,
  icon,
}) {

  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img
              src={img}
              alt="website"
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} {icon}
          </h3>
          <p>{description}</p>
          <div className="stack">
            <p>{techno1}</p>
            <p>{techno2}</p>
          </div>
          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code  <FontAwesomeIcon icon={faGithub} />
            </a>
            <a target="_blank" href={demo} rel="noreferrer">
              Live Demo
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProBox;
