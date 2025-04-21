import React, { useEffect } from "react";

import assets from "../assets/assets"; // Adjust path as needed
import { motion, useMotionValue, useTransform } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "../components/Homepage/default.css";

const ForWhomSection = () => {
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
  return (
    <>
      <section
        className="position-relative overflow-hidden"
        style={{
          padding: "50px 0",
          backgroundColor: "#ebeeff",
        }}
      >
        <div className="circleYellow"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <LazyLoadImage
                src={assets.forWhom}
                alt="forWhom"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 my-auto">
              <h3>For Whom</h3>
              <motion.div
                className="d-none d-md-block"
                style={{ x: x1, y: y1 }}
              >
                <LazyLoadImage
                  className="img-fluid shape2"
                  src={assets.shape2red}
                  alt="shape2red"
                />
              </motion.div>
              <div className="card border-0 shadow-sm mb-2">
                <div className="card-body d-flex align-items-center">
                  <div className="iconBg bg1">
                    <LazyLoadImage
                      width={40}
                      height={40}
                      src={assets.WorkingProfessional}
                      alt="belongIcon"
                    />
                  </div>
                  <div>
                    <h5 className="fw-medium">
                      Designing Future Ready Working Professionals
                    </h5>
                    <p className=" ">
                      Learning that is effective, convenient and rewarding, all
                      without pausing your current job.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card border-0 shadow-sm mb-2 ms-auto">
                <div className="card-body d-flex align-items-center">
                  <div>
                    <h5 className="fw-medium">
                      Improving Fresh Graduates' Employability
                    </h5>
                    <p className="">
                      Learning that is flexible, affordable, peer-backed which
                      adds up to your work experience.
                    </p>
                  </div>
                  <div className="iconBg bg3">
                    <LazyLoadImage
                      width={40}
                      height={40}
                      src={assets.EntrepreneurIcon}
                      alt="belongIcon"
                    />
                  </div>
                </div>
              </div>
              <div className="card border-0 shadow-sm mb-2">
                <div className="card-body d-flex align-items-center">
                  <div className="iconBg">
                    <LazyLoadImage
                      width={40}
                      height={40}
                      src={assets.masteryIcon}
                      alt="belongIcon"
                    />
                  </div>
                  <div>
                    <h5 className="fw-medium">
                      Creating an Edge to Entrepreneurs
                    </h5>
                    <p className=" ">
                      Learning that develops and accelerates your venture
                      through industry peer learning and case based learning,
                      which is flexible too.
                    </p>
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

export default ForWhomSection;
