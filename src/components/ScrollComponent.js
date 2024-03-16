import React, { useState, useEffect } from "react";

const ScrollComponent = () => {
  // State to manage the visibility of the component
  const [isVisible, setIsVisible] = useState(false);

  // Effect to attach and detach the scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 5) {
        // Replace 100 with your desired scroll value
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <>
      {isVisible && (
        <div style={{ position: "absolute", bottom: "40px" }}>
          {/* Your component content here */}I appear only when you've scrolled
          down!
        </div>
      )}
    </>
  );
};

export default ScrollComponent;
