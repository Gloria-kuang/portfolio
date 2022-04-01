import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiGrid,
  FiPhoneOutgoing,
} from "react-icons/fi";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* TOPBAR  */}
      <div className={navbar ? "beny_tm_topbar animate" : "beny_tm_topbar"}>
        <div className="in">
          <div className="topbar_inner">
            <div className="logo">
              <Link to="/">
                <img src="img/logo/gloria-logo.png" alt="brand" />
              </Link>
            </div>
            <div className="menu">
              <Scrollspy
                className="anchor_nav"
                items={[
                  "home",
                  "about",
                  "skills",
                  "portfolio",
                  "contact",
                ]}
                currentClassName="current"
                offset={-88}
              >
                <li className="current">
                  <a href="#home">
                    <span className="first">Home</span>
                    <span className="second">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="first">About</span>
                    <span className="second">About</span>
                  </a>
                </li>
                <li>
                  <a href="#skills">
                    <span className="first">Skills</span>
                    <span className="second">Skills</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span className="first">Portfolio</span>
                    <span className="second">Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span className="first">Contact</span>
                    <span className="second">Contact</span>
                  </a>
                </li>
                <li>
                  {/* download resume */}
                  <a href="https://themeforest.net/checkout/from_item/33910000?license=regular"> 
                    <span className="wrapper">
                      <span className="first">Download Resume</span>
                      <span className="second">Download Resume</span>
                    </span>
                  </a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      {/* /TOPBAR */}

      <div className="mobile-menu-wrapper">
        <Scrollspy
          className="mobile_menu-icon"
          items={["home", "about", "skills", "portfolio", "contact"]}
          currentClassName="current"
          offset={-65}
        >
          <li>
            <a href="#home">
              <FiHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <FiUser />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills">
              <FiSettings />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <FiGrid />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiPhoneOutgoing />
              <span>Contact</span>
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* End mobile-menu */}
    </>
  );
};

export default Header;
