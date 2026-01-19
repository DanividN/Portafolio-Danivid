import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Wait for window to load
    const handleLoad = () => {
      setIsLoaded(true);

      // Remove preloader after 500ms delay
      setTimeout(() => {
        setIsRemoved(true);
      }, 500);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Don't render if preloader should be removed
  if (isRemoved) {
    return null;
  }

  return (
    <div id="preloader">
      <div
        id="container"
        className={`container-preloader ${isLoaded ? "loaded" : ""}`}
      >
        <div className="animation-preloader">
          <div className="main-logo">
            <div className="logo">
              <h2>
                P<span className="txt-orange">e</span>rtest
              </h2>
            </div>
          </div>
        </div>
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
    </div>
  );
};

export default Preloader;
