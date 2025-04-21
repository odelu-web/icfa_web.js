import React, { useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import assets from "../assets/assets";
import Seo from "../components/Seo";

const Programstructure = () => {
  const AccordionItem = ({ id, title, tableData, striped }) => (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          <strong>{title}</strong>
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-md-12">
              <div className="float-end mb-3">
                <button
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target={`#courseoutmodal${id}`}
                >
                  Course Outcomes <GoArrowUpRight />
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table
              className={`table table-bordered ${
                striped ? "table-striped" : ""
              }`}
            >
              <thead>
                <tr className="table-danger">
                  <th>Subject</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(([subject, credits], index) => (
                  <tr key={index}>
                    <td>{subject}</td>
                    <td>{credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const AccordionListItem = ({ id, title, items, footer }) => (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          <strong>{title}</strong>
        </button>
      </h2>

      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-md-12">
              <div className="float-end mb-3">
                <button
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target={`#courseoutmodal${id}`}
                >
                  Course Outcomes <GoArrowUpRight />
                </button>
              </div>
            </div>
          </div>
          <p className="mb-2">
            The following elective options are being planned for {title}:
          </p>
          <ol className="fw-medium">
            {items.map((item, idx) => (
              <li key={idx} className="mb-1">
                {item}
              </li>
            ))}
          </ol>
          {Array.isArray(footer) ? (
            footer.map((text, idx) => <p key={idx}>{text}</p>)
          ) : (
            <p>{footer}</p>
          )}
        </div>
      </div>
    </div>
  );

  // modal 3
  const courses = [
    {
      title: "Economics for Business",
      image: assets.economicsBusiness,
      text: "At the end of this course, learners will be able to apply the principles and frameworks of microeconomics for business strategy and policy making. They will also be able to interpret macroeconomic theory and changes for effective decisions.",
    },
    {
      title: "Operations Management",
      image: assets.projectOperation,
      text: "At the end of this course, the learner will be able to apply the conceptual framework and methodologies in project management for utilization in the various stages in the life cycle of a project. Learners can also utilize the concepts and trends in operations management for effective planning and control.",
    },
    {
      title: "Human Resource Management",
      image: assets.hrm,
      text: "At the end of this course, the learner will be able to apply the concepts, frameworks and trends in organization structure and human resource management for effective planning strategies, acquiring, managing and developing human resources. They will also be able to utilize the frameworks and regulations associated with employee safety, well-being and relations to manage human resources effectively.",
    },
    {
      title: "Marketing Management",
      image: assets.marketingManagement,
      text: "At the end of this course, the learner will be able to utilize the concepts and frameworks in marketing to analyzing the marketing environment and competitive strategies. The learner will then be able to frame components of marketing strategy for customer acquisition and retention.",
    },
    {
      title: "Business Communication",
      image: assets.businessCommunication,
      text: "At the end of this course, the learner will be able to apply the conceptual framework of communication to build on various types and forms of communication for gaining employment and later for effective organizational work. They will further be able to develop various dimensions of soft skills required for effective performance in organizations.",
    },
  ];

  // modal 4

  const courses1 = [
    {
      title: "Business Strategy and Policy",
      image: assets.businessStrategy,
      text: "At the end of this course, the learners will be able to examine the concepts, frameworks and models in business strategy to analyze the critical dimensions of the environment and frame suitable strategies at various levels for the organization.",
    },
    {
      title: "International Business",
      image: assets.internationalBusiness,
      text: "At the end of this course, the learners will be able to apply the theories of international trade for better decisions in international business. They can also assess the factors influencing international operations for decision making on entry strategies and functional areas of business.",
    },
    {
      title: "Leadership and Change Management",
      image: assets.leadershipChange,
      text: "At the end of this course, the learners will be able to appreciate the conceptual framework and challenges of leadership to evolve better leadership practices. They will also be able to appreciate stages in organizational change, implementation aspects and the role of change agents for effective change management.",
    },
  ];

  //modal 5

  const electives = [
    {
      title: "Financial Management",
      desc: "At the end of this course, the learners will be able to apply the principles and models in financial management...",
      img: assets.FinancialManagement,
      alt: "Financial-management",
    },
    {
      title: "Global Financial Markets",
      desc: "At the end of this course, the learners will be able to evaluate various types of global financial markets...",
      img: assets.GlobalFinanceMarket,
      alt: "global-finance-market",
    },
    {
      title: "Strategic Finance and Corporate Restructuring",
      desc: "At the end of this course, the learners will be able to examine the applicable theories of finance...",
      img: assets.StrategicFinanceCorporate,
      alt: "strategic-finance-corporate",
    },
    {
      title: "Services Marketing",
      desc: "At the end of this course, the learners will be able to apply the conceptual framework in services marketing...",
      img: assets.ServiceMarketing,
      alt: "service-marketing",
    },
    {
      title: "Strategic Marketing Management",
      desc: "At the end of this course, the learners will be able to apply the conceptual framework in strategic marketing...",
      img: assets.StrategicMarketing,
      alt: "Strategic-marketing",
    },
    {
      title: "Sales and Distribution Management",
      desc: "At the end of this course, the learners will be able to make use of sales planning concepts...",
      img: assets.SalesDistribution,
      alt: "sales-distribution",
    },
    {
      title: "Recruitment Training and Development",
      desc: "At the end of this course, the learners will be able to apply the concepts, frameworks, processes and procedures...",
      img: assets.RecruitmentTraining,
      alt: "Recruitment-Training-development",
    },
    {
      title: "Performance Management and Reward Systems",
      desc: "At the end of this course, the learners will be able to utilize the concepts, framework, processes and trends...",
      img: assets.PerformanceManagement,
      alt: "perfermance-management",
    },
    {
      title: "SMACS Technologies for Business",
      desc: "At the end of this course, the learners will be able to apply tools, frameworks and technologies in social, mobile...",
      img: assets.SMACS,
      alt: "SMACS",
    },
    {
      title: "Service Operations Management",
      desc: "At the end of this course, the learners will be able to apply theoretical frameworks for design and development...",
      img: assets.SOM,
      alt: "Service Operations Management",
    },
  ];

  // modal 6

  const semesterIVCourses = [
    {
      title: "Management Control Systems",
      desc: "At the end of this course, the learners will be able to apply the tools and techniques of management control and assess the ethical considerations applicable for building management control systems for functional areas of business.",
      img: assets.ManagementControl,
      alt: "Management-control",
    },
    {
      title: "Business Ethics and Corporate Governance",
      desc: "At the end of this course, the learners will be able to utilize the theoretical and regulatory frameworks in business ethics and identify the ethical issues in different functional areas of business for better decision making. They will also be able to evaluate suitable models, frameworks and laws applicable to corporate governance for assessing applicability and evolving codes at the business entity.",
      img: assets.BusinessEthics,
      alt: "Business-ethics",
    },
    {
      title: "Entrepreneurship Practicum",
      desc: "At the end of this course, the learner will be able to utilize the tools and techniques of management to identify a business proposal, analyze the feasibility, build a Business Plan for presentation to funding agencies and develop a detailed project report for future implementation.",
      img: assets.EntrepreneurshipPracticum,
      alt: "Entrepreneurship-practicum",
    },
    {
      title: "Business Research Project",
      desc: "At the end of this course, the learner will be able to define a business research problem, utilize research methods and statistical techniques to conduct research and perform business analysis to arrive at inferences and recommendations and develop a detailed research report.",
      img: assets.ResearchProject,
      alt: "Research-project",
    },
  ];

  // modal 7

  const electiveCourses = [
    {
      title: "Financial Services",
      description:
        "At the end of this course, the learners will be able to examine the various types of financial services and asses the regulations governing them to make appropriate choices for business.",
      image: assets.financialServices,
      alt: "Financial-services",
    },
    {
      title: "International Finance",
      description:
        "At the end of this course, the learners will be able to examine the theory of international trade and operations of foreign exchange markets for better business decisions and forex strategies related to global trade. They can also evaluate external environmental dimensions such as Balance of Payments, trade blocks and international accounting regulations to assess their impact on business for better business decisions.",
      image: assets.internationalFinance,
      alt: "International-Finance",
    },
    {
      title: "International Marketing",
      description:
        "At the end of this course, learners will be able to apply the concepts in international marketing to assess various global markets and analyze suitable modes of market entry. They will also be able to design the elements of marketing strategy suitable to specific markets.",
      image: assets.internationalMarketing,
      alt: "International Marketing",
    },
    {
      title: "Retail Management",
      description:
        "At the end of this course, the learners will be able to utilize the theory of retailing and the dynamics of the retailing environment to customize retailing strategies and effectively manage a retail organization.",
      image: assets.retailManagement,
      alt: "Retail-Management",
    },
    {
      title: "Integrated Marketing Communications",
      description:
        "At the end of this course, the learner will be able to apply the theories of marketing communications to design marketing communication strategies based on customers. S/he can then construct the components of the marketing communication strategy and deploy tools for varying usage of marketing communication.",
      image: assets.integratedMarketingCommunication,
      alt: "Integrated-Marketing-Communication",
    },
    {
      title: "Strategic Human Resource Management",
      description:
        "At the end of this course, the learners will be able to apply dimensions and tools of the strategic management process to various aspects of human resource management. They will be able to identify strategic issues and challenges in a broad range of human resource management area impacting leadership, employee relations, organization design and re-structuring for organizational effectiveness.",
      image: assets.strategicHRManagement,
      alt: "strategic-hr-management",
    },
    {
      title: "Organization Development",
      description:
        "At the end of this course, the learners will be able to assess the theoretical framework of organization development, and the associated processes for application to the specific organization contexts. They will also be able to examine the role of the OD practitioner alongside the relevant aspects of the organizational behavior for assessing various types of OD interventions.",
      image: assets.organizationDevelopment,
      alt: "organization-development",
    },
    {
      title: "Human Resources Planning and Audit",
      description:
        "At the end of this course, the learners will be able to appreciate various tools and techniques in human resource planning for enhanced effectiveness in various areas of human resource management. They will also be able to apply the frameworks and approaches of human resource audit for human resource competencies, strategies, systems, structure and functions.",
      image: assets.hrPlanningAudit,
      alt: "HR-Planning-audit",
    },
    {
      title: "Big Data, Cloud and Analytics",
      description:
        "At the end of this course, the learners will be able to appreciate the storage of big data and relate to data analytics for business intelligence and decision making while appreciating issues concerned with data privacy and security.",
      image: assets.bigDataAnalytics,
      alt: "Bigdata-Analytics",
    },
    {
      title: "Supply Chain Management",
      description:
        "At the end of this course, the learners will be able to interpret the issues and challenges in the demand and supply chain as also relate the technological and financial aspects of the supply chain for effective management.",
      image: assets.scm,
      alt: "Supply Chain Management",
    },
  ];

  return (
    <>
      <Seo
        title="Online MBA Admissions | Best Online MBA in India"
        description="Why ICFAI Online MBA is considered as the Top Online MBA in India? Program Structure and Delivery make it as the Top Online MBA Course in India."
        keywords="IFHE Hyderabad, top online mba programs, best online mba, best online mba program, ICFAI University, Unique Learning Proposition, Distance Online MBA Course in India, Online MBA Program for working executives and professionals, IBS Online MBA, MBA Rankings, NAAC Accredited MBA Program in India, C in C Framework, MBA, Online MBA, Executive MBA Programs in Hyderabad, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management,  Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/program/program-structure"
        ogUrl="https://online.ifheindia.org/program/program-structure"
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
                  <li>Program</li>
                  <li>Program Structure</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="card border-0 bg-light shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                  <div className="sticky-top1">
                    <img
                      src={assets.programImage}
                      className="img-fluid rounded-4"
                      alt="Online MBA Indian University"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                  <h3>Program Structure</h3>
                  <p>
                    The ICFAI Online MBA Program consists 22 courses with 15
                    core courses, 6 elective options from four streams, apart
                    from a practicum/project. The well-crafted curriculum aimed
                    at delivering the best online MBA program to the aspirants.
                  </p>
                  <h5 className="text-danger mb-1">Core courses</h5>
                  <p>
                    Core courses cover foundational, common functional and
                    capstone areas that all potential managers need to
                    appreciate. They provide the tools and frameworks for
                    analyzing and defining the challenges from specific and
                    integrative perspectives.
                  </p>
                  <h5 className="text-danger mb-1">Electives</h5>
                  <p>
                    The elective options are provided for deeper learning in one
                    or more streams namely Finance, Marketing, Human Resource
                    Management and IT and Operations. They provide a deeper
                    understanding of functional issues and possibilities useful
                    in building better solutions.
                  </p>
                  <h5 className="text-danger mb-1">Practicum</h5>
                  <p>
                    In a world where change is the only constant, innovation is
                    a critical business response to this change. Moreover,
                    government and funding agency support is more than ever. In
                    this context, the Entrepreneurship Practicum provides an
                    opportunity to the student to leapfrog into the burgeoning
                    world of startups/ ventures. It allows the student to
                    examine a real world problem and come up with an innovative
                    solution for it.
                  </p>
                  <h5 className="text-danger mb-1">Project</h5>
                  <p>
                    Nobody changes as fast as the customer. Innovation is a must
                    do for all businesses today as a response to better
                    solutions to changing customer needs. The Business Research
                    Project is aimed at support the growing need in the
                    corporate world to use business research as a vital tool in
                    decision making. It allows the student to appreciate the
                    research process and apply it for their chosen problem.
                  </p>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#prgoutmodal"
                  >
                    Program Outcomes <GoArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-12 mt-3">
                  <div className="accordion" id="accordionExample">
                    {/* Semester I */}
                    <AccordionItem
                      id="1"
                      title="Semester I"
                      tableData={[
                        ["Management and Organization Behavior", 5],
                        ["Business Analytics", 5],
                        ["Foundations of Accounting and Finance", 5],
                        ["Business Environment", 5],
                        ["IT for Managers", 5],
                      ]}
                    />

                    {/* Semester II */}
                    <AccordionItem
                      id="2"
                      title="Semester II"
                      tableData={[
                        ["Economics for Business", 5],
                        ["Operations Management", 5],
                        ["Human Resource Management", 5],
                        ["Marketing Management", 5],
                        ["Business Communication", 5],
                      ]}
                    />

                    {/* Semester III */}
                    <AccordionItem
                      id="3"
                      title="Semester III"
                      tableData={[
                        ["Business Policy and Strategy", 4],
                        ["International Business", 4],
                        ["Leadership and Change Management", 4],
                        ["Elective I", 4],
                        ["Elective II", 4],
                        ["Elective III", 4],
                      ]}
                    />

                    {/* Semester III - Elective Options */}
                    <AccordionListItem
                      id="4"
                      title="Semester III - Elective Options"
                      items={[
                        "Financial Management (compulsory elective for those opting for Finance electives)",
                        "Global Financial Markets",
                        "Strategic Finance and Corporate Restructuring",
                        "Digital Marketing",
                        "Services Marketing",
                        "Strategic Marketing Management",
                        "Sales and Distribution Management",
                        "Strategic Human Resource Management",
                        "Recruitment, Training and Development",
                        "Performance Management and Reward Systems",
                        "SMACS Technologies for Business",
                        "Services Operations Management",
                      ]}
                      footer="Learners can opt for 3 electives from the available options"
                    />

                    {/* Semester IV */}
                    <AccordionItem
                      id="5"
                      title="Semester IV"
                      striped
                      tableData={[
                        ["Management Control Systems", 4],
                        ["Business Ethics and Corporate Governance", 4],
                        ["Elective IV", 4],
                        ["Elective V", 4],
                        ["Elective VI", 4],
                        ["Entrepreneurship Practicum OR Research Project", 4],
                      ]}
                    />

                    {/* Semester IV - Elective Options */}
                    <AccordionListItem
                      id="6"
                      title="Semester IV - Elective Options"
                      items={[
                        "Financial Services",
                        "International Finance",
                        "Fundamentals of Fintech",
                        "International Marketing",
                        "Retail Management",
                        "Integrated Marketing Communications",
                        "Wealth Management",
                        "Organization Development",
                        "Human Resource Planning and Audit",
                        "HR Analytics",
                        "Big Data, Cloud and Analytics",
                        "Supply Chain Management",
                      ]}
                      footer={[
                        "Learners can opt for 3 electives from the available options in Semester IV",
                        "The list of electives being offered is subject to change based on University regulations.",
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* modals */}
      <div
        className="modal fade"
        id="prgoutmodal"
        tabIndex="-1"
        aria-labelledby="programOutcomesLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header bg-danger-subtle">
              <h1 className="modal-title fs-5" id="programOutcomesLabel">
                Program Outcomes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                At the end of the first year of the online MBA Programs learners
                will be able to utilize the knowledge and skills acquired in the
                foundational and functional areas of management to develop
                competencies for an integrative assessment of business
                challenges, scoping of the solution areas leading to designing
                integrated business solutions at beginner and intermediate
                stages.
              </p>
              <p>
                By the end of the second year, the learners should have
                developed the knowledge skills and competencies relevant to the
                corporate world to design business plans / innovative solutions
                and participate in decision making in specific sector/function
                of business or its environment for a defined market, customer
                and organizational challenge, leading to growth and
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* modal 2 */}

      <div
        className="modal fade"
        id="courseoutmodal1"
        tabIndex="-1"
        aria-labelledby="courseOutcomesLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-danger-subtle">
              <h1 className="modal-title fs-5" id="courseOutcomesLabel1">
                Course Outcomes - Semester I
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {[
                {
                  title: "Management and Organization Behaviour",
                  image: assets.managementOrganisation,
                  text: "At the end of this course, the learner will be able to apply the principles, practices and functions of management for effective management, assess underlying processes in individual and group behavior for constructive interpretation of organizational behavior and relate the characteristics of organizational behavior for effective leadership, organizational change and development.",
                },
                {
                  title: "Quantitative Methods",
                  image: assets.quantitativeMethods,
                  text: "At the end of this course, the learner will be able to apply various statistical tools for data interpretation and problem solving in business operations. The course also enables the learner to utilize specific research methods and software tools to understand and present information as research reports for decision making.",
                },
                {
                  title: "Foundations of Accounting and Finance",
                  image: assets.foundationAccountingFinance,
                  text: "At the end of this course, the learner will be able to apply the basic tenets of accounting and applicable regulations to prepare books of accounts and financial statements. The learner will also be able to analyze financial statements and apply the concepts in finance to assess the financial performance of a business and make decisions.",
                },
                {
                  title: "Business Environment",
                  image: assets.businessEnvironment,
                  text: "At the end of this course, the learners will be able to examine the environmental factors affecting the firm and assess their impact on the business. They will also be able to interpret the regulations impacting the business for better compliance.",
                },
                {
                  title: "IT for Managers",
                  image: assets.itForManagers,
                  text: "At the end of this course, the learner will be able to relate conventional information technology tools, systems and applications for enhanced productivity in business. They will also be able to adapt modern trends and technologies for competing effectively.",
                },
              ].map((item, index) => (
                <div className="card border-0 shadow-sm mb-3" key={index}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-2 bg9">
                      <div className="p-3 text-center">
                        <img
                          src={item.image}
                          className="img-fluid"
                          width="100"
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-10">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal 3 */}

      <div
        className="modal fade"
        id="courseoutmodal2"
        tabIndex="-1"
        aria-labelledby="courseOutcomesLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-danger-subtle">
              <h1 className="modal-title fs-5" id="courseOutcomesLabel2">
                Course Outcomes - Semester II
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {courses.map((course, index) => (
                <div className="card border-0 shadow-sm mb-3" key={index}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-2 bg9">
                      <div className="p-3 text-center">
                        <img
                          src={course.image}
                          className="img-fluid"
                          width="100"
                          alt={course.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-10">
                      <div className="card-body">
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal 4 */}

      <div
        className="modal fade"
        id="courseoutmodal3"
        tabIndex="-1"
        aria-labelledby="courseOutcomesLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-danger-subtle">
              <h1 className="modal-title fs-5" id="courseOutcomesLabel3">
                Course Outcomes - Semester III
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {courses1.map((course1, index) => (
                <div className="card border-0 shadow-sm mb-3" key={index}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-2 bg9">
                      <div className="p-3 text-center">
                        <img
                          src={course1.image}
                          className="img-fluid"
                          width="100"
                          alt={course1.title}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-10">
                      <div className="card-body">
                        <h5 className="card-title">{course1.title}</h5>
                        <p className="card-text">{course1.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal 5 */}

      <div
        className="modal fade"
        id="courseoutmodal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-danger-subtle">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Semester III - Elective Options
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {electives.map(({ title, desc, img, alt }, index) => (
                <div className="card border-0 shadow-sm mb-3" key={index}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-2 bg9">
                      <div className="p-3 text-center">
                        <img
                          src={img}
                          className="img-fluid"
                          width="100"
                          alt={alt}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-10">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal 6 */}

      <div
        className="modal fade"
        id="courseoutmodal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-danger-subtle">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Course Outcomes - Semester IV
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {semesterIVCourses.map(({ title, desc, img, alt }, index) => (
                <div className="card border-0 shadow-sm mb-3" key={index}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-2 bg9">
                      <div className="p-3 text-center">
                        <img
                          src={img}
                          className="img-fluid"
                          width="100"
                          alt={alt}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-10">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* modal 7 */}

      <div
        className="modal fade"
        id="courseoutmodal6"
        tabIndex="-1"
        aria-labelledby="courseoutmodal6Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header bg-danger-subtle">
              <h1 className="modal-title fs-5" id="courseoutmodal6Label">
                Semester IV - Elective Options
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {electiveCourses.map((course, index) => (
                <div className="card border-0 shadow-sm mb-3" key={index}>
                  <div className="row g-0">
                    <div className="col-md-12 col-lg-2 bg9">
                      <div className="p-3 text-center">
                        <img
                          src={course.image}
                          className="img-fluid"
                          width="100"
                          alt={course.alt}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-10">
                      <div className="card-body">
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programstructure;
