import React from "react";
import Seo from "../components/Seo";
import assets from "../assets/assets";

const Academicevaluation = () => {
  return (
    <>
      <Seo
        title="Top Online MBA in India | Best Online MBA Colleges in India"
        description="ICFAI Online MBA has a Flexible learning tools to balance their study commitments with work and life commitments while working towards completing their MBA."
        keywords="IFHE, Academic Evaluation, CDOE, Semester, distance mba, mba hr online, Distance and Online MBA, ICFAI, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/program/academic-evaluation"
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
                  <li>Academic Evaluation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card border-0  shadow-sm rounded-4 mb-3 bg3">
            <div className="card-body  p-4">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                  <img
                    className="img-fluid rounded-4"
                    src={assets.continuousAssessment}
                    alt="continuous-ssessment"
                  />
                </div>
                <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                  <h3>Continuous Assessment</h3>
                  <p>
                    Continuous Assessment contributes to 30% of the overall
                    weight of the course assessment. It is done through session
                    participation, performance in the engagement exercises,
                    workplace narrations and discussion forums.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-0  shadow-sm rounded-4 mb-3 bg4">
            <div className="card-body  p-4">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                  <h3>Semester End Examinations</h3>
                  <p>
                    Semester End Examinations are conducted online with
                    technology enabled proctoring. They carry 70% weight.
                  </p>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                  <img
                    className="img-fluid rounded-4"
                    src={assets.semesterExaminations}
                    alt="semester-examinations"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card border-0  shadow-sm rounded-4 mb-3 bg5">
            <div className="card-body  p-4">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                  <img
                    className="img-fluid rounded-4"
                    src={assets.graduationRequirements}
                    alt="graduation-requirements"
                  />
                </div>
                <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                  <h3>Graduation Requirements</h3>
                  <p>
                    Students should have completed the evaluation requirements
                    of all courses in a maximum duration of four years. Students
                    should secure a minimum Cumulative Grade Point Average of
                    5.5 with number of courses with D and E grades together not
                    exceeding four.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-0  shadow-sm rounded-4 mb-3 bg6">
            <div className="card-body  p-4">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                  <h3>Award of Degree</h3>
                  <p>
                    Students who successfully complete the graduation
                    requirements for the Online MBA Program will be awarded the
                    Master of Business Administration degree in the online mode
                    by the ICFAI Foundation for Higher Education.
                  </p>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                  <img
                    className="img-fluid rounded-4"
                    src={assets.awardOfDegree}
                    alt="award-of-degree"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h3>FAQs – Online MBA Program</h3>
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h6 className="text-danger">
                    1. What is the evaluation Process?
                  </h6>
                  <p className="mb-2">
                    Evaluation is through formative and semester end
                    examinations. Formative assessment contributes to 30% of the
                    overall weight of the course assessment. It is done through
                    session participation, performance in the engagement
                    exercises, workplace narrations and discussion forums.
                  </p>
                  <p className="mb-3">
                    Semester End examinations are conducted online with
                    technology enabled proctoring. They carry 70% weight.
                  </p>
                  <h6 className="text-danger">
                    2. Can I write the exams online?
                  </h6>
                  <p>
                    Yes. Exams are conducted online. Semester End examinations
                    are conducted online with technology enabled proctoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Academicevaluation;
