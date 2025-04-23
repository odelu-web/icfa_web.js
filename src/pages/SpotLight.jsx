import React from "react";
import assets from "../assets/assets";
import Seo from "../components/Seo";
import "../components/Homepage/SpotLight.css";
import { FaArrowRight } from "react-icons/fa6";

const SpotLight = () => {
  return (
    <>
      <Seo
        title="IFHE | Online MBA | Spotlight"
        description="Content is presented as nuggets in multiple formats which takes 2 to 15 minutes of time. Multi-format content is dominated by a carefully designed Concept in Context"
        keywords="IFHE, Online Learning Experience, Micro-learning, P2P exercises, Online MBA, Gamification, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org//happenings/spotlight"
      />

      <div className="container  rounded-4 overflow-hidden">
        <div className="backgroundimg  ">
          <div className="overlayBg"></div>
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xl-12 mt-5">
                <h1>ICFAI Online in the Spotlight</h1>
                <p className="text mt-3">
                  Discover how ICFAI Online programs are shaping management
                  education. Featured across leading platforms, these articles
                  highlight <br /> the impact of online business education in
                  today's dynamic world, along with key industry trends, and
                  innovative learning approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <li>Spotlight</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
              <div className="card mb-3 border-0 shadow p-2  h-100">
                <div className="row g-0">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <img
                      src={assets.spotlight1}
                      className="img-fluid img-thumbnail"
                      alt="ABP Telugu article"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="card-body">
                      <h5 className="card-title">Published at: ABP Telugu</h5>
                      <p className="card-text">
                        విద్యలో ఆధునికత: ICFAI ఆన్‌లైన్ మేనేజ్‌మెంట్
                        ప్రోగ్రామ్‌లు ప్రాముఖ్యత
                      </p>
                      {/* <a
                        class="theme-btn d-inline-flex align-items-center"
                        href="/program/online-mba"
                        data-discover="true"
                      >
                        More About the Program<span class="arrow1 ms-2"></span>
                      </a> */}
                      <a
                        href="https://www.mid-day.com/buzz/article/a-new-era-in-education-icfai-online-management-programs-take-the-lead-4676"
                        className="theme-btn d-inline-flex align-items-center"
                        target="_blank"
                      >
                        View More
                        <span className="arrow1 ms-2">
                          <FaArrowRight />
                        </span>
                        <span className="arrow2 ms-1">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
              <div className="card mb-3 border-0 shadow p-2 h-100">
                <div className="row g-0">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <img
                      src={assets.spotlight2}
                      className="img-fluid img-thumbnail"
                      alt="Mid-Day"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="card-body">
                      <h5 className="card-title">Published at: Mid-Day</h5>
                      <p className="card-text">
                        A New Era in Education: ICFAI Online Management Programs
                        Take the Lead
                      </p>
                      <a
                        href="https://www.mid-day.com/buzz/article/a-new-era-in-education-icfai-online-management-programs-take-the-lead-4676"
                        className="theme-btn"
                        target="_blank"
                      >
                        View More
                        <span className="arrow1">
                          <FaArrowRight />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
              <div className="card mb-3 border-0 shadow p-2  h-100">
                <div className="row g-0">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <img
                      src={assets.spotlight3}
                      className="img-fluid img-thumbnail"
                      alt="Manorama Online"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="card-body">
                      <h5 className="card-title">
                        Published at: Manorama Online
                      </h5>
                      <p className="card-text">
                        മാനേജ്‌മെന്റ്‌ കോഴ്‌സുകള്‍ പഠിക്കൂ ഓണ്‍ലൈനായി;
                        ജോലിക്കൊപ്പം ‌…
                      </p>
                      <a
                        href="https://www.manoramaonline.com/education/education-news/2025/01/07/online-mba-bba-icfai-university.html"
                        className="theme-btn"
                        target="_blank"
                      >
                        View More
                        <span className="arrow1">
                          <FaArrowRight />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
              <div className="card mb-3 border-0 shadow p-2 h-100">
                <div className="row g-0">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <img
                      src={assets.spotlight4}
                      className="img-fluid img-thumbnail"
                      alt="eSakal"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="card-body">
                      <h5 className="card-title">Published at: eSakal</h5>
                      <p className="card-text">
                        ICFAI ऑनलाइन मॅनेजमेंट डिग्री नव्या तरूणांसाठी ठरतेय गेम
                        चेंजर, जाणून घ्या ICFAI बद्दल सर्वकाही
                      </p>
                      <a
                        href="https://www.esakal.com/education-jobs/icfai-online-management-degree-becomes-a-game-changer-for-young-professionals"
                        className="theme-btn"
                        target="_blank"
                      >
                        View More
                        <span className="arrow1">
                          <FaArrowRight />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-3">
              <div className="card mb-3 border-0 shadow p-2  h-100">
                <div className="row g-0">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <img
                      src={assets.spotlight5}
                      className="img-fluid img-thumbnail"
                      alt="Manorama Online"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="card-body">
                      <h5 className="card-title">
                        Published at: Manorama Online
                      </h5>
                      <p className="card-text">
                        മാനേജ്മെന്റ് മേഖലയിൽ തിളങ്ങാം; ജോലി രാജിവയ്ക്കാതെ എംബിഎ
                        നേടാം …{" "}
                      </p>
                      <a
                        href="https://www.manoramaonline.com/education/education-news/2024/07/04/icfai-online-mba-flexibility-and-quality.html"
                        className="theme-btn"
                        target="_blank"
                      >
                        View More
                        <span className="arrow1">
                          <FaArrowRight />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg13 py-3">
        <div className="container">
          <h2>Articles</h2>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-3">
              <div className="card h-100 border-0 shadow h-100">
                <div className="card-body p-2">
                  <img
                    src={assets.news}
                    className="card-img-top mb-3"
                    alt="Education Times"
                  />
                  <div className="ps-2">
                    <h5 className="card-title">
                      Education Times - Times of India
                    </h5>
                    <p className="card-text">
                      Log in for Online MBA There are several takers for online
                      MBA as it offers affordability, diversity and is a boon
                      for many
                    </p>
                    <a
                      href="https://icfaibytes.in/wp-content/uploads/2025/03/ET-20Oct21-Online-MBA-Half-page-ad-and-article.pdf"
                      className="theme-btn"
                      target="_blank"
                    >
                      View More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-3">
              <div className="card h-100 border-0 shadow h-100">
                <div className="card-body p-2">
                  <img
                    src={assets.news1}
                    className="card-img-top mb-3"
                    alt="Edugraph"
                  />
                  <div className="ps-2">
                    <h5 className="card-title">Edugraph - Telegraph</h5>
                    <p className="card-text">
                      ICFAI's Online MBA program brings together ICFAI's legacy
                      of over 30 years of academic excellence in management
                      education, two decades of vast experience in Open and
                      Distance Learning and eLearning for Management programs.
                    </p>
                    <a
                      href="https://icfaibytes.in/wp-content/uploads/2025/03/Online-MBA-Edugraph-The-Telegraph.pdf"
                      className="theme-btn"
                      target="_blank"
                    >
                      View More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-3">
              <div className="card h-100 border-0 shadow h-100">
                <div className="card-body p-2">
                  <img
                    src={assets.news2}
                    className="card-img-top mb-3"
                    alt="Times of India"
                  />
                  <div className="ps-2">
                    <h5 className="card-title">Times of India</h5>
                    <p className="card-text">
                      MBA in the virtual era ICFAI Online MBA - Flexible,
                      creative and impactful learning.
                    </p>
                    <a
                      href="https://icfaibytes.in/wp-content/uploads/2025/03/TOI-Online-MBA-26.1.22.pdf"
                      className="theme-btn"
                      target="_blank"
                    >
                      View More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-3">
              <div className="card h-100 border-0 shadow h-100">
                <div className="card-body p-2">
                  <img
                    src={assets.news3}
                    className="card-img-top mb-3"
                    alt="Infocus"
                  />
                  <div className="ps-2">
                    <h5 className="card-title">Infocus</h5>
                    <p className="card-text">
                      ICFAI's two-year fully Online MBA program is unlike any
                      other currently available in the domain of management
                      education.
                    </p>
                    <a
                      href="https://icfaibytes.in/wp-content/uploads/2025/03/INFOCUS-10-Apr-22-Online-MBA.pdf"
                      className="theme-btn"
                      target="_blank"
                    >
                      View More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-3">
              <div className="card h-100 border-0 shadow h-100">
                <div className="card-body p-2">
                  <img
                    src={assets.news4}
                    className="card-img-top mb-3"
                    alt="Seasonal Magazine"
                  />
                  <div className="ps-2">
                    <h5 className="card-title">Seasonal Magazine</h5>
                    <p className="card-text">
                      ICFAI Online MBA enhances learning through{" "}
                      <strong>
                        micro-learning, gamification, peer-to-peer (P2P)
                        exercises
                      </strong>
                      , and Concept in Context.
                    </p>

                    <a
                      href="https://icfaibytes.in/wp-content/uploads/2025/03/Seasonal-Magazine-Online-MBA-Article.pdf"
                      className="theme-btn"
                      target="_blank"
                    >
                      View More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 mb-3">
              <div className="card h-100 border-0 shadow h-100">
                <div className="card-body p-2">
                  <img
                    src={assets.news5}
                    className="card-img-top mb-3"
                    alt="Business Studies"
                  />
                  <div className="ps-2">
                    <h5 className="card-title">Business Studies</h5>
                    <p className="card-text">
                      ICFAI's Online MBA Program enables a learner's journey
                      towards thinking differently and progressively.
                    </p>
                    <a
                      href="https://icfaibytes.in/wp-content/uploads/2025/03/ICFAI-Online-T2-J2-Final.pdf"
                      className="theme-btn"
                      target="_blank"
                    >
                      View More
                      <span className="arrow1">
                        <FaArrowRight />
                      </span>
                      <span className="arrow2">
                        <FaArrowRight />
                      </span>
                    </a>
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

export default SpotLight;
