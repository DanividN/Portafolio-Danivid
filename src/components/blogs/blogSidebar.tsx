import { recentBlogs } from "@/lib/mockData/blogsData";

import { Link } from "react-router-dom";

const services: string[] = [
  "UX strategy",
  "Information architecture",
  "Prototyping",
  "Wireframing",
  "UI Design",
  "Figma Design",
];
const BlogSidebar = () => {
  return (
    <div className="sidebar-widgets">
      {/* Sidebar Singe Widget */}
      <div className="sidebar-single-widget mb-30">
        <h5 className="pb-20 wow fadeInUp" data-wow-delay=".3s">
          Search Here
        </h5>
        <div className="widget-search wow fadeInUp" data-wow-delay=".4s">
          <input type="text" name="search" placeholder="Enter Your Keyword" />
          <button>
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
      {/* Sidebar Singe Widget */}
      <div className="sidebar-single-widget category-widget mb-30">
        <h5 className="pb-10 wow fadeInUp" data-wow-delay=".3s">
          Service List
        </h5>
        <ul className="wow fadeInUp" data-wow-delay=".4s">
          {services.map((item, index) => (
            <li key={index}>
              <Link to="#">
                <i className="fa-solid fa-caret-right" /> {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Sidebar Singe Widget */}
      <div className="sidebar-single-widget socialicon-widget mb-30">
        <h5 className="pb-20 wow fadeInUp" data-wow-delay=".3s">
          Social Icons
        </h5>
        <ul
          className="d-lg-flex d-xxl-block flex-lg-wrap gap-lg-3 wow fadeInUp"
          data-wow-delay=".4s"
        >
          <li>
            <Link to="#">
              <i className="fa-brands fa-facebook" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-brands fa-twitter" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-brands fa-instagram" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa-brands fa-dribbble" />
            </Link>
          </li>
        </ul>
      </div>
      {/* Sidebar Singe Widget */}
      <div className="sidebar-single-widget socialicon-widget">
        <h5 className="pb-20 wow fadeInUp" data-wow-delay=".3s">
          Newest Posts
        </h5>
        <div className="sidebar-blog-widgets">
          {recentBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="single-item wow fadeInUp"
              data-wow-delay={`${0.4 + index * 0.1}s`}
            >
              <div className="thumb">
                <Link to={"/blog-details"}>
                  <img width={70} height={70} src={blog.img} alt="blog" />
                </Link>
              </div>
              <div className="content">
                <span>
                  by <Link to="#">{blog.author}</Link>
                </span>
                <h4>
                  <Link to={"/blog-details"}>{blog.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
