import { blogData } from "@/lib/mockData/blogsData";
import BlogCard from "./blogCard";

const RelatedBlogs = () => {
  return (
    <div className="related-blog-section blogs-section mt-120 mb-90">
      <div className="row">
        <div className="col-lg-12 mb-50 text-center">
          <div className="related-blog-title">
            <h5 className="wow fadeInUp" data-wow-delay=".3s">
              Related Blogs
            </h5>
            <h3 className="wow fadeInUp" data-wow-delay=".4s">
              Related Blogs
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        {blogData.slice(0, 2).map((blog, index) => {
          const delay = `${0.3 + index * 0.1}s`;
          return (
            <div key={blog.id} className="col-lg-6 col-md-6 mb-30">
              <BlogCard blog={blog} delay={delay} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedBlogs;
