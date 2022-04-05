import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="TTZkObL-of0"
            onClose={() => setOpen(false)}
          />
          {/* End Youtube Modal video */}

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner video">
              <a
                href="https://youtu.be/TTZkObL-of0"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Paws Reunite </h3>
                <span>Pet Finding Web App</span>
              </a>
              <img
                src="img/portfolio/paws-reunite.png"
                alt="paws-reunite"
                onClick={() => setOpen(true)}
              />
            </div>
          </li>
          {/* End youtube */}

          <SRLWrapper>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template"
                >
                  <h3>Birdseye Global Website</h3>
                  <span>Marketing website of Birdseye AI Marketing</span>
                </a>

                <a href="img/portfolio/birdseye-web-1.png">
                  <img src="img/portfolio/birdseye-web-1.png" alt="Dribbble Shoot" />
                  

                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL"
                >
                  <h3>Kelly Smith</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/4.jpg">
                  <img src="img/portfolio/4.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                >
                  <h3>Duru Sweet</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/5.jpg">
                  <img src="img/portfolio/5.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/ibthemes"
                >
                  <h3>Lisa Kotlins</h3>
                  <span>Facebook Shoot</span>
                </a>

                <a href="img/portfolio/6.jpg">
                  <img src="img/portfolio/6.jpg" alt="Facebook Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}
          </SRLWrapper>
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
