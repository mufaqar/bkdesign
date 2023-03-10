import { useInView } from "react-hook-inview";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const WhatsWeOfferDesktop = ({ WhatWeOfferData }) => {
   const [ref, inView] = useInView({
    threshold: 0.7,
  });

  const refEl = useRef()

  // useEffect(() => {
  //   if ( inView) {
  //    //  const wwo0 = document.querySelector(".wwo0");
  //    //  wwo0?.classList.add("scale0");
  //    //  wwo0?.classList.add("opacity-70");
  //   }
  //   if (!inView) {
  //     const wwo0 = document.querySelector(".wwo0");
  //     wwo0?.classList.remove("scale0");
  //     wwo0?.classList.remove("opacity-70");
  //   }

  //   if (refEl.current.id === 2 && inView) {
  //     const wwo1 = document.querySelector(".wwo1");
  //     wwo1?.classList.add("scale1");
  //     wwo1?.classList.add("opacity-75");
  //   }
  //   if (refEl.current.id === 2 && !inView) {
  //     const wwo1 = document.querySelector(".wwo1");
  //     wwo1?.classList.remove("scale1");
  //     wwo1?.classList.remove("opacity-75");
  //   }

  //   if (refEl.current.id === 3 && inView) {
  //     const wwo2 = document.querySelector(".wwo2");
  //     wwo2?.classList.add("scale2");
  //     wwo2?.classList.add("opacity-75");
  //   }
  //   if (refEl.current.id === 3 && !inView) {
  //     const wwo2 = document.querySelector(".wwo2");
  //     wwo2?.classList.remove("scale2");
  //     wwo2?.classList.remove("opacity-75");
  //   }
  // }, [inView]);


  return (
    <section className="hidden md:block">
      <ul id="cards" className="container mx-auto">
        {WhatWeOfferData.map((item, idx) => {
          return (
            <li className="card" id={`card${idx + 1}`} >
              <div id={idx+1} className={`card-body wwo${idx}`} ref={ref} >
                <div className="relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom bg-no-repeat bg-cover grid md:h-[506px] grid-cols-1 md:grid-cols-2">
                  <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                    <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                      {item?.title}
                    </h5>
                    <p className=" text-sm text-gray-300">{item?.detail1}</p>
                    <p className=" text-sm text-gray-300 mt-4">
                      {item?.detail2}
                    </p>
                    <p className=" text-sm text-gray-300 mt-4">
                      {item?.detail3}
                    </p>
                  </div>
                  <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                    <Image
                      src={item?.logo}
                      alt="video"
                      width={350}
                      height={300}
                    />
                  </div>
                  <ul className="gap-2 flex md:bottom-1/2 md:bg-transparent bg-white  right-1/2 md:right-4 -bottom-6 lg:right-10 absolute md:flex-col translate-x-1/2 transform md:translate-y-1/2 px-4 z-50">
                    {[1, 2, 3, 4].map((dots, id) => {
                      return (
                        <li
                          key={id}
                          className={`bg-[#457575] p-1 rounded-full ${
                            id === idx &&
                            "md:py-2 px-2 md:px-1 md:bg-white bg-[#042c2cc0]"
                          }`}
                        ></li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhatsWeOfferDesktop;
