import type { TestimonialType } from "@/lib/mockData/testimonialsData";
import { testimonialsData } from "@/lib/mockData/testimonialsData";
import { useState } from "react";

const Testimonial = () => {
  const [slides, setSlides] = useState<TestimonialType[]>(testimonialsData);

  const handleNext = () => {
    setSlides((prev) => {
      const newSlides = [...prev];
      const firstSlide = newSlides.shift();
      if (firstSlide) newSlides.push(firstSlide);
      return newSlides;
    });
  };

  const handlePrev = () => {
    setSlides((prev) => {
      const newSlides = [...prev];
      const lastSlide = newSlides.pop();
      if (lastSlide) newSlides.unshift(lastSlide);
      return newSlides;
    });
  };

  return (
    <section
      id="testimonial"
      className="testimonial position-relative section-pt"
    >
      <div className="container">
        <span className="title wow fadeInUp" data-wow-delay=".3s">
          Testimonial
        </span>
        <figure className="quate-wrapper wow fadeInUp" data-wow-delay=".6s">
          <img
            width={104}
            height={76}
            src="/images/testimonial/quate.png"
            alt="quate"
          />
        </figure>
        <figure className="style">
          <img
            width={90}
            height={98}
            src="/images/testimonial/style.svg"
            alt="style"
          />
        </figure>
        <figure className="arrow">
          <img
            width={330}
            height={36}
            src="/images/testimonial/arrow.svg"
            alt="arrow"
          />
        </figure>
        <div className="slider-wrapper">
          <div className="slider-container">
            <div className="slider">
              {slides.map((t) => (
                <div
                  key={t.id}
                  className="slides"
                  data-wow-delay={t.wowDelay || undefined}
                  style={{ backgroundImage: `url(${t.img})` }}
                >
                  <div
                    className="content"
                    data-wow-delay={t.contentDelay || undefined}
                  >
                    <h5>{t.text}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="buttons">
              <span className="prev" onClick={handlePrev}>
                <i className="fa-solid fa-arrow-left" />
              </span>
              <span className="next" onClick={handleNext}>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
