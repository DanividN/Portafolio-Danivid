import { servicesData } from "@/lib/mockData/servicesData";
import { useState } from "react";
import ServiceCard from "./serviceCard";

const Services = () => {
  const [activeId, setActiveId] = useState<number | null>(0);

  const toggleItem = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <section id="services" className="services section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>Servicios</h3>
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
      </div>
    </section>
  );
};

export default Services;
