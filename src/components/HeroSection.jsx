import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import assets from "../assets/assets"; // Adjust path as needed
import { motion, useMotionValue, useTransform } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "../components/Homepage/default.css";

const HeroSection = () => {
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
    <div className="mainContent">
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
              className="text-white fw-bold mb-4 mt-5 mt-xl-0 mt-lg-0 mt-md-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              Thinking of an{" "}
              <span className="text-warning fs-1">Online MBA?</span> <br />
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
              2 year fully online program <br />
              Master of Business Administration
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
                to="/apply-now"
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
            <motion.div className="d-none d-md-block" style={{ x: x2, y: y2 }}>
              <LazyLoadImage
                className="img-fluid shape3"
                src={assets.shape3}
                alt="shape1"
                fetchpriority="high"
                decoding="async"
              />
            </motion.div>
            <LazyLoadImage
              className="img-fluid shape1 d-none d-md-block"
              src={assets.shape1}
              alt="shape1"
              fetchpriority="high"
              decoding="async"
            />
            <LazyLoadImage
              className="img-fluid"
              src={assets.businessMaLaptop}
              alt="businessMan"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
