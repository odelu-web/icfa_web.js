import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaYoutube } from "react-icons/fa6";
import { Fancybox } from "@fancyapps/ui";
import "swiper/css/navigation";
import "swiper/css/pagination";
import assets from "../assets/assets";
import Seo from "../components/Seo";

import "../components/Homepage/Student.css";

const Studentspeak = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {});
  const testimonial1 = [
    {
      name: "Ankita Chatterjee",
      location: "Kolkata",
      batch: "MBA-Class of 2021- Batch II",
      role: "Manager, Experimental Laboratory @NIBG",
      title: "Question Paper",
      message:
        "The question papers have been candidate friendly, but evaluative and concept driven.",
    },
    {
      name: "Mukesh S.M.",
      location: "Mumbai",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Sr Project Manager@ Infosys (Recipient of Merit Scholarship in Semester I & II)",
      title: "Continuous Assessment",
      message:
        "Evaluating the student's performance throughout and not just at the final exam is the real flexibility. Helps those who work",
    },
  ];

  const testimonial2 = [
    {
      name: "Sruthi. K",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Student@ICFAI (Institute of Chartered Financial Analysts of India) (Recipient of Merit Scholarship in Semester I)",
      title: "Collaborative Problem Solving",
      message:
        "Sharing lightens the burden, and simplifies the knot. Hence the collaborative approach.",
    },
  ];

  const testimonial3 = [
    {
      name: "Deepak.R",
      location: "Port Moresby, Papua New Guinea",
      batch: "MBA-Class of 2021- Batch I",
      role: "Marketing Specialist @Auto Parts Online Ltd",
      title: "Discussion Forum",
      message:
        "Helps to get different perspectives on the topic. Promotes exam preparation too.",
    },
  ];
  const testimonial4 = [
    {
      name: "Ch. Aparna",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-II)",
      role: "Student@ICFAI (Institute of Chartered Financial Accountants of India)",
      title: "Exam",
      message:
        "Exam stress bugging you? Isn't there the open book? No more memorizing. Only citing the applied concepts with the books beside you.",
    },
    {
      name: "Sudip Karmakar",
      location: "Bangalore",
      batch: "MBA Class of 2021(Batch-II)",
      role: "VP @ Swiss Re Global (Recipient of Merit Scholarship in Semester I)",
      title: "Open book exams",
      message:
        "Say Goodbye to rote learning. Open book exams are for the analytical minds and not for regurgitators.",
    },
  ];
  const testimonial5 = [
    {
      name: "Amatul Bari Zakia",
      location: "Hyderabad",
      batch: "MBA Class of 2021 (Batch III)",
      role: "",
      title: "Faculty Video",
      message:
        "Faculty Video creates a virtual classroom at your place. Truly live interaction.",
    },
    {
      name: "K. Sruthi",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Student@ICFAI (Institute of Chartered Financial Accountants of India) (Recipient of Merit Scholarship in Semester I)",
      title: "Faculty",
      message:
        "Machines don't sympathise or empathise; but humans do. Know now where the faculty scores?",
    },
    {
      name: "Mukesh S. M.",
      location: "Mumbai",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Sr Project Manager@ Infosys (Recipient of Merit Scholarship in Semester I & II)",
      title: "Faculty",
      message:
        "Great motivators. Always around when one looks for their presence most.",
    },
    {
      name: "Abdul Wahab",
      location: "Saudi Arabia",
      batch: "MBA Class of 2021(Batch-I)",
      role: "QC @ British Petroleum (Recipient of Merit Scholarship in Semester II)",
      title: "Faculty",
      message:
        "Less a teacher and more a motivator. Less a thruster and more a facilitator.",
    },
    {
      name: "Kumudala Prince",
      location: "Hyderabad",
      batch: "MBA Class of 2021 (Batch II)",
      role: "Customer Assistance, TATA Motors",
      title: "Faculty",
      message:
        "make the navigation through the online course seamless, with compassion and flexibility.",
    },
    {
      name: "Gunna Rasee Reddy",
      location: "Hyderabad",
      batch: "MBA Class of 2021 (Batch II)",
      role: "Engineer @ UNISYS (Recipient of Merit Scholarship in Semester I)",
      title: "Faculty",
      message:
        "Structured instruction, flexible and compassionate in approach and omnipresence - faculties are amazing.",
    },
  ];

  const testimonial6 = [
    {
      name: "Ipsita Majhi",
      location: "Hyderabad",
      batch: "MBA Class of 2021 (Batch III)",
      role: "",
      title: "Live Sessions",
      message:
        "Live Sessions help to confirm and consolidate the new learning through interactions.",
    },
    {
      name: "Manigandan. G",
      location: "Bangalore",
      batch: "MBA Class of 2021(Batch-II)",
      role: "Lead QA @ HSBC Electronic Data Processing (India) Pvt. Ltd.",
      title: "Live Session",
      message:
        "Online class, in-person advantage. Lectures and class discussion added.",
    },
    {
      name: "Sruthi. K",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Student@ICFAI (Institute of Chartered Accountants of India) (Recipient of Merit Scholarship in Semester I)",
      title: "Live Sessions",
      message:
        "Truly, are experimental learning. Processing the concept through direct engagement with entities.",
    },
    {
      name: "Ankita Chatterjee",
      location: "Kolkata",
      batch: "MBA-Class of 2021- Batch II",
      role: "Manager, Experimental Laboratory @NIBG",
      title: "Live Session",
      message:
        "Plus of direct classes and plus of technology. A big plus of real life assignments.",
    },
    {
      name: "Abdul Wahab",
      location: "Saudi Arabia",
      batch: "MBA Class of 2021(Batch-I)",
      role: "QC @ British Petroleum (Recipient of Merit Scholarship in Semester II)",
      title: "Live Session",
      message:
        "Provides real-life, current examples to the theoretical frameworks.",
    },
    {
      name: "Sharath Menon",
      location: "Bangalore",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Manager, Deskera India",
      title: "Live Session",
      message:
        '"Live is life." When you connect the concepts live with entities, live sessions becomes lively.',
    },
    {
      name: "Priyanka B",
      location: "Hyderabad",
      batch: "MBA Class of 2021 (Batch II)",
      role: "Entrepreneur",
      title: "Live Sessions",
      message:
        "Dynamic and encourage interaction. They allow debates and immediate doubt clearing.",
    },
  ];

  const testimonial7 = [
    {
      name: "Sruthi. K",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Student@ICFAI (Institute of Chartered Financial Accountants of India) (Recipient of Merit Scholarship in Semester I)",
      title: "Mentor",
      message:
        "Yes, the one who leads all through the small steps to gain momentum.",
    },
  ];
  const testimonial8 = [
    {
      name: "Mukesh S.M.",
      location: "Mumbai",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Sr Project Manager@ Infosys (Recipient of Merit Scholarship in Semester I & II)",
      title: "Online Learning",
      message:
        "How to fit studies to the already busy life? This is what online learning is all about.",
    },
    {
      name: "Deepak.R",
      location: "Port Moresby, Papua New Guinea",
      batch: "MBA-Class of 2021 - Batch I",
      role: "Marketing Specialist @Auto Parts Online Ltd",
      title: "Blended Learning",
      message:
        "Just what is blended learning? Online opportunities(apps and tools) within the conventional class room level feeling",
    },
  ];

  const testimonial9 = [
    {
      name: "M K Gangadhar Prasad",
      location: "Hyderabad",
      batch: "MBA Class of 2021 (Batch III)",
      role: "Zonal Manager@ Mankind Pharma (Recipient of Merit Scholarship in Semester I)",
      title: "Tutorial Sessions & SLiM",
      message:
        "Tutorial sessions along SLiM have been a great support. A special mention to faculty guidance.",
    },
    {
      name: "Kanchi Shah",
      location: "Mumbai",
      batch: "MBA Class of 2021 (Batch III)",
      role: "Business Head (Marketing & Events) @StrategINK Solutions (Recipient of Merit Scholarship in Semester I)",
      title: "Live Sessions & Tutorials",
      message:
        "ELM's, Live Sessions, Videos and tutorials are helpful and guided us well. The practice handbook helped us to prepare better for numerals, for the subjects like QM and FAF.",
    },
    {
      name: "Dr.Saket Chattopadhay",
      location: "Delhi",
      batch: "MBA Class of 2021 (Batch III)",
      role: "Entrepreneur",
      title: "SLiM & Tutorials",
      message:
        "I would like to give 5 Stars for ICFAI Online MBA. SLiM and tutorials are good. Focused, animated narration add value to the learning process.",
    },
    {
      name: "Shivam Singh Rajput",
      location: "Ghaziabad",
      batch: "MBA Class of 2021 (Batch III)",
      role: "Finance Trainee @ eTeam InfoServices Private Limited",
      title: "Online Tutorials",
      message:
        "Online tutorials are reference guides; ideal to prepare for the semester final.",
    },
    {
      name: "Abhirami Natarajan",
      location: "Navi Mumbai",
      batch: "MBA Class of 2021 (Batch III)",
      role: "Student@ICAI (Institute of Chartered Accountants of India)",
      title: "Virtual Learning Environment",
      message:
        "Virtual learning environment is rich with resources, activities and interactions.",
    },
    {
      name: "Manishankar Mandal",
      location: "Vadodara",
      batch: "MBA Class of 2021 (Batch III)",
      role: "Assistant General Manager@ Alembic Pharmaceuticals Limited (Recipient of Merit Scholarship in Semester I)",
      title: "E-Books & SLiM",
      message:
        "E-Books, SLiM and practice tutorial sessions at the end helped me.",
    },
    {
      name: "Sruthi. K",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Student@ICFAI (Institute of Chartered Financial Accountants of India)",
      title: "Management Education",
      message:
        "Management Education is not about a compromise. The more engaging ones score.",
    },
    {
      name: "Abdul Wahab",
      location: "Saudi Arabia",
      batch: "MBA Class of 2021(Batch-I)",
      role: "QC @ British Petroleum (Recipient of Merit Scholarship in Semester II)",
      title: "Takeaway from ICFAI Online MBA",
      message:
        "Takeaway from ICFAI Online MBA? Reputation, credibility and flexibility and more…",
    },
    {
      name: "Mukesh S.M.",
      location: "Mumbai",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Sr Project Manager@ Infosys (Recipient of Merit Scholarship in Semester I & II)",
      title: "The Best MBA Course",
      message:
        "The best MBA course should be seamless. Flexibility, interaction and academic rigour all alloyed.",
    },
    {
      name: "Sharath Menon",
      location: "Bangalore",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Manager, Deskera India",
      title: "The 4C's",
      message:
        "Does it matter where you get your MBA? Yes and the right metrics could be the 4C's, viz. culture, composition, credentials and curriculum.",
    },
    {
      name: "Deepak. R",
      location: "Port Moresby, Papua New Guinea",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Marketing Specialist @Auto Parts Online Ltd",
      title: "Pursuing MBA",
      message:
        "Pursuing MBA is embracing your ambition. So the program that aligns you with the goals is the best.",
    },
    {
      name: "Madhav U.S.V.S",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-II)",
      role: "Chartered Accountant (Recipient of Merit Scholarship in Semester I)",
      title: "What Makes the Best MBA Program?",
      message:
        "What all piece together the best MBA program? Live sessions, interactions, flexible tools, hassle-free examination and more.",
    },
    {
      name: "Ankita Chatterjee",
      location: "Kolkata",
      batch: "MBA-Class of 2021- Batch II",
      role: "Manager, Experimental Laboratory @NIBG",
      title: "Business Environment & Law",
      message:
        "Business Environment & Law (BEL) course is interesting. It gives updates on country's economic affairs.",
    },
  ];

  const testimonial10 = [
    {
      name: "Manigandan. G",
      location: "Bangalore",
      batch: "MBA Class of 2021(Batch-II)",
      role: "Lead QA @ HSBC Electronic Data Processing (India) Pvt. Ltd.",
      title: "Recorded Video Lectures",
      message:
        "Missed the live sessions? Don't fret. The recorded lectures help you to learn and score.",
    },
  ];

  const testimonial11 = [
    {
      name: "Priyanka B",
      location: "Hyderabad",
      batch: "MBA Class of 2021 (Batch II)",
      role: "Entrepreneur",
      title: "SLiM",
      message:
        "SLiM (Short Learning Infographic Material) enables a quick recap, at the moment of need.",
    },
    {
      name: "Manigandan. G",
      location: "Bangalore",
      batch: "MBA Class of 2021(Batch-II)",
      role: "Lead QA @ HSBC Electronic Data Processing (India) Pvt. Ltd.",
      title: "SLiM",
      message:
        "SLiM (Short Learning Infographic Material) enables a quick recap, at the moment of need.",
    },
  ];

  const testimonial12 = [
    {
      name: "Deepak. R",
      location: "Port Moresby, Papua New Guinea",
      batch: "MBA-Class of 2021- Batch I",
      role: "Marketing Specialist @Auto Parts Online Ltd",
      title: "SLM",
      message:
        "Self Learning Material(SLM) Concepts in a nutshell. Truly self contained.",
    },
  ];

  const testimonial13 = [
    {
      name: "Pijush Kumar Chatterji",
      location: "Hyderabad",
      batch: "MBA-Class of 2021 - Batch III",
      role: "General Manager (sales and operation) @ ITC Limited",
      title: "Video Content",
      message:
        "Course materials are well researched and ably designed. VLE is an enabler to learning. Live classes, WPN and tutorials are also good. Workout Videos are superb.",
    },
    {
      name: "Sruthi. K",
      location: "Hyderabad",
      batch: "MBA-Class of 2021 - Batch I",
      role: "Student@ICFAI (Institute of Chartered Financial Accountants of India)",
      title: "Video Content",
      message:
        "Video Content? Five stars beyond a lecture capture - concept videos, PEP, case, workout and course intros. Feeling is believing!!",
    },
  ];

  const testimonial14 = [
    {
      name: "Sruthi. K",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Student@ICFAI (Institute of Chartered Financial Accountants of India)",
      title: "WhatsApp Tutorial",
      message: "  is learning at your fingertips, any time anywhere.",
    },
    {
      name: "Ankita Chatterjee",
      location: "Kolkata",
      batch: "MBA-Class of 2021- Batch II",
      role: "Manager, Experimental Laboratory @NIBG",
      title: " Tutorial",
      message:
        "Tutorials engage the students actively with the material. Helps in formative assessment and exercises.",
    },
    {
      name: "Mukesh S.M.",
      location: "Mumbai",
      batch: "MBA-Class of 2021- Batch I",
      role: "Sr Project Manager@ Infosys",
      title: "WhatsApp Tutorials",
      message:
        "WhatsApp, a boon or bane? You will vouch as boon, if you have tried out WhatsApp Tutorials.",
    },
    {
      name: "Priyanka B",
      location: "Hyderabad",
      batch: "MBA-Class of 2021- Batch II",
      role: "Entrepreneur",
      title: "Tutorials",
      message:
        "give you a space to engage actively with the course content. You also get to know your faculty and fellow students.",
    },
    {
      name: "Gunna Rasee Reddy",
      location: "Hyderabad",
      batch: "MBA-Class of 2021- Batch II",
      role: "Engineer @ UNISYS",
      title: "WhatsApp",
      message: " (tutorials) a day keeps the exam blues at bay.",
    },
  ];

  const testimonial15 = [
    {
      name: "Sruthi. K",
      location: "Hyderabad",
      batch: "MBA Class of 2021(Batch-I)",
      role: "Student@ICFAI (Institute of Chartered Financial Accountants of India)",
      title: "Work Study Balance,",
      message:
        " without a burnout? Flexible platform is the best answer. You decide the time and pace of study.",
    },
  ];
  const testimonial16 = [
    {
      name: "Manigandan. G",
      location: "Bangalore",
      batch: "MBA Class of 2021(Batch-II)",
      role: "Lead QA @ HSBC Electronic Data Processing (India) Pvt. Ltd.",
      title: "Work Place Narration",
      text: "Does your organisation benefit from your learning? You can foretell with Work Place Narration.",
    },
    {
      name: "Abdul Wahab",
      location: "Saudi Arabia",
      batch: "MBA Class of 2021(Batch-I)",
      role: "QC @ British Petroleum",
      title: "Work Place Narration",
      text: " It's always great to play on home turf- be it in cricket or MBA learning.",
    },
  ];
  return (
    <>
      <Seo
        title="Online MBA Course | UGC Entitled Online MBA"
        description="Your Search for the Best Online MBA College ends with ICFAI Online MBA. Electives enable you to study Online MBA in HR, Marketing, IT, Finance and Operations."
        keywords="Online MBA Admission 2021, IFHE, Hyderabad, best online mba courses, online mba marketing, ICFAI University, CDOE, Admission, Admission calendar, Enrolment Services, admission in Online MBA program, MBA, Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Center For Distance and Online Education in Hyderabad, Center For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org/program/testimonials"
      />
      ;
      <section className="features section pt-4 studentSpeak-section">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-3 col-12"
              data-aos-delay="200"
            >
              <ul
                className="nav nav-tabs sticky-top1 list-unstyled"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link active"
                    id="pills-Menu1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu1"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu1"
                    aria-selected="false"
                  >
                    <h4> Assessment</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu2"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu2"
                    aria-selected="false"
                  >
                    <h4>Collaborative Problem Solving</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu3"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu3"
                    aria-selected="false"
                  >
                    <h4> Discussion Forum</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu4"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu4"
                    aria-selected="false"
                  >
                    <h4>Examination</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu5"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu5"
                    aria-selected="false"
                  >
                    <h4>Faculty</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu6-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu6"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu6"
                    aria-selected="false"
                  >
                    <h4> Live Session</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu7-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu7"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu7"
                    aria-selected="false"
                  >
                    <h4>Mentor</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu8-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu8"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu8"
                    aria-selected="false"
                  >
                    <h4>Blended Learning</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu9-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu9"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu9"
                    aria-selected="false"
                  >
                    <h4>Pedagogy</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu10-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu10"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu10"
                    aria-selected="false"
                  >
                    <h4>Recorded Video</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu11-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu11"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu11"
                    aria-selected="false"
                  >
                    <h4>SLiM</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu12-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu12"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu12"
                    aria-selected="false"
                  >
                    <h4>SLM</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu13-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu13"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu13"
                    aria-selected="false"
                  >
                    <h4> Video Content</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu14-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu14"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu14"
                    aria-selected="false"
                  >
                    <h4> WhatsApp Tutorials</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu15-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu15"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu15"
                    aria-selected="false"
                  >
                    <h4> Work-Study Balance</h4>
                  </a>
                </li>
                <li className="nav-item mb-2 w-100" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-Menu16-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Menu16"
                    type="button"
                    role="tab"
                    aria-controls="pills-Menu16"
                    aria-selected="false"
                  >
                    <h4>WPN</h4>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9  ">
              <div
                className="tab-content facultyProfiles sticky-top1"
                id="pills-tabContent"
                data-aos-delay="300"
              >
                <div
                  className="tab-pane fade show active"
                  id="pills-Menu1"
                  role="tabpanel"
                  aria-labelledby="pills-Menu1-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial1.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 ">
                      <a
                        href="https://youtu.be/iT73IhIXjsc"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test1}
                            alt="test1"
                          />{" "}
                          <div className="card-body">
                            <p>Examines How You Apply Concept to Context</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/gW8qGyoPZDs"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test2}
                            alt="test2"
                          />
                          <div className="card-body">
                            <p>Spirited and Steady Win the Race</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu2"
                  role="tabpanel"
                  aria-labelledby="pills-Menu2-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial2.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/iZeXe7aLap8"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.peer}
                            alt="peer"
                          />
                          <div className="card-body">
                            <p>
                              Peer Learning: By the Students, For the Students
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu3"
                  role="tabpanel"
                  aria-labelledby="pills-Menu3-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000, // 5 seconds
                            disableOnInteraction: false, // autoplay doesn't stop after interaction
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial3.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu4"
                  role="tabpanel"
                  aria-labelledby="pills-Menu4-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial4.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-Menu5"
                  role="tabpanel"
                  aria-labelledby="pills-Menu5-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial5.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-3 ">
                      <a
                        href="https://youtu.be/INVhnYphXyE"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test3}
                            alt="test1"
                          />{" "}
                          <div className="card-body">
                            <p>Faculty: Imparts a Real Class Room Experience</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu6"
                  role="tabpanel"
                  aria-labelledby="pills-Menu6-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial6.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu7"
                  role="tabpanel"
                  aria-labelledby="pills-Menu7-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial7.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <a
                      href="https://youtu.be/3CV0jYNnmLw"
                      data-fancybox="gallery"
                      className="gallery-item"
                    >
                      <div className="col-md-3">
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test6}
                            alt="test1"
                          />
                          <div className="card-body">
                            <p>
                              Selection Process: It's About Enduring
                              Belongingness
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu8"
                  role="tabpanel"
                  aria-labelledby="pills-Menu8-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial8.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/COPDDqzTdS4"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test4}
                            alt="test4"
                          />
                          <div className="card-body">
                            <p>MBA Online: It’s About Dedication and Effort</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/jtDBrDIkY0k"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test7}
                            alt="test7"
                          />
                          <div className="card-body">
                            <p>Online Learning: Listening + Workout</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/aaciqsXbkEI"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test8}
                            alt="test8"
                          />
                          <div className="card-body">
                            <p>ICFAI Online: It’s Learner Friendly</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/NSHuSwmtMdE"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test5}
                            alt="test5"
                          />
                          <div className="card-body">
                            <p>
                              Successful Learning: Preparations and Execution
                              are 50:50
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/3MPcqlcRqzo"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test9}
                            alt="test5"
                          />
                          <div className="card-body">
                            <p>
                              Cafeteria Approach: Buffet of Electives, Just for
                              the Generalist
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/zaIYpWBk6DY"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test10}
                            alt="test10"
                          />
                          <div className="card-body">
                            <p>
                              Electives: Where the Menu Belongs to the Learner
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/5F1BTqcbcjc"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test11}
                            alt="test11"
                          />
                          <div className="card-body">
                            <p>Learning: Power of Interest Drives Learning</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/sKnJVxN2hdg"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test12}
                            alt="test12"
                          />
                          <div className="card-body">
                            <p>Learning Mix: Plate Your Favourite</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu9"
                  role="tabpanel"
                  aria-labelledby="pills-Menu9-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial9.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-end mt-3">
                    <a
                      rel="noreferrer"
                      href="https://youtu.be/sBRmm-1m_KQ"
                      target="_blank"
                      className="btn btn-danger"
                    >
                      {" "}
                      Know More about Glossary &nbsp; <FaYoutube />{" "}
                    </a>
                    <a
                      rel="noreferrer"
                      href="https://youtu.be/nHoh--ght28"
                      target="_blank"
                      className="btn btn-danger ms-2"
                    >
                      {" "}
                      Know More about Pedagogy &nbsp; <FaYoutube />{" "}
                    </a>
                  </p>
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/P66MSL30hnQ"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test13}
                            alt="test13"
                          />
                          <div className="card-body">
                            <p>Course Projects: Helps to Connect the Dots</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/2Yz1aYiJ_fk"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test14}
                            alt="test14"
                          />
                          <div className="card-body">
                            <p>
                              Electives: Mix & Match Helps All-Round Learning
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/re5QzTiTue4"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test15}
                            alt="test15"
                          />
                          <div className="card-body">
                            <p>
                              Flexible Learning: Platform We Provide, Plan You
                              Pick
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/Xvb4J7no7t0"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test16}
                            alt="test16"
                          />
                          <div className="card-body">
                            <p>
                              Projects @ Own Work: Benefits Self and the Firm
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/3-9ounaLzpE"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test17}
                            alt="test17"
                          />
                          <div className="card-body">
                            <p>
                              Case Studies: Complex Problems, Realistic
                              Solutions
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/anHqU6m2CSM"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test18}
                            alt="test18"
                          />
                          <div className="card-body">
                            <p>
                              ICFAI Online MBA: Be a Generalists’ Specialist
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/jUfBxxrTJW8"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test19}
                            alt="test19"
                          />
                          <div className="card-body">
                            <p>Glossary: That Extra Layer of Understanding</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu10"
                  role="tabpanel"
                  aria-labelledby="pills-Menu10-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial10.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu11"
                  role="tabpanel"
                  aria-labelledby="pills-Menu11-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial11.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                      <div className="float-end mt-3">
                        <a
                          href="https://www.youtube.com/watch?v=bv_sbTswvX8"
                          target="_blank"
                          className="btn btn-danger"
                        >
                          {" "}
                          Know More about SLiM &nbsp; <FaYoutube />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu12"
                  role="tabpanel"
                  aria-labelledby="pills-Menu12-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial12.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu13"
                  role="tabpanel"
                  aria-labelledby="pills-Menu13-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial13.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu14"
                  role="tabpanel"
                  aria-labelledby="pills-Menu14-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial14.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                      <div className="float-end mt-3">
                        <a
                          href="https://youtu.be/qrxZPVKxo6o"
                          target="_blank"
                          className="btn btn-danger"
                        >
                          {" "}
                          Know More about Tutorials &nbsp; <FaYoutube />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu15"
                  role="tabpanel"
                  aria-labelledby="pills-Menu15-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial15.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong>{" "}
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/MKMgNUKZYz8"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test20}
                            alt="test20"
                          />
                          <div className="card-body">
                            <p>Online MBA: Offline Minus Hassles</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/DFHm5jvPB6o"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test21}
                            alt="test4"
                          />
                          <div className="card-body">
                            <p>
                              Flexibility: Because No Two Students are Alike
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/RtlSmOnSGas"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test22}
                            alt="test22"
                          />
                          <div className="card-body">
                            <p>
                              ICFAI Online MBA: Where Learning Becomes a Way of
                              Life
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/YH7pN_JyJEY"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test23}
                            alt="test23"
                          />
                          <div className="card-body">
                            <p>
                              Time Constraint: Where There’s Drive, There’s Time
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/ne58lhNCS0Y"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test24}
                            alt="test24"
                          />
                          <div className="card-body">
                            <p>Online Study: Where the Time is Redefined</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-Menu16"
                  role="tabpanel"
                  aria-labelledby="pills-Menu16-tab"
                  tabindex="0"
                >
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-12">
                      <div className="testimonials">
                        <h1 className="title">Student Speak</h1>
                        <p>
                          Find what made our students say ICFAI has the best
                          online MBA course.
                        </p>

                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation={{
                            nextEl: ".carousel-control-next",
                            prevEl: ".carousel-control-prev",
                          }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          pagination={{ type: "fraction" }}
                          slidesPerView={1}
                          spaceBetween={30}
                        >
                          {testimonial16.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="testimonialsCard">
                                <div className="profileCard">
                                  <span className="profile-details">
                                    <h5 className="profileName">
                                      {item.name},{" "}
                                      <small>
                                        <i>{item.location}</i>
                                      </small>
                                    </h5>
                                    <p className="profileText">
                                      <small>
                                        <i>{item.batch}</i>
                                      </small>
                                      <br />
                                      {item.role}
                                    </p>
                                  </span>
                                  {/* <span className="profilePic"><img src="..." /></span> */}
                                </div>
                                <div className="contentCard">
                                  <p className="text">
                                    <strong>{item.title}:</strong> {item.text}
                                  </p>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <div className="carousel-control-prev" role="button">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                        <div className="carousel-control-next" role="button">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only"> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <a
                        href="https://youtu.be/em8c7YipVqg"
                        data-fancybox="gallery"
                        className="gallery-item"
                      >
                        <div className="card border-0 shadow-sm">
                          <img
                            className="img-fluid rounded-top-3"
                            src={assets.test25}
                            alt="test25"
                          />
                          <div className="card-body">
                            <p>Workplace Project: Uncover A Better Equation</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studentspeak;
