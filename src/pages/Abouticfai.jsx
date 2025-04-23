import React, { useState } from "react";
import Seo from "../components/Seo";
import assets from "../assets/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "../components/Homepage/Abouticfai.css";

import "swiper/css/pagination";

const Abouticfai = () => {
  const universities = [
    {
      name: "IFHE Hyderabad",
      desc: "The ICFAI Foundation for Higher Education (IFHE) which is a Deemed University established under Section 3 of the UGC Act, 1956.",
      img: assets.branchHyd,
      link: "https://www.ifheindia.org/",
    },
    {
      name: "The ICFAI University, Tripura",
      desc: "The ICFAI University, Tripura, established in 2004 through an Act of State Legislature (Tripura Act 8 of 2004).",
      img: assets.branchTripura,
      link: "https://www.iutripura.edu.in/",
    },
    {
      name: "The ICFAI University, Sikkim",
      desc: "The ICFAI University, Sikkim has been established under Section 4 (2) of the Institute of Chartered Financial Analysts of India University, Sikkim Act 2004.",
      img: assets.branchSikkim,
      link: "https://www.iusikkim.edu.in/",
    },
    {
      name: "The ICFAI University, Jharkhand",
      desc: "The ICFAI University, Jharkhand, established in 2008 under the provisions of the ICFAI University Act, 2006.",
      img: assets.branchJharkhand,
      link: "https://www.iujharkhand.edu.in/",
    },
    {
      name: "The ICFAI University, Dehradun",
      desc: "The ICFAI University, Dehradun, established in 2003 under the ICFAI University Act 2003 (Act No.16 of 2003).",
      img: assets.branchDehradun,
      link: "https://www.iudehradun.edu.in/",
    },
    {
      name: "The ICFAI University, Meghalaya",
      desc: "The ICFAI University, Meghalaya, established in 2006 through an Act of State Legislature (Meghalaya Act No. 12 of 2005).",
      img: assets.branchMeghalaya,
      link: "https://www.iumeghalaya.edu.in/",
    },
    {
      name: "The ICFAI University, Nagaland",
      desc: "The ICFAI University, Nagaland, established in 2006 under the ICFAI University, Nagaland Act 2006.",
      img: assets.branchNagaland,
      link: "https://www.iunagaland.edu.in/",
    },
    {
      name: "The ICFAI University, Raipur",
      desc: "The ICFAI University, Raipur, established under Section 9(2) of the Chhattisgarh Private Universities Act 2005.",
      img: assets.branchRaipur,
      link: "https://www.iuraipur.edu.in/",
    },
    {
      name: "The ICFAI University, Jaipur",
      desc: "The ICFAI University, Jaipur, established in 2011 under the ICFAI University, Jaipur Act 2011.",
      img: assets.branchJaipur,
      link: "https://www.iujaipur.edu.in/",
    },
    {
      name: "The ICFAI University, Himachal Pradesh",
      desc: "The ICFAI University, Himachal Pradesh, established in 2011 under the ICFAI University Act 2011.",
      img: assets.branchHimachal,
      link: "https://www.iuhimachal.edu.in/",
    },
    {
      name: "The ICFAI University, Mizoram",
      desc: "The ICFAI University, Mizoram, established in 2006 under the ICFAI University, Mizoram Act 2006.",
      img: assets.branchMizoram,
      link: "https://www.iumizoram.edu.in/",
    },
  ];
  const schools = [
    {
      title: "IBS Hyderabad",
      img: assets.ibshyderabad,
      alt: "IBS Hyderabad",
      url: "https://ibsindia.org/ibs-hyderabad/",
      desc: "a constituent of IFHE, Hyderabad, a Deemed University",
    },
    {
      title: "IBS Mumbai",
      img: assets.ibsMumbai,
      alt: "IBS Mumbai",
      url: "https://ibsindia.org/ibs-mumbai/",
    },
    {
      title: "IBS Bengaluru",
      img: assets.ibsBengulore,
      alt: "IBS Bengaluru",
      url: "https://ibsindia.org/ibs-Bengaluru/",
    },
    {
      title: "IBS Gurgaon",
      img: assets.ibsGurgaon,
      alt: "IBS Gurgaon",
      url: "https://ibsindia.org/ibs-gurgaon/",
    },
    {
      title: "IBS Pune",
      img: assets.ibsPune,
      alt: "IBS Pune",
      url: "https://ibsindia.org/ibs-pune/",
    },
    {
      title: "IBS Kolkata",
      img: assets.ibsKolkata,
      alt: "IBS Kolkata",
      url: "https://ibsindia.org/ibs-kolkata/",
    },
    {
      title: "IBS Ahmedabad",
      img: assets.ibsAhamedabad,
      alt: "IBS Ahmedabad",
      url: "https://ibsindia.org/ibs-ahmedabad/",
    },
    {
      title: "IBS Jaipur",
      img: assets.ibsJaipur,
      alt: "IBS Jaipur",
      url: "https://ibsindia.org/ibs-jaipur/",
      desc: "a constituent of the ICFAI University, Jaipur",
    },
    {
      title: "IBS Dehradun",
      img: assets.ibsDehradun,
      alt: "IBS Dehradun",
      url: "https://ibsindia.org/dehradun/",
      desc: "a constituent of the ICFAI University, Dehradun",
    },
  ];
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  return (
    <>
      <Seo
        title="IFHE | Online MBA | Apply Online | CDOE | Online MBA About ICFAI University"
        description="ICFAI launched a secure and authenticated internet payment gateway in 2002 to facilitate online payments like Credit/Debit Card/Internet banking option."
        keywords="IFHE, Hyderabad, ICFAI University, CDOE, Apply Now, ICFAI, Apply Online, Online Registration, Online Application, Online MBA, Online Payment Options, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Center For Distance and Online Education in Hyderabad, Center For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/about-us/the-icfai-group/about-icfai"
      />

      <section className="bgAccreditation">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                src={assets.theIcfaiGroupBanner}
                className="img-fluid w-100 rounded-4"
                alt="the icfai university group"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

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
                  <li>About ICFAI</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="card border-0 bg9 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-12 mb-3">
                  <div className="card p-2 shadow-sm border-0">
                    <div className="img-panel">
                      <img
                        src={assets.NJYasaswy}
                        alt="NJYasaswy"
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <h5 className="mb-1">N.J.Yasaswy</h5>
                      <p className="mb-0">(1950-2011)</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-8 col-12 mb-3">
                  <h3> ICFAI Founder's Profile</h3>
                  <p>
                    Mr.N.J.Yasaswy (1950-2011), Founder of the ICFAI Group of
                    educational institutions and a pioneer in promoting higher
                    education in the private sector had a brilliant academic
                    career: B.Com (Andhra University 1969 - First Rank), CA
                    Inter (May 1971 - First Rank), CA Final (May 1973 - First
                    Rank), ICWA Inter (July 1970 - First Rank) and ICWA Final
                    (July 1972 - First Rank). He was the recipient of the Basu
                    Foundation Award for the Best Student of the Year from both
                    - The Institute of Cost and Works Accountants of India (in
                    1972) and The Institute of Chartered Accountants of India
                    (in 1973).
                  </p>
                  <p>
                    During 1974-1980, Mr. Yasaswy was associated with the
                    Administrative Staff College of India as a Faculty Member.
                    In 1981, he started his consultancy firm, Yasaswy Management
                    Associates Private Limited, Hyderabad. Mr. Yasaswy was
                    appointed by the Government of Andhra Pradesh as Chairman,
                    Andhra Pradesh State Trading Corporation (1985-88), and
                    Vice-Chairman, Public Enterprises Management Board
                    (1986-88). He was a visiting faculty member at the Indian
                    Institute of Management-Ahmedabad (1986-88) and was
                    nominated as a Member on the SEBI Committee on Accounting
                    Standards. He was a member of the Board of Directors of the
                    Association of Certified International Investment Analysts
                    (ACIIA), Switzerland. He authored several books on finance
                    and investments.
                  </p>
                  {showMore && (
                    <div>
                      <img
                        src={assets.NJYasaswyLife}
                        alt="NJYasaswy-life"
                        className="img-fluid"
                      />
                      <p>
                        Mr. Yasaswy set up the ICFAI as a single institute in
                        1985 without governmental sops or institutional funding,
                        in an era where government support was the norm. He
                        chose to spend all his energy on the fledgling
                        institution which over the years grew to become a
                        monument to what ambition can deliver. He was
                        instrumental in building several business schools and
                        universities in the developing states of India,
                        particularly in the North-East region. He stood for
                        professional management, excellence in the quality of
                        education offered in the ICFAI institutions, and
                        absolute discipline.
                      </p>
                      <p>
                        He was charismatic, a great teacher, an institution
                        builder, a visionary and a genius who was years ahead of
                        his time. His vision will continue to guide ICFAI
                        forever.
                      </p>
                    </div>
                  )}

                  <p>
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="default-btn btn btn-danger readmore"
                    >
                      {showMore ? "Read Less" : "Read More"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card border-0 bg8 shadow-sm rounded-4">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                  <div className="sticky-top1">
                    <img
                      src={assets.ibshyderabad}
                      className="img-fluid rounded-4"
                      alt="ibs-hyderabad"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                  <h3>Pioneering Professional Education for over 35 years</h3>
                  <p>
                    ICFAI was established in 1984 as a not-for-profit society
                    with the broad objective of empowering citizens through
                    world class quality education.
                  </p>
                  <p>
                    ICFAI Group has made a significant mark in the Indian
                    educational field with a pan-Indian network and presence.
                    Innovation has been the mainstay of ICFAI Group with
                    innovation prevalent in its programs and even its culture.
                  </p>
                  <p>
                    The ICFAI Group's culture of teaching and learning supports
                    and fosters intellectual and personality development among
                    its graduating students.
                  </p>
                  <p>
                    ICFAI Group system, strongly believes in developing an
                    ‘entrepreneurial mind-set' among its graduating students. It
                    strives to make the students - DOERS.
                  </p>
                  <p>
                    There are 2 Strategic Institutional Units, the ICFAI
                    Universities and the ICFAI Business Schools. ICFAI Group
                    focuses on learning rather than instruction. Flexible and
                    tech enabled learning also plays an important role in
                    ICFAI's teaching methodology.
                  </p>
                  <p>
                    ICFAI Alumni contribute significantly to the growth story of
                    India. They are currently working in India and Abroad in
                    several sectors at various capacities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg13 py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-12 col-12">
              {/* <h4 className="text-danger">OUR</h4> */}
              <h3>Vision & Mission</h3>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-2">
                  <div className="card border-0 shadow-sm  p-3 h-100">
                    <div className="mx-auto pb-2">
                      <div className="vis-mis-icon shadow-sm">
                        <img
                          src={assets.visionIcon}
                          className="img-fluid"
                          width="60"
                          height="60"
                          alt="vision-icon"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h4 className="text-center">Vision</h4>
                    <p className="text-start">
                      To be a top ranking private university of choice for
                      students, staff and corporates, recognized for excellence
                      in Higher Education and Research especially relevant to
                      social needs.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-2">
                  <div className="card border-0 shadow-sm  p-3 h-100">
                    <div className="mx-auto pb-2">
                      <div className="vis-mis-icon shadow-sm">
                        <img
                          src={assets.missionIcon}
                          className="img-fluid"
                          width="60"
                          height="60"
                          alt="mission_icon"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h4 className="text-center">Mission</h4>
                    <p className="text-start">
                      The mission of the University is to offer world class,
                      innovative, career-oriented professional post graduate and
                      undergraduate programs through inclusive technology.
                    </p>

                    {showMore2 && (
                      <p className="text-start">
                        aided pedagogies to equip students with the requisite
                        professional and life skills as well as social
                        sensitivity and high sense of ethics. The University
                        will strive to create an intellectually stimulating
                        environment for Research, particularly in areas bearing
                        on the socio- economic and cultural development of the
                        state and the nation.
                      </p>
                    )}
                    <p>
                      <button
                        onClick={() => setShowMore2(!showMore2)}
                        className="default-btn btn btn-danger btn-sm"
                      >
                        {showMore2 ? "Read Less" : "Read More"}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <div className="d-flex">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <h4>
                    <img
                      src={assets.building}
                      width="50"
                      height="50"
                      alt="icfai_universities"
                      className="img-fluid"
                      loading="lazy"
                    />{" "}
                    The ICFAI Universities
                  </h4>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <h4>
                    <img
                      src={assets.businessLaw}
                      width="50"
                      height="50"
                      alt="ICFAI Business Schools(IBS)"
                      className="img-fluid"
                      loading="lazy"
                    />{" "}
                    ICFAI Business Schools(IBS)
                  </h4>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div className="tab-pane fade active show" id="features-tab-1">
              <p className="pb-3">
                ICFAI has established 11 Universities across India. The ICFAI
                Universities are located at Jaipur, Hyderabad [The ICFAI
                Foundation for Higher Education (IFHE), which is a Deemed
                University], Dehradun, Tripura, Dehradun, Jharkhand, Raipur,
                Himachal Pradesh (Baddi), Sikkim, Mizoram, Meghalaya and
                Nagaland.
              </p>

              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {universities.map((uni, index) => (
                  <SwiperSlide key={index}>
                    <div className="card h-100 shadow border-0">
                      <div className="card-body p-0">
                        <div className="p-3">
                          <img
                            src={uni.img}
                            alt={uni.name}
                            loading="lazy"
                            className="img-fluid"
                          />
                          <h3 className="fw-medium mt-2">{uni.name}</h3>
                          <p>{uni.desc}</p>
                          <a
                            href={uni.link}
                            className="theme-btn fs-12 fw-medium"
                          >
                            View More
                            <span className="arrow1">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                            <span className="arrow2">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="tab-pane fade" id="features-tab-2">
              <p className="pb-3">
                ICFAI started its chain of 9 B-Schools: ICFAI Business Schools
                (IBS), across India in 1995 to offer world class management
                program. Since its inception, IBS has been consistently ranked
                among the top ranked B-Schools of India providing excellent
                academic delivery and infrastructure to its students and
                transforming them into leaders for the future.
              </p>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
                className="carouselSchools"
              >
                {schools.map((school, index) => (
                  <SwiperSlide key={index}>
                    <div className="card h-100 shadow border-0">
                      <div className="card-body p-0">
                        <div className="p-3">
                          <img
                            src={school.img}
                            alt={school.alt}
                            loading="lazy"
                            className="img-fluid"
                          />
                          <h3 className="fw-medium mt-2">{school.title}</h3>
                          {school.desc && <p>{school.desc}</p>}
                          <a
                            href={school.url}
                            className="theme-btn fs-12 fw-medium"
                          >
                            View More
                            <span className="arrow1">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                            <span className="arrow2">
                              <i className="bi bi-arrow-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title mb-3">
            <h2>Awards & Rankings</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card border-bottom-0">
              <div className="pt-2">
                <img
                  src={assets.awards01}
                  className="img-fluid"
                  alt="awards"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>IFHE Hyderabad</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>
                          Among the first B-Schools to be graded by CRISIL with
                          a grade of A*** at the National &amp; State level
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">2025</cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>
                          IFHE has been accredited by NAAC with ‘A++' grade with
                          a CGPA score of 3.59/4.00.
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">NAAC </cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Tripura</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>
                          The ICFAI University, Tripura received a
                          multidisciplinary University 2023-24 ranking
                          certificate from Education World
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">
                          India Higher Education Rankings 2023-24 by Education
                          world
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>
                          5<sup>th</sup> Rank in the Category of Outstanding
                          Excellance
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">
                          GHRDC - Engineering Colleges Survey 2024
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Jharkhand</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>
                          ICFAI University, Jharkhand has been Ranked 4th among
                          Indian Universities for Quality Education in 2023{" "}
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">
                          Times Higher Education Ranking, Impact Ranking
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>
                          ICFAI University, Jharkhand has ranked 1st in
                          Jharkhand and 34th among private universities in India
                          in 2023
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">Education World</cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Jaipur</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>
                          Best Business Schools Ranking National Rank - 48 Zone
                          Rank - 22 State Rank - 3
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">IIRF 2024</cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>
                          9<sup>th</sup> in Outstanding B-Schools of Excellence
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">CSR GHRDC 2023</cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Sikkim</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>
                          Ranked 5<sup>th</sup>
                          HOTEL MGMT Best Emerging Colleges
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">
                          INDIA Today MDRA Rankings 2024
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>
                          Ranked 14<sup>th</sup> LAW Best Emerging Colleges
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">
                          INDIA Today MDRA Rankings 2024
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Meghalaya</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>Awarded as Best University in Meghalaya in CCLA</p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">
                          Education Leadership Awards 2017
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Mizoram</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>Prestigious Brands</p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">Economic Times 2021</cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>India's Iconic Brand</p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">The Brand Story 2021</cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Raipur</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>
                          Ranked 2<sup>nd</sup> Chhattisgarh State Top Private
                          Universities in India(Overall)
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">IIRF 2024</cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>
                          Ranked 8<sup>th</sup> Central Zone Top Private
                          Universities in India(Overall)
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">IIRF 2024</cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 award-card">
              <div className="p-2">
                <h5>ICFAI University, Dehradun</h5>
                <ul>
                  <li>
                    <figure className="mb-2">
                      <blockquote className="blockquote">
                        <p>
                          Ranked{" "}
                          <span className="rank">
                            10<sup>th</sup>
                          </span>{" "}
                          in the category of "Top 50 Law Colleges (Private)
                          across India" and 2nd in the category of "Top 50 Law
                          Colleges (Private) in Uttarakhand State"
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">IIRF 2024</cite>
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure className="mb-0">
                      <blockquote className="blockquote">
                        <p>
                          Ranked{" "}
                          <span className="rank">
                            32<sup>nd</sup>
                          </span>{" "}
                          in the category of Top 50 Business Schools Under
                          University Program" across India and ranked{" "}
                          <span className="rank">
                            10<sup>th</sup>
                          </span>{" "}
                          in the category of top 50 Business Schools{" "}
                        </p>
                      </blockquote>
                      <figcaption className="blockquote-footer mb-0">
                        <cite title="Source Title">
                          Under University Program in the North Region
                        </cite>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="  features section">
        <div className="container">
          <h3>Research</h3>
          <div className="card shadow border-0  p-3">
            <div className="d-flex">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-3"
                  >
                    <h4>
                      <img
                        src={assets.iupLogo}
                        width="50"
                        height="50"
                        alt="IUP Publications"
                        loading="lazy"
                      />{" "}
                      IUP Publications
                    </h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-4"
                  >
                    <h4>
                      <img
                        src={assets.icmrLogo}
                        width="50"
                        height="50"
                        alt="ICMR"
                        loading="lazy"
                      />{" "}
                      IBS Center for Management Research (ICMR)
                    </h4>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-5"
                  >
                    <h4>
                      <img
                        src={assets.ibsCdcLogo}
                        width="50"
                        height="50"
                        alt="IBSCDC"
                        loading="lazy"
                      />{" "}
                      IBS Case Development Center (IBSCDC)
                    </h4>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div className="tab-pane fade active show" id="features-tab-3">
                <div className="bg-container">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12 mb-3">
                      <img
                        src={assets.iup}
                        alt="IUP Publications"
                        className="img-fluid rounded-4"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12 mb-3">
                      <h3>IUP Publications</h3>
                      <p>
                        In a rapidly transforming economic and business
                        environment, fast-paced innovations and new ideas are
                        redefining the existing business variables giving birth
                        to new ways of doing business. These publications are
                        designed to cater to the needs of executives, managers,
                        professionals, practitioners, entrepreneurs, advocates,
                        academia, and students.
                      </p>
                      <a
                        href="https://www.iupindia.in/"
                        target="_blank"
                        className="theme-btn ms-2 mt-2"
                      >
                        View More
                        <span className="arrow1">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                        <span className="arrow2">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="features-tab-4">
                <div className="bg-container">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12 mb-3">
                      <img
                        src={assets.icmr}
                        alt="ICMR"
                        className="img-fluid rounded-4"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12 mb-3">
                      <h3>IBS Center for Management Research (ICMR)</h3>
                      <p>
                        IBS Centre for Management Research (ICMR) is a premier
                        case development center developing high-quality teaching
                        cases in Management. IBS Hyderabad, which has
                        consistently ranked among the leading B-Schools in
                        India, has adopted the case study method wholeheartedly
                        and is the only one in India to offer a unique 100%
                        case-based MBA.
                      </p>
                      <a
                        href="https://www.icmrindia.org/"
                        target="_blank"
                        className="theme-btn ms-2 mt-2"
                      >
                        View More
                        <span className="arrow1">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                        <span className="arrow2">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="features-tab-5">
                <div className="bg-container">
                  <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-4 col-md-5 col-12 mb-3">
                      <img
                        src={assets.ibscdc}
                        alt="IBSCDC"
                        className="img-fluid rounded-4"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-7 col-12 mb-3">
                      <h3>IBS Case Development Center (IBSCDC)</h3>
                      <p>
                        We have a repertoire of over 2000 case studies on varied
                        management concepts ranging from Strategy, Corporate
                        Governance, Corporate Social Responsibility, Economics,
                        Entrepreneurship, Finance, Accounting &amp; Control,
                        HRM, Marketing, Leadership, etc. Equipped with skilled
                        professionals, we at IBSCDC have over a period of time
                        evolved our own process of developing case studies.
                      </p>
                      <a
                        href="http://www.ibscdc.org/"
                        target="_blank"
                        className="theme-btn ms-2 mt-2"
                      >
                        View More
                        <span className="arrow1">
                          <i className="bi bi-arrow-right"></i>
                        </span>
                        <span className="arrow2">
                          <i className="bi bi-arrow-right"></i>
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
    </>
  );
};

export default Abouticfai;
