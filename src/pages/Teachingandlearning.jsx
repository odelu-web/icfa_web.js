import React from "react";
import { Fancybox } from "@fancyapps/ui";
import assets from "../assets/assets";
import Seo from "../components/Seo";

const Teachingandlearning = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {});

  // Separate data and helper components
  const elearningObjects = [
    {
      no: 1,
      product: "Concept Video",
      feature: "Animated & Interactive",
      duration: "15 Minutes",
      usage:
        "Explain a concept through a micro case supplemented with activities.",
    },
    {
      no: 2,
      product: "Case Video",
      feature: "Animated",
      duration: "7-8 Minutes",
      usage: "A concept is illustrated as a short case.",
    },
    {
      no: 3,
      product: "PEP Video",
      feature: "Animated",
      duration: "7-8 Minutes",
      usage: "Provides research insights for a concept.",
    },
    {
      no: 4,
      product: "Workout Videos",
      feature: "Animated & Interactive",
      duration: "2-3 Minutes",
      usage: "Illustrates a micro case and asks a conceptual query.",
    },
    {
      no: 5,
      product: "Course Intro Videos",
      feature: "Animated",
      duration: "3-4 Minutes",
      usage: "Introduces a course.",
    },
    {
      no: 6,
      product: "Faculty Video Lectures",
      feature: "Recorded",
      duration: "15 Minutes",
      usage: "Recorded faculty lectures on concept(s).",
    },
    {
      no: 7,
      product: "Glossary",
      feature: "e-Text",
      duration: "",
      usage: "Presents exhaustive list of terms used in a module.",
    },
    {
      no: 8,
      product: "Engaging Exercise",
      feature: "e-Text",
      duration: "",
      usage:
        "Micro-case based exercise. Tests student at foundational, problem solving and application levels.",
    },
    {
      no: 8,
      product: "Blog",
      feature: "Illustrated e-text",
      duration: "",
      usage:
        "Articles / nuggets on contemporary topics. Aligned to course concepts.",
    },
    {
      no: 9,
      product: "Live Sessions (On demand)",
      feature: "Live Session",
      duration: "60 Minutes",
      usage: "Organised on demand from the student.",
    },
    {
      no: 10,
      product: "eLearning Material",
      feature: "Learning e-Material",
      duration: "",
      usage: "Learning material covering all concepts in the curriculum.",
    },
    {
      no: 11,
      product: "Case Book",
      feature: "e-Text",
      duration: "",
      usage:
        "Case book of one page cases. One for each unit in the curriculum.",
    },
    {
      no: 12,
      product: "PEP Notes",
      feature: "e-Text",
      duration: "",
      usage: "Book of one page cases. One for each unit in curriculum.",
    },
    {
      no: 13,
      product: "Work Book",
      feature: "e-Text",
      duration: "",
      usage:
        "Collection of micro case based multiple choice questions for self-assessment",
    },
    {
      no: 14,
      product: "Bullet Notes",
      feature: "Illustrated e-Text",
      duration: "",
      usage:
        "Must know concepts of the curriculum are illustrated with visually rich artefacts.",
    },
  ];
  const AssessmentContent = () => (
    <>
      <p>
        The following are the types of assessment used during the semester as
        part of continuous assessment...
      </p>
      <ol>
        <li>
          Your participation in live sessions, watching videos and reading the
          relevant material (6%).
        </li>
        <li>Your posts in the Constructive eLearning Forum (6%).</li>
        <li>Engaging exercises for Section A (6%), B(6%), and C(6%).</li>
        <li>
          Workplace Narration as an alternative to Sections B and C assessments.
        </li>
      </ol>
      <p>
        There are two phases of continuous assessment: Week 1-7 and Week 8-15.
        End semester evaluation counts for 70% and lasts 3 hours.
      </p>
    </>
  );

  const CommunicationContent = () => (
    <>
      <p>
        The Online MBA program of IFHE provides multiple communication avenues:
      </p>
      <ol>
        <li>
          eLearning Environment includes:
          <ol type="a">
            <li>Chat/query tab for faculty responses</li>
            <li>Discussion forum with faculty summaries</li>
            <li>Click topics, polls</li>
          </ol>
        </li>
        <li>Zoom live sessions with chat and breakout rooms</li>
        <li>Orientation Week for Q&A and expectations</li>
        <li>Email support for various query types</li>
        <li>Social media interaction (blog, Facebook, Twitter, LinkedIn)</li>
        <li>Phone numbers in the prospectus</li>
        <li>Student clubs with faculty mentors</li>
      </ol>
    </>
  );
  return (
    <>
      <Seo
        title="Online MBA in Finance, HR, Marketing, IT & Operations"
        description="Learn how the ICFAI online MBA program provides a comprehensive education, equipping you with the skills and knowledge to excel in your career."
        keywords="IFHE, Online Teaching & Learning, Online MBA, online executive mba, mba finance online, e-learning, ICFAI, IBS, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/program/teaching-and-learning"
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
                  <li>Teaching & Learning</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Tabsection">
        <div className="container">
          {/* Section 1: Banner and Intro */}
          <div className="card border-0 bg3 shadow-sm rounded-4 mb-3">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <img
                    src={assets.eLearningBanner}
                    className="img-fluid"
                    alt="eLearning-environment"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <h3>ICFAI's eLearning Environment</h3>
                  <p>
                    Our eLearning environment is an integrated online platform
                    that provides anytime access to our multi-format content, on
                    multiple devices like Desktop, Laptop, Tablet and Mobile.
                  </p>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                      <a
                        href="https://youtu.be/3b-dkQFIhl4"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <img
                          src={assets.CVKrishna}
                          alt="CV-Krishna"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                      <a
                        href="https://youtu.be/KsYat-jCFhE"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <img
                          src={assets.PranKumar}
                          alt="Pran-Kumar"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Multi-format and Gamification */}
          <div className="card border-0 shadow-sm rounded-4 mb-3">
            <div className="card-body p-4">
              <div className="row align-items-center">
                <div className="col-12">
                  <p>
                    The eLearning environment ensures delivery of multi-format
                    content of each course to the students. This platform
                    facilitates collaboration and engagement between Faculty and
                    Students with various integrated features like Discussion
                    Forums, Blogs, Virtual Sessions, and Chats.
                  </p>
                  <p>
                    The eLearning environment has inbuilt gamification elements
                    to motivate learners and instil competitive spirit.
                  </p>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12">
                  <img
                    className="img-fluid"
                    src={assets.multiFormatContent}
                    alt="multi-format-content"
                  />
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12">
                  <img
                    className="img-fluid"
                    src={assets.gamificationElements}
                    alt="gamification-elements"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: eLearning Objects Table */}
          <div className="card border-0 shadow-sm rounded-4 mb-3">
            <div className="card-body p-4">
              <h3>eLearning Objects</h3>
              <p>
                ICFAI's content is known to be rich. It has been made richer
                with the inclusion of context. The content built for the Online
                MBA Program uses the power of technology to provide for a
                variety of eLearning objects...
              </p>
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="table-danger">
                    <tr>
                      <th>S.No.</th>
                      <th>Product</th>
                      <th>Feature</th>
                      <th>Duration</th>
                      <th>Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {elearningObjects.map((obj, idx) => (
                      <tr key={idx}>
                        <td>{obj.no}</td>
                        <td>{obj.product}</td>
                        <td>{obj.feature}</td>
                        <td>{obj.duration}</td>
                        <td>{obj.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 4: Tabbed Navigation */}
          <div className="features section">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="assessment-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#assessment"
                      type="button"
                      role="tab"
                    >
                      Assessment
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="communication-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#communication"
                      type="button"
                      role="tab"
                    >
                      Communication
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-3">
                  <div
                    className="tab-pane fade show active"
                    id="assessment"
                    role="tabpanel"
                  >
                    <AssessmentContent />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="communication"
                    role="tabpanel"
                  >
                    <CommunicationContent />
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

export default Teachingandlearning;
