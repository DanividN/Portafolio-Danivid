import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="about section-pt">
      <div className="container wow fadeInUp" data-wow-delay=".3s">
        <div className="section-title">
          <h3>About Me</h3>
          <span />
        </div>
        <h3 className="about-info wow fadeInUp" data-wow-delay=".4s">
          I am a Senior UX/UI Designer with over 15 years of experience in{" "}
          <span className="txt-orange">Envato</span> market. I have worked with
          large companies &amp; challenges throughout my career.
        </h3>
        <div className="row">
          <div className="col-md-6 d-inline-flex flex-column justify-content-between">
            <div className="year-exp wow fadeInLeft" data-wow-delay=".5s">
              <div className="year-exp-txt text-center text-md-start">
                <span>15+</span>
                <h4 className="text-center text-md-start">
                  Years
                  <br />
                  Experience
                </h4>
              </div>
            </div>
            <Link to="#" className="bttn-round">
              <span className="btn-txt">
                About Me <i className="bi bi-arrow-up-right" />
              </span>
            </Link>
          </div>
          <div className="col-md-6">
            <figure className="wow fadeInRight" data-wow-delay=".5s">
              <img
                width={636}
                height={614}
                src="/images/about/profile-pic.png"
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
