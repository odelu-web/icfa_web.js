import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import Seo from "../components/Seo";

const OnlineBba = () => {
  return (
    <div>
      <Seo
        title="ICFAI | Faculty Profiles | CDOE | ICFAI Experienced Faculty"
        description="ICFAI, Hyderabad engages experienced faculty with good academic careers having experience in Entrepreneurship, Training and Higher Education."
        keywords="IFHE Hyderabad, ICFAI University, Faculty Profiles, Experienced Faculty, CDOE, Entrepreneurship, Training, Higher Education, MBA, Online MBA, NAAC Accredited Business School, Executive MBA Programs in Hyderabad, Executive MBA programs in India, MBA marketing online, Distance Online program, Faculty from IITs IIMs, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management."
        canonical="https://online.ifheindia.org/bba/online-bba"
        ogUrl="https://online.ifheindia.org/bba/online-bba"
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
                  <li>Online BBA</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h1>Under Construction</h1>
      </div>
    </div>
  );
};

export default OnlineBba;
