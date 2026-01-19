import { Link } from "react-router-dom";

const AuthorInfo = () => {
  return (
    <div
      className="blog-author-section mt-20 mb-60 wow fadeInUp"
      data-wow-delay=".3s"
    >
      <div className="thumb">
        <img
          width={100}
          height={112}
          src="/images/blog-details/b-auth.png"
          alt="img"
        />
      </div>
      <div className="content-auth">
        <div className="auth-header">
          <h4>
            <Link to="#">Towkibur Rahman</Link>
          </h4>
          <div className="a-social-icon">
            <span>
              <Link to="#">
                <i className="fa-brands fa-facebook-f" />
              </Link>
            </span>
            <span>
              <Link to="#">
                <i className="fa-brands fa-instagram" />
              </Link>
            </span>
            <span>
              <Link to="#">
                <i className="fa-brands fa-dribbble" />
              </Link>
            </span>
            <span>
              <Link to="#">
                <i className="fa-brands fa-behance" />
              </Link>
            </span>
          </div>
        </div>
        <p>
          Fusce condimentum enim vestibulum libero gravida, ut accumsan quam
          bibendum. Curabitur gravida faucibus est sit amet cursus. Duis
          accumsan vel arcu pretium viverra.
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
