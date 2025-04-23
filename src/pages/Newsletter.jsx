import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import assets from "../assets/assets";
import Seo from "../components/Seo";

const Newsletter = () => {
  <Seo
    title="ICFAI Online MBA | Best University for Online MBA in India"
    description="Content is presented as nuggets in multiple formats which takes 2 to 15 minutes of time. Multi-format content is dominated by a carefully designed Concept in Context"
    keywords="IFHE, Online Learning Experience, Micro-learning, P2P exercises, Online MBA, Gamification, Distance and Online MBA, Executive MBA Programs in Hyderabad, HRM, Best Centre For Distance and Online Education in Hyderabad, Centre For Distance and Online Education, Executive MBA programs in India, MBA marketing online, Distance Online program, MBA in Financial Management, Services marketing, SMACS Technologies for Business, Strategic Marketing Management, MBA in International Marketing, MBA in Retail Management, MBA in Supply Chain Management, Big Data & Analytics, MBA in HR, MBA in Strategic Human Resource Management, Best distance learning University in India, Best Online MBA program in Hyderabad."
    canonical="https://online.ifheindia.org/happenings/newsletter"
  />;
  const newsletters = [
    {
      title: "Newsletter Volume: 2 Issue No:2 - March 2025",
      link: assets.eNewsletterMarch2025,
    },
    {
      title: "Newsletter Volume: 2 Issue No:1 - January 2025",
      link: assets.NewsletterIssueJanuary2025,
    },
    {
      title: "Newsletter Volume: 1 Issue No:6 - November 2024",
      link: assets.NewsletterSixthIssueNovember24,
    },
    {
      title: "Newsletter Volume: 1 Issue No:5 - September 2024",
      link: assets.NewsletterFifthIssueSept2024,
    },
    {
      title: "Newsletter Volume: 1 Issue No:4 - July 2024 ",
      link: assets.NewsletterJuly2024,
    },
    {
      title: "Newsletter Volume: 1 Issue No:3 - May 2024",
      link: assets.Newsletter3rdIssueMay2024,
    },
    {
      title: "Newsletter Volume: 1 Issue No:2 - March 2024",
      link: assets.Newsletter2ndIssueMar2024,
    },
    {
      title: "Newsletter Volume: 1 Issue No:1 - December 2023",
      link: assets.Newsletter1stIssueDec2023,
    },
  ];
  return (
    <>
      <section className="Common-Section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="breadcrumbs pb-0">
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Happenings</li>
                  <li>Newsletter</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {newsletters.map((newsletter, index) => (
              <div
                key={index}
                className="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 g-2"
              >
                <div className="card border shadow-sm h-100">
                  <div className="card-body">
                    <a
                      href={newsletter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex flex-wrap align-items-center gap-2 pdf-link"
                    >
                      <BsFileEarmarkPdf className=" text-danger" />
                      <span className="text-wrap">{newsletter.title}</span>
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
