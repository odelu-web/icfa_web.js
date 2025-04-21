import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import Seo from "../components/Seo";

const Contact = () => {
  return (
    <>
      <Seo
        title="Online MBA Program | University for Online MBA | Contact US"
        description="Best University for Online MBA in India. ICFAI is defined as the Best College for Online MBA in India."
        keywords="IFHE, Hyderabad, ICFAI University, CDOE, Admission in Online MBA, Contact Us, MBA, Distance and Online MBA, Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Center For Distance and Online Education in Hyderabad, Center For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/bba/contact"
        ogUrl="https://online.ifheindia.org/bba/contact"
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
                  <li>Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-2">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center h-100">
                    <i>
                      <FaMapMarkerAlt className="text-danger" />
                    </i>
                    <h3>Address</h3>
                    <p>
                      ICFAI Foundation for Higher Education Campus, <br />
                      Donthanapally, Shankarapalli Road, <br />
                      Hyderabad - 501203, Telangana State, India.
                    </p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center h-100">
                    <i>
                      <FaEnvelope className="text-danger" />
                    </i>
                    <h3>Call Us</h3>
                    <p>080-6959-2323</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center h-100">
                    <i>
                      <FaMapMarkerAlt className="text-danger" />
                    </i>
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:enrol.cdoe@ifheindia.org">
                        enrol.cdoe@ifheindia.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="row gy-4 mt-1">
                <div className="col-lg-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7613.542879180423!2d78.219444!3d17.422753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a11b92963ba3ece!2sICFAI%20Foundation%20Of%20Higher%20Education%20(IFHE)%20University!5e0!3m2!1sen!2sin!4v1603450657055!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="ICFAI University Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
