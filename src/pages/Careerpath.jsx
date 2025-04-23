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
            <strong>Assessing the Profile:</strong> The program is designed to
            build workplace competencies. However, the student profile and
            aspirations can differ:
            <ul>
              <li>
                Fresh graduates looking at an entry into a managerial career
              </li>
              <li>
                Graduates with experience looking at a vertical or lateral
                movement into a managerial career across functions/ sectors/
                geographies.
              </li>
              <li>
                Graduates who are self-employed or from family businesses who
                are looking at professionalizing/growing/ transforming their
                businesses for the new era.
              </li>
            </ul>
            At the time of admission the student profile is mapped.
          </li>
          <li>
            <strong>Personal Development Plan: </strong> Based on the profile
            and progress of the student, periodic feedback with an option for
            counselling is provided. The student is encouraged to self-assess,
            develop realistic goals on their aspiration as well as define
            personal learning outcomes/milestones they would like to achieve at
            the end of the semester/year. Their learning strategies and
            engagements inside and outside the program need to align to these
            goals and milestone outcomes. This process leads to the student
            making their Personal Development Plan. In every review period the
            program experiences must be reviewed and the goals/ milestones/
            strategies, engagements and commitments reset.
          </li>
          <li>
            <strong
              >Self-Awareness, Career Exploration and Career Choice:
            </strong>
            By the end of the first year the student should have developed
            adequate self- awareness and explored career options through
            sufficient research to make a decision on which career they would
            like to pursue and the elective choices which need to be made.
          </li>
          <li>
            <strong>Developing the Student Portfolio: </strong>
            Once having made a career choice, the student needs to build
            relevant knowledge, skills and competencies that recruiters look for
            and showcase them through the Student Portfolio. The learning
            journey in the second year integrates these goals.
          </li>
          <li>
            <strong>CDOE -IFHE's Career Services: </strong> The above activities
            are supported through the following
            <ol type="1">
              <li>
                <strong>eLearning Record System </strong> which provides the
                required analytics of the learning journey in the program mapped
                to student profile.
              </li>
              <li>
                <strong>Student Clubs </strong> which foster areas of student
                interest and passion and manifest them for common benefit.
              </li>
              <li>
                <strong>Career Counselling Services </strong>
                which includes facilitative expert sessions to build
                self-awareness, conduct industry/ career research, deciding on
                career choices and assessment of progress vs goals.
              </li>
              <li>
                <strong>Industry Interface </strong> to offer course projects,
                virtual workplace experiences in various forms apart from being
                part of industry awareness and industry research.
              </li>
              <li>
                <strong>Mentoring</strong> to review and guide for better
                choices on goals, milestones, strategies, engagements and
                commitments in the Personal Development Plan and thereby better
                progress.
              </li>
              <li>
                <strong>Industry Network: </strong> The ICFAI Foundation for
                Higher Education has developed a wide and vast network of
                companies under its various industry interface activities,
                including Bajaj Capital, Bharti Airtel Services, Capital First,
                Coffee Day Global, CRISIL, Edelweiss Financial Services, HDFC
                Bank, ICICI Bank, Infoedge India, Karvy, Kotak Securities,
                Mahindra Finance, Pantaloons Fashion and Retail, Tech Mahindra
                etc . This industry interface will facilitate the Career
                Services elements for the ICFAI Online MBA.
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
            <strong>The Current Environment: </strong> The pandemic has
            accelerated the change to online and virtual ways of functioning
            with increased digitization, digitalization and digital
            transformation of business. Organizations will look for skill sets
            in the digital way of functioning. Reskilling/ Up skilling will be
            of paramount importance. Multitasking is a necessity in the
            challenging business environment.
          </li>
          <li>
            <strong>The ICFAI Online Advantage: </strong> In this context, the
            students of the Online MBA Program which is 100% online have
            multiple advantages
            <ul>
              <li>
                Of having learnt in a digitally transformed learning environment
                to secure their learning outcomes.
              </li>
              <li>
                Having an equal emphasis on current context along with concept
                which continually emphasizes the need to be future ready. The
                learning objects, activities and assessment emphasize this.
              </li>
              <li>
                The focus on self-analysis, career exploration, career choice
                makes students realistic and future focused in their Personal
                Development Plans and its execution.
              </li>
            </ul>
          </li>
          <li>
            <strong>Redefining Career Opportunities: </strong>
            Various Career Opportunities are available in the areas of Finance,
            Human Resource Management, Marketing and IT and Operations.
            Technology is redefining the skill sets needed for each of them. New
            areas are emerging. The ICFAI Online MBA programs enables students
            to appreciate this change and position themselves appropriately.
          </li>
        </ol>
      </div>
    </div>

    `,
    `
    <div class="border-start border-2 border-black ps-3">
      <h4>Career Opportunities for MBA (Marketing)</h4>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Brand Management</h5>
            <p>Advertising, Media engagement, Product Promotion</p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Sales Management</h5>
            <p>
              Sales and promotion of a Product conventionally or using
              technology. Work profile includes planning, execution and
              achieving business targets.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Market Research Analysis</h5>
            <p>
              Important area for Organizations to study, analyze the market
              trends and plan marketing strategies.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Digital Marketing Management</h5>
            <p>
              Digital marketing as a career option is gaining more popularity.
              Opportunity areas – Social media marketing, marketing automation,
              Email marketing, Search Engine Optimization etc.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Business Development Management</h5>
            <p>
              Quite a creative and a challenging position. The job profile
              includes business growth, developing relationships with clients,
              suppliers, and other partners.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Customer Service</h5>
            <p>
              A challenging area as it involves interactions with customers.
              Building strong customer relationships, resolving critical
              customer queries and enhancing customer experience builds brand
              loyalty.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Industries/Sectors:</h5>
            <p>
              Sales and Marketing departments in both national and multinational
              firms; Advertisement Agencies; Event Management Companies, Digital
              Marketing, Marketing consultancy firms etc.
            </p>
          </div>
        </div>
      </div>
    </div>

    `,
    `
    <div class="border-start border-2 border-black ps-3">
      <h4>Career Opportunities for MBA (HR)</h4>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>HR Consulting</h5>
            <p>
              Sourcing and identifying the right candidates for the position,
              Interview processes etc.
            </p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Training & Development Organizations</h5>
            <p>
              Involves induction of new recruits, workshops for career
              enhancement.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Executive Recruitment organizations</h5>
            <p>
              Executive recruiters are tasked with finding and filling job
              openings for senior executives like - CEOs, Vice President.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Human Resources in IT companies</h5>
            <p>
              HR information technology (IT) specialist is a new and growing
              area. HR with a software knowledge are preferred in this area.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div className="card border-0 shadow mb-2">
          <div className="card-body p-2">
            <h5>Industries/Sectors:</h5>
            <p>
              HR departments in National and Multinational Companies;
              Recruitment & Training Agencies; Counselling and Career
              Development firms etc.
            </p>
          </div>
        </div>
      </div>
    </div>
    `,
    ` 
     <div class="border-start border-2 border-black ps-3">
      <h4>Career Opportunities for MBA (Finance)</h4>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Corporate Finance</h5>
            <p>
              Corporate Finance Analyst, Corporate Finance / Accounts Executive
              or even as Manager in corporate finance department.
            </p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Financial Planning</h5>
            <p>
              The role involves educating the clients about market realities,
              identifying financial goals, managing investments, retirement and
              tax planning etc.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Stock Broking</h5>
            <p>Opportunity for keen market followers.</p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Investment Banking</h5>
            <p>
              Investment banking is a specific part of banking which deals with
              creation of capital for other organization. Opportunity areas –
              Financial services and investment banking organizations.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Financial Analysis</h5>
            <p>
              Analyzing the financial statement, chalk out financials for
              long-term goals. Opportunity areas – Financial Analyst in Finance
              companies, Banks etc.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Portfolio Management</h5>
            <p>
              Opportunities areas Mutual Fund companies, Stock Broking, Banks
              etc.
            </p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Insurance</h5>
            <p>Opportunity areas – General Insurance, Life Insurance etc.</p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Emerging areas</h5>
            <p>Risk Management, Treasury, Wealth Management etc.</p>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Industries/Sectors:</h5>
            <p>
              National and Multinational Banks; New Age Private Banks, Fintech
              companies, Credit Rating Agencies; Insurance Companies; Trading
              and Broking Firms and Other Financial Service Firms etc.
            </p>
          </div>
        </div>
      </div>
    </div>
    `,
    `
       <div class="border-start border-2 border-black ps-3">
      <h4>Career Opportunities for MBA (IT & Operations)</h4>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Project Management</h5>
            <p>Operations and Coordination</p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Business Development / Marketing Management in IT sector</h5>
            <p>
              Sales and promotion, marketing strategy, client relation, customer
              support
            </p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>IT Information Management</h5>
            <p>
              This job profile involves implementation, and usability of
              information and computer technologies. Opportunities – Systems
              analyst, systems administrator, Data processing manager
            </p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Product Management</h5>
            <p>
              Interface between technical, marketing, finance teams.
              Coordination, Supervisory role.
            </p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>ERP Consulting</h5>
            <p>
              ERP consultants need to suggest the best fit software package for
              a line of business. ERP includes a central database repository –
              Human Resource, Supply Chain, Customer Relationship Management.
            </p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Supply Chain, Logistics and Manufacturing</h5>
            <p>
              Roles involve planning, buying, analyzing, managing, consulting,
              organizing and controlling demand, capacity, procurement,
              production, maintenance, quality, supply chain planning,
              analytics, finance, IT consulting, logistics, transportation,
              warehouses etc.
            </p>
          </div>
        </div>
      </div>

      <div class="position-relative">
        <div class="startLine"></div>
        <div class="card border-0 shadow mb-2">
          <div class="card-body p-2">
            <h5>Industries/Sectors:</h5>
            <p>
              Supply Chains in Automotive, Retail, Ecommerce, Pharmaceuticals;
              Production, Distribution and Logistics departments; Transporters,
              Distribution centers, Retailers, Customer Service departments,
              Computer Hardware & Software, Multimedia Animation, Network
              systems, Graphics & Web design, Game and Application development,
              Networking, e-Learning, Cloud Computing, IoT, ML/AI, Blockchain
              etc.
            </p>
          </div>
        </div>
      </div>
    </div>
    `,
    `
       <div className="card border-0">
      <div className="card-body">
        <h4>Emerging Areas</h4>
        <p>
          The pandemic has accelerated the use of technology in many areas. Some
          sectors have also benefited for instance Healthcare and Pharma, Data
          Analytics, Entrepreneurship, eCommerce are expected to boom. MBAs can
          pursue careers
        </p>
        <ul>
          <li>
            In the areas of drug manufacture, marketing, sales and research in
            the Pharma sector
          </li>
          <li>
            As hospital administrators, project managers, health services
            managers in the healthcare sector.
          </li>
          <li>
            As entrepreneurs in online consulting, digital marketing, online
            delivery services, eCommerce etc.
          </li>
          <li>
            As data science managers, data science consultant, product analyst,
            customer experience specialist, product manager, marketing analytics
            analyst provided they have basic understanding of the necessary
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
    </div>
    </div>
    `,
  ];

  return (
    <>
      <Seo
        title="Best University for Online MBA in India | Study MBA Online"
        description="Discover exciting career opportunities with ICFAI Online MBA. Gain the skills & knowledge needed to advance in fields such as finance, marketing, HR, IT & operations."
        keywords="IFHE, online mba in supply chain management, online mba operations management, Career Path, Placement, Marketing, Finance, IT, HRM, ICFAI, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/career"
      />
      <section className="Common-Section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="breadcrumbs pb-0">
                <ol>
                  <li>
                    <a href="/">Home</a>
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
      <section></section>
    </>
  );
};
export default Careerpath;
