import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import HeroSection from "../components/HeroSection";
import AccreditationCarousel from "../components/AccreditationCarousel";
import UniqueMBASection from "../components/UniqueMBASection";
import ForWhomSection from "../components/ForWhomSection";
import ContactformKeyhighlights from "../components/ContactformKeyhighlights";
import TestimonialSection from "../components/TestimonialSection";
import AlumniLogosCarousel from "../components/AlumniLogosCarousel";
import useVisitorLogger from "../components/useVisitorLogger";
import { IoClose } from "react-icons/io5";
//import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import assets from "../assets/assets";
const Default = () => {
  useVisitorLogger(); // Track visitor on page load

  const [showBanner, setShowBanner] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        setScrollCount(0);
        setShowBanner(false); // Hide if user scrolls to top
      } else {
        setScrollCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount >= 1 && !isClosed) {
            setShowBanner(true);
          }
          return newCount;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  return (
    <>
      <Seo
        title="ICFAI Online MBA for Working Professionals | ICFAI Online MBA"
        description="ICFAI Online MBA is One of the Top Online MBA in India. Build Successful career in Management by enrolling to one of the best Universities in India."
        keywords="ICFAI Online MBA Program, IFHE online MBA, UGC approved Top Online MBA in India, Online MBA program in india UGC approved, Online MBA in ICFAI Hyderabad, ICFAI Hyderabad Distance Learning MBA Program, does online mba have working professionals, online mba course in india, UGC approved online programs UG PG, IBS Online Executive MBA course in India, Master of Business Administration, Distance Learning Education, ICFAI ODL, best online programs in india, best online mba programs, best online mba universities, top online mba colleges in india, top 10 online mba colleges in india, top 10 online mba programs in india, cheapest online mba in india, Online management course MBA for working executives, Distance Online MBA for working professionals, Flexible MBA Program India, CDOE, Open and Distance Learning Programs, Top online mba in India, Best Online Executive MBA Program in Hyderabad, Popular Online mba programs in india, IBS Executive MBA programs in India, MBA marketing online, Distance Online program in Mumbai, MBA in Financial Management, Services marketing, Strategic Marketing Management, MBA in International Marketing, Retail Management, MBA in Supply Chain Management, Big Data, Cloud & Analytics, MBA in HR, MBA in Strategic Human Resource Management"
        canonical="https://online.ifheindia.org/"
        ogUrl="https://online.ifheindia.org/"
      />
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AccreditationCarousel />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <UniqueMBASection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ForWhomSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactformKeyhighlights />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <TestimonialSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AlumniLogosCarousel />
      </motion.div>

      {/* Fixed Bottom Banner */}
      {showBanner && !isClosed && (
        <section className="scroll w-100 alertCss">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-11 col-xl-11 col-lg-110 col-12">
                <div className="d-flex align-items-center justify-content-center">
                  <p className="text-dark mb-0 fw-bold me-3">
                    {" "}
                    <motion.div
                      animate={{
                        rotate: [0, -15, 15, -10, 10, -5, 5, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      <img src={assets.announcement} />
                      {/* <HiOutlineBellAlert
                        style={{ fontSize: 24, color: "#b1040e" }}
                      /> */}
                    </motion.div>{" "}
                    “Admissions are Open for July 2025 Session”
                  </p>
                  <Link
                    className="theme-btn btn-sm d-inline-flex align-items-center"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#myModalformsub"
                    style={{
                      padding: 10,
                      fontSize: 14,
                    }}
                  >
                    Enquire Now
                    <span className="arrow1 ms-2">
                      <FaArrowRight />
                    </span>
                    <span className="arrow2 ms-1">
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-1 col-xl-1 col-lg-1 col-12 gap-2 d-none d-xl-block d-lg-block d-md-block">
                <button
                  onClick={() => setIsClosed(true)}
                  className="btn btn-sm btn-outline-secondary"
                  aria-label="Close Banner"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Default;
