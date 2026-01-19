import BlogSidebar from "@/components/blogs/blogSidebar";
import PageHeader from "@/components/pageHeader";
import Pagination from "@/components/pagination";
import type { Blog } from "@/lib/mockData/blogsData";

import { Link } from "react-router-dom";

const blogList: Blog[] = [
  {
    id: 1,
    img: "/images/blogs/blog-ds-1.png",
    title: "Fusce Tincidunt Commodo Quis Portitor.",
    author: "Tawam",
    category: "Graphic",
    date: { day: "22", month: "Dec", year: 2025 },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ...",
  },
  {
    id: 2,
    img: "/images/blogs/blog-ds-2.png",
    title: "Mauris Luctus Tellus Sagittis Viverra.",
    author: "Tawam",
    category: "Graphic",
    date: { day: "22", month: "Dec", year: 2025 },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis explicabo blanditiis cum. Quasi adipisci reprehenderit tempora ab sed fugit deserunt ...",
  },
];

const BlogTwo = () => {
  return (
    <main>
      <PageHeader currentPage="Blog" title="Blog" />
      <section className="blogs-section blog-list-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-30">
              {blogList.map((blog, index) => (
                <div key={blog.id} className="blog-list-item mb-30">
                  {/* Image */}
                  <div
                    className="wow fadeInUp mb-2"
                    data-wow-delay={`${0.3 + index * 0.1}s`}
                  >
                    <Link to={"/blog-details"}>
                      <img
                        width={856}
                        height={571}
                        src={blog.img}
                        alt="thumbnail"
                      />
                    </Link>
                  </div>

                  {/* Content */}
                  <div
                    className="mt-3 mt-md-0 wow fadeInRight"
                    data-wow-delay={`${0.4 + index * 0.1}s`}
                  >
                    <h5>
                      <Link to={"/blog-details"}>{blog.title}</Link>
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
                        <Link to={"/blog-details"}>Read More</Link>
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

export default BlogTwo;
