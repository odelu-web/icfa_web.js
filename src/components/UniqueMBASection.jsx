import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import assets from "../assets/assets"; // Adjust as needed

import "../components/Homepage/default.css";

const UniqueMBASection = () => {
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

  const uniquePoints = [
    {
      icon: assets.masteryIcon,
      title: "Mastery",
      desc: "The ICFAI Online MBA goes beyond understanding of concepts. It makes you a problem solver at the workplace.",
      bgClass: "",
    },
    {
      icon: assets.innovationIcon,
      title: "Innovation",
      desc: "Innovation keeps ICFAI Online MBA program tuned to the ever-changing landscape and what more!! The learner is always future ready.",
      bgClass: "bg2",
    },
    {
      icon: assets.freedomIcon,
      title: "Freedom",
      desc: "Freedom in the Online MBA makes it highly #flexible - the liberty to pick your content type, study plan and assessment type.",
      bgClass: "bg3",
    },
    {
      icon: assets.belongIcon,
      title: "Belonging",
      desc: "Belonging emerges from the connect to the institution, peers or faculty. The level of connect is vastly superior to other fully online programs.",
      bgClass: "bg1",
    },
  ];

  return (
    <section
      className="overflow-hidden"
      style={{
        padding: "40px 0",
      }}
    >
      <div className="container position-relative">
        <div className="circleRibbon"></div>

        <motion.div className="d-none d-md-block" style={{ x: x1, y: y1 }}>
          <div className="cirleLine"></div>
        </motion.div>

        <div className="row">
          <div className="col-md-9">
            <h3 className="border-end border-2 pe-3 w-50">
              Why is ICFAI Online MBA Unique?
            </h3>
            <div>
              <p className="mb-1">
                The ICFAI Online MBA program effects integration among what you
                are, your work context, the business challenges, the institution
                stakeholders and your learning journey.
              </p>
              <p className="">
                This opens up tremendous opportunities for each individual. You
                can build your learning journey outcomes using four key drivers.
              </p>
            </div>
          </div>
          <div className="col-md-3 m-auto">
            <Link
              className="theme-btn d-inline-flex align-items-center"
              to="/program/online-mba"
            >
              More About the Program
              <span className="arrow1 ms-2">
                <FaArrowRight />
              </span>
              <span className="arrow2 ms-1">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="row">
          {uniquePoints.map((item, idx) => (
            <div className="col-lg-3 col-md-6 mb-2 g-2" key={idx}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <div className={`iconBg ${item.bgClass}`}>
                      <LazyLoadImage
                        width={40}
                        height={40}
                        className="img-fluid"
                        src={item.icon}
                        alt={`${item.title} Icon`}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <h5>{item.title}</h5>
                    <p className="fs-6">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueMBASection;
