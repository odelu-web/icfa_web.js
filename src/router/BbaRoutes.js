import React from "react";
import { Route } from "react-router-dom";
import Bba from "../bbapages/Bba";
import Contact from "../bbapages/Contact";
import Admissions from "../bbapages/Admissions";

import Onlinelearning from "../bbapages/Onlinelearning";
import Teachingandlearning from "../bbapages/Teachingandlearning";

import Academicevaluation from "../bbapages/Academicevaluation";
import Careerpath from "../bbapages/Careerpath";
import Programstructure from "../bbapages/Programstructure";
import Theicfaigroup from "../bbapages/Theicfaigroup";
import Faqs from "../bbapages/Faqs";

import Facultydevelopmentprogram from "../bbapages/Facultydevelopmentprogram";

import Research from "../bbapages/Research";
import Alumni from "../bbapages/Alumni";
import Ciqareport from "../bbapages/Ciqareport";
import Facultyprofiles from "../bbapages/Facultyprofiles";

import OnlineBba from "../bbapages/OnlineBba";

import Privacypolicy from "../bbapages/Privacypolicy";

const BbaRoutes = [
  <Route key="bba" path="/bba" element={<Bba />} />,
  <Route path="/bba/contact" element={<Contact />} />,
  <Route path="/bba/admissions" element={<Admissions />} />,

  <Route path="/bba/program-structure" element={<Programstructure />} />,
  <Route path="/bba/online-learning" element={<Onlinelearning />} />,
  <Route path="/bba/teaching-and-learning" element={<Teachingandlearning />} />,
  <Route path="/bba/academic-evaluation" element={<Academicevaluation />} />,
  <Route path="/bba/career" element={<Careerpath />} />,
  <Route path="/bba/faqs" element={<Faqs />} />,

  <Route path="/bba/the-icfai-group" element={<Theicfaigroup />} />,

  <Route
    path="/bba/faculty-development-program"
    element={<Facultydevelopmentprogram />}
  />,
  <Route path="/bba/research" element={<Research />} />,
  <Route path="/bba/alumni" element={<Alumni />} />,
  <Route path="/bba/ciqa-report" element={<Ciqareport />} />,
  <Route path="/bba/faculty-profiles" element={<Facultyprofiles />} />,
  <Route path="/bba/online-bba" element={<OnlineBba />} />,

  <Route path="/bba/privacy-policy" element={<Privacypolicy />} />,

  // More BBA-specific routes can go here
];

export default BbaRoutes;
