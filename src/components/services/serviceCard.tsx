import type { Service } from "@/lib/mockData/servicesData";
import AnimateHeight from "react-animate-height";
import { Link } from "react-router-dom";

type PropsType = {
  service: Service;
  index: number;
  activeId: number | null;
  toggleItem: (id: number) => void;
};

const ServiceCard = ({ service, index, activeId, toggleItem }: PropsType) => {
  const isActive = activeId === index;
  return (
    <div
      className={`service-item ${isActive ? "is-active" : ""} wow fadeInUp`}
      data-wow-delay={`${0.5 + index * 0.2}s`}
      onClick={() => toggleItem(index)}
    >
      <div className="service-txt">
        <span className="service-thumb">{service.title}</span>
        <AnimateHeight duration={300} height={isActive ? "auto" : 0}>
          <ul className="service-panel">
            {service.features.map((feature, i) => (
              <li key={i}>+ {feature}</li>
            ))}
          </ul>
        </AnimateHeight>
      </div>
      <AnimateHeight
        duration={300}
        height={isActive ? "auto" : 0}
        className="ms-auto"
      >
        <div className="btn-wrapper ms-auto">
          <Link to="#" className="bttn-round modal-popup" data-mfp-src="#popup">
            <span className="btn-txt">
              View <i className="bi bi-arrow-up-right" />
            </span>
          </Link>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default ServiceCard;
