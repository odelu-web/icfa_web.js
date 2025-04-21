import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import assets from "../assets/assets"; // Adjust the path based on your folder structure
import ContactForm from "./ContactForm"; // Adjust the path based on your actual file location

const ContactformKeyhighlights = () => {
  return (
    <section
      style={{
        padding: "40px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xl-8 col-lg-8 col-12 d-flex align-items-center justify-content-center">
            <LazyLoadImage
              src={assets.KeyHighlights}
              alt="Key Highlights IFHE Online MBA Hyderabad"
              className="img-fluid"
              effect="blur"
              style={{
                Width: 625,
                height: 625,
              }}
            />
          </div>

          <div className="col-md-4 col-xl-4 col-lg-4 col-12 my-auto">
            <h3>Get in Touch with us</h3>
            <div className="card border-0 shadow bg-white">
              <div className="card-body">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactformKeyhighlights;
