import React, { useState } from "react";
import assets from "../assets/assets";

import Seo from "../components/Seo";

const Admissions = () => {
  const [activeTab, setActiveTab] = useState("eligibility");

  const tabs = [
    { id: "eligibility", title: "Eligibility Duration" },
    { id: "fees", title: "Fee Structure" },
    { id: "scholarship", title: "Merit Scholarships" },
    { id: "admission", title: "Admission Process" },
    { id: "enrolment", title: "Enrolment Services" },
    { id: "faq", title: "FAQs" },
  ];
  // Table for Program: Eligibility, Duration & Validity
  const EligibilityTable = () => {
    return (
      <table className="table table-bordered table-striped">
        <tbody>
          <tr className="table-primary">
            <td>For Whom</td>
            <td>
              <ul>
                <li>Graduates</li>
                <li>Working professionals</li>
                <li>Indian and foreign students</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Admission Eligibility</td>
            <td>
              <ul>
                <li>
                  Graduate (any discipline) with 50% and above marks from a
                  recognized university with the medium of instruction as
                  English.
                </li>
                <li>
                  Candidates from medium of instruction other than English have
                  to submit the TOEFL/ NELT/ IELTS score report.
                </li>
                <li>
                  All candidates seeking admission will undergo a selection
                  process by the selection committee. The selection committee
                  will holistically evaluate the candidate and the
                  recommendation of the committee for admission will be final.
                </li>
              </ul>
            </td>
          </tr>
          <tr className="table-primary">
            <td>Duration</td>
            <td>Min. Duration: 2 Years; Max. Duration: 4 Years</td>
          </tr>
          <tr>
            <td>Semesters</td>
            <td>4</td>
          </tr>
          <tr className="table-primary">
            <td>Medium of Instruction</td>
            <td>English</td>
          </tr>
        </tbody>
      </table>
    );
  };

  // accordain faq 1  Program: Eligibility, Duration & Validity

  const FaqAccordion = () => {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>FAQs</h3>
            </div>
          </div>
          <div className="accordion" id="faqAccordion">
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseOne"
                  aria-expanded="false"
                  aria-controls="faqCollapseOne"
                >
                  1. What is the minimum eligibility to enroll in ICFAI’s Online
                  MBA Program offered by IFHE?
                </button>
              </h2>
              <div
                id="faqCollapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mb-0 mt-3">
                    The eligibility to enroll in ICFAI’s Online MBA –
                  </p>
                  <ul className="mb-4">
                    <li>
                      Graduate (any discipline) with 50% and above marks from a
                      recognized University with the medium of instruction as
                      English.
                    </li>
                    <li>
                      Candidates from medium of instruction other than English
                      have to submit the TOEFL/ NELT/ IELTS score report.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseTwo"
                  aria-expanded="false"
                  aria-controls="faqCollapseTwo"
                >
                  2. I do not have 50% in Graduation, but have 5 years of work
                  experience. Am I eligible for online Programs?
                </button>
              </h2>
              <div
                id="faqCollapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mt-3">
                    No. As per the eligibility condition, Graduate (any
                    discipline) with 50% and above marks from a recognized
                    University with the medium of instruction as English are
                    only eligible.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseThree"
                  aria-expanded="false"
                  aria-controls="faqCollapseThree"
                >
                  3. I have a diploma with 5 years of work experience, am I
                  eligible?
                </button>
              </h2>
              <div
                id="faqCollapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mt-3">
                    No. As per the eligibility condition, Graduate (any
                    discipline) with 50% and above marks from a recognized
                    University with the medium of instruction as English are
                    only eligible.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseFour"
                  aria-expanded="false"
                  aria-controls="faqCollapseFour"
                >
                  4. Are foreign students allowed to enroll in ICFAI’s Online
                  MBA Program? If yes, how are the grades/percentages from my
                  country equated to those considered by IFHE, India?
                </button>
              </h2>
              <div
                id="faqCollapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mt-3">
                    • Yes, foreign students are allowed to enroll in ICFAI’s
                    Online MBA Program subject to eligibility criteria. For
                    equivalency of grades/percentages and admission formalities,
                    candidates are required to contact{" "}
                    <a className="" href="mailto:enrol.cdoe@ifheindia.org">
                      enrol.cdoe@ifheindia.org
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseFive"
                  aria-expanded="false"
                  aria-controls="faqCollapseFive"
                >
                  5. What is the duration of the Program?
                </button>
              </h2>
              <div
                id="faqCollapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mt-3">
                    The duration of the Program is 2 years. However, the
                    enrolment is valid for 4 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Fee structure
  const FeeStructureTable = () => {
    return (
      <table className="table table-bordered table-striped">
        <tbody>
          <tr className="table-danger">
            <td>
              <strong>Fee Structure</strong>
            </td>
            <td colSpan="4" className="text-end">
              <strong>
                Amount in <span style={{ fontFamily: "none" }}>₹</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td>Admission Fee</td>
            <td colSpan="4">20,000</td>
          </tr>
          <tr className="table-primary">
            <td>Tuition Fee</td>
            <td colSpan="4">1,80,000</td>
          </tr>
          <tr>
            <td>Total Program Fee</td>
            <td colSpan="4">2,00,000</td>
          </tr>
          <tr className="table-primary">
            <td>&nbsp;</td>
            <td colSpan="4">
              <em>Note: The tuition fee does not include the exam fee.</em>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <strong>Payment Options</strong>
            </td>
          </tr>
          <tr className="table-danger">
            <td>
              <strong>A) Year-Wise Fee Payment</strong>
            </td>
            <td>
              <strong>
                Amount in <span style={{ fontFamily: "none" }}>₹</span>
              </strong>
            </td>
            <td>
              <strong>B) Semester-Wise Fee Payment</strong>
            </td>
            <td>
              <strong>
                Amount in <span style={{ fontFamily: "none" }}>₹</span>
              </strong>
            </td>
          </tr>
          <tr>
            <td>Admission Fee</td>
            <td>20,000</td>
            <td>Admission Fee</td>
            <td>20,000</td>
          </tr>
          <tr className="table-primary">
            <td>Tuition Fee - 1st Year</td>
            <td>90,000</td>
            <td>Tuition Fee - 1st Semester</td>
            <td>45,000</td>
          </tr>
          <tr>
            <td>Tuition Fee - 2nd Year</td>
            <td>90,000</td>
            <td>Tuition Fee - 2nd Semester</td>
            <td>45,000</td>
          </tr>
          <tr className="table-primary">
            <td></td>
            <td></td>
            <td>Tuition Fee - 3rd Semester</td>
            <td>45,000</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Tuition Fee - 4th Semester</td>
            <td>45,000</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const RemittanceInfo = () => {
    return (
      <div className="row bg8 p-3">
        <h4 className="mb-4">
          <strong>Remittance Information:</strong> Students can pay the fee
          through
        </h4>
        <div className="col-xl-6">
          <h5>
            <strong>A) Online Mode:</strong>
          </h5>
          <ul>
            <li>Credit Card (Visa / MasterCard)</li>
            <li>Debit Card (Visa / MasterCard)</li>
            <li>Internet Banking through secure internet payment gateway.</li>
          </ul>
          <img
            // If importing via module, change src to {paymentGatewayImg}
            src={assets.PaymentGatewaybanner}
            alt="Payment-Gateway"
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-xl-6">
          <h5>
            <strong>B) Bank Demand Draft:</strong>
          </h5>
          <ul>
            <li>
              Bank Demand Draft drawn on any scheduled commercial bank in favour
              of{" "}
              <strong className="text-yellow-color">
                <i>"IFHE Fee Collection A/c Online MBA"</i>
              </strong>{" "}
              payable at Hyderabad. The student should write his/her Name,
              Application no., Semester and Mobile No. on the back of the Bank
              Demand Draft.
            </li>
            <li>
              DD should be sent along with completed Application Form to: CDOE,
              #52, Nagarjuna Hills, Punjagutta, Hyderabad 500 082, Telangana.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  // faq 2 feestr

  const FeeFaqAccordion = () => {
    return (
      <section id="faq" className="faq details">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 p-lg-0">
              <h3>FAQs</h3>
            </div>
          </div>
          <div className="accordion feeFaqs" id="feeFaqAccordion">
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFaq1">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq11"
                  aria-expanded="false"
                  aria-controls="faq11"
                >
                  1. What is the Program fee? Can I pay in instalments?
                  <i className="bi bi-chevron-up"></i>
                </button>
              </h2>
              <div
                id="faq11"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq1"
                data-bs-parent="#feeFaqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mb-0 mt-3">
                    The total fee is Rs.2,00,000. The candidates have an option
                    to pay the fee year wise or semester wise. For further
                    details, please visit{" "}
                    <a
                      className=""
                      href="https://online.ifheindia.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      online.ifheindia.org
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFaq2">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Faq22"
                  aria-expanded="false"
                  aria-controls="Faq22"
                >
                  2. Do I need to pay fee for selection process?
                  <i className="bi bi-chevron-up"></i>
                </button>
              </h2>
              <div
                id="Faq22"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq2"
                data-bs-parent="#feeFaqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mt-3">
                    Yes. Candidates are required to pay Rs.1000 as registration
                    fee for the selection process. However, this amount will be
                    adjusted against the admission fee on selection.
                  </p>
                  <p>
                    In the case of semester wise fee payment, the 1st semester
                    fee is Rs.65,000 (Rs.20,000 towards admission fee and
                    Rs.45,000 towards tuition fee). Upon selection, candidates
                    are required to pay Rs.64,000, after adjusting the
                    registration fee.
                  </p>
                  <p>
                    In the case of year wise fee, the 1st year fee is
                    Rs.1,10,000 (Rs.20,000 towards admission fee and Rs.90,000
                    towards tuition fee). Upon selection, candidates are
                    required to pay Rs.1,09,000, after adjusting the
                    registration fee.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFaq3">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#Faq33"
                  aria-expanded="false"
                  aria-controls="Faq33"
                >
                  3. Are there any tie-up with any banks for study loans?
                  <i className="bi bi-chevron-up"></i>
                </button>
              </h2>
              <div
                id="Faq33"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq3"
                data-bs-parent="#feeFaqAccordion"
              >
                <div className="accordion-body px-3 bg-grey">
                  <p className="mt-3">
                    No. There are no tie-ups by the University to provide study
                    loans. However, banks have individual education loan
                    policies. Students may approach the banks for details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // merit scholor

  const ScholarshipsInfo = () => {
    return (
      <div className="scholarships-info">
        <h4>Encouraging Merit - Scholarships for Online MBA Students</h4>
        <p>
          IFHE always believes in recognizing and encouraging the meritorious
          students in achieving their academic excellence. Towards this, a
          Scholarship scheme is offered to the students pursuing Online MBA
          Program.
        </p>

        <p>
          <strong>
            I. Exclusive Scholarships for Defence, Paramilitary and Police
            Personnel -
          </strong>
        </p>

        <ul>
          <li>
            Applicable to those who have been employed full time or have retired
            after full time service directly with Defence or Paramilitary or
            Police forces.
          </li>
          <li>
            Spouse and children of these forces are also eligible for this
            scholarship.
          </li>
          <li>
            Eligible candidates will pay each semester fee after adjusting the
            scholarship amount.
          </li>
        </ul>

        <p>
          <strong>II. Merit Scholarships</strong>
        </p>

        <ol type="A">
          <li>
            <strong>Scholarship based on past academic record -</strong>
            <ul>
              <li>
                Offers Scholarship based on class 12th and Graduation percentage
                of marks.
              </li>
              <li>
                Eligible candidates will pay each semester fee after adjusting
                the scholarship amount.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Award for Toppers based on Continuous Assessment marks -
            </strong>
            <ul>
              <li>
                Will be awarded for the student/s who get the highest score in
                the formative assessment in a course.
              </li>
            </ul>
          </li>
          <li>
            <strong>Scholarship based on Semester-wise Performance-</strong>
            <ul>
              <li>
                Offers scholarship based on semester-wise performance in terms
                of CGPA.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    );
  };

  // AdmissionProcess
  const AdmissionProcess = () => {
    return (
      <div className="row">
        <div className="col-lg-12 col-xl-12 details ul-space-li">
          {/* Header: Admission Process */}
          <h4>Admission Process</h4>

          {/* A. UGC Public Notice */}
          <p>
            <strong>[A] UGC PUBLIC NOTICE</strong>
          </p>
          <div className="col-md-12 col-lg-12">
            <object
              className="pdf"
              data={assets.UGC_20241104165932_1}
              width="100%"
              height="500"
            ></object>
          </div>

          {/* B. Submission of Application */}
          <strong>[B] Submission of Application:</strong>
          <ul className="pt-3">
            <li>
              Candidates are required to fill the application form online and
              upload the scanned copies of the following documents:
            </li>
            <li>
              <ol className="pt-3">
                <li>
                  Scanned copy of latest Photograph with signature appended on
                  it.
                </li>
                <li>Scanned copy of latest Photograph without signature</li>
                <li>
                  X Class Certificate <span className=""> * </span>
                </li>
                <li>
                  XII Class Certificate <span className=""> * </span>
                </li>
                <li>
                  Degree Certificate <span className=""> * </span>
                </li>
                <li>Aadhaar</li>
                <li>Copy of Passport, for foreign students only</li>
                <li>TOEFL/NELT/IELTS score report if applicable</li>
              </ol>
            </li>
          </ul>
          <i>
            <span className=""> * </span> All these documents are to be
            self-attested in blue ink along with date
          </i>
          <br />
          <br />

          {/* C. Selection Process */}
          <strong>[C] Selection Process:</strong>
          <ul className="pt-3">
            <li>
              After submission of the application form and uploading applicable
              documents as above, there will be a Selection Process consisting
              of Micro Presentation and a Personal Interview.
            </li>
            <li>
              The selection process fee of Rs. 1,000 (non-refundable) to be paid
              online. This amount will be adjusted against Admission Fee on
              selection.
            </li>
            <li>
              Candidate has to pick a convenient slot for the selection process.
              Please proceed to book the slot after making the payment.
            </li>
          </ul>

          {/* D. Post Selection Formalities */}
          <strong>[D] Post Selection Formalities:</strong>
          <ul className="pt-3">
            <li>
              Selected candidates are required to initiate the admission process
              by remitting the Admission Fee as applicable. The Admissions
              Office will thereafter inform regarding the payment of Program
              fee, any other required documents, the last date for completion of
              Admission, date of start of the orientation program and regular
              classes.
            </li>
          </ul>

          {/* FAQ Section */}
          <section className="placement-section faq-section p-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <section id="faq" className="faq details">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-10 col-12 p-lg-0">
                          <h3>FAQs</h3>
                        </div>
                      </div>
                      <div
                        className="accordion AdminFaqs"
                        id="adminFaqAccordion"
                      >
                        {/* FAQ 1 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFaq10">
                            <button
                              className="accordion-button collapsed "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq10"
                              aria-expanded="false"
                              aria-controls="faq10"
                            >
                              1. Is there an entrance test for admission?
                              <i className="bi bi-chevron-up"></i>
                            </button>
                          </h2>
                          <div
                            id="faq10"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFaq10"
                            data-bs-parent="#adminFaqAccordion"
                          >
                            <div className="accordion-body px-3 bg-grey">
                              <p className="mb-0 mt-3">
                                No. There is no entrance test for the admission.
                                However, there is a selection process to enroll
                                in ICFAI’s online MBA Program.
                              </p>
                              <p className="mb-0 mt-3">
                                Candidates will undergo a selection process,
                                comprising Micro Presentation and a Personal
                                Interview, which will be conducted online within
                                a specified time window. For further details,
                                please visit{" "}
                                <a
                                  className=""
                                  href="https://online.ifheindia.org/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  online.ifheindia.org
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* FAQ 2 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFaq20">
                            <button
                              className="accordion-button collapsed "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#Faq20"
                              aria-expanded="false"
                              aria-controls="Faq20"
                            >
                              2. Will the topic for micro presentation be given
                              by the University or is the choice given to the
                              candidate?
                              <i className="bi bi-chevron-up"></i>
                            </button>
                          </h2>
                          <div
                            id="Faq20"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFaq20"
                            data-bs-parent="#adminFaqAccordion"
                          >
                            <div className="accordion-body px-3 bg-grey">
                              <p className="mt-3">
                                You may choose any topic of your interest for
                                the Micro Presentation. On the date of the Micro
                                Presentation, you will need to present the topic
                                online for five minutes. The presentation needs
                                to be in English.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* FAQ 3 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFaq30">
                            <button
                              className="accordion-button collapsed "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#Faq30"
                              aria-expanded="false"
                              aria-controls="Faq30"
                            >
                              3. Do I need to come to Hyderabad for personal
                              interview or during the course of study after
                              enrolment?
                              <i className="bi bi-chevron-up"></i>
                            </button>
                          </h2>
                          <div
                            id="Faq30"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFaq30"
                            data-bs-parent="#adminFaqAccordion"
                          >
                            <div className="accordion-body px-3 bg-grey">
                              <p className="mt-3">
                                No. There is no need to come to IFHE Hyderabad
                                for a personal interview or during the course of
                                study after enrolment. The entire course is
                                delivered online using a Learning Management
                                System (LMS).
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

  // EnrollmentServicesHeader

  const EnrollmentServicesHeader = () => {
    return (
      <div className="row py-4">
        <div className="col-lg-12">
          <h3>Pre and Post Enrolment Services</h3>
          <p>
            Students are to contact the following with regard to any queries or
            services required pertaining to their admission and during the
            course of study on any working day between 10:00 am to 5:00 pm
          </p>
        </div>
      </div>
    );
  };
  const ContactTable = () => {
    return (
      <table className="table table-bordered table-striped">
        <tbody>
          <tr className="table-primary">
            <td>Contact Numbers</td>
            <td>9160001175</td>
          </tr>
          <tr>
            <td>E-mail for general queries</td>
            <td>
              <a href="mailto:Enrol.cdoe@ifheindia.org">
                enrol.cdoe@ifheindia.org
              </a>
            </td>
          </tr>
          <tr>
            <td>E-mail for student services</td>
            <td>
              <a href="mailto:olss.cdoe@ifheindia.org">
                olss.cdoe@ifheindia.org
              </a>
            </td>
          </tr>
          <tr>
            <td>Email for Academic queries</td>
            <td>
              <a href="mailto:olaq.cdoe@ifheindia.org">
                olaq.cdoe@ifheindia.org
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "eligibility":
        return (
          <>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h4>Program: Eligibility, Duration & Validity</h4>
                <p>
                  For MBA online admission, aspirants need to meet the below
                  criteria.
                </p>
                <div className="container my-4">
                  <EligibilityTable />
                </div>
                <FaqAccordion />
              </div>
            </div>
          </>
        );
      case "fees":
        return (
          <>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h4>Fee Structure & Payment Options</h4>
                <div className="table-responsive">
                  <FeeStructureTable />
                </div>
                <RemittanceInfo />
                <h4>Refund Policy</h4>
                <ul>
                  <li>
                    In the event of withdrawal from the Program for any reason
                    the refund of Fee paid will be governed by the provisions of
                    UGC Notification on Refund of Fees and Non-Retention of
                    Original Certificates, issued during October 2018 or any
                    subsequent notifications there to, issued by the Commission
                    from time to time.
                  </li>
                </ul>
                <FeeFaqAccordion />
              </div>
            </div>
          </>
        );
      case "scholarship":
        return (
          <>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <ScholarshipsInfo />
              </div>
            </div>
          </>
        );
      case "admission":
        return (
          <>
            <div className="container">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <AdmissionProcess />
                </div>
              </div>
            </div>
          </>
        );
      case "enrolment":
        return (
          <>
            <div className="container">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <EnrollmentServicesHeader />
                  <h3>Contact Information</h3>
                  <ContactTable />
                </div>
              </div>
            </div>
          </>
        );
      case "faq":
        return <p>Common questions and answers go here.</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Seo
        title="Online MBA Admissions | Online MBA Degree Courses"
        description="Flexibility is the primary reason for MBA Online Learning. Get ICFAI MBA online admission today. UGC Entitled, A++ accreditation by NAAC"
        keywords="Online MBA Admission 2021, IFHE, Hyderabad, mba online admission, best online mba in the world, ICFAI University, CDOE, Admission, Admission calendar, Enrolment Services, admission in Online MBA program, MBA, Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Center For Distance and Online Education in Hyderabad, Center For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/bba/admissions"
        ogUrl="https://online.ifheindia.org/bba/admissions"
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
                  <li>Admissions</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Tabsection">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-tabs">
                    {tabs.map((tab) => (
                      <li className="nav-item" key={tab.id}>
                        <button
                          className={`nav-link ${
                            activeTab === tab.id ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                        >
                          {tab.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="tab-content">{renderTabContent()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
