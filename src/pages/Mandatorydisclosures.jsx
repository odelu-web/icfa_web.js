import React from "react";
import assets from "../assets/assets";

const Mandatorydisclosures = () => {
  const links = [
    {
      href: assets.links1,
      label: "1.4.1. AICTE Approval 2020-21 for ONLINE Programs",
    },
    {
      href: assets.links2,
      label: "1.4.2. AICTE Approval 2021-22 for ODL and Online Programs",
    },
    {
      href: assets.links3,
      label: "1.4.3. AICTE Approval 2021-22 for ODL and Online Programs",
    },
    {
      href: assets.links4,
      label: "1.4.4. AICTE Approval 2021-22 for ODL and Online Programs",
    },
    {
      href: assets.links5,
      label: "1.4.5. No Objection Certificate for ODL Programs 2022-23 to 2026",
    },
  ];
  return (
    <>
      <section className="Common-Section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="breadcrumbs pb-0">
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Mandatory Disclosures</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-xl-12 col-lg-12 col-12">
              <div className="accordion" id="ciqaAccordion">
                {/* Item 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Mandatory Disclosure Online Programs
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#ciqaAccordion"
                  >
                    <div className="accordion-body">
                      <h3>Mandatory Disclosure Online Programs</h3>

                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead className="table-danger text-center">
                            <tr>
                              <th>S.No</th>
                              <th>Information Type</th>
                              <th>Provisions</th>
                              <th>Link Name</th>
                              <th>Document/Link to be attached</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Section I */}
                            <tr>
                              <td rowSpan={4}>I</td>
                              <td rowSpan={4}>Institutional Level</td>
                              <td>Establishing Act and Statutes</td>
                              <td>MHRD and UGC notifications</td>
                              <td>
                                <a
                                  href={assets.appsub1}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  1.1. Establishing Act and Statutes
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Application submitted to UGC-DEB for offering
                                ODL/Online programmes
                              </td>
                              <td>
                                2023-24 BBA application submitted to UGC-DEB
                                <br />
                                2020-21 MBA application submitted to UGC-DEB
                              </td>
                              <td>
                                <a
                                  href={assets.appsub1}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  1.2.1. Application submitted to UGC-DEB for
                                  offering ONLINE programmes 2023-24 (BBA)
                                </a>
                                <br />
                                <a
                                  href={assets.appsub2}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  1.2.2. Application submitted to UGC-DEB for
                                  offering ONLINE programmes 2020-21 (MBA)
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                Copies of the letters of recognition from
                                Commission
                                <br />
                                <em>
                                  Note: Not applicable for Category-I HEIs and
                                  Entitled HEIs
                                </em>
                              </td>
                              <td>Not Applicable</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>
                                Copies of the letters of other relevant
                                statutory or regulatory authorities
                              </td>
                              <td>
                                AICTE Approval for ONLINE Programs 2020-21
                                <br />
                                AICTE Approval for ONLINE Programs 2021-22
                                <br />
                                AICTE Approval for ONLINE Programs 2022-23
                                <br />
                                AICTE Approval for ONLINE Programs 2023-24
                                <br />
                                AICTE NOC letter for ONLINE Programs 2022-23 to
                                2026-27
                              </td>
                              <td>
                                {links.map((link, idx) => (
                                  <React.Fragment key={idx}>
                                    <a
                                      href={link.href}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {link.label}
                                    </a>
                                    <br />
                                  </React.Fragment>
                                ))}
                              </td>
                            </tr>

                            <tr>
                              <td width="44" rowSpan="2">
                                <p>II</p>
                              </td>
                              <td width="99" rowSpan="2">
                                <p>Programme-wise</p>
                              </td>
                              <td width="257">
                                <p>
                                  Programme details including brochures or
                                  programme guides such as
                                </p>
                                <ul>
                                  <li>Name of the programme</li>
                                  <li>Duration</li>
                                  <li>Eligibility for enrolment</li>
                                  <li>Programme fee</li>
                                </ul>
                              </td>
                              <td width="196">
                                <p>ONLINE MBA prospectus of January’24</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub4}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    2.1. IFHE ONLINE MBA Prospectus January 2024
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td width="257">
                                <p>Programme-wise information on:</p>
                                <ul>
                                  <li>Syllabus</li>
                                  <li>
                                    Programme structure with credit points
                                  </li>
                                </ul>
                              </td>
                              <td width="196">
                                <p>
                                  ONLINE MBA Program Structure and Curriculum
                                </p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub5}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    2.2. ONLINE MBA Program Structure and
                                    Curriculum
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="44" rowSpan="2">
                                <p>III</p>
                              </td>
                              <td width="99" rowSpan="2">
                                <p>Faculty and Non-Teaching Staff</p>
                              </td>
                              <td width="257">
                                <p>Programme-wise faculty details</p>
                              </td>
                              <td width="196">
                                <p>List of ONLINE Programs Faculty</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub6}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    3.1. Faculty details
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td width="257">
                                <p>List of supporting staff</p>
                              </td>
                              <td width="196">
                                <p>List of Supporting Staff</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub7}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    3.2. List of supporting staff
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="44">
                                <p>IV</p>
                              </td>
                              <td width="99">
                                <p>
                                  Self-Learning Material/ E-Learning Material
                                </p>
                              </td>
                              <td width="257">
                                <p>
                                  Complete information about “Self Learning
                                  Material” including name of the faculty who
                                  prepared it, when was it prepared and last
                                  updated for Open and Distance Learning
                                  Programmes;
                                </p>
                                <p>
                                  Similarly information about “E-Learning
                                  Materials” in 4 quadrants in case of Online
                                  programmes
                                </p>
                              </td>
                              <td width="196">
                                <p>
                                  List of Faculty who Prepared e-Learning
                                  Material (eLMs) for Online Programs
                                </p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub8}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    4. List of Faculty who Prepared ELM books
                                    for ONLINE Programs
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="44">
                                <p>V</p>
                              </td>
                              <td width="99">
                                <p>
                                  Learner Support Centres <br />
                                  (for ODL mode)
                                </p>
                              </td>
                              <td width="257">
                                <p>List of Learner Support Centres with</p>
                                <ul>
                                  <li>Name with Addresses</li>
                                  <li>Contact details</li>
                                  <li>Working hours</li>
                                  <li>Number of learners</li>
                                  <li>Counselling Schedule</li>
                                </ul>
                              </td>
                              <td width="196">
                                <p>Not Applicable</p>
                              </td>
                              <td width="680">
                                <p>&nbsp;</p>
                              </td>
                            </tr>

                            <tr>
                              <td width="44" rowSpan={2}>
                                <p>VI</p>
                              </td>
                              <td width="99" rowSpan={2}>
                                <p>Examination</p>
                              </td>
                              <td width="257">
                                <p>
                                  List of the “Examination Centres” along with
                                  the number of learners in each centre
                                </p>
                              </td>
                              <td width="196" rowSpan={2}>
                                <p>
                                  Technology enabled Online Remote Proctored
                                  Examinations using MOODLE integrated AI plugin
                                  are conducted for Online programs.
                                </p>
                              </td>
                              <td width="680" rowSpan={2}>
                                <p>&nbsp;</p>
                              </td>
                            </tr>
                            <tr>
                              <td width="257">
                                <p>
                                  Details of the Information and Communication
                                  Technology facilities available for conduct of
                                  examination
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="44">
                                <p>VII</p>
                              </td>
                              <td width="99">
                                <p>Schedule</p>
                              </td>
                              <td width="257">
                                <p>Important schedules or date-sheets for:</p>
                                <ul>
                                  <li>Admissions</li>
                                  <li>Registration and re-registration</li>
                                  <li>Assignments</li>
                                  <li>Examinations</li>
                                  <li>Result declarations etc</li>
                                </ul>
                              </td>
                              <td width="196">
                                <p>2023-24, January'24 Academic Calendar</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub9}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    7. Academic Calendar January 2024
                                  </a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td width="44">
                                <p>VIII</p>
                              </td>
                              <td width="99">
                                <p>Admission Data</p>
                              </td>
                              <td width="257">
                                <p>
                                  Data of year-wise and programme-wise learner
                                  enrolment details
                                </p>
                              </td>
                              <td width="196">
                                <p>ONLINE Programs Admissions</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub10}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    8. ONLINE Programs Admissions
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="44" rowSpan={4}>
                                <p>IX</p>
                              </td>
                              <td width="99" rowSpan={4}>
                                <p>Student Centric provision</p>
                              </td>
                              <td width="257">
                                <p>Frequently Asked Questions</p>
                              </td>
                              <td width="196">
                                <p>FAQ's</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href="https://online.ifheindia.org/faqs"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    https://online.ifheindia.org/faqs
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="257">
                                <p>E-Samadhan</p>
                              </td>
                              <td width="196">
                                <p>E-Samadhan</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub11}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    9.2. UGC E-SAMADHAN Letter
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="257">
                                <p>
                                  Details of Students' Grievance Redressal
                                  Committee (SGRC) and Ombudsperson
                                </p>
                              </td>
                              <td width="196">
                                <p>
                                  Students Grievance Redressal Committee.(SGRC)
                                </p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub12}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    9.3. Students Grievance Redressal
                                    Committee.(SGRC)
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="257">
                                <p>
                                  UGC public notice dated 19th March, 2024 on
                                  Precaution to be taken before enrolling in
                                  programmes under ODL mode and Online mode
                                </p>
                              </td>
                              <td width="196">
                                <p>
                                  UGC public notice on Precaution to be taken
                                  before enrolling in programmes under ODL mode
                                  and Online mode
                                </p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href="https://online.ifheindia.org/news"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    https://online.ifheindia.org/news
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="44" rowSpan={2}>
                                <p>X</p>
                              </td>
                              <td width="99" rowSpan={2}>
                                <p>Qualitative Provision</p>
                              </td>
                              <td width="257">
                                <p>Feedback mechanism</p>
                              </td>
                              <td width="196">
                                <p>Feedback mechanism Flow Chart</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href={assets.appsub13}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    10.1 Feedback Mechanism Flow chart
                                  </a>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td width="257">
                                <p>
                                  Reports of internal academic audit every year
                                  by Centre for Internal Quality Assurance
                                  (CIQA)
                                </p>
                              </td>
                              <td width="196">
                                <p>CIQA Reports</p>
                              </td>
                              <td width="680">
                                <p>
                                  <a
                                    href="https://online.ifheindia.org/ciqa-report"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    https://online.ifheindia.org/ciqa-report
                                  </a>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Mandatory Disclosures
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#ciqaAccordion"
                  >
                    <div className="accordion-body">
                      <div className="table-responsive">
                        <table className="table table-bordered p">
                          <tbody>
                            <tr className="table-danger">
                              <td>
                                <p>S.No</p>
                              </td>
                              <td>
                                <p>Description</p>
                              </td>
                              <td width="285">
                                <p>Attachment / Link</p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>1</p>
                              </td>
                              <td>
                                <p>
                                  The establishing Act and Statutes there under
                                  or the Memorandum of Association, as the case
                                  may be or both, of the Higher Educational
                                  Institution, empowering it to offer programmes
                                  in Online mode
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf1}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  MHRD and UGC Notifications - Annexure 1
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>2</p>
                              </td>
                              <td>
                                <p>
                                  Copies of the letters of recognition from
                                  Commission and other relevant statutory or
                                  regulatory authorities.
                                </p>
                              </td>
                              <td width="285">
                                <a
                                  href={assets.mdpdf2}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Online Programs Approval 2020-21 - Annexure 2
                                </a>
                                <br />
                                <a
                                  href={assets.mdpdf3}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Online Programs Approval 2021-22 - Annexure
                                  2.1
                                </a>
                                <br />
                                <a
                                  href={assets.mdpdf4}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Online Programs Approval 2022-23 - Annexure
                                  2.2
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>3</p>
                              </td>
                              <td>
                                <p>
                                  Programme details including brochures or
                                  programme guides inter alia information such
                                  as name of the programme, duration,
                                  eligibility for enrolment, programme fee,
                                  programme structure.
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf5}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Online MBA Prospectus - Annexure 3
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>4</p>
                              </td>
                              <td>
                                <p>
                                  Programme-wise information on syllabus,
                                  suggested readings, contact points for
                                  counselling/mentoring, programme structure
                                  with credit points, programme-wise faculty
                                  details, list of supporting staff, their
                                  working hours and mentoring (for Online mode)
                                  Schedule
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf6}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  MBA Program Structure and Curriculum -
                                  Annexure 4
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>5</p>
                              </td>
                              <td>
                                <p>
                                  Important schedules or date-sheets for
                                  admissions, registration, re-registration,
                                  counselling/mentoring, assignments and
                                  feedback thereon, examinations, result
                                  declarations etc.
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf7}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Academic Calendar - Annexure 5
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>6</p>
                              </td>
                              <td>
                                <p>
                                  Detailed strategy plan related to Online
                                  programme delivery, including learning
                                  materials offered through Online and learner
                                  assessment system and quality assurance
                                  practices of Online learning programmes
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf8}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Online MBA Strategy Plan - Annexure 6
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>7</p>
                              </td>
                              <td>
                                <p>
                                  The feedback mechanism on design, development,
                                  delivery and continuous evaluation of
                                  learner-performance...
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf9}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Online MBA Feedback Mechanism - Annexure 7
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>8</p>
                              </td>
                              <td>
                                <p>
                                  Information regarding all the programmes
                                  recognised by the Commission.
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href="https://online.ifheindia.org/online-mba"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  https://online.ifheindia.org/online-mba
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>9</p>
                              </td>
                              <td>
                                <p>
                                  Data of year-wise and programme-wise learner
                                  enrolment details in respect of degrees and/or
                                  post graduate diplomas awarded
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf10}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Online Programs Admission details - Annexure 8
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>10</p>
                              </td>
                              <td>
                                <p>
                                  Complete information about 'e-Learning
                                  Material' including name of the faculty who
                                  prepared it, when was it prepared and last
                                  updated for Online Programmes
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf11}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  List of Faculty who Prepared e-Learning
                                  Material (eLMs) for Online Programs - Annexure
                                  9
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>11</p>
                              </td>
                              <td>
                                <p>
                                  A compilation of questions and answers under
                                  the head 'Frequently Asked Questions'...
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href="https://online.ifheindia.org/faqs"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  https://online.ifheindia.org/faqs
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>12</p>
                              </td>
                              <td>
                                <p>
                                  List of the 'Examination Centres' along with
                                  the number of learners in each centre, for
                                  Online programmes
                                </p>
                              </td>
                              <td width="285" align="center">
                                <p>
                                  Technology enabled Online Remote Proctored
                                  Examinations are conducted for Online
                                  programs.
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>13</p>
                              </td>
                              <td>
                                <p>
                                  Details of proctored examination in case of
                                  end semester examination or term end
                                  examination of Online programmes
                                </p>
                              </td>
                              <td width="285" align="center">
                                <p>
                                  Technology enabled Online Remote Proctored
                                  Examinations are conducted using MOODLE
                                  integrated AI plugin.
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>14</p>
                              </td>
                              <td>
                                <p>
                                  Academic Calendar mentioning period of the
                                  admission process along with the academic
                                  session, dates of continuous and end semester
                                  examinations or term end examinations, etc
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href={assets.mdpdf12}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Academic Calendar - Annexure 5
                                </a>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <p>15</p>
                              </td>
                              <td>
                                <p>
                                  Reports of the third party academic audit to
                                  be undertaken every five years and internal
                                  academic audit every year by Centre for
                                  Internal Quality Assurance
                                </p>
                              </td>
                              <td width="285" align="center">
                                <a
                                  href="https://online.ifheindia.org/ciqa-report"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CIQA Annual Reports
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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

export default Mandatorydisclosures;
