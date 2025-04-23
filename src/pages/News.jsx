import React from "react";
import Seo from "../components/Seo";
import { BsMegaphone } from "react-icons/bs";
import assets from "../assets/assets";

import "../components/Homepage/News.css";

const News = () => {
  return (
    <>
      <Seo
        title="News | ICFAI WiseViews Webinar"
        description="ICFAI WiseViews Leadership Conversation gives very useful insights that can help enhance your career. Register for ICFAI WiseViews Webinar for industry insights"
        keywords="icfai wiseviews, icfai webinar, icfai wiseviews webinar, ifhe webinar, icfai wiseviews leadership conversation, wiseviews webinar"
        canonical="https://online.ifheindia.org/ "
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
                  <li>Happenings</li>
                  <li>Media</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <ul className="eventsList eventsListbg">
                <li className="item">
                  <span className="icon">
                    <BsMegaphone />
                  </span>
                  <h4 className="sub-title">
                    " UGC Public Notice: Precautions to be taken by the students
                    before enrolling in ODL and/or Online programs "
                  </h4>
                  <p className="text"></p>
                  <div className="d-flex justify-content-between">
                    <small>
                      <em>Date: March 20, 2024</em>
                    </small>
                    <a
                      className="link"
                      href={assets.UGCPublicNotice2024}
                      target="_blank"
                    >
                      More info
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
