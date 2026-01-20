import { portfolioData } from "@/lib/mockData/portfolioData";
import { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioDetailsPopUp from "./portfolioDetailsPopUp";
import { h5 } from "motion/react-client";

const filters = [
  { label: "Todos los Sistemas", filter: "all" },
  { label: "Sistemas Web", filter: "sistemas" },
  { label: "Paginas Web", filter: "paginas" },
];
const Portfolio = () => {
  const [selectedCategory, setselectedCategory] = useState("all");

  const filteredItems = portfolioData.filter(({ category }) => {
    if (selectedCategory === "all") return true;
    return category.includes(selectedCategory);
  });

  return (
    <section id="portfolio" className="projects section-mt">
      <div className="projects-wrapper">
        <div className="container">
          <div className="section-title-wrapper row">
            <div className="col-xxl-5 col-12">
              <div className="section-title wow fadeInUp" data-wow-delay=".3s">
                <h3>Últimos Proyectos</h3>
                <span />
              </div>
            </div>
            <div className="col-xxl-7 col-12">
              {/* filter buttons */}
              <nav className="project-filter">
                <ul
                  className="d-flex flex-wrap justify-content-xxl-end wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  {filters.map((f, i) => (
                    <li key={i} onClick={() => setselectedCategory(f.filter)}>
                      <span
                        className={
                          f.filter === selectedCategory ? "active" : ""
                        }
                        data-filter={f.filter}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="projects-container">
            {/* <div className="gutter-sizer" /> */}
            {filteredItems.map((project, index) => (

              <div
                key={project.id}
                className={`grid-item ${
                  project.size ?? ""
                } ${project.category.join(" ")} wow fadeInUp`}
                data-wow-delay={`${0.6 + index * 0.2}s`}
              >
                <div className="project-item ">
                  <figure>
                    <img
                      width={746}
                      height={529}
                      src={project.img}
                      alt={project.title}
                    />
                  </figure>
                  <div className="overlay-content">
                    <PortfolioDetailsPopUp liga={project.link} />

                    {project.user === "admin@gmail.com" ? (
                      <h6 className="title">
                        <strong>{project.title}:</strong> User:{project.user}, Pass:{project.pwd}
                      </h6>
                    ) : (
                      <h4 className="title">{project.title}</h4>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
