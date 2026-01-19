import { pricingPlansData } from "@/lib/mockData/priceData";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section-mt">
      <div className="pricing-wrapper">
        <div className="container">
          <div className="section-title wow fadeInUp" data-wow-delay=".3s">
            <h3>Pricing</h3>
            <span />
          </div>
          <div className="pricing-item-wrapper row g-lg-5 g-md-4 g-3">
            {pricingPlansData.map((plan) => (
              <div key={plan.id} className="col-xl-4 col-md-6">
                <div
                  className="pricing-item d-flex flex-column justify-content-between wow fadeInUp"
                  data-wow-delay={plan.wowDelay}
                >
                  <div>
                    <h6>{plan.title}</h6>
                    <h3>
                      {plan.price.split(" ")[0]}
                      <span> {plan.price.replace(/^\$\d+\s*/, "")}</span>
                    </h3>
                    <p>{plan.yearly}</p>
                    <div className="feature">
                      <h6>Includes</h6>
                    </div>
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button type="button">Pick This Package</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
