import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const BlogAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <div className="news_list">
        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/paws-reunite.png"
                      })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span>
                  Jan 2022<a href="#">Pet Finding Web App</a>
                </span>
                <h3 className="title" onClick={toggleModalOne}>
                  Paws Reunite
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/portfolio/paws-reunite-header.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/paws-reunite-header.png"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* End image */}

                      <div className="details">
                        <span>
                          Jan,2022 <a href="#">Brainstation Capstone Project</a>
                        </span>
                        <h3 className="title" onClick={toggleModalOne}>
                          Paws Reunite
                        </h3>
                      </div>
                      {/* End details */}

                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            Paws Reunite is a web app aiming to make happy reunions for pets owners and their lost furry friends. It provides a platform where pets owners can post lost/found pets, search for pets based on location and share posts to social media.
                          </p>
                          <div className="quotebox">
                            <p>
                              Tech Stack
                            </p>
                          </div>
                          <p>
                            JavaScript, React JS, HTML5, CSS3, SASS, Node.js, React Boostrap
                          </p>
                          <p>
                            React Hooks, Firebase, Google Map API, Google Geocoding API
                          </p>
                          <div className="quotebox">
                            <p>
                              Video Demo
                            </p>
                          </div>

                          <iframe
                            src="https://www.youtube.com/embed/TTZkObL-of0"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                            width="1000"
                            height="520"
                          />

                        </div>
                        {/* End description */}
                        <div className="news_share ">
                          <span>Link:</span>
                          <a href="https://paws-reunite.web.app/" target="_blank">https://paws-reunite.web.app/</a>
                        </div>
                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                  {/* End box inner */}
                </div>
                {/* End modal box news */}
              </Modal>
              {/* End modal */}
            </div>
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalTwo}>
                <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/birdseye-web-1.png"
                      })`,
                  }}
                ></div>
              </div>
              {/* End image */}

              <div className="details">
                <span>
                  Feb,2022 <a href="#">Birdseye AI Marketing</a>
                </span>
                <h3 className="title" onClick={toggleModalTwo}>
                  Birdseye Global Website
                </h3>
              </div>
              {/* End details */}

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close modal */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/portfolio/birdseye-website-header.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/birdseye-website-header.png"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* End image */}

                      <div className="details">
                        <span>
                          Feb,2022 <a href="#">Birdseye Global</a>
                        </span>
                        <h3 className="title">Birdseye AI Marketing Website</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                          Redesigned the official website of Birdseye Global, which aims to use machine learning algorithm to help clients forecast the revenue and determine the optimal allocations of advertising budget.
                          </p>
                          <p>
                          BirdsAI Marketing™ takes the guesswork out of digital advertising to help your business save money, grow revenue and reach your target audience.
                          </p>
                          <div className="quotebox">
                            <p>
                              Tech Stack
                            </p>
                          </div>
                          <p>
                          JavaScript, React JS, HTML5, CSS3, SASS, React Boostrap, Netlify, Figma
                          </p>
                          <div className="quotebox">
                          </div>
                        </div>

                        {/* End description */}
                        <div className="news_share">
                          <span>Link:</span>
                          <a href="https://birdseyeglobal.com/" target="_blank">https://birdseyeglobal.com/</a>
                        </div>

                        {/* End news share */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
              {/* End modal */}
            </div>
            {/* End list inner */}
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalThree}>
                <img src="/img/portfolio/birdseye-login.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/birdseye-login.png"
                      })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <span>
                  March, 2022 <a href="#">Birdseye Global</a>
                </span>
                <h3 className="title" onClick={toggleModalThree}>
                  Birdseye AI Marketing Web App
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/news/3.jpg"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <span>
                         March, 2022 <a href="#">Birdseye Global</a>
                        </span>
                        <h3 className="title">BirdsAI Marketing™ Web App</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                            Redesigned the User Interfaces of version 3.0 Birdseye AI Marketing Web App. Worked closely with the back-end development team to implement updates and connect to APIs.
                          </p>
                          <p>
                          BirdsAI Marketing™ takes the guesswork out of digital advertising to help your business save money, grow revenue and reach your target audience.
                          </p>
                          <p>
                            Streets empty that are usually busy are remarkable
                            and can evoke the sense of historical pictures from
                            before the invention of the motorcar. Other things
                            that are different at the moment will be queues to
                            get into stores and the lines marked out on the
                            floor to show how far apart we should be.
                          </p>
                          <div className="quotebox">
                            <p>
                              Most photographers find it hard to see interesting
                              pictures in places in which they are most
                              familiar. A trip somewhere new seems always
                              exactly what our photography needed, as shooting
                              away from home consistently inspires us to new
                              artistic heights.
                            </p>
                          </div>
                          <p>
                            Pretend everything is new and that you haven’t seen
                            it before, and then you will be free to notice the
                            leading lines, the places where one edge meets
                            another in delightful geometric harmony, and how the
                            ordinary things in the kitchen are transformed when
                            the light is on or off.
                          </p>
                          <p>
                            The trick here is to look slowly, and then look
                            again. Take the time to look in detail and to look
                            at the same thing from different angles, with
                            different light, long lenses and wide lenses. Then
                            move to the left a bit. You may never feel the need
                            to leave the house again.
                          </p>
                        </div>
                        {/* END DESCRIPTION */}
                        <div className="news_share">
                          <span>Share:</span>
                          <Social />
                          {/* END SOCIAL SHARE */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* End single blog */}
        </ul>
      </div>
    </>
  );
};

export default BlogAnimation;
