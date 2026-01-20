import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="about section-pt">
      <div className="container wow fadeInUp" data-wow-delay=".3s">
        <div className="section-title">
          <h3>Acerca de mí</h3>
          <span />
        </div>
        <h3 className="about-info wow fadeInUp" data-wow-delay=".4s">
          Soy ingeniero en TIC’s y desarrollador web con más de 4 años de
          experiencia. Trabajo principalmente con{" "}
          <span className="txt-orange">Laravel</span>, tecnología con la que
          tengo cuatro años de práctica, y cuento con un año de experiencia
          usando <span className="txt-orange">React</span> para el desarrollo
          frontend.
        </h3>
        <div className="row">
          <div className="col-md-6 d-inline-flex flex-column justify-content-between">
            <div className="year-exp wow fadeInLeft" data-wow-delay=".5s">
              <div className="year-exp-txt text-center text-md-start">
                <span>4+</span>
                <h4 className="text-center text-md-start">
                  Años
                  <br />
                  de Experiencia
                </h4>
              </div>
            </div>
            <Link to="#" className="bttn-round">
              <span className="btn-txt">
                Acerca de mí <i className="bi bi-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="col-md-6">
            <figure className="wow fadeInRight" data-wow-delay=".5s">
              <img
                width={636}
                height={614}
                src="/images/hero/danivindnp.png"
                alt="creativemela"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
