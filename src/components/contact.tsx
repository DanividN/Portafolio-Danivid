import { useContactForm } from "@/hooks/useContactForm";
import { menuList } from "@/lib/mockData/menuList";
import { Link } from "react-router-dom";
const contacts = [{ email: "danividnerip@gmail.com", phone: "(722) 786-1343" }];
const Contact = () => {
  const { handleSubmit, isSubmitting, message } = useContactForm();
  return (
    <section id="contact" className="contact section-mt">
      <div className="marquee section-pt">
        <h3>
          <span className="marquee-wrapper">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="marquee-title">
                {contacts.map((item, index) => (
                  <span key={index}>
                    <span className="text-stroke-white">
                      {item.email} _&nbsp;
                    </span>
                    {item.phone} _&nbsp;
                  </span>
                ))}
              </span>
            ))}
          </span>
        </h3>
      </div>
      <div className="container">
        <div className="contact-content row">
          <div className="col-lg-6">
            <span className="large-txt wow fadeInUp" data-wow-delay=".3s">
              ¡Contacto!
            </span>
            <p className="wow fadeInUp" data-wow-delay=".4s">
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas
              o oportunidades para ser parte de tu visión. ¡Házmelo saber!
            </p>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="wow fadeInLeft"
              data-wow-delay=".5s"
            >
              <div className="user-details row">
                <div className="input-box col-md-6">
                  <label className="details" htmlFor="first-name">
                    Nombre(s)
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="text"
                    name="first_name"
                    placeholder=""
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-box col-md-6">
                  <label className="details" htmlFor="last-name">
                    Apellido(s)
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="text"
                    name="last_name"
                    placeholder=""
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-box col-md-6">
                  <label className="details" htmlFor="mail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="mail"
                    className="text"
                    name="email"
                    placeholder=""
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-box col-md-6">
                  <label className="details" htmlFor="phone">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="text"
                    name="phone"
                    placeholder=""
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="user-message">
                <label className="details" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols={1}
                  rows={2}
                  placeholder="Escribe tu mensaje..."
                  autoComplete="off"
                  required
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="bttn bttn-theme"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Contacto"}
                <i className="bi bi-arrow-up-right" />
              </button>
            </form>
            {message && (
              <p
                id="form-message"
                className={
                  message.includes("error") ? "text-danger" : "text-success"
                }
              >
                {message}
              </p>
            )}
            <p id="form-message" />
          </div>
          <div className="col-lg-5 ms-auto my-auto">
            <div className="py-auto">
              <nav className="wow fadeInRight" data-wow-delay=".7s">
                <ul>
                  {menuList.map(({ href, label }, index) => (
                    <li key={index}>
                      <Link to={href}>
                        <div className="link-txt d-flex justify-content-between">
                          <span>{label}</span>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="social-media wow fadeInUp" data-wow-delay=".9s">
                <ul>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
