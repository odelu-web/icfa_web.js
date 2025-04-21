import React from "react";
import assets from "../assets/assets";
import Seo from "../components/Seo";
const Research = () => {
  return (
    <>
      <Seo
        title="ICFAI | Research | International Books | workbooks"
        description="ICMR is Asia’s most popular repository of management case studies.
   Over 10 million copies of ICMR case studies have been printed in international and Indian textbooks"
        keywords="IFHE, Research, International Books, Workbooks, Case Study, CDOE, Online MBA, Best Centre for Innovation Entrepreneurship and Incubation, Online Payment Options, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/bba/research"
        ogUrl="https://online.ifheindia.org/bba/research"
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
                  <li>About Us</li>
                  <li>Research</li>
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
                  <h3>Research</h3>
                  <p>
                    The ICMR is Asia's most popular repository of management
                    case studies. Over 10 million copies of ICMR case studies
                    have been printed in international and Indian textbooks,
                    workbooks and case study volumes. More than 200,000
                    individual copies of its case studies have been purchased by
                    many of the leading business schools and universities around
                    the world. These case studies have won prizes in several
                    global case writing competitions, and also appear in many
                    international management textbooks. The IBSCDC is a case
                    development center which has developed in excess of 5500
                    cases.
                  </p>
                  <p>
                    The Center for Innovation Entrepreneurship and Incubation
                    (CIEI) has been set up to encourage, promote and facilitate
                    innovation and entrepreneurship development in the
                    University as well as is in its immediate neighborhood. It
                    identifies, supports and mentors the students who come out
                    with new business plans or start-up ideas. To inspire the
                    students to become future Entrepreneurs feeling through
                    E-week, Guest lectures, seminars, workshops etc.
                  </p>
                  <p>
                    In addition, IFHE hosts a number of international and
                    national conferences, seminars and workshops.
                  </p>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                  <div className="sticky-top1">
                    <img
                      src={assets.Researchbanner}
                      className="img-fluid rounded-4"
                      alt="research"
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

export default Research;
