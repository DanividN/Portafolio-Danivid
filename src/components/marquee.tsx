const marqueeItems = [
  { text: "User Interface _", stroke: false },
  { text: "User Experience", stroke: true },
  { text: "Branding _ Marketing", stroke: false },
  { text: "User Interface _", stroke: true },
  { text: "User Experience _", stroke: false },
  { text: "User Interface _", stroke: true },
  { text: "User Experience", stroke: false },
  { text: "Branding _ Marketing", stroke: true },
  { text: "User Interface _", stroke: false },
  { text: "User Experience _", stroke: true },
];

const Marquee = () => {
  return (
    <div className="marquee section-pt">
      <h2>
        <span className="marquee-wrapper">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="marquee-title">
              {marqueeItems.map((item, index) => (
                <span
                  key={index}
                  className={item.stroke ? "text-stroke-black" : ""}
                >
                  {item.text}&nbsp;
                </span>
              ))}
            </span>
          ))}
        </span>
      </h2>
    </div>
  );
};

export default Marquee;
