import { useState, useEffect } from "react";

function ImageSlider() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="slider-container">
      <img
        src="https://picsum.photos/1200/800?random=1"
        alt="slider-img-1"
        className="slider-img"
        style={{ transform: `translateX(-${scrollPos}px)` }}
      />
      <img
        src="https://picsum.photos/1200/800?random=2"
        alt="slider-img-2"
        className="slider-img"
        style={{ transform: `translateX(-${scrollPos / 2}px)` }}
      />
      <img
        src="https://picsum.photos/1200/800?random=3"
        alt="slider-img-3"
        className="slider-img"
        style={{ transform: `translateX(-${scrollPos / 3}px)` }}
      />
    </div>
  );
}

export default ImageSlider;
