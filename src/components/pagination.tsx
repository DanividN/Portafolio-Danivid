const Pagination = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="glenic-pagination">
          <ul className="wow fadeInUp" data-wow-delay=".3s">
            <li>
              <a href="#">
                <i className="bi bi-arrow-left"></i>
              </a>
            </li>
            <li>
              <a href="#">01</a>
            </li>
            <li>
              <span>02</span>
            </li>
            <li>
              <a href="#">03</a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
