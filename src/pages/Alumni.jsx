import React from "react";
import assets from "../assets/assets";
import Seo from "../components/Seo";
const Alumni = () => {
  return (
    <>
      <Seo
        title="ICFAI | Alumni Reunions | IBS | FST | FOL | Online MBA"
        description="ICFAI encourages each faculty to develop its own alumni network. IBS Hyderabad, 
      the Faculty Science and Technology and the Faculty of Law conduct Alumni events"
        keywords="IFHE, Alumni Reunions, IBS, Faculty of Science & Technology, Faculty Of Law, Online MBA, Best Centre for Innovation Entrepreneurship and Incubation, Online Payment Options, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/about-us/alumni"
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
                  <li>Alumni</li>
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
                  <h3>Alumni</h3>
                  <p>
                    IFHE encourages each faculty to develop its own alumni
                    network. IBS Hyderabad, the Faculty Science and Technology
                    and the Faculty of Law conduct alumni events such as alumni
                    reunions, class-meets and other related activities. These
                    networks also assist alumni in lateral career movement and
                    career development apart from enabling alumni interactions
                    with current students.
                  </p>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                  <div className="sticky-top1">
                    <img
                      src={assets.Alumnibanner}
                      className="img-fluid rounded-4"
                      alt="Alumni"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card border-0 bg1 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 col-12">
                  <img
                    src={assets.Chandrasentiwari}
                    className="img-fluid rounded-4"
                    alt="Chandra Sen Tiwari"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-9 col-lg-9 col-xl-9 col-12">
                  <h3>MBA for Much Better Assignments</h3>
                  <p>
                    A working professional, Chandra Sen Tiwari (Class of
                    2021-23) always nurtured a passion for career growth.To
                    pursue this he joined the ICFAI Online MBA program. And he
                    won.
                  </p>
                  <p>
                    Chandra says “I wanted to express my heartfelt thanks for
                    the invaluable guidance and support provided throughout the
                    MBA course. The knowledge and skills I gained have
                    significantly enhanced my career prospects.”
                  </p>
                  <p>
                    Chandra shared that he received multiple offers from several
                    banks and has joined in a leading bank .He adds, “This
                    success would not have been possible without the learning
                    and mentorship from ICFAI Online MBA.”
                  </p>
                  <p>
                    Such testimonials are the most gratifying moment for us.
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

export default Alumni;
