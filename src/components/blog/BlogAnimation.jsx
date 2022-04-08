import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const BlogAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
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
                  Jan 2022 Pet Finding Web App
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
                          Jan,2022 Brainstation Capstone Project
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
                          <a href="https://paws-reunite.web.app/" target="_blank" rel="noreferrer">https://paws-reunite.web.app/</a>
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
                  Feb,2022 Birdseye AI Marketing
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
                          Feb,2022 Birdseye Global
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
                          <a href="https://birdseyeglobal.com/" target="_blank" rel="noreferrer">https://birdseyeglobal.com/</a>
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
                  March, 2022 Birdseye Global
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
                        <img src="/img/portfolio/birdseye-header.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/birdseye-header.png"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <span>
                         March, 2022 Birdseye Global
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
                          <div className="quotebox">
                            <p>
                              Tech Stack
                            </p>
                          </div>
                          <p>
                          JavaScript, React JS, HTML5, CSS3, SASS, Node JS
                          </p>
                          <p>
                          ChartJS, MaterialUI, Figma, React Boostrap
                          </p>
                          <div className="quotebox">
                            <p>
                              Some Screenshots
                            </p>
                          </div>
                          <img src="/img/portfolio/birdseye-dashboard.png" alt="dashborad"/>
                          <img src="/img/portfolio/birdseye-platform.png" alt="platform"/>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* End single blog */}

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="/img/portfolio/whoop-landing.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/whoop-landing.png"
                      })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <span>
                  Jan, 2022 WHOOP Industry Hackthon Winning Project
                </span>
                <h3 className="title" onClick={toggleModalFour}>
                  Whoop Challenges
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/portfolio/whoop-header.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/whoop-header.png"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <span>
                         Jan, 2022 WHOOP Industry Hackthon Winning Project
                        </span>
                        <h3 className="title">Whoop Challenges</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                           In this WHOOP Industry Hackathon, we were tasked with providing additional functionality to the Whoop Fitness App in 24h.  
                          </p>
                          <p>
                          Our team chose to make a challenge tracker that gave suggested challenges based off the user's current fitness level. Users would be able to log daily fitness challenges and filter workouts by muscle group. Additionally, we also integrated our APP into Whoop's already robust community page by allowing users to create and add challenges to groups they were already part of. 
                          </p>
                          <div className="quotebox">
                            <p>
                              Tech Stack
                            </p>
                          </div>
                          <p>
                          JavaScript, React JS, HTML5, CSS3, SASS, Node JS, Express JS, ChartJS
                          </p>
                          <div className="quotebox">
                            <p>
                              Some Screenshots
                            </p>
                          </div>
                          <img src="/img/portfolio/whoop-0.png" alt="landing"/>
                          <img src="/img/portfolio/whoop-1.png" alt="dashborad"/>
                          <img src="/img/portfolio/whoop-2.png" alt="platform"/>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="/img/portfolio/marvel.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/marvel.png"
                      })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <span>
                  Dec, 2021 Brainstation Hackathon Project
                </span>
                <h3 className="title" onClick={toggleModalFour}>
                  Marvel Guess Who Game
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/portfolio/marvel-1.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/marvel-1.png"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <span>
                         Dec, 2021 Brainstation Hackathon Project
                        </span>
                        <h3 className="title">Marvel Guess Who Game</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                           In this 24h Brainstation Hackathon, my partner and I created a fun and interative Marvel Guess Who Game. We access the info of 2000+ Marvel Characters in the Marvel API and put together a guess-who card game!
                          </p>
                          <div className="quotebox">
                            <p>
                              Tech Stack
                            </p>
                          </div>
                          <p>
                          JavaScript, React JS, HTML5, CSS3, SASS, Node JS, Postman
                          </p>
                          <div className="quotebox">
                            <p>
                              Some Screenshots
                            </p>
                          </div>
                          <img src="/img/portfolio/marvel-2.png" alt="landing"/>
                          <img src="/img/portfolio/marvel-3.png" alt="landing"/>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>

          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="/img/portfolio/menu.png" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/menu.png"
                      })`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <span>
                  Dec, 2021 Brainstation Holiday Theme Project
                </span>
                <h3 className="title" onClick={toggleModalFour}>
                  Holiday Fest
                </h3>
              </div>
              {/* End details */}

              {/* Start Modal */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div className="beny_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="/img/portfolio/menu-0.png" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL + "img/portfolio/menu-0.png"
                              })`,
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <span>
                         Dec, 2021 Brainstation Holiday Theme Project
                        </span>
                        <h3 className="title">Holiday Fest - Online Dinner Menu Generator</h3>
                      </div>
                      {/* End details */}
                      <div className="main_content">
                        <div className="descriptions">
                          <p className="bigger">
                          In this Holiday theme project, I created a holiday menu generator. This handy menu generator will help you plan your holiday menu. You can customize your menu by filtering by ingredients or countries, or you can get a list of random menus! 
                          </p>
                          <div className="quotebox">
                            <p>
                              Tech Stack
                            </p>
                          </div>
                          <p>
                          JavaScript, React JS, HTML5, CSS3, SASS, Node JS, Postman
                          </p>
                          <div className="quotebox">
                            <p>
                              Some Screenshots
                            </p>
                          </div>
                          <img src="/img/portfolio/menu-1.png" alt="landing"/>
                          <img src="/img/portfolio/menu-2.png" alt="landing"/>
                        </div>
                        {/* END DESCRIPTION */}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogAnimation;
