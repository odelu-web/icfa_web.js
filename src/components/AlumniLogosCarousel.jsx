import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import assets from "../assets/assets"; // Adjust path as needed
import "../components/Homepage/default.css";

import "swiper/css";

const AlumniLogosCarousel = () => {
  const logos = [
    assets.AccentureLogo,
    assets.AmazonLogo,
    assets.CapgeminiLogo,
    assets.CognizantLogo,
    assets.CiscoLogo,
    assets.DellLogo,
    assets.Deloitte,
    assets.GailIndialimitedLogo,
    assets.GlaxoSmithKlineLogo,
    assets.HCLLogo,
    assets.HDFCBankLogo,
    assets.ICICILogo,
    assets.IndianOilLogo,
    assets.JPMorganLogo,
    assets.KotakMahindraBankLogo,
    assets.MuthootFinanceLogo,
    assets.NTPCLogo,
    assets.SBILogo,
    assets.TCSLogo,
    assets.WiproLogo,
  ];

  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12 col-12">
            <h3>Where Do Our Students/Alumni Work?</h3>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={5}
              breakpoints={{
                320: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
              }}
              className="py-4"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index} className="text-center">
                  <LazyLoadImage
                    src={logo}
                    alt={`logo-${index}`}
                    className="img-fluid"
                    effect="blur"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniLogosCarousel;
