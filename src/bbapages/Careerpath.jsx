import React, { useRef } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import Seo from "../components/Seo";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { PiStepsDuotone } from "react-icons/pi";
import { TfiAnnouncement } from "react-icons/tfi";
import { ImUserTie } from "react-icons/im";
import { LuBadgeIndianRupee } from "react-icons/lu";
import { IoLogoCodepen } from "react-icons/io";
import { LuSquareActivity } from "react-icons/lu";
import { LuNetwork } from "react-icons/lu";

const Careerpath = () => {
  const tabScrollRef = useRef(null);

  const scrollTabs = (direction) => {
    const scrollAmount = 200;
    if (tabScrollRef.current) {
      tabScrollRef.current.scrollLeft +=
        direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  const tabTitles = [
    { label: "Placement Potential", icon: <PiSuitcaseSimpleThin /> },
    { label: "Career Path", icon: <PiStepsDuotone /> },
    { label: "Marketing", icon: <TfiAnnouncement /> },
    { label: "HR Management", icon: <ImUserTie /> },
    { label: "Finance", icon: <LuBadgeIndianRupee /> },
    { label: "IT & Operations", icon: <IoLogoCodepen /> },
    { label: "Emerging Areas", icon: <LuSquareActivity /> },
    { label: "Career Development Workshops", icon: <LuNetwork /> },
  ];

  const tabContent = [
    `
    <div className="card border-0"> 
      <div className="card-body">
          <h4>Placement Potential and Career Path</h4>
              <ol type="a">
                <li>
                  <strong>Assessing the Profile:</strong> The program is
                  designed to build workplace competencies. However, the
                  student profile and aspirations can differ:
                  <ul>
                    <li>
                      Fresh graduates looking at an entry into a
                      managerial career
                    </li>
                    <li>
                      Graduates with experience looking at a vertical or
                      lateral movement into a managerial career across
                      functions/ sectors/ geographies.
                    </li>
                    <li>
                      Graduates who are self-employed or from family
                      businesses who are looking at
                      professionalizing/growing/ transforming their
                      businesses for the new era.
                    </li>
                  </ul>
                  At the time of admission the student profile is
                  mapped.
                </li>
                <li>
                  <strong>Personal Development Plan: </strong> Based on
                  the profile and progress of the student, periodic
                  feedback with an option for counselling is provided.
                  The student is encouraged to self-assess, develop
                  realistic goals on their aspiration as well as define
                  personal learning outcomes/milestones they would like
                  to achieve at the end of the semester/year. Their
                  learning strategies and engagements inside and outside
                  the program need to align to these goals and milestone
                  outcomes. This process leads to the student making
                  their Personal Development Plan. In every review
                  period the program experiences must be reviewed and
                  the goals/ milestones/ strategies, engagements and
                  commitments reset.
                </li>
                <li>
                  <strong>Self-Awareness, Career Exploration and Career
                    Choice:
                  </strong>
                  By the end of the first year the student should have
                  developed adequate self- awareness and explored career
                  options through sufficient research to make a decision
                  on which career they would like to pursue and the
                  elective choices which need to be made.
                </li>
                <li>
                  <strong>Developing the Student Portfolio: </strong>
                  Once having made a career choice, the student needs to
                  build relevant knowledge, skills and competencies that
                  recruiters look for and showcase them through the
                  Student Portfolio. The learning journey in the second
                  year integrates these goals.
                </li>
                <li>
                  <strong>CDOE -IFHE's Career Services: </strong> The
                  above activities are supported through the following
                  <ol type="1">
                    <li>
                      <strong>eLearning Record System </strong> which
                      provides the required analytics of the learning
                      journey in the program mapped to student profile.
                    </li>
                    <li>
                      <strong>Student Clubs </strong> which foster areas
                      of student interest and passion and manifest them
                      for common benefit.
                    </li>
                    <li>
                      <strong>Career Counselling Services </strong>
                      which includes facilitative expert sessions to
                      build self-awareness, conduct industry/ career
                      research, deciding on career choices and
                      assessment of progress vs goals.
                    </li>
                    <li>
                      <strong>Industry Interface </strong> to offer
                      course projects, virtual workplace experiences in
                      various forms apart from being part of industry
                      awareness and industry research.
                    </li>
                    <li>
                      <strong>Mentoring</strong> to review and guide for
                      better choices on goals, milestones, strategies,
                      engagements and commitments in the Personal
                      Development Plan and thereby better progress.
                    </li>
                    <li>
                      <strong>Industry Network: </strong> The ICFAI
                      Foundation for Higher Education has developed a
                      wide and vast network of companies under its
                      various industry interface activities, including
                      Bajaj Capital, Bharti Airtel Services, Capital
                      First, Coffee Day Global, CRISIL, Edelweiss
                      Financial Services, HDFC Bank, ICICI Bank,
                      Infoedge India, Karvy, Kotak Securities, Mahindra
                      Finance, Pantaloons Fashion and Retail, Tech
                      Mahindra etc . This industry interface will
                      facilitate the Career Services elements for the
                      ICFAI Online MBA.
                    </li>
                  </ol>
                </li>
              </ol>
         
      </div>
    
    </div>
    
    `,

    `
        <div className="card border-0">
             <div className="card-body">
                <h4>Career Opportunities</h4> 
                      <ol type="a">
                        <li>
                          <strong>The Current Environment: </strong> The
                          pandemic has accelerated the change to online and
                          virtual ways of functioning with increased
                          digitization, digitalization and digital
                          transformation of business. Organizations will look
                          for skill sets in the digital way of functioning.
                          Reskilling/ Up skilling will be of paramount
                          importance. Multitasking is a necessity in the
                          challenging business environment.
                        </li>
                        <li>
                          <strong>The ICFAI Online Advantage: </strong> In this
                          context, the students of the Online MBA Program which
                          is 100% online have multiple advantages
                          <ul>
                            <li>
                              Of having learnt in a digitally transformed
                              learning environment to secure their learning
                              outcomes.
                            </li>
                            <li>
                              Having an equal emphasis on current context along
                              with concept which continually emphasizes the need
                              to be future ready. The learning objects,
                              activities and assessment emphasize this.
                            </li>
                            <li>
                              The focus on self-analysis, career exploration,
                              career choice makes students realistic and future
                              focused in their Personal Development Plans and
                              its execution.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Redefining Career Opportunities: </strong>
                          Various Career Opportunities are available in the
                          areas of Finance, Human Resource Management, Marketing
                          and IT and Operations. Technology is redefining the
                          skill sets needed for each of them. New areas are
                          emerging. The ICFAI Online MBA programs enables
                          students to appreciate this change and position
                          themselves appropriately.
                        </li>
                      </ol>
             </div>
        </div>
    
    `,

    `
   <img src="${assets.Mbamarketing}" class="w-100" alt=".." />
    
    `,

    `
     <img src="${assets.Mbahr}" class="w-100" alt=".." />
    `,

    `
     <img src="${assets.Mbafinance}" class="w-100" alt=".." />
    `,

    `
    <img src="${assets.Mbaitoperations}" class="w-100" alt=".." />
    `,

    ` 
       <div className="card border-0">
             <div className="card-body">
                <h4>Emerging Areas</h4> 
                <p>The pandemic has accelerated the use of technology in many areas. Some sectors have also benefited for instance Healthcare and Pharma, Data Analytics, Entrepreneurship, eCommerce are expected to boom. MBAs can pursue careers </p>
                <ul>
                        <li>
                          In the areas of drug manufacture, marketing, sales and
                          research in the Pharma sector
                        </li>
                        <li>
                          As hospital administrators, project managers, health
                          services managers in the healthcare sector.
                        </li>
                        <li>
                          As entrepreneurs in online consulting, digital
                          marketing, online delivery services, eCommerce etc.
                        </li>
                        <li>
                          As data science managers, data science consultant,
                          product analyst, customer experience specialist,
                          product manager, marketing analytics analyst provided
                          they have basic understanding of the necessary
                          technological tools.
                        </li>
                      </ul>
            </div>   
       </div> 
    `,

    ` 
    <div className="card border-0"><div className="card-body">
      <h4>Career Development Workshops</h4>
      <div class="careers d-grid gap-4 p-3">
        ${[
          {
            title: "Webinar on Career Opportunities in Management",
            speaker: "Prof. Ramesh Krishnan",
            profile: "Associate Professor - IFHE",
            date: "29<sup>th</sup> July, 2021",
            link: "https://www.youtube.com/embed/inMkhAw5EVw",
          },
          {
            title: "Cutting Edge Skills for Career Advancement",
            speaker: "Dr. Senapathy MR",
            profile: "Associate Professor - IFHE",
            date: "02<sup>nd</sup> Sep, 2021",
            link: "https://www.youtube.com/embed/Kd5WmP6sbno",
          },
          {
            title: "Managing Self Through Mentoring",
            speaker: "Dr. Senapathy MR",
            profile: "Associate Professor - IFHE",
            date: "16<sup>th</sup> Sep, 2021",
            link: "https://www.youtube.com/embed/4PkOl_I8KJw",
          },
          {
            title: "Climate Risk Reporting",
            speaker: "Mr. Amit Singh Sisodiya",
            profile: "Editor - IUP Publications",
            date: "29<sup>th</sup> Sep, 2021",
            link: "https://www.youtube.com/embed/SaUePn1ujks",
          },
          {
            title:
              "Understanding Digital Marketing Targeting: A Customer's Perspective",
            speaker: "Dr. Rishi Dwesar",
            profile: "Associate Professor - IBS Hyderabad",
            date: "13<sup>th</sup> Oct, 2021",
            link: "https://www.youtube.com/embed/6H1Zi7hUqns",
          },
        ]
          .map(
            (w) => `
        <div class="careerCard p-3 border rounded shadow-sm">
          <div class="cardBody">
            <h4 class="card-title">${w.title}</h4>
            <p class="card-text"><strong>Speaker:</strong> ${w.speaker}<br/>
              <strong>Profile:</strong> ${w.profile}<br/>
              <strong>Date:</strong> ${w.date}
            </p>
           
             <a class="youtube-link" href="${w.link}" target="_blank" rel="noreferrer">🎥</a>
          
          </div>
        </div>`
          )
          .join("")}
      </div>
    </div></div>
    `,
  ];

  return (
    <>
      <Seo
        title="Best University for Online MBA in India | Study MBA Online"
        description="Discover exciting career opportunities with ICFAI Online MBA. Gain the skills & knowledge needed to advance in fields such as finance, marketing, HR, IT & operations."
        keywords="IFHE, online mba in supply chain management, online mba operations management, Career Path, Placement, Marketing, Finance, IT, HRM, ICFAI, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/bba/career"
        ogUrl="https://online.ifheindia.org/bba/career"
      />
      <section className="Common-Section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="breadcrumbs pb-0">
                <ol>
                  <li>
                    <a href="/bba">BBA</a>
                  </li>
                  <li>Career</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="CareerSection">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  {/* Scrollable Tabs Header */}
                  <div className="bg2 p-3 rounded-4">
                    <div className="d-flex align-items-center position-relative">
                      {/* Left Button */}
                      <button
                        className="btn btn-light position-absolute start-0 z-3 rounded-5 border-0 shadow-sm ms-3"
                        style={{
                          color: "#444444",
                          background: "#ffffff",
                          borderRight: "1px solid #ddd",
                        }}
                        onClick={() => scrollTabs("left")}
                      >
                        &#9664;
                      </button>

                      {/* Tabs */}
                      <div
                        className="border-0 overflow-hidden flex-grow-1"
                        style={{ margin: "0 2.5rem" }}
                      >
                        <ul
                          className="nav nav-tabs bg-transparent card-header-tabs flex-nowrap overflow-hidden"
                          role="tablist"
                          ref={tabScrollRef}
                          style={{
                            margin: "auto",
                            display: "flex",
                            gap: "0.5rem",
                            overflowX: "auto",
                            scrollBehavior: "smooth",
                            scrollbarWidth: "none",
                          }}
                        >
                          {tabTitles.map((title, index) => (
                            <li
                              className="nav-item"
                              role="presentation"
                              key={index}
                            >
                              <button
                                className={`h-100 border-0 text-start  rounded-4 nav-link ${
                                  index === 0 ? "active" : ""
                                }`}
                                id={`custom-tab-${index}`}
                                data-bs-toggle="tab"
                                data-bs-target={`#custom-tab-pane-${index}`}
                                type="button"
                                role="tab"
                                aria-controls={`custom-tab-pane-${index}`}
                                aria-selected={index === 0}
                                style={{ minWidth: "188px" }}
                              >
                                {title.icon && (
                                  <span className="me-2 justify-content-end d-flex fs-3 mb-1 bg-gradient rounded">
                                    {title.icon}
                                  </span>
                                )}
                                {title.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Button */}
                      <button
                        className="btn btn-light position-absolute rounded-5 border-0 end-0 z-3 shadow-sm me-3"
                        style={{
                          color: "#444444",
                          background: "#ffffff",
                          borderLeft: "1px solid #ddd",
                        }}
                        onClick={() => scrollTabs("right")}
                      >
                        &#9654;
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}

                  <div className="tab-content mt-4">
                    {tabContent.map((content, index) => (
                      <div
                        key={index}
                        className={`tab-pane fade ${
                          index === 0 ? "show active" : ""
                        }`}
                        id={`custom-tab-pane-${index}`}
                        role="tabpanel"
                        aria-labelledby={`custom-tab-${index}`}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Careerpath;
