import AuthorInfo from "@/components/blogs/authorInfo";
import BlogComment from "@/components/blogs/blogComment";
import BlogSidebar from "@/components/blogs/blogSidebar";
import RelatedBlogs from "@/components/blogs/relatedBlogs";
import PageHeader from "@/components/pageHeader";

import { Link } from "react-router-dom";

const BlogDetails = () => {
  return (
    <main>
      <PageHeader currentPage="Blog Details" title="Blog Details" />
      <section className="blog-details-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            {/* Blog Details */}
            <div className="col-lg-8 mb-30">
              <div className="blog-details-full">
                {/* Thumbnail */}
                <div className="thumbnail wow fadeInUp" data-wow-delay=".3s">
                  <img
                    width={856}
                    height={575}
                    src="/images/blog-details/thumbnail.png"
                    alt="Blog Details Image"
                  />
                </div>
                {/* Auth Section */}
                <div className="b-auth-section mt-30 mb-20">
                  <div className="row">
                    <div className="col-md-6 order-md-first order-last">
                      <div className="left-a wow fadeInUp" data-wow-delay=".5s">
                        <span className="img">
                          <img
                            width={40}
                            height={40}
                            src="/images/blog-details/auth-img.png"
                            alt="auth"
                          />
                        </span>
                        <span>
                          by&nbsp;
                          <Link to="#" className="sub-text">
                            Creativemela
                          </Link>
                        </span>
                        <span>
                          <img
                            width={14}
                            height={16}
                            src="/images/blogs/calendar.svg"
                            alt="calender"
                          />
                          &nbsp;&nbsp;22 Aug 2025
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 align-self-center text-md-end">
                      <div
                        className="blog-share mb-3 mb-md-0 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span>
                          <Link to="#">
                            <i className="fa-solid fa-link" />
                          </Link>
                        </span>
                        <span>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </span>
                        <span>
                          <Link to="#">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </span>
                        <span>
                          <Link to="#">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="content">
                  <h4 className="wow fadeInUp" data-wow-delay=".6s">
                    Migration Pellentesque consequat in augue sedus sodales Top
                    Standard size of business.
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay=".7s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    venenatis sagittis tortor, in convallis justo sagittis et.
                    Nunc placerat risus sem, vitae dictum libero laoreet sit
                    amet. Suspendisse semper leo nec justo aliquam venenatis.
                    Aliquam vitae lorem sed orci vulputate porta. Vestibulum ut
                    elit eget arcu tincidunt sollicitudin quis sed augue. Aenean
                    nibh nunc, elementum a dolor vel, vestibulum commodo dui.
                    Donec id felis a ipsum molestie tincidunt. Nunc ullamcorper
                    quam nunc, eget laoreet dui pharetra eget. Aenean viverra
                    interdum condimentum. Cras mollis, arcu vel fermentum
                    auctor.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".8s">
                    Phasellus ac consequat turpis, sit amet fermentum nulla.
                    Donec dignissim augue nunc. Praesent bibendum erat ac lectus
                    molestie lobortis. Curabitur ultrices justo ac leo facilisis
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut venenatis sagittis tortor, in convallis justo
                    sagittis et. Nunc placerat risus sem, vitae dictum libero
                    laoreet sit amet. Suspendisse semper.
                  </p>
                  <p className="quote wow fadeInUp" data-wow-delay=".9s">
                    <img
                      width={14}
                      height={10}
                      src="/images/blog-details/quote2.png"
                      alt="quote"
                    />
                    Phasellus ac consequat turpis, sit amet fermentum nulla.
                    Donec dignissim augue nunc. Praesent bibendum erat ac lectus
                    molestie lobortis. Curabitur ultrices justo ac leo facilisis
                    tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut venenatis sagittis tortor, in convallis justo
                    sagittis et. Nunc placerat risus sem, vitae dictum libero
                    laoreet sit amet. Suspendisse semper.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="1s">
                    Sed nec sapien eu nibh porta fringilla. Aenean in lectus id
                    tellus tempus rutrum vitae a elit. Nulla sit amet interdum
                    ligula. Duis bibendum porttitor tempus. Morbi nisi nisl,
                    sagittis in enim at, tempus convallis magna. Nam malesuada
                    risus non congue viverra. Nullam ultrices massa orci, in
                    eleifend diam fringilla.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Ut venenatis sagittis tortor,
                    in convallis justo sagittis et. Nunc placerat risus sem,
                    vitae dictum libero laoreet sit amet. Suspendisse semper leo
                    nec justo aliquam venenatis.{" "}
                  </p>
                  <div
                    className="blog-tags mt-20 pt-30 mb-40 d-flex flex-wrap gap-3 wow fadeInUp"
                    data-wow-delay="1.1s"
                  >
                    <span>Tag Here</span>
                    <Link to="#">Creative</Link>
                    <Link to="#">Agency</Link>
                    <Link to="#">Business</Link>
                  </div>
                </div>
                <AuthorInfo />
                {/* Next Prev */}
                <div className="singlepage-navigation border-0">
                  <div className="row">
                    <div className="col-sm-6">
                      <Link
                        to="#"
                        className="wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="singlepage-navi-icon">
                          <i className="fa-solid fa-arrow-left-long" />
                        </div>
                        <div className="singlepage-navi-text">
                          <span>Prev Services</span>
                          <h5>Child Emergency</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link
                        className="float-right wow fadeInUp"
                        data-wow-delay=".5s"
                        to="#"
                      >
                        <div className="singlepage-navi-text">
                          <span>Next Portfolio</span>
                          <h5>Surgery Center</h5>
                        </div>
                        <div className="singlepage-navi-icon">
                          <i className="fa-solid fa-arrow-right-long" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Related Post Section */}
                <RelatedBlogs />
                <BlogComment />
              </div>
            </div>
            {/* Sidebar Widgets */}
            <div className="col-lg-4 mb-30">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
