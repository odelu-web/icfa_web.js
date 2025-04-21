import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";

import assets from "../assets/assets";
import { GoSearch } from "react-icons/go";

import { IoChevronDownOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
const BbaHeader = () => {
  const navbarRef = useRef(null);
  const togglerRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const menuRefs = useRef({});

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const shouldAddScrolled = !isHomePage || scrolled;

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideAll = Object.values(menuRefs.current).every(
        (ref) => ref && !ref.contains(event.target)
      );

      if (clickedOutsideAll) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //  Close menu when click the out side and location changes

  useEffect(() => {
    const navbar = document.querySelector(".navbar-collapse");
    const toggler = document.querySelector(".navbar-toggler");

    if (navbar?.classList.contains("show") && toggler) {
      toggler.click(); // Close the navbar
    }
  }, [location]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = navbarRef.current;
      const toggler = togglerRef.current;

      if (
        navbar &&
        toggler &&
        navbar.classList.contains("show") &&
        !navbar.contains(event.target) &&
        !toggler.contains(event.target)
      ) {
        toggler.click(); // Collapse the navbar
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 1200) {
        setScrolled(true); // always true on small screens
      } else {
        setScrolled(window.scrollY > 0); // true only after scroll on large screens
      }
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // in case screen size changes

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`navbar-container  ${shouldAddScrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid py-2 py-xl-0  py-xl-0">
          <div className="row customRow">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12">
              <nav className="navbar d-flex bg-transparent navbar-expand-xl p-0">
                {/* Logo */}
                <Link className="navbar-brand p-0" to="/bba">
                  <img
                    className="img-fluid mainlogo"
                    width="260"
                    // style={{ maxWidth: '260px', width: '100%' }}
                    src={` ${
                      shouldAddScrolled ? assets.ifhelogo : assets.ifhelogowhite
                    }`}
                    alt="IFHE | ICFAI Online MBA | MBA for working executives | Online Education"
                  />
                </Link>

                {/* Mobile Toggle Button */}
                <button
                  className="navbar-toggler mobile-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  ref={togglerRef}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar Links */}
                <div
                  className="collapse mainBlueColor navbar-collapse"
                  id="navbarNav"
                  ref={navbarRef}
                >
                  {/* for Desktop         */}
                  <div className="d-none d-xl-block d-lg-block d-md-none">
                    <div
                      className={`d-flex align-items-center justify-content-between py-1 ${
                        shouldAddScrolled ? "navColor" : ""
                      }`}
                    >
                      <p className="mainBlueColor ms-2 m-0 fw-bold">
                        The Center for Distance and Online Education (CDOE)
                      </p>
                    </div>
                  </div>

                  {/* Main Navigation */}
                  <div className="blueColor py-xl-2">
                    <div className="navbarContent navbar-nav py-xl-1">
                      {/* About Us Dropdown */}
                      <div
                        className="nav-item"
                        ref={(el) => (menuRefs.current["about"] = el)}
                        onClick={() => toggleMenu("about")}
                      >
                        <span className="nav-link align-items-center p-1">
                          About Us{" "}
                          <IoChevronDownOutline
                            className={`ms-2 transitions ${
                              openMenu === "about" ? "rotate" : ""
                            }`}
                          />
                        </span>
                        {openMenu === "about" && (
                          <ul className="submenu">
                            <li className="liItem">
                              <Link to="/bba/the-icfai-group">
                                The ICFAI Group
                              </Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/the-icfai-group#RDID">
                                ICFAI Foundation for Higher Education
                              </Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/the-icfai-group#ARA">
                                Awards, Recognitions & Accreditations
                              </Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/the-icfai-group#CDOE">
                                The CDOE
                              </Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/faculty-profiles">
                                Faculty Resources
                              </Link>
                            </li>

                            <li className="liItem">
                              <Link to="/bba/faculty-development-program">
                                Faculty Development Programs
                              </Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/research">Research</Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/alumni">Alumni</Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/ciqa-report">CIQA</Link>
                            </li>
                          </ul>
                        )}
                      </div>

                      {/* Program Dropdown */}
                      <div
                        ref={(el) => (menuRefs.current["program"] = el)}
                        className="nav-item"
                        onClick={() => toggleMenu("program")}
                      >
                        <span className="nav-link align-items-center p-1">
                          Program{" "}
                          <IoChevronDownOutline
                            className={`ms-2 transitions ${
                              openMenu === "program" ? "rotate" : ""
                            }`}
                          />
                        </span>
                        {openMenu === "program" && (
                          <ul className="submenu">
                            <li className="liItem">
                              <Link to="/bba/online-bba">
                                Online BBA Program
                              </Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/program-structure">
                                Program Structure
                              </Link>
                            </li>

                            <li className="liItem">
                              <Link to="/bba/academic-evaluation">
                                Academic Evaluation
                              </Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/career">Career Path</Link>
                            </li>
                            <li className="liItem">
                              <Link to="/bba/faqs">FAQs</Link>
                            </li>
                          </ul>
                        )}
                      </div>

                      {/* Other Links */}
                      <div className="nav-item">
                        <Link className="nav-link" to="/bba/admissions">
                          Admissions
                        </Link>
                      </div>

                      <div className="nav-item">
                        <Link className="nav-link" to="/bba/contact">
                          Contact Us
                        </Link>
                      </div>
                      {/* <div className="nav-item d-block d-md-block d-xl-none d-lg-none">
                        <Link
                          className="nav-link"
                          to="/studentlogin.asp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Student Login
                        </Link>
                      </div> */}

                      <div className="nav-item">
                        <Link className="nav-link" to="/search-result">
                          <GoSearch style={{ fontSize: "18px" }} />
                        </Link>
                      </div>

                      <div className="nav-item mb-xl-0 mb-lg-0 mb-3">
                        <Link
                          className={`btn ${
                            shouldAddScrolled
                              ? "btn-outline-danger"
                              : "btn-outline-warning"
                          }`}
                          to="/"
                          onClick={(e) => {
                            e.preventDefault(); // Prevents default navigation
                            window.open("/", "_blank");
                          }}
                        >
                          Online MBA
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Logo (Right Side) for Desktop */}
                <div className="d-none d-xl-flex flex-xl-column align-items-center ms-2">
                  <div className="text-center">
                    <Link className="navbar-brand" to="/bba">
                      <img
                        className="img-fluid"
                        width="130px"
                        // style={{ maxWidth: '130px', width: '100%' }}
                        src={` ${
                          shouldAddScrolled
                            ? assets.icfaiLogo
                            : assets.icfaiLogoWhite
                        }`}
                        alt="Online IFHE | ICFAI Online BBA | BBA| Online Education "
                      />
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* for mobile         */}
        <section className="navColor d-block d-xl-none d-lg-none d-md-block py-2 m-0">
          <div className="container">
            <div className="row  d-flex align-items-center justify-content-between">
              <div className={`col-12 ${shouldAddScrolled ? "navColor" : ""}`}>
                <div className="d-flex">
                  <p className="mainBlueColor ms-1 m-0  me-3">
                    The Center for Distance and Online Education (CDOE)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default BbaHeader;
