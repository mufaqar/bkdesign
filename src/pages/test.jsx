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


  return (
    <div class="wrapper container mx-auto">
      <div class="main">Main content</div>
      <div class="sidebar">Sticky sidebar</div>
    </div>
  );
};

export default PreviousNextMethods;
