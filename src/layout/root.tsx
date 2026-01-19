import BackToTop from "@/components/backToTop";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import { animate } from "motion";
import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

const RootLayout = () => {

  
  const pathName = useLocation().pathname;
  useEffect(() => {
    if (pathName === "/home-2" || pathName.endsWith("dark")) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

  }, [pathName]);



  // animation
  useEffect(() => {
    if (pathName) {
      const fadeInUp = document.querySelectorAll(".fadeInUp");
      const fadeInLeft = document.querySelectorAll(".fadeInLeft");
      const fadeInRight = document.querySelectorAll(".fadeInRight");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const x = entry.target.getAttribute("data-wow-delay");
              animate(
                entry.target,
                {
                  transform: "translateY(0)",
                  opacity: 1,
                  visibility: "visible",
                },
                {
                  duration: 0.6,
                  delay: x ? parseFloat(x) : 0,
                }
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      fadeInUp.forEach((box) => {
        animate(box, {
          transform: "translateY(20px)",
          opacity: 0,
          visibility: "hidden",
        });
        observer.observe(box);
      });

      // Add fadeInLeft animation
      fadeInLeft.forEach((box) => {
        animate(box, {
          transform: "translateX(-20px)",
          opacity: 0,
          visibility: "hidden",
        });
        observer.observe(box);
      });

      // Add fadeInRight animation
      fadeInRight.forEach((box) => {
        animate(box, {
          transform: "translateX(20px)",
          opacity: 0,
          visibility: "hidden",
        });
        observer.observe(box);
      });

      return () => {
        fadeInUp.forEach((box) => observer.unobserve(box));
        fadeInLeft.forEach((box) => observer.unobserve(box));
        fadeInRight.forEach((box) => observer.unobserve(box));
      };
    }
  }, [pathName]);

  return (
    <>
      <Preloader />
      <BackToTop />
      <Header />
      <Outlet />
      <Contact />
      <Footer />
      <ScrollRestoration />

    </>
  );
};

export default RootLayout;
