import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'

const ProjectCrousel = () => {
  
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
    arrows:false
  };
 

  return (
    <div className="relative -mt-5 md:mt-0">
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4].map((item, idx) => {
          return (
            <section
              key={idx}
              className={`relative container px-4 mx-auto grid grid-cols-1 md:grid-cols-2`}
            >
              <div className="flex relative justify-center items-center flex-col lg:p-10">
                <Image
                  src="/images/projects.png"
                  alt="video"
                  width={650}
                  height={300}
                  className="rounded-[32px]"
                />
                
              </div>

              <div className="flex  justify-center  items-start sm:items-center md:items-start flex-col sm:flex-row md:flex-col py-7 md:p-10">
                <div className="flex justify-center w-full items-center sm:items-start flex-col sm:justify-start md:items-start">
                  <Link
                    href="#"
                    className=" text-main bg-[#EAF9F9] px-6 py-3 rounded-full"
                  >
                    Videoproduktion
                  </Link>
                  <h5 className="text-xl md:text-[32px] font-bold text-black mb-4 max-w-xs md:leading-9 text-center  sm:text-left mt-5">
                    Streetkultmeet video presentation
                  </h5>
                  <p className=" text-sm text-gray-800 max-w-xs mt-1 text-center sm:text-left">
                    Streetkultmeet is an association for motor sports. We filmed
                    a video for advertising and product presentation.
                  </p>
                </div>
                <div className="flex justify-center sm:justify-end items-center md:justify-start w-full">
                  <Link
                    href="#"
                    className="text-[#EAF9F9] bg-main px-6 mt-7 py-3 rounded-full"
                  >
                    Videoproduktion
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </Slider>
      <button className="text-main absolute top-40 left-7 shadow-md font-bold p-3 bg-white rounded-full" onClick={previous}><BsChevronLeft size={15}  /></button>
      <button className="text-main absolute top-40 right-7 shadow-md font-bold p-3 bg-white rounded-full" onClick={next}><BsChevronRight size={15} /></button>
    </div>
  );
};

export default ProjectCrousel;
