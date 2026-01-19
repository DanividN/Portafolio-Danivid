import BlogSidebar from "@/components/blogs/blogSidebar";
import PageHeader from "@/components/pageHeader";
import Pagination from "@/components/pagination";
import { blogData } from "@/lib/mockData/blogsData";

import { Link } from "react-router-dom";

const BlogRightSidebar = () => {
  return (
    <main>
      <PageHeader
        currentPage=" Blog Right Sidebar"
        title="Blog Right Sidebar"
      />
      <section className="blogs-section blog-page-sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-30">
              <div className="row">
                {blogData.map((blog, index) => {
                  const delay = `${0.3 + index * 0.1}s`;
                  return (
                    <div key={blog.id} className="col-lg-6 col-md-6 mb-30">
                      <div
                        className="blog-item wow fadeInRight"
                        data-wow-delay={delay}
                      >
                        <Link to="/blog-details">
                          <img
                            width={416}
                            height={270}
                            src={blog.img}
                            alt="thumbnail"
                          />
                        </Link>
                        <div className="blog-meta d-inline-flex flex-wrap align-items-center gap-3 gap-xl-4">
                          <span className="d-inline">
                            by <span className="sub-text">{blog.author}</span> |{" "}
                            {blog.category}
                          </span>
                          <span className="date d-inline-flex align-items-center">
                            {blog.date.day} {blog.date.month} {blog.date.year}
                          </span>
                        </div>
                        <h5>
                          <Link to="/blog-details">{blog.title}</Link>
                        </h5>
                        <span className="read-more">
                          <Link to="/blog-details">Read More</Link>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <Pagination />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogRightSidebar;
