import { Link } from "react-router-dom";

const PageHeader = ({
  title,
  currentPage,
}: {
  title: string;
  currentPage: string;
}) => {
  return (
    <section className="breadcumb-area">
      <div className="container">
        <h2>{title}</h2>
        <ul>
          <li className="wow fadeInUp" data-wow-delay=".3s">
            <Link to="/">Home</Link>
          </li>
          <li className="wow fadeInUp" data-wow-delay=".4s">
            {" "}
            {currentPage}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
