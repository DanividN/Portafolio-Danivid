import { menuList } from "@/lib/mockData/menuList";
import { Link } from "react-router-dom";
const contacts = [
  { email: "Pertest@gmail.com", phone: "(704) 555-0127" },
  { email: "Pertest@gmail.com", phone: "(704) 555-0127" },
  { email: "Pertest@gmail.com", phone: "(704) 555-0127" },
];
const Contact = () => {
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
              Let’s Contact!
            </span>
            <p className="wow fadeInUp" data-wow-delay=".4s">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be a part of your vision. Feel free to reach out
              through.
            </p>
            <form
              id="contact-form"
              action="send_email.php"
              method="POST"
              className="wow fadeInLeft"
              data-wow-delay=".5s"
            >
              <div className="user-details row">
                <div className="input-box col-md-6">
                  <label className="details" htmlFor="first-name">
                    First Name
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
                    Last Name
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
                    Phone Number
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
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols={1}
                  rows={2}
                  placeholder="Write your message..."
                  autoComplete="off"
                  required
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="bttn  bttn-theme">
                Let's Talk <i className="bi bi-arrow-up-right" />
              </button>
            </form>
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
      </div>
    </section>
  );
};

export default Contact;
