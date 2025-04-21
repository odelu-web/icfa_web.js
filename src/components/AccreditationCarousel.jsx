import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import assets from "../assets/assets"; // adjust the path based on your structure

const slides = [
  [
    {
      img: assets.naacLogo,
      text: "Accredited with A++ grade, by NAAC",
    },
    {
      img: assets.ugcIcon,
      text: "UGC\nEntitled",
    },
    {
      img: assets.aicteIcon,
      text: "AICTE\nApproved",
    },
    {
      img: assets.nirfLogo,
      text: "#39 on Overall basis, All Over India for its MBA Program, NIRF Ranking 2024",
    },
  ],
  [
    {
      img: assets.aacsbLogo,
      text: "Accredited for its Regular MBA Program of IBS Hyderabad by AACSB",
    },
    {
      img: assets.assoCmm,
      text: "Member, The Association of Commonwealth Universities (ACU)",
    },
    {
      img: assets.saqsLogo,
      text: "Accredited by SAQS (South Asian Quality Standards), AMDISA",
    },
    {
      img: assets.amdisaMember,
      text: "CDOE is an Institutional Member of AMDISA",
    },
  ],
];

const AccreditationCarousel = () => {
  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "#ebeeff",
      }}
    >
      <div className="container customCarousel">
        <h3>Accreditations, Recognitions, Rankings</h3>

        <div
          id="carouselExampleIndicators1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators me-0">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                data-bs-target="#carouselExampleIndicators1"
                data-bs-slide-to={idx}
                className={idx === 0 ? "active" : ""}
                aria-current={idx === 0}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((group, idx) => (
              <div
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                key={idx}
              >
                <div className="row">
                  {group.map((item, subIdx) => (
                    <div className="col-md-3 g-2" key={subIdx}>
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body d-flex">
                          <LazyLoadImage
                            src={item.img}
                            className="accredationLogo"
                            alt="Accreditation"
                            loading="lazy"
                          />
                          <div
                            className="ms-2"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            <p className="mb-0">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationCarousel;
