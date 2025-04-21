import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { FaYoutube } from "react-icons/fa";
import assets from "../assets/assets";
import "../components/Homepage/default.css";

const testimonials = [
  [
    {
      title: "Course Project",
      content:
        "ICFAI Online MBA's course project spells a difference from others...",
      video: "https://youtu.be/P66MSL30hnQ",
      name: "Mr. Manishankar Mandal",
      image: assets.t1,
    },
    {
      title: "Awards & Recognition",
      content:
        "Awards motivate the recipient and encourage others to work for it...",
      video: "https://youtu.be/0sBDpsRgApw",
      name: "Ms. Kanchi Shah",
      image: assets.t2,
    },
  ],
  [
    {
      title: "Live Sessions & Responsive Faculty",
      content:
        "Our live sessions are lively and interactive. It's a think-share-pair formula...",
      video: "https://youtu.be/X-YOBcTwZRA",
      name: "Ms. Rasee Reddy",
      image: assets.t3,
    },
    {
      title: "Busy Managers' Aid",
      content:
        "Today, speed fails one's desire to study. When the to-do list swells...",
      video: "https://youtu.be/gW8qGyoPZDs",
      name: "Mr. Mukesh Shrichand",
      image: assets.t4,
    },
  ],
];

const TestimonialSection = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {});
  const carouselId = "testimonialCarousel";

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
    <section className="testimonial text-white position-relative overflow-hidden">
      <div className="circleYellow"></div>
      <div className="container">
        <div className="row">
          {/* Text Block */}
          <div className="col-md-4 my-auto">
            <h3>Listen to Our Students</h3>
            <p className="text-justify">
              In a world governed by the need to grow, upskilling adds value to
              your persona and company's effectiveness. ICFAI Online MBA is
              flexible to achieve a real work-study balance. But there are more
              reasons why ICFAI Online MBA might be the best option. Listen to
              what our students tell about it:
            </p>
          </div>

          {/* Carousel Block */}
          <div className="col-md-8 position-relative">
            <motion.div
              className="d-none d-md-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <LazyLoadImage
                className="img-fluid shape2Top"
                src={assets.shape3Red}
                alt="shape1"
                effect="blur"
              />
            </motion.div>

            <div
              id={carouselId}
              className="carousel slide customCarousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {testimonials.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className={`carousel-item mb-3 ${
                      slideIndex === 0 ? "active" : ""
                    }`}
                  >
                    <div className="row mt-5">
                      {slide.map((item, itemIndex) => (
                        <div
                          className="col-lg-6 col-xl-6 col-md-6 col-12 mb-3"
                          key={itemIndex}
                        >
                          <div className="card border-0 rounded-4 mb-3">
                            <div className="card-body">
                              <h5>{item.title}</h5>
                              <p>{item.content}</p>
                              <div className="text-end">
                                {/* <a
                                  href="https://youtu.be/3b-dkQFIhl4"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <img
                                    src={assets.CVKrishna}
                                    alt="CV-Krishna"
                                    className="img-fluid"
                                  />
                                </a> */}

                                <a
                                  href={item.video}
                                  target="_blank"
                                  rel="noreferrer"
                                  title="Watch full interview video"
                                  data-fancybox="gallery"
                                  className="gallery-item"
                                >
                                  <FaYoutube className="text-danger fs-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <LazyLoadImage
                              src={item.image}
                              className="img-fluid rounded-circle"
                              width="60"
                              height="60"
                              alt={item.name}
                              loading="lazy"
                            />
                            <h5 className="ms-3">{item.name}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <div className="testimonial">
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
