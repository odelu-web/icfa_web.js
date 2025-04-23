import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import { FaYoutube } from "react-icons/fa6";
import * as bootstrap from "bootstrap";
import { LuDownload } from "react-icons/lu";

import "../components/Homepage/OnlineMBA.css";

const Onlinemba = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);

  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    [...popoverTriggerList].forEach((el) => {
      new bootstrap.Popover(el);
    });
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="card border-0 shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 my-auto">
                  <h3>Why is ICFAI Online MBA Unique?</h3>
                  <p>
                    The ICFAI Online MBA program effects integration among your
                    work context, the business challenges, the institution
                    stakeholders as well as the learning journey.
                  </p>
                  <p>
                    This opens up tremendous opportunities for each individual.
                    You can build the learning outcomes using four key drivers.
                  </p>
                  <p>
                    Viz.{" "}
                    <span className="bg-warning">
                      #mastery, #innovation, #freedom and #belonging
                    </span>
                    . Let's briefly examine each:{" "}
                    <a
                      data-bs-toggle="popover"
                      data-bs-custom-className="custom-popover"
                      data-bs-placement="right"
                      data-bs-trigger="hover focus"
                      data-bs-content="What Makes ICFAI Online MBA Unique?"
                      target="_blank"
                      href="https://youtu.be/0UF86ggVkGs"
                    >
                      <FaYoutube className="  fs-2 text-secondary shadow p-1" />
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    className="img-fluid"
                    src={assets.herobg2}
                    alt="herobg2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features section bgAccreditation">
        <div className="container py-3">
          <div className="d-flex">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <h4>
                    <img
                      src={assets.MasteryIcon}
                      width="40"
                      height="40"
                      alt="icfai_universities"
                      className="img-fluid bgIcon"
                      loading="lazy"
                    />{" "}
                    Mastery
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <h4>
                    <img
                      src={assets.InnovationIcon}
                      width="40"
                      height="40"
                      alt="ICFAI Business Schools(IBS)"
                      className="img-fluid bgIcon"
                      loading="lazy"
                    />{" "}
                    Innovation
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                >
                  <h4>
                    <img
                      src={assets.FreedomIcon}
                      width="40"
                      height="40"
                      alt="ICFAI Business Schools(IBS)"
                      className="img-fluid bgIcon"
                      loading="lazy"
                    />{" "}
                    Freedom
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-4"
                >
                  <h4>
                    <img
                      src={assets.BelongingIcon}
                      width="40"
                      height="40"
                      alt="ICFAI Business Schools(IBS)"
                      className="img-fluid bgIcon"
                      loading="lazy"
                    />{" "}
                    Belonging
                  </h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content tabs-section ">
            <div className="tab-pane fade active show" id="features-tab-1">
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <div className="card border-0 shadow h-100 bgBoxTab">
                    <div className="card-body text-white">
                      <h4>Mastery</h4>
                      <p>
                        The ICFAI Online MBA goes beyond understanding of
                        concepts. It makes you a problem solver at the
                        workplace.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.LearningFormulaIcon}
                              alt="Learning Formula"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Learning Formula</h4>
                          <p>
                            Our 70:20:10 is #mastery oriented. 70% on job
                            learning makes you the master of trades (Peer
                            learning: 20% - Theory: 10%)
                          </p>

                          <span className="span-custom   mr-3">
                            <a
                              data-bs-toggle="popover"
                              data-bs-custom-className="custom-popover"
                              data-bs-placement="right"
                              data-bs-trigger="hover focus"
                              data-bs-content="Design is Core of ICFAI Online MBA Program"
                              target="_blank"
                              href="https://youtu.be/S4JW-yicyf0"
                            >
                              <FaYoutube className="  fs-2 text-secondary shadow p-1" />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.ContextIcon}
                              alt="Concepts in Context"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Concepts in Context</h4>
                          <p className="mb-0">
                            Many contexts are woven around a single concept.
                            There are several such context-concept
                            constellations.
                          </p>
                          {showMore && (
                            <p>
                              Then how to select that context which is more
                              productive for you from this plenitude? We have
                              the answer.
                            </p>
                          )}
                          <p>
                            <button
                              onClick={() => setShowMore(!showMore)}
                              className=" btn text-danger "
                            >
                              {showMore ? "Read Less" : "Read More"}
                            </button>
                            <span className="span-custom   mr-3">
                              <a
                                data-bs-toggle="popover"
                                data-bs-custom-className="custom-popover"
                                data-bs-placement="right"
                                data-bs-content="From Concept to Context: Course Project Serves the Connect"
                                target="_blank"
                                href="https://youtu.be/3b-dkQFIhl4"
                                data-bs-trigger="hover focus"
                              >
                                <FaYoutube className=" fs-2 text-secondary shadow p-1" />
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.ProblemSolverIcon}
                              alt="Problem Solver"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Problem Solver</h4>
                          <p>
                            You are able to frame your business problems using
                            management frameworks and recommend solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.PersonalisedLearningIcon}
                              alt="Personalised Learning"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Personalised Learning</h4>
                          <p>
                            Put together these choices allow you to craft your
                            personalized learning journey engaging with content,
                            faculty support and assessment in the way you want
                            to meet your outcomes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-2">
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <div className="card border-0 shadow h-100 bgBoxTab">
                    <div className="card-body text-white">
                      <h4>Innovation</h4>
                      <p>
                        Innovation keeps ICFAI Online MBA program tuned to the
                        ever-changing landscape and what more!! The learner is
                        always future ready.
                      </p>

                      <span className="span-custom  ">
                        <a
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Flexible Learning: Platform We Provide, Plan You Pick"
                          target="_blank"
                          href="https://youtu.be/re5QzTiTue4"
                        >
                          <FaYoutube className="  fs-2 text-white shadow p-1" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.YourPersonaIcon}
                              alt="Your Persona"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Your Persona</h4>
                          <p>
                            Our unique selection process, before admission
                            gauges what you can, not what you can't and sets
                            program outcomes
                          </p>
                          <span className="span-custom  mr-3">
                            <a
                              data-bs-toggle="popover"
                              data-bs-custom-className="custom-popover"
                              data-bs-placement="right"
                              data-bs-trigger="hover focus"
                              data-bs-content="Selection Process: It's About Enduring Belongingness "
                              target="_blank"
                              href="https://youtu.be/3CV0jYNnmLw"
                            >
                              <FaYoutube className="  fs-2 text-secondary shadow p-1" />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.LearningJourneyIcon}
                              alt="Learning Journey"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Learning Journey</h4>
                          <p className="mb-0">
                            The rich platter of learning objects with diverse
                            types of faculty facilitation enhances your journey
                            from objectives to outcomes.
                          </p>

                          {showMore2 && (
                            <p>
                              Check out various forms of multi-format content
                              and delivery formats supporting your learning
                              style and objectives. E.g. Thousands of micro
                              cases, Dedicated mentor support, Short
                              infographics, tutorials, glossary.
                            </p>
                          )}

                          <button
                            onClick={() => setShowMore2(!showMore2)}
                            className=" btn text-danger "
                          >
                            {showMore2 ? "Read Less" : "Read More"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.ElectiveChoiceIcon}
                              alt="Elective Choice"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Elective Choice</h4>
                          <p>
                            With today's world being interdisciplinary, the
                            cafeteria approach to elective choices allows to
                            width of choice to gain perspective for change and
                            innovation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.UniqueEvaluationIcon}
                              alt="Elective Choice"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Unique Evaluation</h4>
                          <p className="mb-0">
                            The program offers much more than assessment of your
                            learning. It allows you the choice of responding the
                            analysis from your work experience.
                          </p>
                          {showMore3 && (
                            <p>
                              You will enjoy its emphasis on outcomes not just
                              theoretical learning.
                            </p>
                          )}
                          <p>
                            <button
                              onClick={() => setShowMore3(!showMore3)}
                              className=" btn text-danger "
                            >
                              {showMore3 ? "Read Less" : "Read More"}
                            </button>

                            <span className="span-custom   mr-3">
                              <a
                                data-bs-toggle="popover"
                                data-bs-custom-className="custom-popover"
                                data-bs-placement="right"
                                data-bs-trigger="hover focus"
                                data-bs-content="Assessment: Spirited and Steady Win the Race "
                                target="_blank"
                                href="https://youtu.be/gW8qGyoPZDs"
                              >
                                <FaYoutube className=" fs-2 text-secondary shadow p-1" />{" "}
                              </a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-3">
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <div className="card border-0 shadow h-100 bgBoxTab">
                    <div className="card-body text-white">
                      <h4>Freedom</h4>
                      <p>
                        Freedom in the Online MBA makes it highly #flexible -
                        the liberty to pick your content type, study plan and
                        assessment type:
                      </p>
                      <span className="span-custom   mb-3">
                        <a
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Learning Mix: Plate Your Favourite"
                          target="_blank"
                          href="https://youtu.be/sKnJVxN2hdg"
                        >
                          <FaYoutube className="  fs-2 text-white shadow p-1" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.ContentIcon}
                              alt="Content"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Content</h4>
                          <p>
                            What type of content makes your learning style
                            comfortable? You have the freedom to choose.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.CourseProjectIcon}
                              alt="Course Project"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Course Project</h4>
                          <p>
                            Students can select their own projects at their
                            workplace.
                          </p>
                          <span className="span-custom   mr-3">
                            <a
                              data-bs-toggle="popover"
                              data-bs-custom-className="custom-popover"
                              data-bs-placement="right"
                              data-bs-trigger="hover focus"
                              data-bs-content="Convert your business pitch into a workable proposal @ICFAI Online MBA Program"
                              target="_blank"
                              href="https://youtu.be/oPKDaFSag44"
                            >
                              <FaYoutube className="  fs-2 text-secondary shadow p-1" />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.ElectiveChoiceIcon}
                              alt="Elective"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Elective</h4>
                          <p>
                            Learners are free to choose their elective
                            combination from across functions to develop a
                            well-rounded perspective in today's fast changing
                            world.
                          </p>
                          <span className="span-custom   mr-3">
                            <a
                              data-bs-toggle="popover"
                              data-bs-custom-className="custom-popover"
                              data-bs-placement="right"
                              data-bs-trigger="hover focus"
                              data-bs-content="Electives: Mix &amp; Match Helps All-Round Learning"
                              target="_blank"
                              href="https://youtu.be/2Yz1aYiJ_fk"
                            >
                              <FaYoutube className="  fs-2 text-secondary shadow p-1" />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.UniqueEvaluationIcon}
                              alt="Evaluation"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Evaluation</h4>
                          <p>
                            Never heard before! The learners can choose the
                            assessment methods too.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="features-tab-4">
              <div className="row">
                <div className="col-lg-3 mb-3">
                  <div className="card border-0 shadow h-100 bgBoxTab">
                    <div className="card-body text-white">
                      <h4>Belonging</h4>
                      <p>
                        Belonging emerges from the connect to the institution,
                        peers or faculty. The level of connect is vastly
                        superior to other fully online programs. Belonging
                        brings in socializing for learning and creates a
                        quasi-campus effect.
                      </p>
                      <p className="text-warning">
                        How does a student get the sense of #belonging at ICFAI
                        Online MBA?
                      </p>
                      <span className="span-custom   mb-3">
                        <a
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="ICFAI Online MBA: Where Learning Becomes a Way of Life "
                          target="_blank"
                          href="https://youtu.be/RtlSmOnSGas"
                        >
                          <FaYoutube className="  fs-2 text-white shadow p-1" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.InstitutionIcon}
                              alt="Institution"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Institution</h4>
                          <p>
                            There are many elements that brings in institution
                            #belonging like Merit Scholarships, events,
                            testimonials, feedback, interactions and nudges for
                            progression.
                          </p>
                          <span className="span-custom   mb-3 mr-3">
                            <a
                              data-bs-toggle="popover"
                              data-bs-custom-className="custom-popover"
                              data-bs-placement="right"
                              data-bs-trigger="hover focus"
                              data-bs-content="Award: Institution's Stamp of Appreciation"
                              target="_blank"
                              href="https://youtu.be/1IoaK8mFio8"
                            >
                              <FaYoutube className="  fs-2 text-secondary shadow p-1" />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.PeerIcon}
                              alt="Peer"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Peer</h4>
                          <p>
                            You would be the part of informal and formal study
                            groups, say peer network, which take care of your
                            needs in more ways than you can imagine.
                          </p>
                          <span className="span-custom   mb-3 mr-3">
                            <a
                              data-bs-toggle="popover"
                              data-bs-custom-className="custom-popover"
                              data-bs-placement="right"
                              data-bs-trigger="hover focus"
                              data-bs-content="Peer Learning: Provides Understanding, Not Just Clues"
                              target="_blank"
                              href="https://youtu.be/9sxj7JNzcA8"
                            >
                              <FaYoutube className="  fs-2 text-secondary shadow p-1" />{" "}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="media single-choose-inner">
                        <div className="media-left">
                          <div className="icon">
                            <img
                              src={assets.FacultyIcon}
                              alt="Faculty"
                              loading="lazy"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>
                        <div className="media-body">
                          <h4>Faculty</h4>
                          <p>
                            Just experience our student- faculty interaction
                            during online sessions or in the asynchronous forms
                            (say, mentoring or counselling), you will understand
                            what faculty #belonging is!
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

      <section className="  features section">
        <div className="container">
          <div className="card shadow border-0  p-3">
            <h2>For Whom</h2>
            <div className="d-flex">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#whom-tab-3"
                  >
                    <img
                      src={assets.WorkingProfessionalUnique1}
                      width="40"
                      height="40"
                      alt="icfai_universities"
                      className="img-fluid bgIcon"
                      loading="lazy"
                    />
                    <h4>Working Professionals</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#whom-tab-4"
                  >
                    <img
                      src={assets.MasteryIcon}
                      width="40"
                      height="40"
                      alt="icfai_universities"
                      className="img-fluid bgIcon"
                      loading="lazy"
                    />{" "}
                    <h4>Fresher</h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#whom-tab-5"
                  >
                    <img
                      src={assets.EntrepreneurIconUnique1}
                      width="40"
                      height="40"
                      alt="icfai_universities"
                      className="img-fluid bgIcon"
                      loading="lazy"
                    />{" "}
                    <h4>Entrepreneurs</h4>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div className="tab-pane fade active show" id="whom-tab-3">
                <div className="row">
                  <div className="col-md-6">
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
                            <strong>Effective</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse1"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading1"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="mb-0 fw-bold">For you</p>
                            <ul className="  mb-2">
                              <li>Builds process improvements.</li>
                              <li>Provides work based insights.</li>
                            </ul>
                            <p className="mb-0 fw-bold">For Them</p>
                            <ul className="  mb-2">
                              <li>Designs functional innovations.</li>
                              <li>Generates actionable project proposals.</li>
                            </ul>
                            <p>
                              To Know more about elective choice.
                              <a
                                className="text-danger"
                                target="_blank"
                                href="/program/program-structure"
                              >
                                visit program structure
                              </a>
                            </p>
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
                            <strong>Convenient</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse2"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-bold"> For you</p>
                            <ul>
                              <li>
                                Your experience to advantage by drawing in
                                examples and insights from your workplace in
                                class discussions and assignments.
                              </li>
                              <li>
                                Reflect on illustrations and experiences shared
                                by your batch peers from different industries.
                              </li>
                            </ul>
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
                            <strong>Rewarding</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse3"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading3"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-bold">For you</p>
                            <ul>
                              <li>
                                Helps to get noticed and earn recognition for
                                your contributions to work.
                              </li>
                              <li>
                                Enables Cross-skilling/ upskilling by exploring
                                other functions/ departments at your work.
                              </li>
                            </ul>
                            <p className="fw-bold">For Them</p>
                            <ul>
                              <li>
                                Builds employee competencies to contribute
                                better towards the organization's goals.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3>Designing Future Ready Working Professionals</h3>
                    <p>
                      Ever changing business dynamics calls for the individuals
                      to be future ready to meet the challenges.
                    </p>
                    <p>
                      Your pursuit to fill the skill-gaps with the relevant know
                      how ends with ICFAI Online MBA and listen!! It benefits
                      your organization too. Here're a few insights:
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center bg6 py-4">
                  <div className="col-md-4">
                    <div className="cust-div">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#techfunManagerial"
                      >
                        <div
                          className="tooltip-1"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="How MBA Can Provide a #careerupgrade?"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/oPl4nVDhXPA"
                      >
                        <div
                          className="tooltip-2"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Why MBA? Learn More, Become More"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/pmGC_CcTLU8"
                      >
                        <div
                          className="tooltip-3"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Why MBA: Masters Makes One More Audible @ WorK"
                        ></div>
                      </a>
                      {/* <!-- Button to Open the Modal --> */}
                      <img
                        src={assets.CareerUpgrade}
                        loading="lazy"
                        width="425"
                        height="425"
                        className="img-fluid"
                        alt="Careerupgrade"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 my-auto">
                    <h3 className="main-title">Career Upgrade</h3>
                    <p className="card-text">
                      Continued professional growth is crucial for any career
                      path. Let's call it #careerupgrade.
                    </p>
                    <p className="card-text">
                      Career progression needs skilling/reskilling/upskilling,
                      irrespective of the position you hold at present.
                    </p>
                    <p className="card-text">
                      It is here many working professionals turn to ICFAI Online
                      MBA. The #careerupgrade enthusiasts can be broadly
                      classified into three:
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="whom-tab-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="accordion" id="accordionExample1">
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
                            <strong> Flexibility</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse11"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading11"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <ul className=" mb-2">
                              <li>
                                Imparts the confidence to start working
                                rightaway whether in a new job or the family
                                business.
                              </li>
                              <li>
                                Helps to lay the right career path through the
                                multi sector and multifunctional micro-case
                                based learning.
                              </li>
                            </ul>
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
                            <strong> Affordability</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse12"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading12"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <ul className=" mb-2">
                              <li>
                                Facilitates learning from a highly reputed and
                                recognized fully online MBA program at a
                                fraction of the cost of a campus program.
                              </li>
                            </ul>
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
                            <strong> Industry peer learning</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse13"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading13"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            {" "}
                            <ul className=" mb-2">
                              <li>
                                Enables you to study in company with experienced
                                industry professionals who are part of your
                                batch and study groups.
                              </li>
                            </ul>
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
                            <strong> Work Experience</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse14"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading14"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <ul className=" mb-2">
                              <li>
                                The mastery you gain from the ICFAI Online MBA
                                is tantamount to two years' work experience. Who
                                says you are not experienced then!!
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3> Improving Fresh Graduates' Potential</h3>
                    <p>
                      Is MBA worth it for fresh graduates? Yes, because it makes
                      you the first among the equals in the job market by
                      providing the option to gain work experience, network and
                      learn from experienced peers.
                    </p>
                    <p>
                      ICFAI Online MBA seeks to equip you with leadership
                      abilities, business concepts and professional networking
                      that push you to the top of the recruitment list. Let's
                      see how:
                    </p>
                  </div>
                </div>

                <div className="row justify-content-center bg6 py-4">
                  <div className="col-md-4">
                    <div className="cust-div1">
                      <a target="_blank" href="https://youtu.be/4KKDyXRIoBY">
                        <div
                          className="tooltip-1"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Project: Take It to Your Work, Watch Wonders!!"
                        ></div>
                      </a>

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/XOXf9AGNMYU"
                      >
                        <div
                          className="tooltip-2"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Elective Cafeteria: It's Learning With Diversity"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/3-9ounaLzpE"
                      >
                        <div
                          className="tooltip-3"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Case Studies: Complex Problems, Realistic Solutions "
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/PPREG_5jBJk"
                      >
                        <div
                          className="tooltip-4"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Peer Interaction: A Friend in Need&Indeed"
                        ></div>
                      </a>
                      {/* <!-- Button to Open the Modal --> */}
                      <img
                        src={assets.Employability}
                        loading="lazy"
                        width="425"
                        height="425"
                        className="img-fluid"
                        alt="Employability"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 my-auto">
                    <h3 className="main-title">Employability</h3>
                    <p className="card-text">
                      The #Employability buck doesn't stop at your first job.
                      #Employability makes you a winner throughout your work
                      life. (career shift included).
                    </p>
                    <p className="card-text">
                      Staying relevant to the evolving trends helps. ICFAI
                      Online provides the right impulse through peer learning.
                    </p>
                    <p className="card-text">
                      When you learn from the highly experienced fellow students
                      (Yes! They're batch mates) you build diverse and inclusive
                      spaces that enhance your employability. Sky is the limit
                      then!!
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="whom-tab-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="accordion" id="accordionExample2">
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
                            <strong> Industry peer learning</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse21"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading21"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <p className="mb-0">
                              Helps to derive insights that help your business:
                            </p>
                            <ul className=" mb-2">
                              <li>
                                From experienced industry professionals who are
                                part of your batch and study groups.
                              </li>
                              <li>
                                From CEOs, Founders and CXOs from diverse
                                businesses through our Friday WiseViews webinar
                                series.
                              </li>
                              <li>All by just posing questions to them!!</li>
                            </ul>
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
                            <strong> Case based learning</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse22"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading22"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <ul className=" mb-2">
                              <li>
                                Assists learning from discussion and insights.
                              </li>
                              <li>
                                Leverage multi industry and multi-functional
                                case based scenarios.
                              </li>
                            </ul>
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
                            <strong> Flexibility</strong>
                          </button>
                        </h2>
                        <div
                          id="collapse23"
                          className="accordion-collapse collapse"
                          aria-labelledby="heading23"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            {" "}
                            <ul className=" mb-2">
                              <li>One can learn at one's own pace.</li>
                              <li>
                                You can opt to bring in business scenarios for
                                discussion and advice.
                              </li>
                              <li>
                                You can choose assessment terrain centered
                                around the venture.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5>Creating an Edge to Entrepreneurs</h5>
                    <p>
                      If you have been wondering how MBA degree helps
                      entrepreneurs, our answer is simple.
                    </p>
                    <p>
                      ICFAI Online MBA makes your entrepreneurial journey easier
                      by using the program pedagogy to explore the idea and
                      develop it into winning pitch. Let's ponder further:
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center bg6 py-4">
                  <div className="col-md-4">
                    <div className="cust-div2">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/P66MSL30hnQ"
                      >
                        <div
                          className="tooltip-1"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Course Projects: Helps to Connect the Dots "
                        ></div>
                      </a>

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/Xvb4J7no7t0"
                      >
                        <div
                          className="tooltip-2"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="Projects @ Own Work: Benefits Self and the Firm"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://youtu.be/Jn957ybg5Mg"
                      >
                        <div
                          className="tooltip-3"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="ICFAI Online MBA is an Entrepreneur's Pride Too"
                        ></div>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="http://www.iiec.ifheindia.org/"
                      >
                        <div
                          className="tooltip-4"
                          data-bs-toggle="popover"
                          data-bs-custom-className="custom-popover"
                          data-bs-placement="right"
                          data-bs-trigger="hover focus"
                          data-bs-content="The ICFAI Foundation for Higher Education Innovation & Entrepreneurship Council (IIEC)"
                        ></div>
                      </a>
                      {/* <!-- Button to Open the Modal --> */}
                      <img
                        src={assets.VentureSupport}
                        loading="lazy"
                        width="425"
                        height="425"
                        className="img-fluid"
                        alt="Venture-Support"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 my-auto">
                    <h3 className="main-title">Venture Support</h3>
                    <p className="card-text">
                      The #Employability buck doesn't stop at your first job.
                      #Employability makes you a winner throughout your work
                      life. (career shift included).
                    </p>
                    <p className="card-text">
                      The program shapes, supports and develops your venture! It
                      works on exploring key ideas, testing critical
                      assumptions, adopting best practices and preparing the
                      business proposal.
                    </p>
                    <p className="card-text">
                      Course Projects and the Entrepreneurship Practicum
                      formalizes #Venturesupport Intrigued? Listen to our
                      student stories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 text-center">
              <p className="mb-0 card-text">
                <strong> How can I do all this?</strong>
                <a
                  target="_blank"
                  className="text-danger"
                  href="https://online.ifheindia.org/ifhe-online-mba.asp"
                >
                  Click here to fill in
                </a>
                the enquiry form. Our counsellor will revert to you shortly.
                <br />
                Should you be willing, even a Zoom meeting with senior experts
                can be planned.
              </p>

              <button
                className="btn btn-danger btn-sm"
                rel="noreferrer"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#myModalformsub"
              >
                <LuDownload /> Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Onlinemba;
