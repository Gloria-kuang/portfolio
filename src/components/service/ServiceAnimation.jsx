import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ServiceAnimation = () => {

  return (
    <div className="service_list">
      <ul>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/javascript.svg" alt="" />
            <div className="service_title">
              <h3>JavaScript</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/react.svg" alt="" />
            <div className="service_title">
              <h3>React JS</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <img className="svg" src="img/svg/html-5.svg" alt="" />
            <div className="service_title">
              <h3>HTML5</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img className="svg" src="img/svg/css3.svg" alt="" />
            <div className="service_title">
              <h3>CSS3</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img className="svg" src="img/svg/sass.svg" alt="" />
            <div className="service_title">
              <h3>Sass</h3>
            </div>
          </div>
        </li>
        
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/nodejs.svg" alt="" />
            <div className="service_title">
              <h3>Node JS</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/mysql.svg" alt="" />
            <div className="service_title">
              <h3>MySQL</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/figma.svg" alt="" />
            <div className="service_title">
              <h3>Figma</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/illustrator.svg" alt="" />
            <div className="service_title">
              <h3>Illustrator</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/photoshop.svg" alt="" />
            <div className="service_title">
              <h3>Photoshop</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/material-ui.svg" alt="" />
            <div className="service_title">
              <h3>MaterialUI</h3>
            </div>
          </div>
        </li>
        <li>
          <div
            className="list_inner"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img className="svg" src="img/svg/bootstrap.svg" alt="" />
            <div className="service_title">
              <h3>Bootstrap</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ServiceAnimation;
