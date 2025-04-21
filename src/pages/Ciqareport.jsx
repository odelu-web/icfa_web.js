import React, { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import assets from "../assets/assets";
import Seo from "../components/Seo";
const Ciqareport = () => {
  // FOR TABS
  const [activeTab, setActiveTab] = useState("tab1");

  // CIQA best PracticeCards data
  const bestPracticeCards = [
    {
      title: "Best Practices in Online Programs",
      file: assets.BestPracticesOnlinePrograms,
    },
  ];
  // CIQA Report data
  const documents = [
    {
      title: "CIQA Annual Report (Online Mode) 2021-22",
      file: assets.CIQAAnnualReport202122,
    },
    {
      title: "Declaration - CIQA Annual Report (Online Mode) 2021-22",
      file: assets.CIQAAnnualReportDeclaration202122,
    },
    {
      title: "Minutes of the 1st CIQA meeting",
      file: assets.Minutesofthe1stMeetingoftheCIQA,
    },
    {
      title: "Minutes of the 2nd CIQA meeting",
      file: assets.CIQAMinutesofthe2ndMeeting,
    },
    {
      title: "Minutes of the 3rd CIQA meeting",
      file: assets.CIQAMinutesofthe3rdMeeting,
    },
  ];

  return (
    <>
      <Seo
        title="CIQA - Reports | Admission calendar | Enrollment Services"
        description="Graduate (any discipline) with 50% and above marks from a recognized university with the medium of instruction as English."
        keywords="Online MBA Admission 2021, IFHE, Hyderabad, ICFAI University, CDOE, Admission, Admission calendar, Enrolment Services, admission in Online MBA program, MBA, Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Center For Distance and Online Education in Hyderabad, Center For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/about-us/ciqa-report"
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
                  <li>About Us</li>
                  <li>CIQA</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Tabsection">
        <div className="container mt-4">
          <div className="d-flex justify-content-center">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab1")}
                >
                  About CIQA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab2")}
                >
                  Best Practices
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab3")}
                >
                  CIQA Report
                </a>
              </li>
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/mandatory-disclosures"
              className="btn btn-outline-danger d-flex align-items-center gap-2"
            >
              Mandatory Disclosures <GoArrowUpRight className="fs-5" />
            </a>
          </div>
          <div className="tab-content p-3 border-0 bg-white shadow-sm border-top-0">
            {activeTab === "tab1" && (
              <div className="tab-pane active">
                <h3>Centre for Internal Quality Assurance (CIQA)</h3>
                <p>
                  The ICFAI Foundation for Higher Education (IFHE), Hyderabad
                  has established the Centre for Internal Quality Assurance
                  (CIQA) to ensure quality of programmes being offered in Open
                  and Distance Learning mode and/or Online mode. As per UGC (ODL
                  Programmes and Online Programmes) Regulations, 2020, the
                  Centre for Internal Quality Assurance (CIQA) was established
                  on 12th November 2020.
                </p>
                <h4>Objective of CIQA</h4>
                <p>
                  The objective of CIQA is to develop and put in place a
                  comprehensive and dynamic internal quality assurance system to
                  ensure that programmes of higher education in the Open and
                  Distance Learning mode and Online mode being implemented by
                  the University are of acceptable quality and further improved
                  on continuous basis.
                </p>
                <h4>Functions of CIQA</h4>
                <ul>
                  <li>
                    {" "}
                    To maintain quality in the services provided to the
                    learners.
                  </li>
                  <li>
                    {" "}
                    To undertake self-evaluative and reflective exercises for
                    continual quality improvement in all the systems and
                    processes of the Centre for Distance and Online Education
                    (CDOE).
                  </li>
                  <li>
                    {" "}
                    To contribute in the identification of the key areas in
                    which CDOE should maintain quality.
                  </li>
                  <li>
                    {" "}
                    To devise mechanisms to ensure that the quality of Open and
                    Distance Learning programmes and Online programmes matches
                    with the quality of relevant programmes in conventional
                    mode.
                  </li>
                  <li>
                    To devise mechanisms for interaction with and obtaining
                    feedback from all stakeholders namely, learners, teachers,
                    staff, parents, society, employers, and Government for
                    quality improvement.
                  </li>
                  <li>
                    To suggest measures to CDOE for qualitative improvement.
                  </li>
                  <li>
                    To facilitate the implementation of its recommendations
                    through periodic reviews.
                  </li>
                  <li>
                    To organise workshops/ seminars/ symposium on quality
                    related themes, to ensure participation of all stakeholders,
                    and disseminate the reports of such activities among all the
                    stakeholders of the University.
                  </li>
                  <li>
                    To develop and collate best practices in all areas leading
                    to quality enhancement in services to the learners and
                    disseminate the same to all concerned in CDOE.
                  </li>
                  <li>
                    To collect, collate and disseminate accurate, complete and
                    reliable statistics about the quality of the programme(s).
                  </li>
                  <li>
                    To ensure that Programme Project Report for each programme
                    is according to the norms and guidelines prescribed by the
                    Commission and wherever necessary by the appropriate
                    regulatory authority having control over the programme.
                  </li>
                  <li>
                    To put in place a mechanism to ensure the proper
                    implementation of Programme Project Reports.
                  </li>
                  <li>
                    To maintain a record of Annual Plans and Annual Reports of
                    CDOE, review them periodically and generate actionable
                    reports.
                  </li>
                  <li>
                    To provide inputs to the CDOE for restructuring of
                    programmes in order to make them relevant to the job market.
                  </li>
                  <li>
                    To facilitate system-based research on ways of creating
                    learner-centric environment and to bring about qualitative
                    change in the entire system.
                  </li>
                  <li>
                    To act as a nodal coordinating unit for seeking assessment
                    and accreditation from a designated body for accreditation
                    such as NAAC etc.
                  </li>
                  <li>
                    To adopt measures to ensure internalization and
                    institutionalization of quality enhancement practices
                    through periodic accreditation and audit.
                  </li>
                  <li>
                    To coordinate between CDOE and the Commission for various
                    quality related initiatives or guidelines.
                  </li>
                  <li>
                    To obtain information from other Universities on various
                    quality benchmarks or parameters and best practices.
                  </li>
                  <li>
                    To record activities undertaken on quality assurance in the
                    form of an annual report of Centre for Internal Quality
                    Assurance.
                  </li>
                  <li>
                    To submit Annual Reports to the Statutory Authorities or
                    Bodies of the University about its activities at the end of
                    each academic session.{" "}
                  </li>
                  <li>
                    To submit a copy of report to the Commission in the format
                    as specified by the Commission, duly approved by the
                    statutory authorities of the University.
                  </li>
                </ul>
                <h4>Centre for Internal Quality Assurance Committee:</h4>
                <p>
                  As per UGC (ODL Programmes and Online Programmes) Regulations,
                  2020, Vice Chancellor of the University nominated the
                  following members for Centre for Internal Quality Assurance
                  (CIQA) for the Academic years 2023-24 and 2024-25.
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr className="table-danger">
                        <td>
                          <strong>Designation</strong>
                        </td>
                        <td className="text-center">
                          <strong>Name</strong>
                        </td>
                      </tr>

                      <tr>
                        <td>Vice Chancellor of the University – Chairperson</td>
                        <td>Dr. L.S. Ganesh</td>
                      </tr>

                      <tr>
                        <td>
                          Three senior teachers of Higher Educational
                          Institution - Members
                        </td>
                        <td>
                          Dr. Narasimha Chary
                          <br />
                          Dr. Surjit Kar
                          <br />
                          Dr. Perna Chhetri
                        </td>
                      </tr>

                      <tr>
                        <td>
                          Head of three Departments or School of Studies
                          offering recognized programmes in Open and Distance
                          Learning and Online mode - Members
                        </td>
                        <td>
                          Dr. D. Satish (HOD Finance)
                          <br />
                          Dr. Mukesh Mishra (HOD Marketing)
                          <br />
                          Dr. Showrie (HOD HR)
                        </td>
                      </tr>

                      <tr>
                        <td>
                          Two external experts of Open and Distance Learning
                          and/or Online education - Members
                        </td>
                        <td>
                          Dr. S. Agaihachari <br />
                          (External Member, Former Joint Registrar IGNOU)
                          <br />
                          Dr. R.K. Chouhan <br />
                          (External Member, Former Secretary UGC)
                        </td>
                      </tr>

                      <tr>
                        <td>
                          Officials from the Administration and Finance
                          departments of the Higher Educational Institution –
                          Members
                        </td>
                        <td>
                          Mr. Vittal (Member from Administration)
                          <br />
                          Mrs. Y. Ratnabhanu (Member from Finance)
                        </td>
                      </tr>

                      <tr>
                        <td>
                          Director, <br />
                          Centre for Internal Quality Assurance – Member
                          Secretary
                        </td>
                        <td>Dr. D. Saravanan</td>
                      </tr>

                      <tr>
                        <td>Registrar – Ex-officio member</td>
                        <td>Dr. S. Vijayalakshmi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="tab-pane active">
                <div className="row">
                  {bestPracticeCards.map((item, index) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 g-2"
                      key={index}
                    >
                      <div className="card border shadow-sm h-100">
                        <div className="card-body">
                          <a
                            href={item.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex flex-wrap align-items-center gap-2 pdf-link"
                          >
                            <FaRegFilePdf className="me-2 text-danger fs-4 pdf-icon" />
                            <span className="text-wrap">{item.title}</span>
                            <GoArrowUpRight className="arrow-icon fs-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="tab-pane active">
                <div className="row">
                  {documents.map((doc, index) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 g-2"
                      key={index}
                    >
                      <div className="card border shadow-sm h-100">
                        <div className="card-body">
                          <a
                            href={doc.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex flex-wrap align-items-center gap-2 pdf-link"
                          >
                            <FaRegFilePdf className="me-2 text-danger fs-4 pdf-icon" />
                            <span className="text-wrap">{doc.title}</span>
                            <GoArrowUpRight className="arrow-icon fs-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Ciqareport;
