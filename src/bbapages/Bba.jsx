import Seo from "../components/Seo";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import assets from "../assets/assets"; // Adjust path as needed
import { motion, useMotionValue, useTransform } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "../components/Homepage/Bba.css";
import AccreditationCarousel from "../components/AccreditationCarousel";

const Bba = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const x1 = useTransform(mouseX, (v) => v * 0.03);
  const y1 = useTransform(mouseY, (v) => v * 0.03);

  const x2 = useTransform(mouseX, (v) => v * 0.06);
  const y2 = useTransform(mouseY, (v) => v * 0.06);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Seo
        title="UGC Entitled Online BBA Degree in India from ICFAI - 100% Online"
        description="Get your BBA degree online from ICFAI. Learn at your own pace, build your skills, and achieve your career goals. Flexible, Affordable and Career-Focused."
        keywords="ICFAI Online BBA Program, IFHE online BBA, UGC approved Top Online BBA in India, Online BBA program in india UGC approved, Online BBA in ICFAI Hyderabad, ICFAI Hyderabad Distance Learning BBA Program, online BBA course in india, UGC approved online programs UG PG, IBS Online Executive BBA course in India, Master of Business Administration, Distance Learning Education, ICFAI ODL, best online programs in india, best online BBA programs, best online BBA universities, top online BBA colleges in india, top 10 online BBA colleges in india, top 10 online BBA programs in india, cheapest online BBA in india, Online management course BBA for working executives, Distance Online BBA, Flexible BBA Program India, CDOE, Open and Distance Learning Programs, Top online BBA in India, Best Online Executive BBA Program in Hyderabad, Popular Online BBA programs in india, IBS Executive BBA programs in India, BBA marketing online, Distance Online program in MuBBAi, BBA in Financial Management, Services marketing, Strategic Marketing Management, BBA in International Marketing, Retail Management, BBA in Supply Chain Management, Big Data, Cloud & Analytics, BBA in HR, BBA in Strategic Human Resource Management"
        canonical="https://online.ifheindia.org/bba"
        ogUrl="https://online.ifheindia.org/bba/"
      />
      <div className="mainContent1">
        <LazyLoadImage
          className="img-fluid position-absolute top-0 start-0"
          src={assets.bannerShape}
          alt="Thinking of an Online MBA?
Here's Why You Should Reach Us"
          style={{ zIndex: -3 }}
        />
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-6 col-md-6 col-12 z-3">
              <motion.h1
                className="text-white fw-bold mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0}
              >
                Thinking of an{" "}
                <span className="text-warning fs-1">Online BBA?</span> <br />
                <span> Here's Why You Should Reach Us </span>
              </motion.h1>
              <motion.p
                className="text-white fs-3 border-start ps-4 border-2 text-danger"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={1}
              >
                3 year fully online program <br />
                Bachelor of Business Administration
              </motion.p>
              <motion.div
                className="d-flex flex-wrap align-items-center gap-3 mt-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={2}
              >
                <Link className="btn btn-outline-warning" to="#">
                  Download Prospectus <IoCloudDownloadOutline />
                </Link>

                <Link
                  className="theme-btn d-inline-flex align-items-center"
                  to="https://online.ifheindia.org/BBA_OnlineReg/"
                  target="_blank"
                >
                  Apply Now
                  <span className="arrow1 ms-2">
                    <FaArrowRight />
                  </span>
                  <span className="arrow2 ms-1">
                    <FaArrowRight />
                  </span>
                </Link>
              </motion.div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-12 position-relative text-center">
              <div className="circle"></div>
              <div className="circle1"></div>
              <motion.div
                className="d-none d-md-block"
                style={{ x: x2, y: y2 }}
              >
                <LazyLoadImage
                  className="img-fluid shape3"
                  src={assets.shape3}
                  alt="shape1"
                />
              </motion.div>
              <LazyLoadImage
                className="img-fluid shape1 d-none d-md-block"
                src={assets.shape1}
                alt="shape1"
              />
              <LazyLoadImage
                className="img-fluid"
                src={assets.businessMaLaptop}
                alt="businessMan"
              />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AccreditationCarousel />
      </motion.div>
    </>
  );
};

export default Bba;
