import { servicesData } from "@/lib/mockData/servicesData";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./serviceCard";

const Services = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <section id="services" className="services section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>Latest Services</h3>
          <span />
        </div>
        <div className="service-item-wrapper">
          {servicesData.map((service, index) => {
            return (
              <ServiceCard
                key={service.id}
                index={index}
                service={service}
                activeId={activeId}
                toggleItem={toggleItem}
              />
            );
          })}
        </div>
        <div
          className="view-all-btn-wrapper wow fadeInUp"
          data-wow-delay="1.3s"
        >
          <Link to="#" className="bttn-round">
            <span className="btn-txt">
              View All <i className="bi bi-arrow-up-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
