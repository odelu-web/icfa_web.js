import React from "react";
import Seo from "../components/Seo";
import assets from "../assets/assets";
import { Fancybox } from "@fancyapps/ui";

const Faqs = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {});
  return (
    <>
      <Seo
        title="FAQs - Online MBA Program"
        description="Find answers to common questions about our programs, admissions and more on our FAQ page. Get the information you need to make informed decisions."
        keywords="FAQs - Online MBA Program"
        canonical="https://online.ifheindia.org/program/faqs"
        ogUrl="https://online.ifheindia.org/program/faqs"
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
                  <li>FAQs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          <strong>
                            1. What is the minimum eligibility to enroll in
                            ICFAI’s Online MBA Program offered by IFHE?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-2">
                            The eligibility to enroll in ICFAI’s Online MBA
                          </p>
                          <ul>
                            <li className="mb-1">
                              Graduate (any discipline) with 50% and above marks
                              from a recognized university with the medium of
                              instruction as English
                            </li>
                            <li className="mb-1">
                              Candidates from medium of instruction other than
                              English have to submit the TOEFL/ NELT/ IELTS
                              score report.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          <strong>
                            2. Is there an entrance test for admission?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-2">
                            No. There is no entrance test for the admission.
                            However, there is a selection process to enroll in
                            ICFAI’s online MBA Program.
                          </p>
                          <p className="mb-0">
                            Candidates will undergo a selection process,
                            comprising Micro Presentation and a Personal
                            Interview, which will be conducted online within a
                            specified time window. For further details, please
                            visit on
                            <a
                              className="text-danger"
                              href="https://online.ifheindia.org/"
                              target="_blank"
                            >
                              online.ifheindia.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          <strong>
                            3. Will the topic for Micro Presentation be given by
                            the University or choice given to the candidate?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            You may choose any topic of your interest for the
                            Micro Presentation. On the date of the Micro
                            Presentation given, you will need to present the
                            topic online for five minutes. The presentation
                            needs to be in English.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          <strong>
                            4. Do I need to come to Hyderabad for personal
                            interview or during the course of study, after
                            enrolment?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            No. There is no need to come to IFHE Hyderabad for
                            personal interview or during the course of study,
                            after enrolment. The entire course is delivered
                            through online, using a Learning Management System
                            (LMS)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          <strong>
                            5. I do not have 50% in Graduation, but have 5 years
                            of work experience. Am I eligible for online
                            Programs?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            No. As per the eligibility condition, Graduate (any
                            discipline) with 50% and above marks from a
                            recognized University with the medium of instruction
                            as English are only eligible.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading6">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          <strong>
                            6. I have a diploma with 5 years of work experience,
                            am I eligible?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading6"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            No. As per the eligibility condition, Graduate (any
                            discipline) with 50% and above marks from a
                            recognized University with the medium of instruction
                            as English are only eligible
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading7">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse7"
                          aria-expanded="false"
                          aria-controls="collapse7"
                        >
                          <strong>
                            7. What is the duration of the Program?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading7"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            The duration of the Program is 2 years. However, the
                            enrolment is valid for 4 years.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading8">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          <strong>
                            8. Is IFHE University recognized by UGC?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse8"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading8"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            The ICFAI Foundation for Higher Education (IFHE),
                            Hyderabad was declared as a Deemed-to-be-University
                            under Section 3 of the UGC Act, 1956.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading9">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse9"
                          aria-expanded="false"
                          aria-controls="collapse9"
                        >
                          <strong>
                            9. What is the Program fee? Can I pay in
                            instalments?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse9"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading9"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            The total fee is Rs.2,00,000. The candidates have an
                            option to pay the fee in year wise or semester wise.
                            For further details, please visit
                            <a
                              className="text-danger"
                              href="https://online.ifheindia.org/"
                              target="_blank"
                            >
                              online.ifheindia.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading10">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse10"
                          aria-expanded="false"
                          aria-controls="collapse10"
                        >
                          <strong>
                            10. Do I need to pay fee for selection process?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse10"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading10"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-2">
                            Yes. Candidates are required to pay Rs.1000 as
                            registration fee for selection process. However,
                            this amount will be adjusted against admission fee
                            on selection.
                          </p>
                          <p className="mb-2">
                            In the case of semester wise fee payment, the 1st
                            semester fee is Rs. 65,000 (Rs. 20,000 towards
                            admission fee and Rs.45,000 towards tuition fee).
                            Upon selection, candidates are required to pay
                            Rs.64,000, after adjusting the registration fee
                            which was paid at the time of selection process.
                          </p>
                          <p className="mb-0">
                            In the case of year wise fee, the 1st year fee is
                            Rs. 1,10,000 (Rs. 20,000 towards admission fee and
                            Rs.90,000 towards tuition fee). Upon selection,
                            candidates are required to pay Rs.1,09,000, after
                            adjusting the registration fee which was paid at the
                            time of selection process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading11">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          <strong>
                            11. Are there any tie-up with banks for study loans?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse11"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading11"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            No. There are no tie-up by the University to provide
                            study loan. However, banks have individual education
                            loan policies. Students may approach the banks for
                            details.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading12">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse12"
                          aria-expanded="false"
                          aria-controls="collapse12"
                        >
                          <strong>
                            12. What is the certification I get after completing
                            the Program?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse12"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading12"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-2">
                            Students who successfully complete the graduation
                            requirements for the Online MBA Program will be
                            awarded the Master of Business Administration degree
                            through the online mode from The ICFAI Foundation
                            for Higher Education (IFHE).
                          </p>
                          <p className="mb-0">
                            <strong>Graduation Requirements:</strong> Students
                            should have completed the evaluation requirements of
                            all courses in a maximum duration of four years with
                            a minimum Cumulative Grade Point Average of 5.5 with
                            number of courses with D and E grades together not
                            exceeding four. Detailed guidelines on graduation
                            requirements are spelt out in the Student Handbook
                            which will be provided to the students after
                            enrolment.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading13">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse13"
                          aria-expanded="false"
                          aria-controls="collapse13"
                        >
                          <strong>
                            13. Are foreign students allowed to enroll in
                            ICFAI’s Online MBA Program offered by IFHE? If yes,
                            how the grades/percentages given in my country are
                            equated to the grades/percentages considered by
                            IFHE, India.
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse13"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading13"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Yes, foreign students are allowed to enroll in
                            ICFAI’s Online MBA Program subject eligibility
                            criteria. For equivalency of grades/percentages and
                            admission formalities, candidates are required to
                            contact
                            <a
                              className="text-danger"
                              href="mailto:olss.cdoe@ifheindia.org"
                            >
                              olss.cdoe@ifheindia.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading14">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse14"
                          aria-expanded="false"
                          aria-controls="collapse14"
                        >
                          <strong>14. What is the program structure?</strong>
                        </button>
                      </h2>
                      <div
                        id="collapse14"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading14"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            The Program structure consists of 22 courses spread
                            across 4 semesters with 15 core courses, 6 electives
                            and 1 practicum / research project. For further
                            details, please visit
                            <a
                              className="text-danger"
                              href="https://online.ifheindia.org/"
                              target="_blank"
                            >
                              online.ifheindia.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading15">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse15"
                          aria-expanded="false"
                          aria-controls="collapse15"
                        >
                          <strong>
                            15. How many specializations/electives are offered?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse15"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading15"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-body">
                            <p className="mb-2">
                              There are 6 electives and 1 Practicum/research
                              project.
                            </p>
                            <ul>
                              <li className="mb-1">
                                Semester III Elective Options - Students can opt
                                for 3 Electives from 10 Options
                              </li>
                              <li className="mb-1">
                                Semester IV Elective Options - Students can opt
                                for 3 Electives from 10 Options
                              </li>
                              <li>
                                Please visit
                                <a
                                  className="text-danger"
                                  href="https://online.ifheindia.org/"
                                  target="_blank"
                                >
                                  online.ifheindia.org
                                </a>
                                for the full list of electives.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading16">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse16"
                          aria-expanded="false"
                          aria-controls="collapse16"
                        >
                          <strong>
                            16. Is there a major / minor in electives?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse16"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading16"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-2">
                            There is no major/minor in electives. Students can
                            choose the electives based on their interest which
                            will help to enhance their understanding in the area
                            where they are currently working/planning to work.
                          </p>
                          <p className="mb-0">
                            Students are free to choose the electives across the
                            total electives offered, i.e., a cafeteria approach
                            in selecting the electives in Semesters III & IV.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading17">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse17"
                          aria-expanded="false"
                          aria-controls="collapse17"
                        >
                          <strong>
                            17. What is the pedagogy/learning methodology for
                            Online MBA Program?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse17"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading17"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-2">The unique pedagogy includes:</p>
                          <ul>
                            <li className="mb-1">
                              <strong>Micro-learning:</strong> Consists of
                              Multi-format content – videos, audio- visuals,
                              visually enriched text, and comprehensive
                              glossary. These are presented as learning nuggets
                              which require 2 to 15 minutes
                            </li>
                            <li className="mb-1">
                              <strong>C-in-C approach to Content:</strong>
                              Management is an applied discipline where context
                              is ever prevalent. Hence academic concepts and
                              frameworks are presented within real life
                              ‘contexts’.
                            </li>
                            <li className="mb-1">
                              <strong>P2P exercises:</strong>
                              Practice-Precept-Practice cycle of learning and
                              employability. Well-planned Engagement Exercises,
                              based on real life situations to relate, reflect
                              and recreate / can develop employability
                            </li>
                            <li className="mb-1">
                              <strong>Gamification:</strong> Gamification
                              motivates the learner to focus on self-progress in
                              a group setting and triggers the peer groups
                              competitive spirit.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading18">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse18"
                          aria-expanded="false"
                          aria-controls="collapse18"
                        >
                          <strong>
                            18. Will you provide a study-plan? Or a weekly
                            schedule in advance?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse18"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading18"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Yes, the University will provide the ideal study
                            plan. Yet the learners have the flexibility to
                            choose their own path as per their suitability
                            within the prescribed timelines for each semester.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading19">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse19"
                          aria-expanded="false"
                          aria-controls="collapse19"
                        >
                          <strong>
                            19. Are there any interactive sessions to interact
                            with the faculty during the course of study?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse19"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading19"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            For each module, the faculty will be conducting a
                            one-hour live session per week. These sessions can
                            be used by the students to clarify any gaps in
                            learning and request for any repeat of explanation
                            of concepts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading20">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse20"
                          aria-expanded="false"
                          aria-controls="collapse20"
                        >
                          <strong>
                            20. Are there any offline sessions for clarifying
                            doubts?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse20"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading20"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            There are no offline sessions for clarifying the
                            doubts. However, Online consultation session will be
                            scheduled for every course with faculty periodically
                            to enable more focused learning.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading21">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse21"
                          aria-expanded="false"
                          aria-controls="collapse21"
                        >
                          <strong>
                            21. Will there be industry connect? Or any guest
                            seminars from industry experts?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse21"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading21"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Yes, there will be periodical webinars. Moreover,
                            thru the C-in-C approach, the academic
                            <strong>“Concepts”</strong> are presented within
                            real-life <strong>“Contexts”</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading22">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse22"
                          aria-expanded="false"
                          aria-controls="collapse22"
                        >
                          <strong>
                            22. Is there a facility to observe my progress
                            periodically and give feedback?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse22"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading22"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-body">
                            <p className="mb-2">
                              Yes. LMS has Gamification element which motivates
                              the student to focus on self-progress in a group
                              setting and triggers the peer groups competitive
                              spirit.
                            </p>
                            <p className="mb-0">
                              Apart from this, the student is provided feedback
                              on a periodic basis based on the progress made viz
                              the course/ program outcomes. This is a part of
                              the Learning Assurance program implemented by the
                              Program.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading23">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse23"
                          aria-expanded="false"
                          aria-controls="collapse23"
                        >
                          <strong>
                            23. How many hours I need to spend every week to
                            complete the course work?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse23"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading23"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            For most effective eLearning outcomes, for each
                            course, learners need to spend about 8 to 10 hours
                            every week in viewing videos, reading content,
                            participating in discussion forums, work life
                            narrations etc.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading24">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse24"
                          aria-expanded="false"
                          aria-controls="collapse24"
                        >
                          <strong>
                            24. What is the total number Course Credits?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse24"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading24"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            There are total 98 course credits. Subject wise
                            Course credits are made available on the website.
                            For further details, please visit
                            <a
                              className="text-danger"
                              href="https://online.ifheindia.org/"
                              target="_blank"
                            >
                              online.ifheindia.org
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading25">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse25"
                          aria-expanded="false"
                          aria-controls="collapse25"
                        >
                          <strong>
                            25. How do I access the course content after
                            enrolment?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse25"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading25"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            The content, learning and assessment is conducted
                            online on an interactive Learning Management System
                            (LMS) that can be accessed anywhere with a proper
                            internet connectivity. Learning Management System is
                            an online platform that can be accessed through
                            unique user-id and password provided to the student.
                            Student will have access to the courses registered
                            for in the Learning Management System
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading26">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse26"
                          aria-expanded="false"
                          aria-controls="collapse26"
                        >
                          <strong>
                            26. Are there any limit on the number of courses to
                            be registered in a semester?
                          </strong>
                        </button>
                      </h2>
                      <div
                        id="collapse26"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading26"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Registration to a semester is to be done before the
                            commencement of classes for the semester as per the
                            academic calendar. In any semester the student needs
                            to enrol for a minimum of three courses in order to
                            complete the program during the validity period of
                            four years for the student.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading27">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse27"
                          aria-expanded="false"
                          aria-controls="collapse27"
                        >
                          <strong>27. What is the evaluation Process?</strong>
                        </button>
                      </h2>
                      <div
                        id="collapse27"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading27"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-2">
                            Evaluation is through formative and semester end
                            examinations. Formative assessment contributes to
                            30% of the overall weight of the course assessment.
                            It is done through session participation,
                            performance in the engagement exercises, workplace
                            narrations and discussion forums.
                          </p>
                          <p className="mb-0">
                            Semester End examinations are conducted online with
                            technology enabled proctoring. They carry 70%
                            weight.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="heading28">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse28"
                          aria-expanded="false"
                          aria-controls="collapse28"
                        >
                          <strong>28. Can I write the exams online?</strong>
                        </button>
                      </h2>
                      <div
                        id="collapse28"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading28"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            Yes. Exams are conducted online. Semester End
                            examinations are conducted online with technology
                            enabled proctoring.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card border-0 shadow mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
                  <a
                    href="#"
                    data-fancybox="gallery"
                    data-src="https://youtu.be/DyJLiHPIhq8"
                    className="gallery-item"
                  >
                    <img
                      src={assets.eligibilityDurationValidity}
                      alt="eligibility-duration-validity"
                      className="img-fluid"
                    />
                  </a>
                  <h6 className="mt-2">Eligibility, Duration & Validity</h6>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
                  <a
                    href="#"
                    data-fancybox="gallery"
                    data-src="https://youtu.be/-jlgF6JnJyQ"
                    className="gallery-item"
                  >
                    <img
                      src={assets.admissionProcess}
                      alt="admission-process"
                      className="img-fluid"
                    />
                  </a>
                  <h6 className="mt-2">Admission Process</h6>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
                  <a
                    href="#video"
                    data-fancybox="gallery"
                    data-src="https://youtu.be/n48qIkc1m0I"
                    className="gallery-item"
                  >
                    <img
                      src={assets.necessaryToRegister}
                      alt="necessary-to-register"
                      className="img-fluid"
                    />
                  </a>
                  <h6 className="mt-2">
                    Why is It Necessary to Register for All Five Courses in
                    First Semester?
                  </h6>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
                  <a
                    href="#"
                    data-fancybox="gallery"
                    data-src="https://youtu.be/txf3ESDRPuw"
                    className="gallery-item"
                  >
                    <img
                      src={assets.feeStructurePaymentOptions}
                      alt="fee-structure-payment-options"
                      className="img-fluid"
                    />
                  </a>
                  <h6 className="mt-2">Fee Structure & Payment Options</h6>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
                  <a
                    href="#"
                    data-fancybox="gallery"
                    data-src="https://youtu.be/XCXGBLAPlqs"
                    className="gallery-item"
                  >
                    <img
                      src={assets.examinationsCertificate}
                      alt="examinations-certificate"
                      className="img-fluid"
                    />
                  </a>
                  <h6 className="mt-2">Examinations & Certificate</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
