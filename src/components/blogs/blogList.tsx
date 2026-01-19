import { blogsListData } from "@/lib/mockData/blogsData";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogListCard from "./blogListCard";

const BlogList = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };
  return (
    <section id="blogs" className="blogs section-pt">
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay=".3s">
          <h3>Latest Blog</h3>
          <span />
        </div>
        <div className="blog-item-wrap">
          {blogsListData.map((blog, index) => {
            return (
              <BlogListCard
                key={blog.id}
                blog={blog}
                index={index}
                activeId={activeId}
                toggleItem={toggleItem}
              />
            );
          })}
        </div>
        <div
          className="view-all-btn-wrapper wow fadeInUp"
          data-wow-delay="1.2s"
        >
          <Link to="#" className="bttn-round">
            <span className="btn-txt">
              View All <i className="bi bi-arrow-up-right" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
