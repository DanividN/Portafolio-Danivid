import { skills } from "@/lib/mockData/skillsData";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Skills = () => {
  return (
    <section className="skills section-pt z-3">
      <Swiper
        loop
        speed={2000}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          438: { slidesPerView: 2 },
          650: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          850: { slidesPerView: 4 },
          1050: { slidesPerView: 5 },
          1270: { slidesPerView: 6 },
          1470: { slidesPerView: 7 },
          1700: { slidesPerView: 8 },
        }}
        modules={[Autoplay]}
        className="skills-slider container-md wow fadeInUp"
        data-wow-delay=".3s"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="skill-item">
              <figure>
                <img width={73} height={73} src={skill.img} alt={skill.name} />
              </figure>
              <div className="skill-txt">
                <h4>{skill.percent}</h4>
                <span>{skill.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
