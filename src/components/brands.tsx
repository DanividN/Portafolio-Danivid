import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Brand = {
  id: number;
  src: string;
  link: string;
};

const brands: Brand[] = [
  { id: 1, src: "/images/brands/brand-1.png", link: "#" },
  { id: 2, src: "/images/brands/brand-2.png", link: "#" },
  { id: 3, src: "/images/brands/brand-3.png", link: "#" },
  { id: 4, src: "/images/brands/brand-4.png", link: "#" },
  { id: 5, src: "/images/brands/brand-3.png", link: "#" },
  { id: 6, src: "/images/brands/brand-1.png", link: "#" },
  { id: 7, src: "/images/brands/brand-2.png", link: "#" },
  { id: 8, src: "/images/brands/brand-3.png", link: "#" },
  { id: 9, src: "/images/brands/brand-4.png", link: "#" },
  { id: 10, src: "/images/brands/brand-3.png", link: "#" },
];
const Brands = () => {
  return (
    <div className="brands section-mt">
      <div className="container">
        <span>More Than 200+ companies trusted Worldwide</span>
        <div className="row">
          <div className="col-12">
            <Swiper
              loop
              spaceBetween={100}
              speed={1500}
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1040: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
                1600: { slidesPerView: 5 },
                1920: { slidesPerView: 5 },
              }}
              modules={[Autoplay]}
              className="brands-slider"
            >
              {brands.map((brand) => (
                <SwiperSlide key={brand.id}>
                  <div className="brand-item">
                    <Link to={brand.link}>
                      <img
                        width={179}
                        height={58}
                        src={brand.src}
                        alt={"img"}
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
