import React from "react";
import assets from "../assets/assets";
import Seo from "../components/Seo";

const Facultydevelopmentprogram = () => {
  return (
    <>
      <Seo
        title="ICFAI Online MBA | Faculty Development Program | CDOE"
        description="The faculty members who support the Online MBA program undergo periodic Faculty Development Programs through the ICFAI Staff College, a constituent of the IFHE."
        keywords="IFHE, Best Faculty Development Program, CDOE, Online MBA, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/about-us/faculty-development-program"
        ogUrl="https://online.ifheindia.org/about-us/faculty-development-program"
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
                  <li>Faculty Development Program</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card border-0 bg3 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                  <h3>Faculty Development Program</h3>
                  <p>
                    The faculty members who support the ICFAI Online MBA program
                    undergo periodic Faculty Development Programs through the
                    ICFAI Staff College, a constituent of the ICFAI Foundation
                    of Higher Education. The ICFAI Staff College drives the
                    capacity building initiatives among the teaching and
                    non-teaching staff on an ongoing basis.
                  </p>
                  <p>
                    The Staff College conducts orientation programs, refresher
                    courses, seminars, workshops, guest lectures, etc.. The
                    programs are conceived with a focus on professionally
                    enriching the faculty members, upgrading knowledge and
                    enhancing teaching skills, to develop them as inspiring
                    teachers, quality researchers, institutions builders, etc.
                    and make them effective in their respective roles.
                  </p>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                  <div className="sticky-top1">
                    <img
                      src={assets.facultydeptprog}
                      className="img-fluid rounded-4"
                      alt="Faculty Development Program"
                      loading="lazy"
                    />
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

export default Facultydevelopmentprogram;
