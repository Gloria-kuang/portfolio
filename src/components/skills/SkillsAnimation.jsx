import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const educationContent = [
  {
    passingYear: "2020-2021",
    degree: "Diploma, Web Development",
    instituteName: "BrainStation, Ontario, CA",
  },
  {
    passingYear: "2020",
    degree: "UI/UX Specialization",
    instituteName: "California Institute of the Arts, California, US",
  },
  {
    passingYear: "2016-2017",
    degree: "Post-Graduate, Marketing",
    instituteName: "Humber College, Ontario, CA",
  },
  {
    passingYear: "2008-2012",
    degree: "Bachelor Degree, Finance",
    instituteName: "Sun Yat-sen University, Guangdong, CN",
  },
];

const skillsContent = [
  
  {
    name: "Front-End Development",
    skillPercent: "95",
  },
  {
    name: "Back-End Development",
    skillPercent: "70",
  },
  {
    name: "UI/UX Design",
    skillPercent: "70",
  },
  {
    name: "Graphic Design",
    skillPercent: "75",
  },
  {
    name: "SEO",
    skillPercent: "65",
  },
  {
    name: "CMS",
    skillPercent: "70",
  },
  {
    name: "Digital Marketing",
    skillPercent: "60",
  },
];

const awardContent = [
  {
    awardYear: "2022",
    degree: "Winner Team",
    instituteName: "WHOOP Industry Hackathon",
  },
  {
    awardYear: "2022",
    degree: "Top 5% in Web Dev",
    instituteName: "BrainStation",
  },
];
const experienceContent = [
  {
    designation: "Front-end Developer",
    jobType: "Full Time | Remote",
    year: "2022 - Present",
    compnayName: "Birdseye Global AI Marketing",
    descriptions:
      "Designed new features and components for web applications using Javascript, React JS, HTML and CSS. Re-designed version 3 User Interfaces  based on updated Figma mockup. Work closely with the back-end development team to implement updates and connect to APIs.",
    animationDealy: "",
  },
  {
    designation: "Marketing Director",
    jobType: "Full Time | Remote",
    year: "2019 - 2021",
    compnayName: "Touchbox Art Studio",
    descriptions:
      "Led team of three to execute marketing promotion plans. Improved user experience by re-designing online products.",
    animationDealy: "200",
  },
  {
    designation: "Digital Marketing Specialist",
    jobType: "Full Time | InHouse",
    year: "2017-2018",
    compnayName: "Centry21 Kennect Realty",
    descriptions:
      "Used Wordpress to design the company website and manage Content Management Systems. Improved SEO and digital media buy like Facebook Ads and Google Ads to boost up leads by 10% using strong problem  solving skills.",
    animationDealy: "",
  },
  {
    designation: "Marketing Specialist",
    jobType: "Full Time | InHouse",
    year: "2016-2017",
    compnayName: "Lovaee Media Group",
    descriptions:
      "Designed print and digital marketing materials and built strong graphic design skills. Worked in a highly collaborative environment and oversaw 10+ events including fundraising events, music concerts etc.",
    animationDealy: "200",
  },
];

const SkillsAnimation = () => {
  return (
    <>
      <div className="beny_tm_resume">
        <div className="main_title">
          <h3>My Experience</h3>
        </div>
        <Tabs>
          <TabList className="tab_list">
            <Tab> Education & Skills</Tab>
            <Tab>Experience</Tab>
          </TabList>
          <TabPanel>
            <div className="resume_inner">
              <div className="row">
                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Education</label>
                      </h4>
                      <ul>
                        {educationContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.passingYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="skills ">
                    <h4>
                      <label>Skills</label>
                    </h4>
                    <div className="beny_progress">
                      {skillsContent.map((val, i) => (
                        <div className="progress_inner" key={i}>
                          <span>
                            <span className="label">{val.name}</span>
                            <span className="number">{val.skillPercent}%</span>
                          </span>
                          <div className="background">
                            <div className="bar open">
                              <div
                                className="bar_in"
                                style={{ width: val.skillPercent + "%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* End .col-5 */}

                <div
                  className="col-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="education ">
                    <div className="edu_list">
                      <h4>
                        <label>Awards</label>
                      </h4>
                      <ul>
                        {awardContent.map((val, i) => (
                          <li key={i}>
                            <span className="year">{val.awardYear}</span>
                            <p>
                              <span>{val.degree}</span> - {val.instituteName}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End .col-4 */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {experienceContent.map((val, i) => (
                <div
                  className="col-6"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDealy}
                >
                  <div className="resume-box-01">
                    <h5>{val.designation}</h5>
                    <h6>{val.jobType}</h6>
                    <span>{val.year}</span>
                    <div className="hr"></div>
                    <h4>
                      <label>{val.compnayName}</label>
                    </h4>
                    <p>{val.descriptions}</p>
                  </div>
                </div>
                //  End .col
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default SkillsAnimation;
