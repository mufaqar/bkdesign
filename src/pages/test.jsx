import React, { useRef } from "react";
import Slider from "react-slick";

const PreviousNextMethods = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Previous and Next methods</h2>
      <Slider ref={sliderRef} {...settings}>
        <div key={1}>
          <h3>1</h3>
        </div>
        <div key={2}>
          <h3>2</h3>
        </div>
        <div key={3}>
          <h3>3</h3>
        </div>
        <div key={4}>
          <h3>4</h3>
        </div>
        <div key={5}>
          <h3>5</h3>
        </div>
        <div key={6}>
          <h3>6</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }} className="mt-20">
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PreviousNextMethods;
