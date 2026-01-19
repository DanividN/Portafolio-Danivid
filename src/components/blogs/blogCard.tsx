import type { Blog } from "@/lib/mockData/blogsData";

import { Link } from "react-router-dom";

type PropsType = {
  blog: Blog;
  delay: string;
};
const BlogCard = ({ blog, delay }: PropsType) => {
  return (
    <div className="blog-item wow fadeInRight" data-wow-delay={delay}>
      <Link to="/blog-details">
        <img width={416} height={270} src={blog.img} alt="thumbnail" />
      </Link>
      <div className="blog-meta d-inline-flex flex-wrap align-items-center gap-3 gap-xl-4">
        <span className="d-inline">
          by <span className="sub-text">{blog.author}</span> | {blog.category}
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
  );
};

export default BlogCard;
