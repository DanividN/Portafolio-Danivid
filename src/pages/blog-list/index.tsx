import BlogSidebar from "@/components/blogs/blogSidebar";
import PageHeader from "@/components/pageHeader";
import Pagination from "@/components/pagination";
import { blogData } from "@/lib/mockData/blogsData";

import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <main>
      <PageHeader currentPage="Blog List" title="Blog List" />
      <section className="blogs-section blog-list-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-30">
              {blogData.map((blog) => (
                <div key={blog.id} className="blog-list-item row mb-30">
                  <div className="col-md-5 wow fadeInUp" data-wow-delay=".3s">
                    <Link to="/blog-details">
                      <img
                        width={442}
                        height={222}
                        src={blog.img}
                        alt="thumbnail"
                      />
                    </Link>
                  </div>
                  <div
                    className="col-md-7 mt-3 mt-md-0 wow fadeInRight"
                    data-wow-delay=".4s"
                  >
                    <h5>
                      <Link to="/blog-details">{blog.title}</Link>
                    </h5>
                    <div className="blog-meta d-inline-flex flex-wrap align-items-center gap-3 gap-xl-4">
                      <span className="d-inline">
                        by <span className="sub-text">{blog.author}</span> |{" "}
                        {blog.category}
                      </span>
                      <span className="date d-inline-flex align-items-center">
                        {blog.date.day} {blog.date.month} {blog.date.year}
                      </span>
                    </div>
                    <p className="my-2 overflow-hidden">{blog.description}</p>
                    <div>
                      <span className="read-more">
                        <Link to="/blog-details">Read More</Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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

export default BlogList;
