import React from "react";
import assets from "../assets/assets";
import Seo from "../components/Seo";

import "../components/Homepage/Facultyprofile.css";

const Facultyprofiles = () => {
  const finance = [
    {
      name: "K.Seethapathi",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Finance",
      education: "CTM, CAIIB, M.Sc.",
      research_publication:
        "44 journal articles; 14 edited books. 5 conference papers presented.",
      image: assets.ProfKSeethapathi,
    },
    {
      name: "Senapathy",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Banking and Finance (Credit and Forex).",
      education:
        "PhD from Monad University; MPhil from VMU (First class); MBA (Banking and Finance) IGNOU (First class); Executive MBA from VMU (First class); CAIIB from Indian institute of Bankers; MSc from Osmania University (First class).",
      research_publication:
        "9 journal articles. 3 conference papers presented.",
      image: assets.ProfSenapathy,
    },
    {
      name: "Suresh Babu",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Investment Banking, Export Credit, General Banking, Auditing and Industrial Finance.",
      education: "FCA, PGD in Banking & Accountancy; CAIIB, BSc, DCA (Banking)",
      research_publication: "8 book chapters.",
      image: assets.ProfSuresh,
    },
    {
      name: "U L Sunitha",
      position: "Associate Professor and Program Coordinator (MBA)",
      teaching_areas:
        "Financial Management, Accounting and Finance, Financial Statement Analysis and Decision Making.",
      education: "MPhil, MCom, UGC-NET.",
      research_publication: "6 journal articles; 22 book chapters.",
      image: assets.ProfULSunitha,
    },
    {
      name: "Y V N Srinivasa Rao",
      position: "Assistant Professor and Course Mentor",
      teaching_areas: "Finance and Marketing.",
      education: "CFA (ICFAI Hyderabad), BSc",
      research_publication: "",
      image: assets.ProfYVNSrinivasa,
    },
    {
      name: "M Aparna",
      position: "Assistant Professor and Course Mentor",
      teaching_areas: "Finance and Law.",
      education: "LLM, CS (Inter), MCom",
      research_publication:
        "3 journal articles, 23 book chapters. 1 conference paper presented.",
      image: assets.MsAparna,
    },
    {
      name: "C V Kumar",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Financial Management, Security Analysis and Portfolio Management/Strategic Fin Management Banking Courses.",
      education:
        "PhD, CFA( ICFAI, Hyderabad), CAIIB, MSc, LII (Indian Institute of Insurance)",
      research_publication: "4 journal articles. 1 conference paper presented.",
      image: assets.ProfCVKumar,
    },
    {
      name: "Y G Sivaram",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Finance and Economics",
      education:
        "PhD (Banaras Hindu University), MPhil, ICWA (Inter), MA (Economics), CAIIB",
      research_publication:
        "24 journal articles; 12 case studies, 7 book reviews, 4 books.",
      image: assets.ProfYGSivaram,
    },
    {
      name: "V Gopalakrishna",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Finance, Law and Banking",
      education: "LLM, MSc, CAIIB",
      research_publication: "32 journal articles.",
      image: assets.ProfVGopalaKrishna,
    },
    {
      name: "V G Chari",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Finance and Management.",
      education:
        "PhD, CFA (ICFAI, Hyderabad), CAIIB, MCom, Diploma in Bank Management ((Indian Institute of Banking and Finance); Associate Member of Insurance Institute of India, Diploma in Financial Services (Indian Institute of Banking and Finance)",
      research_publication:
        "2 journal articles, 2 books. 3 conference papers presented.",
      image: assets.ProfVGChari,
    },
    {
      name: "T V Rao",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Management.",
      education: "PhD, CAIIB",
      research_publication:
        "1 journal article, 1 book. 2 conference papers presented.",
      image: assets.TVRaoPhoto,
    },
    {
      name: "C V Ramamohan",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "IT Applications for Business, E-Business, Supply Chain Management, International Business, Investment and Financial Management.",
      education: "PhD (IIT, Madras); MBA, M.Sc (Physics) (IIT Madras).",
      research_publication:
        "8 journal articles, 10 conference papers presented.",
      image: assets.ProfCVRamamohan,
    },
    {
      name: "G Madhavankutty",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Economics",
      education: "PhD, Masters in Business Economics, CAIIB",
      research_publication:
        "3 journal articles, 9 thematic reports. 2 conference papers presented.",
      image: assets.ProfMadhavanKutty,
    },
    {
      name: "Sunil Shah",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Finance",
      education: "MBA (Finance)",
      research_publication: "1 journal article.",
      image: assets.ProfSunilShah,
    },
    {
      name: "T Rajendra Kumar",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Commerce and Finance",
      education: "FCMA (ICWAI, India); MBA, MCom",
      research_publication: "4 journal articles.",
      image: assets.ProfRajendra,
    },
    {
      name: "Abhirami Devi K Sivakumar",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Finance",
      education:
        "CFA(Online), Towson University, USA\nPh.D from University of Madras, Chennai\nM.Phil from Madurai Kamaraj University, Madurai\nM.Com from University of Madras, Chennai\nB.Ed from Annamalai University, Annamalainagar",
      research_publication:
        "9 journal articles, 1 book, 32 conference papers presented",
      image: assets.AbiramiDeviKSivakumar,
    },
    {
      name: "T. Sundara Vardhan",
      position: "Assistant Professor and Course Coordinator",
      teaching_areas: "Economics and Allied Fields",
      education: "Ph D (Ongoing) in Economics, M.Phil, MA",
      research_publication: "2 book chapters",
      image: assets.ProfSundar,
    },
    {
      name: "S.V.Subrahmanyam",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Banking and Finance",
      education: "ACS, ACMA, M.Sc, CAIIB",
      research_publication: "",
      image: assets.SVSubrahmanyam,
    },
    {
      name: "Ravi Tennety",
      position: "Adjuct Faculty Member and Course Mentor",
      teaching_areas: "OB, Finance, MCS, Entrepreneurship, Strategy",
      education: "PGDM ( IIM Calcutta)",
      research_publication: "",
      image: assets.ProfRavi,
    },
  ];
  const Marketing = [
    {
      name: "Ramesh Krishnan",
      position: "Associate Professor and Course Coordinator",
      teaching_areas: "Marketing, Finance and Operations.",
      education:
        "PGDM (IIM Ahmedabad), BE (Hons) (Mechanical) (BITS, Pilani); MOOC: I have completed more than 30 courses from top ranked universities like Harvard, Stanford, Yale, Wharton and MIT covering a wide range of topics in Finance, Computer Science, Physics and Neuroscience.",
      research_publication:
        "3 journal articles. 4 conference papers presented.",
      image: assets.ProfRameshKrishnan,
    },
    {
      name: "R Muthu Kumar",
      position: "Assistant Professor and Course Coordinator",
      teaching_areas: "Marketing, Services Marketing, Marketing Research.",
      education:
        "PhD from Pondicherry University, Pondicherry, MBA, BE (NIT, Trichy)",
      research_publication:
        "4 journal articles; 5 case studies; 34 book chapters.1 conference paper presented.",
      recognition:
        "Nagendra V. Chowdary, Vandana Jayakumar, R. Muthukumar, (2016). Cost of employee loyalty@Anand Finance, 20th CEEMAN Case Writing Competition in partnership with Emerald; Saradhi Kumar Gonela & R Muthukumar (2009). Bank Bailouts and Bonuses: From Financial Bankruptcy to Moral Bankruptcy? Finalist in the 'Dark Side VIII' Case Writing Competition, organized by Critical Management Studies Interest Group of the Academy of Management.",
      image: assets.ProfMuthu,
    },
    {
      name: "Sukanya Ashokkumar",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Marketing Management, Service Marketing, Integrated Marketing Communication, Strategic Marketing Management.",
      education: "PhD, MBA (Marketing), BA (Economics), UGC NET.",
      research_publication:
        "36 journal articles; 102 book chapters; 3 books. 9 conference papers presented.",
      recognition:
        "Conducted a 2 day training workshop for faculty members of SCMS, Cochin on 'Article writing and Research publication'-2009; Given the award for Best Performance in Academics and Institutional building in the Annual Academic Conference of ICFAI National College (INC) for the year 2007; Served as a trainer for new Faculty members (Marketing management domain) for the year 2005 in INC, Tamil Nadu Region; Editor of 'CBS Business Review' for the year 2013, the business magazine of Chennai Business School.",
      image: assets.ProfSukanya,
    },
    {
      name: "G Srinivas",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Marketing",
      education:
        "MTech (Chemical Engineering) (IIT- Delhi), MA(Journalism and Mass Communication), BTech, PGD in International Trade, (IIFT), Executive Programme in 'Accelerated Management Programme' (ISB, Hyderabad)",
      recognition:
        "Award from Vice President of India on the occasion of World Literacy day; Recipient of outstanding project of the year award; Recipient of quality award; Recipient of green @ work award; National Merit Scholarship academic career (Rank holder throughout).",
      image: assets.ProfGSrinivas,
    },
    {
      name: "Kalicharan Sabat",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Management",
      education: "MBA, BTech, UGC NET",
      research_publication:
        "1 journal article, 1 case study, 1 book chapter. 1 conference paper presented.",
      recognition:
        "Ranked -1 in the merit list of Hyderabad Central University (HCU) Ph.D. Selection Process.",
      image: assets.ProfKalicharan,
    },
    {
      name: "Vijaya Subramanian",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Insurance and Management.",
      education:
        "MS (Risk and Insurance Management), Masters Diploma in Business Administration (Marketing); BSc",
      research_publication: "5 journal articles.",
      image: assets.ProfVijiSubramaniam,
    },
    {
      name: "Andal Ammisetti",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Services Marketing; Consumer Behavior; Online Retailing; Business Strategy",
      education:
        "Ph.D from Andhra University, Visakhapatnam; P.G.Diploma in Personnel Management from A.P.Productivity Council, Hyderabad; M.B.A. from Andhra University, Visakhapatnam B.Com from Nagarjuna University, Guntur",
      research_publication:
        "3 journal articles; 5 case studies.10 conference papers presented.",
      image: assets.AndalAmmisetti,
    },
    {
      name: "C.V.Krishna",
      position: "Assistant Professor and Course Coordinator",
      teaching_areas:
        "Marketing Management; Retail Management; Integrated Marketing Communication",
      education:
        "Ph.D from Utkal University, Bhubaneswar; MBA from Nagarjuna University, Guntur; B.Sc. from Andhra Loyola College, Vijayawada; UGC NET.",
      research_publication:
        "12 journal articles; 5 book chapters. 8 conference papers presented",
      image: assets.CVKrishnaa,
    },
    {
      name: "Kisholoy Roy",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Marketing",
      education: "Ph.D in Management",
      research_publication: "12 books and 40 journal articles",
      image: assets.DrKisholoy,
    },
    {
      name: "Manisha Pillai",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "Marketing",
      education: "MBA",
      research_publication: "1 research article",
      image: assets.ManishaPillai,
    },
    {
      name: "Ch. Naga Ramya Kiran",
      position: "Assistant Professor and Course Coordinator",
      teaching_areas:
        "Services marketing, Sales and Distribution Management, Digital Marketing, Integrated Marketing Communications, Retail Management.",
      summary: "11.5 years; Corporate Experience - Nil.",
      education:
        "Ph.D from Acharya Nagarjuna University; MBA from Vikas College of Engineering and Technology; B.Sc. from The Hindu College; TS&APSET in Management; SWAYAM NPTEL courses such as Leadership, Marketing Management -1, Services Marketing; Digital Marketing course from Udemy.",
      research_publication:
        "11 journal articles; 1 book, 6 conference papers, 1 book chapter, 3 guest lectures",
      image: assets.DrNagaramya,
    },
  ];
  const operations = [
    {
      name: "R Prasad",
      position: "Professor and Course Mentor",
      teaching_areas: "Strategy, Entrepreneurship.",
      education:
        "PhD from JNTU, Hyderabad, PGDM (Marketing and Systems) - IIM Kolkata; BTech (Electronics and Communication)- IIT Mumbai",
      research_publication:
        "3 journal articles, 8 edited books. 4 conference papers presented.",
      image: assets.RPrasad,
    },
    {
      name: "Y V Subrahmanyam",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Operations Research, Information Technology, TQM, Change Management.",
      education:
        "PhD (NIT, Warangal), Certified Quality Analyst (QAI, USA), MSc (Industrially Oriented Applied Mathematics) (NIT, Warangal), BSc",
      research_publication:
        "5 journal articles, 18 book chapters. 3 conference papers presented.",
      recognition:
        "Appreciation award for the 'Suggestion Scheme' at CMC Limited, R and D, Hyderabad, 1990, Appreciation award for conducting the 'Technical Day-TELDA' at CMC Limited, Hyderabad, 1992.",
      image: assets.ProfSubramanyam,
    },
    {
      name: "B Srinivas Raj",
      position: "Associate Professor and Course Coordinator",
      teaching_areas: "Information Technology, MIS, E-commerce.",
      education: "PhD, MBA",
      image: assets.BSrinivasRaj,
    },
    {
      name: "B Bhaskara Rao",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Operations Management, Quality Management and Green Supply Chain Management.",
      education: "MBA, MSc (Tech)- Applied Physics (Electronics)",
      research_publication:
        "43 book chapters, 2 books. 12 conference papers presented.",
      recognition:
        "Won 1st Prize in a nation-wide contest on 'Sickness in Public Enterprises-Causes and Cures' Organized by the Parliamentary Forum on Public Enterprises and the Center for Public Enterprise Studies, 1986, Won Acclamation Prize in a nation-wide contest on 'Human Resources Management in Public Enterprises' organized by the Parliamentary Forum on Public Enterprises and the Center for Public Enterprise Studies, 1987.",
      image: assets.BulusuBhaskaraRao,
    },
    {
      name: "Sweta Anand",
      position: "Senior Research Associate and Course Mentor",
      teaching_areas:
        "Human Resource Management, Information Management and Soft Skills.",
      education:
        "MBA, PGDIM (XISS, Ranchi - Gold Medal), BBA (Birla Institute of Technology, Ranchi).",
      image: assets.MsSweta,
    },
    {
      name: "O Prasada Rao",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Information Technology, Personnel Management and Mechanical.",
      education: "PhD (BITS Pilani); Diploma (Project Management), BTech",
      research_publication: "100 articles.",
      image: assets.ProfOPRao,
    },
    {
      name: "AVLN Rao",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "Operations Management, Quality Management and Management Information Systems.",
      education:
        "PhD, IIT Kharagpur; Diploma (Industrial Management), BE (Mechanical Engineering).",
      research_publication: "2 case studies; 6 book chapters; 1 book.",
      recognition:
        "National Quality Award as Winner in The Management College of SAIL, Ranchi; National Quality Award as Winner in Central Power Training Institute, Rourkela as Head of the Institute; CEA Recognition as Class I Category to Central Power Training Institute, Rourkela as Head of the Institute",
      image: assets.ProfAVLNRao,
    },
    {
      name: "GSB Subramanya Chowdari",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas: "IT and Operations.",
      education: "MTech, (IIT, Madras), BTech PGD (Computer Science)",
      research_publication: "3 case studies.",
      recognition: "Awardee of CIO Next100 2015",
      image: assets.ProfChowdari,
    },
    {
      name: "Sumangla Rathore",
      position: "Adjunct Faculty Member and Course Mentor",
      teaching_areas:
        "IT and Operations, Digital Marketing, E-commerce, Systems Analysis and Design, Business Intelligence, Software Project Management.",
      education: "PhD, MCA, MSc (IT), BSc",
      research_publication:
        "14 journal articles; 11 book chapters; 2 books.. 14 conference papers presented.",
      image: assets.ProfSumanglaRathore,
    },
    {
      name: "Pran Kumar M",
      position: "Assistant Professor and Course Coordinator",
      teaching_areas:
        "Quantitative Methods, Probability & Statistics Operations Research, Design of Experiments Statistical Methods for Business Analytics and Data Science",
      education:
        "Ph.D(Statistics), M.Phil(Statistics) , M.Sc (Statistics), B.A [(Maths(Main), Statistics, Economics)]",
      research_publication: "9 research articles",
      image: assets.DrPran,
    },
    {
      name: "Anirudh Prakhya",
      position: "Assistant Professor and Course Coordinator",
      teaching_areas: "SMACS",
      education:
        "PGDM, M.Tech in product design, B.Tech in mechanical engineering",
      research_publication: "Two books",
      image: assets.ProfAnirudh,
    },
  ];
  const HumanResource = [
    {
      name: "P V L Ramana",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfPVLRamana,
      teaching_areas:
        "Management and Organizational Behavior, Human Resource Management, RTD, PMRS, BC and other HR subjects.",
      education:
        "PhD, Get Interactive: Practical Teaching with Technology, University of London, Coursera, MBA (HRM), PGD (Human Rights), MA (Sociology)",
      research_publications:
        "1 journal article; 4 research reports; 78 book chapters, 5 books. 1 conference paper",
      recognition:
        "Late Prime Minister Sri P V Narasimha Rao released my book 'Women Empowerment' at Center for Policy Studies, Visakhapatnam 1999, Won Best Faculty Guide Award for guiding students for Summer Internship programs at Icfai National College 2009; Received Prize book from Nehru Memorial Fund for securing highest marks in one paper 'Sociology of Weaker Sections' at M. A. level 1978; Received Post-doctoral Research Associate-Fellowship from U. G.C. 1990-1998; Received University Research Fellowship from Andhra University for doing Ph. D-1980-85.",
    },
    {
      name: "Sheela Rosalyn",
      position: "Assistant Professor and Course Coordinator",
      image: assets.ProfSheelaRosalyn,
      teaching_areas:
        "Human Resource Management, Organizational Behavior and Industrial Psychology.",
      education:
        "PhD, MPhil, MA (English), MA (Psychology), BA (Industrial Psychology).",
      research_publications:
        "6 journal articles published; 7 conference papers published; 11 book chapters published.",
      recognition:
        "Research Excellence Award Oct. 2020, for an Empirical Paper on 'Influence of Conflict Management Behaviour on Virtual Team Effectiveness' by the Institute of Scholars, (InSc), Registered Under Ministry of MSME, Govt. of India, ISO 9001:2015 Certified, Bangalore. 2007, Best Paper Award 'Attitudes of students towards Organizational Culture in Autonomous & Non Autonomous Colleges in Visakhapatnam' at a National Seminar on 'Changing trends in Organizational Culture: Paradigm Shift' at St. Joseph's College for Women, Visakhapatnam (2020).",
    },
    {
      name: "K Veena",
      position: "Assistant Professor and Course Coordinator",
      image: assets.MsKVeena,
      teaching_areas:
        "Organizational Behaviour, Human Resources Management, Training and Development and Strategic Human Resources Management.",
      education:
        "PhD from JNTU, Hyderabad, MPhil, MBA (HRM and Finance), MCom, BCom",
      research_publications:
        "7 journal articles, 20 book chapters. 4 conference papers presented.",
    },
    {
      name: "A Ramachandra Aryasri",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfAryasri,
      teaching_areas:
        "Human Resource Management, Organizational Behaviour, Marketing and Entrepreneurship",
      education: "PhD, MBA (HRM), MCom, BCom (Statistics)",
      research_publications:
        "47 journal articles; 3 edited books; 19 books. 33 conference papers presented.",
      recognition:
        "Recognized as distinguished academician by Pentagram Research Centre, India on Feb.15,2012.",
    },
    {
      name: "A Shankar",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfShankar,
      teaching_areas: "HR",
      education: "PhD, MBA (HRM), B.Com (Statistics)",
      research_publications: "4 journal articles",
    },
    {
      name: "Pradeep Kumar Mulay",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfMulay,
      teaching_areas: "Human Resource Management",
      education: "PhD, MSc, PGD (HRM), PGD (Project Management)",
    },
    {
      name: "C Anuradha",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfCAnuradha,
      teaching_areas:
        "Human Resource Management, Organizational Behavior, Marketing and Soft Skills.",
      education: "PhD, MPhil, MBA (HRM), MSc (Psychology), MCom",
      research_publications:
        "9 journal articles.12 conference papers presented.",
    },
    {
      name: "M C Keerti Basavesh",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfKeerti,
      teaching_areas: "Softskills",
      education: "PhD, MBA, BTech",
    },
    {
      name: "P V L Raju",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfPVLRaju,
      teaching_areas: "HR and Banking",
      education: "MA, PGD (HRM), CAIIB",
      research_publications:
        "3 journal articles. 2 conference papers presented.",
    },
    {
      name: "J Jayashree Murthy",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ProfJayashreeMurthy,
      teaching_areas: "English and Personality Development.",
      education: "MPhil, MA (English).",
      research_publications: "3 journal articles.",
    },
    {
      name: "Anuradha Chavali",
      position: "Assistant Professor and Program Coordinator (BBA)",
      image: assets.anuradhaChavali,
      teaching_areas:
        "Human Resource Management, Organizational Behavior, Performance Management, Industrial Relations",
      education:
        "Ph.D from Berhampur University, Odisha, MBA from Utkal University, Bhubaneswar, BA, Economics (Hons) from Utkal University, Bhubaneswar, UGC NET and APSET in Management",
      research_publications:
        "8 journal articles; 1 book chapter, 4 conference papers presented.",
    },
    {
      name: "Lakshmi Hymavati.Kruttiventi",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.DrHyma,
      teaching_areas:
        "Marketing, Business Strategy, Business Ethics & Corporate Governance",
      education: "Ph.D, MBA, M.Com",
      research_publications: "3 journal articles",
    },
    {
      name: "Manisha Badetia",
      position: "Adjunct Faculty Member and Course Mentor",
      image: assets.ManishaBadetia,
      teaching_areas: "Human Resource Management",
      education: "MBA (HR), B.E.",
    },
    {
      name: "Sritama Maitra",
      position: "Assistant Professor and Course Mentor",
      image: assets.ProfSritama,
      teaching_areas:
        "Business Communication, Soft Skills, Literature and Management.",
      education:
        "Pursuing Ph.D from VIT University, Vellore; M.A, English from Calcutta University, Kolkata; BA, English (Hons) from Presidency University, Kolkata; UGC NET in English.",
      research_publications:
        "5 journal articles; 3 book chapters, 8 conference papers presented.",
    },
  ];

  return (
    <div>
      <Seo
        title="ICFAI | Faculty Profiles | CDOE | ICFAI Experienced Faculty"
        description="ICFAI, Hyderabad engages experienced faculty with good academic careers having experience in Entrepreneurship, Training and Higher Education."
        keywords="IFHE Hyderabad, ICFAI University, Faculty Profiles, Experienced Faculty, CDOE, Entrepreneurship, Training, Higher Education, MBA, Online MBA, NAAC Accredited Business School, Executive MBA Programs in Hyderabad, Executive MBA programs in India, MBA marketing online, Distance Online program, Faculty from IITs IIMs, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management."
        canonical="https://online.ifheindia.org/about-us/faculty-profiles"
      />

      <section className="Common-Section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="breadcrumbs pb-0">
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>About Us</li>
                  <li>Faculty Profiles</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features section bg8 py-3 m-0">
        <div className="container">
          <div className="">
            <div className="d-flex">
              <ul className="nav nav-tabs bg-white" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-3"
                    aria-selected="true"
                    role="tab"
                  >
                    <h4>Finance, Economics and Accounting</h4>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-4"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    <h4>Marketing and Strategy</h4>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-5"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    <h4>Operations and IT</h4>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-6"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    <h4>Human Resource and Soft Skills</h4>
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="features-tab-3"
                role="tabpanel"
              >
                <div className="row">
                  {finance.map((faculty, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-12 col-12 mb-3"
                    >
                      <div className="faculty-card">
                        <div className="d-flex align-items-center">
                          <div className="faculty-img">
                            <h2 className="mb-0">
                              <img
                                src={faculty.image}
                                className="rounded-3 img-thumbnail"
                                alt={faculty.name}
                              />
                            </h2>
                          </div>
                          <div className="ms-3">
                            <h3 className="mb-1">{faculty.name}</h3>
                            <p className="mb-1">
                              <strong>Position:</strong> {faculty.position}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="mb-1">
                            <strong>Teaching Areas:</strong>{" "}
                            {faculty.teaching_areas}
                          </p>
                          <p className="mb-1">
                            <strong>Education:</strong> {faculty.education}
                          </p>
                          <p className="mb-1">
                            <strong>Research/Publication:</strong>{" "}
                            {faculty.research_publication}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="features-tab-4"
                role="tabpanel"
              >
                <div className="row">
                  {Marketing.map((faculty, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-12 col-12 mb-3"
                    >
                      <div className="faculty-card">
                        <div className="d-flex align-items-center">
                          <div className="faculty-img">
                            <h2 className="mb-0">
                              <img
                                src={faculty.image}
                                className="rounded-3 img-thumbnail"
                                alt={faculty.name}
                              />
                            </h2>
                          </div>
                          <div className="ms-3">
                            <h3 className="mb-1">{faculty.name}</h3>
                            <p className="mb-1">
                              <strong>Position:</strong> {faculty.position}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="mb-1">
                            <strong>Teaching Areas:</strong>{" "}
                            {faculty.teaching_areas}
                          </p>
                          <p className="mb-1">
                            <strong>Education:</strong> {faculty.education}
                          </p>
                          <p className="mb-1">
                            <strong>Research/Publication:</strong>{" "}
                            {faculty.research_publication}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="features-tab-5"
                role="tabpanel"
              >
                <div className="row">
                  {operations.map((faculty, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-12 col-12 mb-3"
                    >
                      <div className="faculty-card">
                        <div className="d-flex align-items-center">
                          <div className="faculty-img">
                            <h2 className="mb-0">
                              <img
                                src={faculty.image}
                                className="rounded-3 img-thumbnail"
                                alt={faculty.name}
                              />
                            </h2>
                          </div>
                          <div className="ms-3">
                            <h3 className="mb-1">{faculty.name}</h3>
                            <p className="mb-1">
                              <strong>Position:</strong> {faculty.position}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="mb-1">
                            <strong>Teaching Areas:</strong>{" "}
                            {faculty.teaching_areas}
                          </p>
                          <p className="mb-1">
                            <strong>Education:</strong> {faculty.education}
                          </p>
                          <p className="mb-1">
                            <strong>Research/Publication:</strong>{" "}
                            {faculty.research_publication}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="features-tab-6"
                role="tabpanel"
              >
                <div className="row">
                  {HumanResource.map((faculty, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-12 col-12 mb-3"
                    >
                      <div className="faculty-card">
                        <div className="d-flex align-items-center">
                          <div className="faculty-img">
                            <h2 className="mb-0">
                              <img
                                src={faculty.image}
                                className="rounded-3 img-thumbnail"
                                alt={faculty.name}
                              />
                            </h2>
                          </div>
                          <div className="ms-3">
                            <h3 className="mb-1">{faculty.name}</h3>
                            <p className="mb-1">
                              <strong>Position:</strong> {faculty.position}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="mb-1">
                            <strong>Teaching Areas:</strong>{" "}
                            {faculty.teaching_areas}
                          </p>
                          <p className="mb-1">
                            <strong>Education:</strong> {faculty.education}
                          </p>
                          <p className="mb-1">
                            <strong>Research/Publication:</strong>{" "}
                            {faculty.research_publications}
                          </p>
                          <p className="mb-1">
                            <strong>Recognition:</strong> {faculty.recognition}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facultyprofiles;
