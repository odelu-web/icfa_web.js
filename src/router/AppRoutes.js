import { lazy, Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import ProtectComponet from "../ProtectComponet";
import Layout from "../components/Layout";

import Contact from "../pages/Contact";
import Default from "../pages/Default";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faqs from "../pages/Faqs";
import Theicfaigroup from "../pages/Theicfaigroup";
import Facultyprofiles from "../pages/Facultyprofiles";
import Facultydevelopmentprogram from "../pages/Facultydevelopmentprogram";
import Research from "../pages/Research";
import Alumni from "../pages/Alumni";
import Onlinemba from "../pages/Onlinemba";
import Ciqareport from "../pages/Ciqareport";
import Programstructure from "../pages/Programstructure";
import Onlinelearning from "../pages/Onlinelearning";
import Teachingandlearning from "../pages/Teachingandlearning";
import Academicevaluation from "../pages/Academicevaluation";
import Careerpath from "../pages/Careerpath";
import Studentspeak from "../pages/Studentspeak";
import Admissions from "../pages/Admissions";
import Webinars from "../pages/Webinars";
import Newsletter from "../pages/Newsletter";
import Media from "../pages/Media";
import News from "../pages/News";
import Abouticfai from "../pages/Abouticfai";
import Mandatorydisclosures from "../pages/Mandatorydisclosures";
import BackToTop from "../components/BackToTop";
import Privacypolicy from "../pages/Privacypolicy";
import FloatingIcons from "../components/FloatingIcons";
import BbaFloatingIcons from "../components/BbaFloatingIcons";
import SearchResult from "../pages/SearchResult";
import BbaHeader from "../components/BbaHeader";
import ScrollToHashElement from "../components/ScrollToHashElement";

// BBA Routes
import BbaRoutes from "./BbaRoutes";
import BbaFooter from "../components/BbaFooter";

// Auth/Admin Pages
import Register from "../pages/Register";
import Loginpage from "../pages/Loginpage";
import Dashboard from "../pages/Dashboard";

// Admin Header/Footer
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import ThankYou from "../pages/ThankYou";
import FacultyProfileForm from "../components/FacultyProfileForm";
import FacultyProfileTable from "../components/FacultyProfileTable";
import EditFacultyProfileForm from "../components/EditFacultyProfileForm";

const DomComp = lazy(() => import("../DomComp"));

const AppRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const shouldAddMargin = !isHomePage;

  const isBbaPage = location.pathname.startsWith("/bba");
  const isDashPage = location.pathname.startsWith("/dashboard");

  // Render Header
  const renderHeader = () => {
    if (isBbaPage) return <BbaHeader />;
    if (isDashPage) return <AdminHeader />;
    return <Header />;
  };

  // Render Footer
  const renderFooter = () => {
    if (isBbaPage) return <BbaFooter />;
    if (isDashPage) return <AdminFooter />;
    return <Footer />;
  };

  // Dynamic Program Routes
  const programRoutes = [
    { path: "/program/online-mba", element: <Onlinemba /> },
    { path: "/program/program-structure", element: <Programstructure /> },
    { path: "/program/online-learning", element: <Onlinelearning /> },
    {
      path: "/program/teaching-and-learning",
      element: <Teachingandlearning />,
    },
    { path: "/program/academic-evaluation", element: <Academicevaluation /> },
    { path: "/program/career", element: <Careerpath /> },
    { path: "/program/faqs", element: <Faqs /> },
    { path: "/program/testimonials", element: <Studentspeak /> },
  ];

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            fontSize: "1.5rem",
          }}
        >
          Loading...
        </div>
      }
    >
      {renderHeader()}
      <main className={shouldAddMargin ? "topMargin" : ""}>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" exact Component={Default} />
          <Route path="/layout" element={<Layout />} />
          <Route
            path="/career"
            element={<Navigate to="/program/career" replace />}
          />

          {/* About Us */}
          <Route path="/about-us/the-icfai-group" element={<Theicfaigroup />} />
          <Route
            path="/about-us/faculty-profiles"
            element={<Facultyprofiles />}
          />
          <Route
            path="/about-us/faculty-development-program"
            element={<Facultydevelopmentprogram />}
          />
          <Route path="/about-us/research" element={<Research />} />
          <Route path="/about-us/alumni" element={<Alumni />} />
          <Route path="/about-us/ciqa-report" element={<Ciqareport />} />
          <Route
            path="/about-us/the-icfai-group/about-icfai"
            element={<Abouticfai />}
          />

          {/* Program Routes */}
          {programRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* Happenings Section */}
          <Route path="/happenings/webinar" element={<Webinars />} />
          <Route path="/happenings/newsletter" element={<Newsletter />} />
          <Route path="/happenings/media" element={<Media />} />
          <Route path="/happenings/news" element={<News />} />

          {/* Admin Pages */}
          <Route path="/register" element={<Register />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/facultyprofileform"
            element={<FacultyProfileForm />}
          />
          <Route
            path="/dashboard/facultyprofile/edit/:id"
            element={<FacultyProfileForm />}
          />
          <Route
            path="/dashboard/facultyprofilestable"
            element={<FacultyProfileTable />}
          />
          <Route
            path="/dashboard/editfacultyprofile/:id"
            element={<EditFacultyProfileForm />}
          />

          {/* General Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route
            path="/mandatory-disclosures"
            element={<Mandatorydisclosures />}
          />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/search-result" element={<SearchResult />} />

          <Route path="/thankyou" element={<ThankYou />} />

          {/* Protected Route */}
          <Route
            path="/admin"
            element={<ProtectedRoute element={<ProtectComponet />} />}
          />

          {/* BBA Routes */}
          {BbaRoutes}
        </Routes>
      </main>

      {/* Footer based on path */}
      {renderFooter()}

      <BackToTop />

      {/* Show FloatingIcons on all pages EXCEPT Dashboard */}
      {!isDashPage && (isBbaPage ? <BbaFloatingIcons /> : <FloatingIcons />)}
    </Suspense>
  );
};

export default AppRoutes;
