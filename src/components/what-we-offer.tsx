import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const WhatweOffer = ({ id, item }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (id === 1 && inView) {
      const wwo0 = document.querySelector(".wwo0");
      wwo0?.classList.add("scale0");
      wwo0?.classList.add("opacity-70");
    }
    if (id === 1 && !inView) {
      const wwo0 = document.querySelector(".wwo0");
      wwo0?.classList.remove("scale0");
      wwo0?.classList.remove("opacity-70");
    }

    if (id === 2 && inView) {
      const wwo1 = document.querySelector(".wwo1");
      wwo1?.classList.add("scale1");
      wwo1?.classList.add("opacity-75");
    }
    if (id === 2 && !inView) {
      const wwo1 = document.querySelector(".wwo1");
      wwo1?.classList.remove("scale1");
      wwo1?.classList.remove("opacity-75");
    }

    if (id === 3 && inView) {
      const wwo2 = document.querySelector(".wwo2");
      wwo2?.classList.add("scale2");
      wwo2?.classList.add("opacity-75");
    }
    if (id === 3 && !inView) {
      const wwo2 = document.querySelector(".wwo2");
      wwo2?.classList.remove("scale2");
      wwo2?.classList.remove("opacity-75");
    }
  }, [inView]);

  const changeMobileSlidePrevious = (id: number) => {
    const wwoN = document.querySelector(`.wwo${id}`);
    wwoN?.classList.remove("onMobileTranslate");
    
  };
  const changeMobileSlideNext = (id: number) => {
    const wwoN = document.querySelector(`.wwo${id + 1}`);
    wwoN?.classList.add("onMobileTranslate");
    
  };

  return (
    <>
      <section
        ref={ref}
        className={`relative z-[22] p-4 pt-6 h-[590px] md:h-[650px] min-w-full flex flex-col transition-all duration-800 ease-in-out justify-start items-start wwo${id}`}
      >
        <div className="relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom bg-no-repeat bg-cover grid md:h-[506px] grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
            <div className="text-white flex justify-between py-3 w-full gap-2 md:hidden">
              <Image src={item?.logo} alt="video" width={80} height={80} />
              <div className="flex items-center gap-2">
                <button
                  className="text-main  font-bold p-2 bg-white rounded-full"
                  onClick={() => changeMobileSlidePrevious(id)}
                >
                  <BsChevronLeft size={15} />
                </button>
                <button
                  className="text-main  font-bold p-2 bg-white rounded-full"
                  onClick={() => changeMobileSlideNext(id)}
                >
                  <BsChevronRight size={15} />
                </button>
              </div>
            </div>
            <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
              {item.title}
            </h5>
            <p className=" text-sm text-gray-300">{item?.detail1}</p>
            <p className=" text-sm text-gray-300 mt-4">{item?.detail2}</p>
            <p className=" text-sm text-gray-300 mt-4">{item?.detail3}</p>
          </div>
          <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
            <Image src={item?.logo} alt="video" width={350} height={300} />
          </div>
          <ul className="gap-2 flex md:bottom-1/2 md:bg-transparent bg-white  right-1/2 md:right-4 -bottom-6 lg:right-10 absolute md:flex-col translate-x-1/2 transform md:translate-y-1/2 px-4 z-50">
            {[1, 2, 3, 4].map((dots, idx) => {
              return (
                <li
                  key={idx}
                  className={`bg-[#457575] p-1 rounded-full ${
                    id === idx &&
                    "md:py-2 px-2 md:px-1 md:bg-white bg-[#042c2cc0]"
                  }`}
                ></li>
              );
            })}
          </ul>
        </div>

        {
          id === 1 && <div className="block md:hidden absolute w-[calc(100%-3rem)] ml-2 top-4 -z-[1]"><AfterEffect/><AfterEffect/></div>
        }
        {
          id === 2 && <div className="block md:hidden absolute w-[calc(100%-3rem)] ml-2 top-2 -z-[1]"><AfterEffect2/></div>
        } 
        {
          id === 3 && <div className="block md:hidden absolute w-[calc(100%-3rem)] ml-2 top-0 -z-[1]"><AfterEffect3/></div>
        } 

      </section>
    </>
  );
};

export default WhatweOffer;



const AfterEffect = () => {
    return(
      <div className=" p-6 bg-[#CDD5D5] rounded-tr-[32px] rounded-tl-[32px]"></div>
    )
}

const AfterEffect2 = () => {
  return(
    <>
      <div className=" p-6 bg-[#CDD5D5] rounded-tr-[32px] mx-4 rounded-tl-[32px]"></div>
      <div className=" p-6 bg-[#9BABAB] rounded-tr-[32px] -mt-10 rounded-tl-[32px] "></div>
    </>
  )
}

const AfterEffect3 = () => {
  return(
    <>
      <div className=" p-6 bg-[#CDD5D5] rounded-tr-[32px] mx-4 rounded-tl-[32px]"></div>
      <div className=" p-6 bg-[#9BABAB] rounded-tr-[32px] mx-2 -mt-10 rounded-tl-[32px] "></div>
      <div className=" p-6 bg-[#698282] rounded-tr-[32px] -mt-10 rounded-tl-[32px] "></div>
    </>
  )
}