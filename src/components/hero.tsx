import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero section-pt">
      <div className="section-wrapper">
        <div className="container position-relative">
          <div className="bg-line" />
          <div className="profile-pic-wrapper">
            <img
              width={652}
              height={594}
              className="profile-bg"
              src="/images/hero/profile-pic-bg.png"
              alt="background"
            />
            <img
              width={501}
              height={526}
              className="profile-pic wow fadeInLeft"
              data-wow-delay=".9s"
              src="/images/hero/profile-pic.png"
              alt="creativemela"
            />
          </div>
          <div className="contact-rotate-wrapper">
            <img
              width={128}
              height={128}
              className="contact-me-rotate"
              src="/images/hero/contact-me-txt.svg"
              alt="contact me"
            />
            <Link to="#contact" className="contact-me-arrow">
              <img
                width={74}
                height={74}
                src="/images/hero/contact-me-arrow.svg"
                alt="arrow"
              />
            </Link>
          </div>
          <div
            className="d-flex align-items-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            <h6>Hola!&nbsp;</h6>
            <img
              width={20}
              height={20}
              className="hi-icon"
              src="images/hero/hi.svg"
              alt="hi"
            />
            <h6>&nbsp;Mi nombre es</h6>
          </div>
          <h1 className="wow fadeInUp" data-wow-delay=".6s">
            Danivid Neri Pichardo
          </h1>
          <div className="row">
            <div className="col-xl-4 col-lg-4" />
            <div className="col-xl-6 col-lg-8">
              <h6
                className="intro-info d-none d-md-block wow fadeInUp"
                data-wow-delay=".9s"
              >
                Soy ingeniero en TIC’s y desarrollador web con más de tres años
                de experiencia. Trabajo principalmente con Laravel y React, y me
                apasiona crear soluciones tecnológicas eficientes y bien
                diseñadas.
              </h6>
            </div>
            <div className="col-xl-2" />
          </div>
          <div className="d-none d-md-block">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-8">
                <div className="d-flex align-items-center flex-wrap flex-xxl-nowrap gap-4 gap-lg-5 gap-xxl-0">
                  <div
                    className="btn-wrapper d-flex align-items-center wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <Link to="#contact">
                      <button type="button" className="bttn bttn-primary">
                        Contacto <i className="bi bi-arrow-up-right" />
                      </button>
                    </Link>
                    <button type="button" className="bttn bttn-secondary">
                      Descargar CV <i className="bi bi-arrow-up-right" />
                    </button>
                  </div>
                  <img
                    width={133}
                    height={20}
                    className="lg-arrow wow fadeInUp"
                    data-wow-delay="1.6s"
                    src="images/hero/lg-arrow.svg"
                    alt="arrow"
                  />
                  <ul
                    className="social-media d-flex align-items-center wow fadeInLeft"
                    data-wow-delay="1.9s"
                  >
                    <li>
                      <Link to="http://www.facebook.com" target="_blank">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com" target="_blank">
                        <i className="fa-brands fa-x-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.behance.net" target="_blank">
                        <i className="fa-brands fa-behance" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://dribbble.com" target="_blank">
                        <i className="fa-brands fa-dribbble" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className="profession wow fadeInUp" data-wow-delay="1.0s">
            UI UX DESIGNER
          </span>
          <div className="m-content d-flex flex-wrap d-block d-md-none">
            <h6 className="intro-info wow fadeInUp" data-wow-delay="1.2s">
              I believe that collaboration and creativity are the essence of
              progress. And i am dedicated to bringing a fresh perspe to every
              project undertake.
            </h6>
            <button type="button" className="bttn bttn-primary">
              Let’s Talk <i className="bi bi-arrow-up-right" />
            </button>
            <button type="button" className="bttn bttn-secondary">
              Download CV <i className="bi bi-arrow-up-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
