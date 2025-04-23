import React from "react";
import mediaPdf from "../assets/mediaPdf";
import { LuTvMinimalPlay } from "react-icons/lu";
import Seo from "../components/Seo";

const Media = () => {
  const mediaCoverageData = [
    {
      title: "Gamification in E-Commerce: Opportunities & Challenges",
      links: [
        {
          label: "Financial Express 10-08-2022",
          url: mediaPdf.FinancialExpress10082022,
        },
      ],
    },
    {
      title: "Energy Storage Solutions: The Way Ahead",
      links: [
        {
          label: "Financial Express 06-06-2022",
          url: mediaPdf.FinancialExpress06062022,
        },
        {
          label: "United News of India 04-06-2022",
          url: mediaPdf.UnitedNewsofIndia04062022,
        },
        {
          label: "Daily Excelsior-com 05-06-2022",
          url: mediaPdf.DailyExcelsiorcom05062022,
        },
      ],
    },
    {
      title: "Why Good Companies Fail?",
      links: [
        {
          label: "United News of India 28-05-2022",
          url: mediaPdf.UnitedNewsofIndia28052022,
        },
      ],
    },
    {
      title: "AI Powered Atmanirbharta",
      links: [
        {
          label: "The Times of India 23-05-2022",
          url: mediaPdf.TheTimesofIndia23052022,
        },
        {
          label: "The Knowledge Review 21-05-2022",
          url: mediaPdf.TheKnowledgeReview21052022,
        },
        {
          label: "Businessfortnight 24-05-20222",
          url: mediaPdf.Businessfortnight240520222,
        },
      ],
    },
    {
      title: "CASE STUDIES: Business Practice, Research & Learning",
      links: [
        {
          label: "Brainfeed Higher Education 17-05-2022",
          url: mediaPdf.BrainfeedHigherEducation17052022,
        },
      ],
    },
    {
      title:
        "CARE vs CURE Implications for Maternal & Child Healthcare Management",
      links: [
        {
          label: "Financial Express 09-05-2022",
          url: mediaPdf.FinancialExpress09052022,
        },
      ],
    },
    {
      title: "Article on Online MBA - Edugraph - The Telegraph - 08-05-2022",
      links: [
        {
          label:
            "Article on Online MBA published in 'Edugraph' a spl feature published in The Telegraph, Kolkata on May 08, 2022",
          url: mediaPdf.ArticleonOnlineMBAEdugraphTheTelegraph08052022,
        },
      ],
    },
    {
      title: "Sports as a Social Mission: The Case of Slum Soccer",
      links: [
        {
          label: "Businessfortnight.com 24-04-2022",
          url: mediaPdf.Businessfortnightcom24042022,
        },
        {
          label: "Brainfeed Higher Education Plus 24-04-2022",
          url: mediaPdf.BrainfeedHigherEducationPlus24042022,
        },
      ],
    },
    {
      title:
        "When Food Is Right Medicine Is of No Need - Opportunities in Farming, Food Processing & Retail",
      links: [
        {
          label: "Financial Express(print) - 28-03-2022",
          url: mediaPdf.FinancialExpress28032022,
        },
        {
          label: "Higher Education Review( online) - 25-03-2022",
          url: mediaPdf.HigherEducationReview25032022,
        },
      ],
    },
    {
      title: "From Child Labour to Education: Innovations from the Pandemic",
      links: [
        {
          label: "United News of India (online) - 12-03-2022",
          url: mediaPdf.UnitedNewsofIndia12032022,
        },
      ],
    },
    {
      title: "Digital Transformation in The Financial World",
      links: [
        {
          label: "BusinessLine on Campus (online) - 08-03-2022",
          url: mediaPdf.BusinessLineonCampus08032022,
        },
        {
          label: "The Academic Insights(online) - 07-03-2022",
          url: mediaPdf.TheAcademicInsights07032022,
        },
      ],
    },
    {
      title: "View the World with a Digital Tilt: The Brightcom Way",
      links: [
        {
          label: "United News of India (online) _28-02-2022",
          url: mediaPdf.UnitedNewsofIndia28022022,
        },
      ],
    },
    {
      title: "There's a Brand Within You",
      links: [
        {
          label: "Financial Express(print) 21-02-2022",
          url: mediaPdf.FinancialExpress21022022,
        },
      ],
    },
    {
      title: "Sensory Branding Strategies: The Cream Stone Way",
      links: [
        {
          label: "Higher Education Plus (online)_17-02-2022",
          url: mediaPdf.HigherEducationPlus17022022,
        },
        {
          label: "Financial Express( print)_14-02-2022",
          url: mediaPdf.FinancialExpress14022022,
        },
      ],
    },
    {
      title: "Leadership for Social Purpose: The Case of Amala Akkineni",
      links: [
        {
          label: "The Knowledge Review (online)_31-01-2022",
          url: mediaPdf.TheKnowledgeReview31012022,
        },
        {
          label: "The Academic Insights (online) _31-01-2022",
          url: mediaPdf.TheAcademicInsights31012022,
        },
        {
          label: "Recruitment Gov_ (online) 31-01-2022",
          url: mediaPdf.RecruitmentGov31012022,
        },
      ],
    },
    {
      title: "Environics: Applications for Health & Well-being",
      links: [
        {
          label: "Brainfeed Higher Education Plus (online)_22-01-2022",
          url: mediaPdf.BrainfeedHigherEducationPlus22012022,
        },
        {
          label: "Bhartiya Yojanaye (online) - 22-01-2022",
          url: mediaPdf.BhartiyaYojanaye22012022,
        },
        {
          label: "My News 24x7 (online) - 22-01-20222",
          url: mediaPdf.MyNews247220120222,
        },
        {
          label: "Odisha Expo - (online) 22-01-2022",
          url: mediaPdf.OdishaExpo22012022,
        },
      ],
    },
    {
      title: "Emerging Tech for Social Good - The Case of Marut Drones",
      links: [
        {
          label: "Financial Express (print)_20-01-2022",
          url: mediaPdf.FinancialExpress20012022,
        },
        {
          label: "TimestechNow (online) _19-01-2022",
          url: mediaPdf.TimestechNow19012022,
        },
      ],
    },
    {
      title: "Brand Bheem: Local Story Going Global",
      links: [
        {
          label: "United News of India - (online) 08-01-2022",
          url: mediaPdf.UnitedNewsofIndia08012022,
        },
        {
          label: "Brainfeed Higher Education Plus (online) _12-01-2022",
          url: mediaPdf.BrainfeedHigherEducationPlus12012022,
        },
      ],
    },
    {
      title: "Formalizing Entrepreneurship over a cup of tea.",
      links: [
        {
          label: "United News of India - ( Online) 01-01-2022",
          url: mediaPdf.UnitedNewsofIndia01012022,
        },
        {
          label: "Timestech Now-Com - ( online) 31-12-2021",
          url: mediaPdf.TimestechNowCom31122021,
        },
        {
          label: "Incubees - (Online) 03-01-2022",
          url: mediaPdf.Incubees03012022,
        },
        {
          label: "The Knowledge Review - (online) 31-12-2021",
          url: mediaPdf.TheKnowledgeReview31122021,
        },
        {
          label: "Financial Express - (print) 20-01-2022",
          url: mediaPdf.FinancialExpress20012022,
        },
      ],
    },
    {
      title: "The Times of India - Jan 26, 2022",
      links: [
        {
          label: "The Times of India - Jan 26, 2022",
          url: mediaPdf.TOIAP26122,
        },
      ],
    },
    {
      title: "ICFAI conducts webinar on Healthcare Entrepreneurship",
      links: [
        {
          label: "Financial Express_ (Print) 27-12-2021",
          url: mediaPdf.FinancialExpress27122021,
        },
        {
          label: "United News of India_ (OL) 25-12-2021",
          url: mediaPdf.UnitedNewsofIndia25122021,
        },
      ],
    },
    {
      title:
        "Calendar system in the organization yields better performance: Mr Murlidharan",
      links: [
        {
          label: "The Knowledge Review - 10-12-2021",
          url: mediaPdf.TheKnowledgeReview10122021,
        },
      ],
    },
    {
      title: "Corporate India and the new focus on ESG",
      links: [
        {
          label: "Telangana Today - 12-12-2021",
          url: mediaPdf.TelanganaToday12122021,
        },
        {
          label: "United News of India - 13-12-2021",
          url: mediaPdf.UnitedNewsofIndia13122021,
        },
        {
          label: "Deccan News - 11-12-2021",
          url: mediaPdf.DeccanNews11122021,
        },
        {
          label: "Telangana Today - 11-12-2021",
          url: mediaPdf.TelanganaToday11122021,
        },
      ],
    },
    {
      title:
        "Investing in India: New Investment Opportunities and Game Changers",
      links: [
        {
          label: "Telangana Today - 29-11-2021",
          url: mediaPdf.TelanganaToday29112021,
        },
        {
          label: "Financial Express - 03-12-2021",
          url: mediaPdf.FinancialExpress03122021,
        },
        {
          label: "Telangana Today - 28-11-2021",
          url: mediaPdf.TelanganaToday28112021,
        },
        {
          label: "The Academic Insights - 27-11-2021",
          url: mediaPdf.TheAcademicInsights27112021,
        },
        {
          label: "The Knowledge Review - 27-11-2021",
          url: mediaPdf.TheKnowledgeReview27112021,
        },
        {
          label: "Xing Wu - 28-11-2021",
          url: mediaPdf.XingWu28112021,
        },
      ],
    },
    {
      title: "Finding purpose; the journey from campus through career",
      links: [
        {
          label: "Business Line on Campus 08-11-2021",
          url: mediaPdf.BusinessLineonCampus08112021,
        },
        {
          label: "Knowledge Review 08-11-2021",
          url: mediaPdf.KnowledgeReview08112021,
        },
      ],
    },
    {
      title:
        "Leadership for Social Impact: Perspectives from Safai Karmacharis",
      links: [
        {
          label: "Knowledge Review 30-10-2021",
          url: mediaPdf.KnowledgeReview30102021,
        },
      ],
    },
    {
      title:
        "Crisis in World Financial Management - Implications for Growth for Indian Business",
      links: [
        {
          label: "Telangana Today - 22-11-2021",
          url: mediaPdf.TelanganaToday22112021Print,
        },
        {
          label: "Telangana Today - 21-11-2021",
          url: mediaPdf.webinarongrowthofindianbusinesses,
        },
        {
          label: "BusinessLine on Campus- 20-11-2021",
          url: "https://bloncampus.thehindubusinessline.com/b-school-corner/we-need-to-produce-more-entrepreneurs-than-hustlers/article37597075.ece",
        },
        {
          label: "NEWS Logged - 21-11-2021",
          url: "", // No URL provided
        },
        {
          label: "How to Assetmanage - 21-11-2021",
          url: "https://howtoassetmanage.com/webinar-on-growth-of-indian-businesses/",
        },
      ],
    },
    {
      title:
        "Finding purpose; the journey from campus through career - 5th Nov 2021",
      links: [
        {
          label: "Business Line on Campus 08-11-2021",
          url: mediaPdf.BusinessLineonCampus08112021,
        },
        {
          label: "Knowledge Review 08-11-2021",
          url: mediaPdf.KnowledgeReview08112021,
        },
      ],
    },
    {
      title:
        "Transforming a heritage business - the journey of Paradise Biryani on 10th Sep 2021",
      links: [
        {
          label: "Telangana Today - online 12-09-2021",
          url: mediaPdf.TelanganaToday12092021,
        },
        {
          label: "Adda9-Com online 12-09-2021",
          url: mediaPdf.Adda9Com12092021,
        },
        {
          label: "Sakshi Telugu Daily Pprint 14-09-2021",
          url: mediaPdf.Sakshi14092021,
        },
        {
          label: "Disha Telugu Daily online 12-09-20021",
          url: mediaPdf.Disha120920021,
        },
      ],
    },
    {
      title:
        "From a Caterpillar to a Butterfly: a Natural(s) Story - 3rd Sep 2021",
      links: [
        {
          label: "The Knowledge Review online 06-09-2021",
          url: mediaPdf.TheKnowledgeReview06092021,
        },
        {
          label: "Financial Express print 06-09-2021",
          url: mediaPdf.FinancialExpress06092021,
        },
        {
          label: "News Blare online 06-09-2021",
          url: mediaPdf.NewsBlare06092021,
        },
        {
          label: "Athithi Telugu Magazine Print Sept Issue 2021",
          url: mediaPdf.AthithiTeluguMagazineSeptIssue2021,
        },
      ],
    },
    {
      title:
        "Innovation led Globalization and Diversification: The Journey of Cycle Pure Agarbathies",
      links: [
        {
          label: "Financial Express (Print) 30-8-2021",
          url: mediaPdf.FinancialExpress30082021,
        },
        {
          label: "knowledge review (online) 30-8-2021",
          url: mediaPdf.knowledgereviewOnline24082021,
        },
      ],
    },
    {
      title:
        "Reflection of a Technology Entrepreneur - August 06, 2021, @6:30pm by Dr. BVR Mohan Reddy Founder Chairman, Cyient Ltd.",
      links: [
        {
          label: "Telangana Today - 08-08-2021 - Print",
          url: mediaPdf.TelanganaToday08082021Print,
        },
        {
          label: "Telangana Today - 11-08-2021 Online",
          url: mediaPdf.TelanganaToday11082021,
        },
        {
          label: "Knowledge Review - 08-08-2021 Online",
          url: mediaPdf.KnowledgeReview08082021,
        },
        {
          label: "Deccan News - 07-08-2021 Online",
          url: mediaPdf.DeccanNews07082021,
        },
        {
          label: "Djibout News - 08-08-2021 Online",
          url: mediaPdf.DjiboutNews08082021,
        },
        {
          label: "India News - 08-08-2021 Online",
          url: mediaPdf.IndiaNews08082021,
        },
      ],
    },
    {
      title:
        "The China Story - Lessons for Indian Industry - July 30, 2021, @6:30pm by Dr. Mrityunjay Athreya, Leading Management Thinker",
      links: [
        {
          label: "Telangana Today - 02-08-2021 - Print Edition",
          url: mediaPdf.TelanganaToday02082021PrintEdition,
        },
        {
          label: "BLoC - 01-08-2021 (Online)",
          url: mediaPdf.BLoC01082021,
        },
        {
          label: "Telangana Today - 01-08-2021 (Online)",
          url: mediaPdf.TelanganaToday01082021,
        },
        {
          label: "Knowledge Review - 01-08-2021 (Online)",
          url: mediaPdf.KnowledgeReview01082021,
        },
      ],
    },
    {
      title:
        'Webinar on "The Responsibility of Leadership" - 23rd Jul 2021 @ 6:30 PM by Ms. Vinita Bali, Business Leader;',
      links: [
        {
          label: "United News of India - 24-07-2021",
          url: mediaPdf.UNI24072021,
        },
        {
          label: "The Knowledge Review - 24-07-2021",
          url: mediaPdf.KnowledgeReview24072021,
        },
        {
          label: "IBC World News - 24-07-2021",
          url: mediaPdf.IBC24072021,
        },
      ],
    },
    {
      title:
        "Webinar on “Building & Communicating a Public Image: Strategies for Working Professionals”, by Mr L V Navaneeth, CEO, The Hindu Group of Publications on 16th Jul, 2021",
      links: [
        {
          label: "Business Line on Campus - 18-07-2021",
          url: mediaPdf.BLoC18072021,
        },
        {
          label: "The Knowledge Review - 20-07-2021",
          url: mediaPdf.KnowledgeReview20072021,
        },
      ],
    },
    ,
    {
      title:
        'Webinar on "Leadership, Life Lessons, Inspiration" - 9th Jul 2021 @ 6:30 PM by Mr. Harish Bhat',
      links: [
        {
          label: "Business Line on Campus - 15-7-2021",
          url: mediaPdf.BusinessLineonCampus1572021,
        },
        {
          label: "United News of India - 10-7-2021",
          url: mediaPdf.UnitedNewsofIndia1072021,
        },
        {
          label: "Business Fortnight - 13-7-2021",
          url: mediaPdf.BusinessFortnight1372021,
        },
        {
          label: "Knowledge Review - 13-7-2021",
          url: mediaPdf.knowledgeReview1372021,
        },
      ],
    },
    {
      title:
        "Emerging Business Models & Opportunities for existing businesses in post-pandemic world",
      links: [
        {
          label: "Telangana Today - 03-07-2021",
          url: mediaPdf.TelanganaToday03072021,
        },
        {
          label: "Deccan News - 03-07-2021",
          url: mediaPdf.DeccanNews03072021,
        },
        {
          label: "Knowledge Review - 03-07-2021",
          url: mediaPdf.KnowledgeReview03072021,
        },
        {
          label: "Higher Education Review - 03-07-2021",
          url: mediaPdf.HigherEducationReview03072021,
        },
        {
          label: "News Headlines 4 - 03-07-2021",
          url: mediaPdf.NewsHeadlines403072021,
        },
        {
          label: "Property Management - 03-07-2021",
          url: mediaPdf.PropertyManagement03072021,
        },
      ],
    },
    ,
    {
      title: "The Big Bad World of Bad Money",
      links: [
        {
          label: "Higher Education Review - June 25th, 2021",
          url: mediaPdf.HigherEducationReview28062021,
        },
        {
          label: "The Knowledge Review - June 25th, 2021",
          url: mediaPdf.KnowledgeReview28062021,
        },
        {
          label: "Sakshi - Telugu Daily - June 29th, 2021",
          url: mediaPdf.Sakshi29062021,
        },
      ],
    },
    {
      title: "Role of Digital in Reimagining Ops/Supply Chain",
      links: [
        {
          label: "Telangana Today 20th, 2021",
          url: mediaPdf.TelanganaToday20062021Print,
        },
        {
          label: "The Hans India 21th, 2021",
          url: mediaPdf.TheHansIndia21062021Print,
        },
        {
          label: "Telangana Today 19th, 2021",
          url: mediaPdf.TelanganaToday19062021Online,
        },
        {
          label: "The Hans India 21th, 2021",
          url: mediaPdf.TheHansIndia21062021Online,
        },
        {
          label: "Deccan News 19th, 2021",
          url: mediaPdf.DeccanNews19062021Online,
        },
        {
          label: "Knowledge Review 19th, 2021",
          url: mediaPdf.KnowledgeReview19062021Online,
        },
      ],
    },
    ,
  ];

  return (
    <>
      <Seo
        title="ICFAI Online MBA | Best University for Online MBA in India"
        description="Content is presented as nuggets in multiple formats which takes 2 to 15 minutes of time.
         Multi-format content is dominated by a carefully designed Concept in Context"
        keywords="IFHE, Online Learning Experience, Micro-learning, P2P exercises, Online MBA, Gamification, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
        canonical="https://online.ifheindia.org//happenings/media"
      />
      <section className="teaching-learning-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="title">Media Coverage</h2>
            </div>
            <div className="col-xl-12 my-3">
              <div className="card border-0 shadow">
                <div className="card-body">
                  {mediaCoverageData.map((item, index) => (
                    <div className="mb-3" key={index}>
                      <h6>{item.title}</h6>
                      <div className="row">
                        {item.links.map((link, i) => (
                          <div className="col-md-4 mb-3">
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                  <div>
                                    <LuTvMinimalPlay className="fs-5 text-danger " />
                                  </div>
                                  {link.label}
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
