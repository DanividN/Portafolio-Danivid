import { useEffect, useState } from "react";

const BackToTop = () => {
  const [activeProgress, setActiveProgress] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Calculate stroke-dashoffset (307.919 is the total path length)
      const pathLength = 307.919;
      const dashoffset = pathLength - (pathLength * scrollPercent) / 100;

      setScrollProgress(dashoffset);

      if (scrollTop > 200) {
        setActiveProgress(true);
      } else {
        setActiveProgress(false);
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`progress-wrap ${activeProgress ? "active-progress" : ""}`}
      onClick={scrollToTop}
      style={{ cursor: "pointer" }}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: scrollProgress,
          }}
        />
      </svg>
    </div>
  );
};

export default BackToTop;
