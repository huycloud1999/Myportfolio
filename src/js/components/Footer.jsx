import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "../../css/styles/stylesComp/_footer.scss";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/huycloud1999"
              >
                <FontAwesomeIcon icon={faGithub} className="iconContact" />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/huycloud1999"
              >
                <FontAwesomeIcon icon={faFacebook} className="iconContact" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
