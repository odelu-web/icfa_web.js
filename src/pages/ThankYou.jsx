// src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { FaRegFilePdf } from "react-icons/fa";
const ThankYou = () => {
  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-xl-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h2>Thank You!</h2>
              <p>
                Thank you for sharing the details and showing interest in ICFAI
                Online MBA Program.
              </p>
              <p>
                Our teaching and learning process is unique. It presents a wide
                menu of engagements based on your learning style. <br></br>
                Please check out for
                <a
                  className="text-danger ms-2"
                  href="/program/teaching-and-learning"
                >
                  Teaching and Learning
                </a>
              </p>
              <p>
                Want to sample some of them?
                <a className="text-danger ms-2" href="/program/online-learning">
                  Click here
                </a>
              </p>
              <p>
                Discover how you can personalize your learning for
                <a className="text-danger ms-2" href="/program/career">
                  Career Readiness
                </a>
              </p>
              <p>
                <a
                  href={assets.IFHEonlineMBABrochure}
                  download
                  className="btn btn-outline-danger"
                >
                  Click here to Download the Brochure <FaRegFilePdf />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
