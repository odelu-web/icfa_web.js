import React from "react";
import { Link } from "react-router-dom";
import { BsAward } from "react-icons/bs";
import assets from "../assets/assets";

import { GoArrowRight } from "react-icons/go";
import Seo from "../components/Seo";
import { Fancybox } from "@fancyapps/ui";

export default function Theicfaigroup() {
  // Array of image keys from the assets object
  const imageKeys = Array.from({ length: 10 }, (_, i) => `NJY${i + 1}`);

  const awardsData = [
    { key: "awardsicon1", text: "Accredited with A++ grade, by NAAC" },
    {
      key: "awardsicon2",
      text: "#39 on Overall basis, All Over India for its MBA Program, NIRF Ranking 2024",
    },
    {
      key: "awardsicon3",
      text: "Accredited for its Regular MBA Program of IBS Hyderabad by AACSB",
    },
    {
      key: "awardsicon4",
      text: "Accredited by SAQS (South Asian Quality Standards), AMDISA",
    },
    { key: "awardsicon5", text: "CDOE is an Institutional Member of AMDISA" },
    {
      key: "awardsicon6",
      text: "IFHE is a member of the Association of Indian Universities (AIU)",
    },
    {
      key: "awardsicon7",
      text: "Member, The Association of Commonwealth Universities (ACU)",
    },
    { key: "awardsicon8", text: "#2 Private Universities in Telangana State" },
    {
      key: "awardsicon9",
      text: "#9 among Private Universities, All India",
      extra: "Education World Higher Education Ranking 2020",
    },
    {
      key: "awardsicon10",
      text: "#2 among Top Universities in Telangana State",
      extra: "Careers 360 University Ranking Survey 2018",
    },
    {
      key: "awardsicon11",
      text: "India’s Most Admirable Education Brand 2020",
      extra: "by The Brand Story",
    },
    {
      key: "awardsicon12",
      text: "The Extraordinaire Brand for Higher Education 2020",
    },
    {
      key: "awardsicon13",
      text: "‘CSR Top University in Innovation’ 2020",
      extra: "CSR Top University in Innovation’ 2020",
    },
    {
      key: "awardsicon14",
      text: "Leading Universities in India",
      extra: "by Business World in the Top Education Brands Awards",
    },
    {
      key: "awardsicon15",
      text: "ET Best Education Brand 2020",
      extra: "by The Economic Times",
    },
    {
      key: "awardsicon16",
      text: "Performance Excellence",
      extra:
        "by The Indian Institution of Industrial Engineering (IIIE), Mumbai",
    },
  ];
  Fancybox.bind('[data-fancybox="gallery"]', {});
  return (
    <>
      <Seo
        title="IFHE Online MBA now has NAAC A++ accreditation | ICFAI Online MBA"
        description="A legacy of 40 years of Academic Excellence in Management Education makes ICFAI Online MBA as the Best Online MBA Course in India."
        keywords="IFHE Hyderabad CDOE, icfai mba, ifhe online mba, Flexible Learning MBA Program, FLP MBA Course, About ICFAI University, IBS Online MBA Program, Distance Education MBA, MBA  Rankings, Distance Online Education, Flexible Online MBA Course, NAAC Accredited MBA from Business School, Executive MBA Programs in Hyderabad, Executive MBA programs in India, MBA Program for Working Executives and Professionals, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, NAAC, AACSB, SAQS, CSR Top University in Innovation, #25 NIRF ranking 2020, #2 among Top Universities in Telangana, #9 among Private Universities in India."
        canonical="https://online.ifheindia.org/about-us"
      />

      {/* Breadcrumb Section */}
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
                  <li>The ICFAI Group</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICFAI Group Section */}
      <section>
        <div className="container">
          <div className="card border-0">
            <div className="card-body bg-body-tertiary shadow-sm rounded-4 p-4">
              <div className="row">
                {/* Founder Card */}
                <div className="col-xl-3 col-lg-3 col-md-4">
                  <div className="sticky-top1">
                    <div className="card border-0 shadow rounded-4">
                      <img
                        className="img-fluid rounded-top"
                        src={assets.icfaiFounder}
                        alt="N. J. Yasaswy"
                        loading="lazy"
                      />
                      <div className="card-body">
                        <h4 className="card-title mb-0">N. J. Yasaswy</h4>
                        <p className="mb-0 small">(1950 - 2011)</p>
                        <p className="fw-bold mb-0">Founder, ICFAI Group</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ICFAI Info */}
                <div className="col-xl-9 col-lg-9 col-md-8">
                  <h3>The ICFAI Group</h3>
                  <p>
                    ICFAI was established in 1984 and has made a significant
                    mark in the educational field with a pan-Indian network and
                    presence.
                  </p>
                  <p>
                    It has established 11 Universities and 9 B-Schools across
                    India including The ICFAI Foundation for Higher Education,
                    which is a deemed-to-be-University.
                  </p>
                  <p>
                    The alumni of the University are working in renowned
                    companies worldwide.
                  </p>
                  <p>
                    Sri N J Yasaswy, the founder of the ICFAI Group, was a
                    charismatic visionary, institutional builder, and a pioneer
                    in promoting higher education in the private sector.
                  </p>

                  {/* Image Gallery */}
                  <div className="row mt-2">
                    {imageKeys.map((key, index) => (
                      <div
                        key={index}
                        className="col-xl-2 col-lg-2 col-md-4 col-6 mb-2"
                      >
                        <a
                          href="#img"
                          data-src={assets[key]}
                          data-fancybox="gallery"
                        >
                          <img
                            className="img-fluid rounded"
                            src={assets[key]}
                            alt="N. J. Yasaswy"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="col-xl-12 text-end">
                    <a
                      href="#"
                      className="network-btn d-inline-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <img
                        className="img-fluid"
                        src={assets.indiaMap}
                        width="31"
                        height="31"
                        title="ICFAI Network"
                        alt="india-map"
                      />
                    </a>
                    <Link
                      to="/about-us/the-icfai-group/about-icfai"
                      className="theme-btn ms-2 mt-2"
                    >
                      View More
                      <span className="arrow1">
                        <GoArrowRight />
                      </span>
                      <span className="arrow2">
                        <GoArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICFAI Foundation Section */}
      <section id="RDID">
        <div className="container">
          <div className="card border-0 bg3 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                  <h3>The ICFAI Foundation for Higher Education</h3>
                  <h6>
                    (Deemed-to-be-University under Section 3 of the UGC Act,
                    1956)
                  </h6>
                  <p>
                    The ICFAI Foundation for Higher Education, Hyderabad, was
                    declared a Deemed-to-be-University under Section 3 of the
                    UGC Act, 1956.
                  </p>
                  <p>
                    The University has received the NAAC Accreditation "A++"
                    Grade with an impressive Institutional CGPA of 3.59 out of
                    4.
                  </p>
                  <p>
                    It has the coveted AACSB International Accreditation for the
                    MBA Program and is ranked 27 in the Management Category of
                    India Rankings-2021 (NIRF 2021).
                  </p>
                  <p>
                    The University believes in creating and disseminating
                    knowledge and skills in core and frontier areas through
                    innovative educational programs, research, consulting, and
                    publishing.
                  </p>
                  <p>
                    As a step forward, the University has established a Center
                    for Distance and Online Education (CDOE) to offer programs
                    in online and distance learning modes (ODL).
                  </p>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                  <div className="sticky-top1">
                    <img
                      src={assets.ifhecampusbuilding}
                      className="img-fluid rounded-4"
                      alt="ifhe-campus"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="AccredRecog" id="ARA">
        <div className="container">
          <div className="px-3">
            <div className="row">
              {/* Title Card */}
              <div className="col-lg-3 mx-auto mb-4">
                <div className="card border-0 text-center" data-aos-delay="100">
                  <div className="card-body">
                    <img
                      className="img-fluid"
                      src={assets.awardsicon}
                      alt="Awards & Recognitions"
                    />
                    <h4 className="card-title mb-0">
                      Awards, Recognitions & Accreditations
                    </h4>
                  </div>
                </div>
              </div>

              {/* Awards List */}
              <div className="col-xl-12">
                <div className="WrapBox4">
                  {awardsData.map((award, index) => (
                    <div key={index} className="card" data-aos-delay="100">
                      <img
                        src={assets[award.key]}
                        className="card-img-top"
                        alt={award.text}
                        loading="lazy"
                      />
                      <div className="card-body">
                        <p className="card-text">{award.text}</p>
                        {award.extra && (
                          <p className="card-text">
                            <em>{award.extra}</em>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="CDOE">
        <div className="container">
          <div className="card border-0 bg4 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                  <div className="sticky-top1">
                    <img
                      src={assets.ifhestudents}
                      className="img-fluid rounded-4"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                  <h3>The Center for Distance and Online Education (CDOE)</h3>
                  <p className="mb-1">
                    All programs offered under the online and distance learning
                    modes (ODL) are administered through the Center for Distance
                    and Online Education (CDOE), IFHE Hyderabad.
                  </p>
                  <p className="mb-1">
                    As the real world gets disrupted due to technology, health,
                    economic and social upheavals, businesses face a volatile,
                    uncertain, complex and ambiguous environment.
                  </p>
                  <p className="mb-1">
                    The role of management professionals, with relevant skills
                    and knowledge, to meet these dynamic challenges becomes
                    critical.
                  </p>
                  <p className="mb-1">
                    To enable the aspirants to enter today's competitive
                    business world and sustain their advancement, the CDOE has
                    launched ICFAI Online MBA Program, combining the academic
                    rigour and interdisciplinary perspective.
                  </p>
                  <p className="mb-1">
                    Students are groomed for leadership roles in management
                    profession by excellent faculty and pedagogy supported by
                    vast content resources.
                  </p>
                  <p className="mb-3">
                    ICFAI Online MBA benefits{" "}
                    <a
                      className="text-danger"
                      href="/online-mba-for-freshers"
                      target="_blank"
                    >
                      graduates
                    </a>{" "}
                    who look to pursue career in management,{" "}
                    <a
                      className="text-danger"
                      href="/online-mba-for-professionals"
                      target="_blank"
                    >
                      working executives
                    </a>{" "}
                    who aspire to progress and those individuals who
                    <a
                      href="/online-mba-for-entrepreneurs"
                      className="text-danger ms-1"
                      target="_blank"
                    >
                      pursue entrepreneurial ambitions.
                    </a>
                  </p>
                  <div className="card border-0 bg1">
                    <div className="card-body">
                      <h4>
                        <BsAward /> Ranking
                      </h4>
                      <p>
                        The Online MBA Program has been ranked #1 among India's
                        Top 25 Online MBA Institutions 2022 - by Careers 360.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for ICFAI Group Map */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ICFAI Network
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={assets.icfainetwork}
                alt="icfai-network"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
