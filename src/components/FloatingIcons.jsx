import React from "react";
import assets from "../assets/assets";
import "../components/FloatingIcons.css";
import ContactForm from "./ContactForm";
import CallMeBack from "./CallMeBack";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";

const FloatingIcons = () => {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/default" ||
    location.pathname === "/bba";

  // if (isHomePage) return null; // Don't render on homepage, this line apply to code - we did't see home page

  return (
    <>
      <section className="floatIcons-section">
        <ul className="iconList">
          <li className="item">
            <a
              rel="noreferrer"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#myModalformsub"
              className="link"
            >
              <span className="icon">
                <LazyLoadImage
                  src={assets.enquireIcon}
                  loading="lazy"
                  width="45"
                  height="45"
                  alt="Enquire"
                  className="img-fluid"
                />
              </span>
              <span className="title">Enquire Now</span>
            </a>
          </li>
          <li className="item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=919160001175&text="
              className="link"
            >
              <span className="icon">
                <LazyLoadImage
                  src={assets.whatsappIcon}
                  loading="lazy"
                  width="45"
                  height="45"
                  alt="whatsapp"
                  className="img-fluid"
                />
              </span>
              <span className="title">Connect on WhatsApp</span>
            </a>
          </li>
          {!isHomePage && (
            <>
              <li className="item">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://online.ifheindia.org/ifhe-online-mba.asp"
                  className="link"
                >
                  <span className="icon">
                    <LazyLoadImage
                      src={assets.applyNowIcon}
                      loading="lazy"
                      width="45"
                      height="45"
                      alt="applyNowIcon"
                      className="img-fluid"
                    />
                  </span>
                  <span className="title">Apply Now</span>
                </a>
              </li>
              <li className="item">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#myCallModal"
                  rel="noreferrer"
                  className="link"
                >
                  <span className="icon">
                    <LazyLoadImage
                      src={assets.callBackIcon}
                      loading="lazy"
                      width="45"
                      height="45"
                      alt="callBackIcon"
                      className="img-fluid"
                    />
                  </span>
                  <span className="title">Call Me Back</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </section>

      {/* Enquire Now Modal */}
      <div
        className="modal fade"
        id="myModalformsub"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title font-size-1-3">
                Please share your brief details to download Prospectus
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Call Me Back Modal */}
      <div
        className="modal fade"
        id="myCallModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title font-size-1-3">Call Me Back Now</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <CallMeBack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingIcons;
