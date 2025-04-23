import React from "react";
import assets from "../assets/assets";
import { CiYoutube } from "react-icons/ci";
import Seo from "../components/Seo";
import { Fancybox } from "@fancyapps/ui";

import "../components/Homepage/Onlinelearning.css";
const Onlinelearning = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {});
  return (
    <>
      <Seo
        title="UGC Entitled Online MBA in India | Online MBA in Marketing"
        description="MBA for Working Professionals | ICFAI Online MBA, Electives in advanced semesters help you to study Online MBA in HR, Finance, Marketing, IT & Operations."
        keywords="IFHE, Online Learning Experience, online mba finance, Micro-learning, P2P exercises, Online MBA, Gamification, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/program/online-learning"
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
                  <li>Online Learning Experience</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card border-0 shadow mb-3">
            <div className="card-body">
              <h2>
                The IFHE Online Learning Experience: Journey from Objectives to
                Outcomes
              </h2>
              <h6>
                The objective of the content and pedagogy is to enhance the
                online learning experience through participation and engagement.
                The learning objects provide in-depth insights for online MBA
                Finance/Marketing/HR/IT & Operations (as electives).
              </h6>
              <div className="row">
                <div className="col-xl-12">
                  <p>
                    The online learning experience is built on multi- format
                    content types:
                  </p>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.ConceptVideos}
                          className="img-fluid"
                          alt="Concept Videos"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://www.youtube.com/watch?v=YfEf3AIhSv0"
                        data-fancybox="gallery"
                        title="Concept Videos"
                      >
                        <p className="mb-0">
                          Concept Videos
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.PEPVideos}
                          className="img-fluid"
                          alt="PEP-Videos"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://www.youtube.com/watch?v=zyTJ8y0G4ok&ab_channel=IFHEOnlinePrograms"
                        data-fancybox="gallery"
                        title="PEP Videos"
                      >
                        <p className="mb-0">
                          PEP Videos
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.CaseVideos}
                          className="img-fluid"
                          alt="Case-Videos"
                        />
                      </div>
                    </div>
                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/0_pYOX9Nn2Y"
                        data-fancybox="gallery"
                        title="Case Videos"
                      >
                        <p className="mb-0">
                          Case Videos
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.WorkoutVideos}
                          className="img-fluid"
                          alt="Workout-Videos"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/Jt-Wp88siXs"
                        data-fancybox="gallery"
                        title="Workout Videos"
                      >
                        <p className="mb-0">
                          Workout Videos
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.CourseIntroVideos}
                          className="img-fluid"
                          alt="Course-Intro-Videos"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/wa61CLhCKvA"
                        data-fancybox="gallery"
                        title="Course Intro Videos"
                      >
                        <p className="mb-0">
                          Course Intro Videos
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.FacultyVideoLectures}
                          className="img-fluid"
                          alt="Faculty-Video-Lectures"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/TC7pk64f9Zo"
                        data-fancybox="gallery"
                        title="Faculty Video Lectures"
                      >
                        <p className="mb-0">
                          Faculty Video Lectures
                          <CiYoutube className="fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.LiveFacultySessions}
                          className="img-fluid"
                          alt="Faculty-Video-Lectures"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/RttPG8g7Cig"
                        data-fancybox="gallery"
                        title="Live Faculty Sessions"
                      >
                        <p className="mb-0">
                          Live Faculty Sessions
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.Glossary}
                          className="img-fluid"
                          alt="Glossary"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/_fNFI1rMaJI"
                        data-fancybox="gallery"
                        title="Glossary"
                      >
                        <p className="mb-0">
                          Glossary
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.EngagementExercises}
                          className="img-fluid"
                          alt="Engagement-Exercises"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/NiPVFObCJag"
                        data-fancybox="gallery"
                        title="Engagement Exercises"
                      >
                        <p className="mb-0">
                          Engagement Exercises
                          <CiYoutube className=" fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.Blogs}
                          className="img-fluid"
                          alt="Blogs"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/LRgPINB66Uo"
                        data-fancybox="gallery"
                        title="Blogs"
                      >
                        <p className="mb-0">
                          Blogs
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.DiscussionForums}
                          className="img-fluid"
                          alt="Discussion Forums"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/2odtOhhgMgw"
                        data-fancybox="gallery"
                        title="Discussion Forums"
                      >
                        <p className="mb-0">
                          Discussion Forums
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.Webinars}
                          className="img-fluid"
                          alt="Webinars"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/MKQZXxv5Agw"
                        data-fancybox="gallery"
                        title="Webinars"
                      >
                        <p className="mb-0">
                          Webinars
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.SocialMediaPosts}
                          className="img-fluid"
                          alt="Social Media Posts"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src=""
                        data-fancybox="gallery"
                        title="Social Media Posts"
                      >
                        <p className="mb-0">
                          Social Media Posts
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img src={assets.eLM} className="img-fluid" alt="eLM" />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/-I6cJt78pdc"
                        data-fancybox="gallery"
                        title="eLM"
                      >
                        <p className="mb-0">
                          eLM
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.Workbook}
                          className="img-fluid"
                          alt="Workbook"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/o4RPyfYFgTA"
                        data-fancybox="gallery"
                        title="Workbook"
                      >
                        <p className="mb-0">
                          Workbook
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.CaseStudy}
                          className="img-fluid"
                          alt="Case Study"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/xF_0-uTnvAY"
                        data-fancybox="gallery"
                        title="Case Study"
                      >
                        <p className="mb-0">
                          Case Study
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.PEPNotes}
                          className="img-fluid"
                          alt="PEP Notes"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/tdT_tE9bP2A"
                        data-fancybox="gallery"
                        title="PEP Notes"
                      >
                        <p className="mb-0">
                          PEP Notes
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="learning-card">
                    <div className="m-2">
                      <div className="learning-icon bg-light shadow-sm mb-1">
                        <img
                          src={assets.BulletNotes}
                          className="img-fluid"
                          alt="Bullet Noteslll"
                        />
                      </div>
                    </div>

                    <div className="text-center bg13 p-1 rounded-1">
                      <a
                        href="#video"
                        data-src="https://youtu.be/dwjR5FzVPeM"
                        data-fancybox="gallery"
                        title="Bullet Noteslll"
                      >
                        <p className="mb-0">
                          Bullet Noteslll
                          <CiYoutube className="ms-2 fs-5" />
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                The content is leveraged with various forms of engagement
                exercises to lead to effective outcomes.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow mb-3">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr className="table-danger">
                      <th className="w-25">Learning Methodology</th>
                      <th className="w-50">How is it achieved</th>
                      <th className="w-25">Outcomes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">Micro-learning</td>
                      <td className="text-justify">
                        Content is presented as nuggets in multiple formats
                        which takes 2 to 15 minutes of time. The multiple
                        formats in audio visuals include case videos, animated
                        concept videos, faculty live videos, perspective videos,
                        visually enriched text and audios.
                      </td>
                      <td>
                        <ol>
                          <li>
                            To increase eyeballs for content, leading to
                            attention and motivation for learning.
                          </li>
                          <li>Enhances immersion and ease of learning.</li>
                        </ol>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">C-in-C approach to Content</td>
                      <td className="text-justify">
                        The multi-format content is dominated by a carefully
                        designed Concept in Context approach. Management is an
                        applied discipline where context is ever prevalent.
                        Hence academic concepts and frameworks are presented
                        within real life ‘contexts’.
                      </td>
                      <td>
                        <ol>
                          <li>Enhanceds retention and recollection.</li>
                          <li>Increases learning and employability</li>
                        </ol>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">P2P exercises</td>
                      <td className="text-justify">
                        Practice- Precept- Practice cycle of learning and
                        employability.
                        <ul>
                          <li>
                            Well planned Engagement exercises, based on real
                            life situations to relate, reflect and recreate
                            employability. Qualitative and quantitative
                            exercises help build competency to identify, assess
                            and apply principles to practical situations and
                            frame principles for future practice.
                          </li>
                          <li>
                            These exercises are built at Foundation, Problem
                            identification and Application levels.
                          </li>
                          <li>
                            About 2 – 2.5 hrs of P2P exercises every week
                            develops new neural pathways of learning and
                            competency for employability.
                          </li>
                        </ul>
                      </td>

                      <td>
                        <ol>
                          <li>
                            Ability to identify challenges, frame approaches and
                            build solutions for management problems.
                          </li>
                          <li>Adapt to varied learning contexts</li>
                        </ol>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Gamification</td>
                      <td className="text-justify">
                        Gamification elements such as scores, trackers,
                        challenge levels, badges and grades motivate the learner
                        to focus on self-progress in a group setting.
                        <hr />
                        <img
                          className="img-fluid"
                          src={assets.gamificationElements1}
                          alt="gamification_elements"
                        />
                      </td>

                      <td>
                        <ol>
                          <li>Triggers the peer group competitive spirit.</li>
                          <li>
                            Enhances the participation and engagement of the
                            learner in the learning experience
                          </li>
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow">
            <div className="card-body">
              <h3 className="mb-4">Online Learning Experience</h3>
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
                        1. What is the pedagogy/learning methodology for Online
                        MBA Program?
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
                      <div>
                        <p className="mb-2">The unique pedagogy includes:</p>
                        <p className="mb-2">
                          <strong>Micro-learning:</strong> Consists of
                          Multi-format content – videos, audio- visuals,
                          visually enriched text, and comprehensive glossary.
                          These are presented as learning nuggets which require
                          2 to 15 minutes
                        </p>
                        <p className="mb-2">
                          <strong>C-in-C approach to Content:</strong>
                          Management is an applied discipline where context is
                          ever prevalent. Hence academic concepts and frameworks
                          are presented within real life ‘contexts’.
                        </p>
                        <p className="mb-2">
                          <strong>P2P exercises:</strong>
                          Practice-Precept-Practice cycle of learning and
                          employability. Well-planned Engagement Exercises,
                          based on real life situations to relate, reflect and
                          recreate / can develop employability
                        </p>
                        <p className="mb-2">
                          <strong>Gamification:</strong> Gamification motivates
                          the learner to focus on self-progress in a group
                          setting and triggers the peer groups competitive
                          spirit.
                        </p>
                      </div>
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
                        2. How do I fit my study plan into my work and other
                        schedules?
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
                      <p className="mb-0">
                        You can evolve your own personalized study plan by
                        choosing from the various learning products made
                        available to you. The choice of learning products
                        depends upon the time that you can cater for the courses
                        and your learning style. For instance, we have short
                        infographic summaries of each unit that help you to
                        understand concepts easily and faster. (video on
                        SLiMs/Glossary)
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
                        3. What form of faculty interaction is available to us?
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
                        The faculty interaction with the learners is not just
                        limited to the live classes/sessions but often goes
                        beyond. You are connecting with the faculty through
                        non-synchronous modes, the social media groups formed
                        for each course, posting your queries on the LMS etc.
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
                        4. I am not very good at quants and finance based
                        courses. How do I cope with such courses?
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
                      <p className="mb-0 mt-3">
                        We have bridge courses that prepare you to handle quants
                        and finance related courses. We also have problem
                        solving and tutorial classes/sessions that are extremely
                        useful in brushing your problem solving skills and in
                        attempting the assessments. You can leverage from the
                        learnings of the diverse peer group too.
                      </p>
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

export default Onlinelearning;
