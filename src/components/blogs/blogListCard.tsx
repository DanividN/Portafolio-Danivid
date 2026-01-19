import type { Blog } from "@/lib/mockData/blogsData";

import AnimateHeight from "react-animate-height";
import BlogPopUpDetails from "./blogPopUpDetails";

type PropsType = {
  blog: Blog;
  index: number;
  activeId: number | null;
  toggleItem: (id: number) => void;
};

const BlogListCard = ({ blog, index, activeId, toggleItem }: PropsType) => {
  const isActive = activeId === index;

  const delay = `${0.5 + index * 0.2}s`;

  return (
    <div
      className={`blog-item wow fadeInUp ${isActive ? "is-active" : ""}`}
      data-wow-delay={delay}
    >
      <div onClick={() => toggleItem(index)} className="blog-thumb row">
        <div className="col-xl-6 col-lg-7 col-md-9">
          <h4 className="blog-title">{blog.title}</h4>
        </div>
        <div className="col-xl-6 col-lg-5 col-md-3 d-none d-md-block">
          <div className="position-relative">
            <div className="date">
              <h4>{blog.date.day}/</h4>
              <h6>{blog.date.month}</h6>
            </div>
          </div>
        </div>
      </div>

      <AnimateHeight duration={300} height={isActive ? "auto" : 0}>
        <div className="blog-panel">
          <figure className="text-center">
            <img width={1196} height={600} src={blog.img} alt="creativemela" />
            <BlogPopUpDetails />
          </figure>
        </div>
      </AnimateHeight>
    </div>
  );
};

export default BlogListCard;
