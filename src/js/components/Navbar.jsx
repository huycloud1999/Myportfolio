import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faX} from "@fortawesome/free-solid-svg-icons";
import "../../css/styles/stylesComp/_nav.scss";
import '../../css/styles/global/styles.css'
function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };
  const navlinks = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Project",
      link: "#project",
    },
    {
      name: "Contact ",
      link: "#Contact",
    },
  ];
  return (
    <>
      <nav>
        <a href="#Home"><h3 className="logo">SieuBuongg.dev</h3></a>
        <ul>
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <FontAwesomeIcon icon={faBars} className="menuIcon" onClick={() => hamburgerMenu()}/>
      </nav>
       {/* mobile nav */}
       <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
        <FontAwesomeIcon icon={faX} className="closeIcon" />
        </span>

        <ul>
          {navlinks.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
