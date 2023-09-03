import React from "react";
import "../../css/styles/stylesComp/_contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <>
      <section className="contact" id="Contact">
        <div className="container">
          <div className="contact-content">
            <div className="contactTitle">
              <p>Contact</p>
              <h3>Don't be shy! Hit me up!👇</h3>
            </div>
            <div className="contactIcon">
              <div class="contact__icon-box">
                <span>
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </span>
                <div class="contact__info">
                  <h3>Location</h3>
                  <p>Hà Nội, Việt Nam</p>
                </div>
              </div>
              <div class="contact__icon-box">
                <span>
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </span>
                <div class="contact__info">
                  <h3>Mail</h3>
                  <p>huycloud1999@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
