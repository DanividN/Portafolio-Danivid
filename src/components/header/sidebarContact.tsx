import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

const SidebarContact = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className={`subside-barmenu sub-contact ${
          isSidebarOpen ? "active" : ""
        }`}
      >
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="remove-click d-flex justify-content-center align-items-center"
        >
          <i className="bi bi-x-lg" />
        </div>
        <div className="sub-contact-wrapper d-grid">
          {/* <Link to="index-2.html" class="side-logo">
              <img src="assets/img/logo/logo.png" alt="img">
          </a> */}
          <Link to="/" className="logo">
            <h4>
              D<span className="txt-orange">ani</span>vid
            </h4>
          </Link>
          <p>
            Estoy disponible para proyectos freelance o colaboraciones. ¡Hablemos!
          </p>
          <div className="sub-contact-left d-grid">
            <div className="sub-contac-item">
              <div className="address-widget">
                <span className="address d-block">Dirección</span>
                <span className="textp">Metepec, Estado de México</span>
              </div>
            </div>
            <div className="sub-contac-item">
              <div className="address-widget">
                <span className="address d-block">email</span>
                <Link to="#" className="textp">
                  <a href="mailto:danividnerip@email.com">danividnerip@email.com</a>
                </Link>
              </div>
            </div>
            <div className="sub-contac-item">
              <div className="address-widget">
                <span className="address d-block">Teléfono</span>
                <Link to="jasacript:void(0)" className="textp">
                  +52 7227861343
                </Link>
              </div>
            </div>
          </div>
          <div className="sub-contac-right mb-60 position-relative">
            <ul className="social d-flex gap-3">
              <li>
                <Link to="https://www.linkedin.com/in/danivid-neri-pichardo-742068168/">
                  <i className="bi bi-linkedin" />
                </Link>
              </li>
              <li>
                <Link to="https://github.com/DanividN">
                  <i className="bi bi-github" />
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="#contact"
            className="d-flex justify-content-center lets-talk-btn align-items-center gap-2"
          >
            <span className="get-text">Contacto</span>
            <span>
              <i className="bi bi-arrow-up-right" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarContact;
