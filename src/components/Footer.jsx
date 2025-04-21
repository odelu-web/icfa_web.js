import React from "react";
import assets from "../assets/assets";
import { BiEnvelope } from "react-icons/bi"; // Import the envelope icon
import { BiPhone } from "react-icons/bi"; // Import phone icon
import { SlArrowRight } from "react-icons/sl";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
const socialLinks = [
  { href: "https://www.facebook.com/icfaionline", icon: <FaFacebook /> },
  { href: "https://www.instagram.com/icfai.online", icon: <FaInstagram /> },
  {
    href: "https://www.linkedin.com/company/icfai-online",
    icon: <FaLinkedin />,
  },
  { href: "https://twitter.com/IcfaiOnline", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/ICFAIOnline", icon: <FaYoutube /> },
  { href: "https://in.pinterest.com/ICFAIOnline", icon: <FaPinterest /> },
];
const Footer = () => {
  return (
    <footer id="footer" className="footer bg-blue-color">
      <div className="container footer-top text-white">
        <div className="row gy-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="py-4 p-2 bg-white text-center mb-3 w-75 rounded-2">
              <img
                src={assets.ifhelogo}
                width="300"
                height="50"
                alt="The ICFAI University IFHE"
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <p className="text-justify">
              The ICFAI Foundation for Higher Education, Hyderabad is declared
              as a Deemed-to-be-University under Section 3 of the UGC Act, 1956.
              The University has received the NAAC Accreditation 'A++' Grade
              with an impressive score (Institutional CGPA) of 3.59 out of 4.
            </p>
            <div className="social-links mt-3 mb-3">
              <h4 className="text-warning">Follow Us</h4>
              <div className="d-flex">
                {socialLinks.map(({ href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12 footer-links">
            <div className="px-sm-0 px-md-5">
              <h4 className="text-warning">Quick Links</h4>
              <ul>
                {[
                  { text: "Online MBA Program", href: "/program/online-mba" },
                  {
                    text: "The ICFAI Group",
                    href: "/about-us/the-icfai-group",
                  },
                  { text: "Program Structure", href: "/program/online-mba" },
                  { text: "Admissions", href: "/admissions" },
                  { text: "Career Path", href: "/career" },
                  {
                    text: "Apply Online",
                    href: "https://online.ifheindia.org/ifhe-online-mba.asp",
                  },
                  { text: "FAQs", href: "/program/faqs" },
                  { text: "Privacy Policy", href: "/privacy-policy" },
                ].map(({ text, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="text-white d-flex align-items-center"
                      {...(text === "Apply Online"
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <SlArrowRight className="me-2" size={14} />
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="mb-3">
              <h4 className="text-warning">Contact Us</h4>
              <h5>ICFAI Foundation for Higher Education</h5>
              <p className="mb-0">Donthanapally, Shankarapalli Road,</p>
              <p className="mb-0">Hyderabad - 501203, Telangana, India.</p>
            </div>
            <div className="mb-3">
              <h4 className="text-warning">Toll Free</h4>
              <div className="d-flex">
                <p className="mb-2">
                  <i className="bi bi-telephone"></i>
                </p>
                <p className="ms-2 mb-2">
                  <a
                    className="text-white d-flex align-items-center"
                    href="tel:08069592323"
                  >
                    <BiPhone className="me-2" size={20} /> {/* Phone icon */}
                    080-6959-2323
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-warning">Email Us</h4>
              <div className="d-flex">
                <p className="me-2 mb-2">
                  <i className="bi bi-envelope"></i>
                </p>
                <a
                  className="text-white d-flex align-items-center"
                  href="mailto:enrol.cdoe@ifheindia.org"
                >
                  <BiEnvelope className="me-2" size={20} />{" "}
                  {/* Icon before email text */}
                  enrol.cdoe@ifheindia.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-danger">
        <div className="container">
          <div className="row">
            <div className="copyright pb-3">
              © 2025 All Rights Reserved by{" "}
              <strong>The ICFAI Foundation for Higher Education</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
