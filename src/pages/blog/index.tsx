import BlogCard from "@/components/blogs/blogCard";
import PageHeader from "@/components/pageHeader";
import Pagination from "@/components/pagination";
import { blogData } from "@/lib/mockData/blogsData";

const Blog = () => {
  return (
    <main>
      <PageHeader currentPage="Blog Page" title="Blog Page" />
      <section className="blogs-section blog-item-wrapper">
        <div className="container">
          <div className="row">
            {blogData.map((blog, index) => {
              const delay = `${0.3 + index * 0.1}s`;
              return (
                <div key={blog.id} className="col-lg-4 col-md-6">
                  <BlogCard blog={blog} delay={delay} />
                </div>
              );
            })}
          </div>
          <Pagination />
        </div>
      </section>
      );
    </main>
  );
};

export default Blog;
