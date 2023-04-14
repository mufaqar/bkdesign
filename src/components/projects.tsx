import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Projects = ({ id, item }: any) => {

  const myDivRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = myDivRef.current.getBoundingClientRect();
      const distanceFromTop = rect.top;
      console.log(distanceFromTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="myDiv" ref={myDivRef} className={`relative px-4 z-20`}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 container mx-auto pb-40}`}
        >
          <div className="flex justify-end items-end flex-col mb-10">
            <Image
              src={item?.image?.asset?.url}
              alt={item?.image?.alt}
              width={500}
              height={260}
              className="rounded-[32px]"
            />
          </div>
          <div
            className={`flex  m-0 justify-center items-start sm:items-center md:items-start flex-col sm:flex-row md:flex-col py-10 md:p-10`}
          >
            <div className="flex justify-center w-full items-center sm:items-start flex-col sm:justify-start md:items-start">
              <div className="flex  gap-3">
                {item?.buttons.map((b: any, i: number) => {
                  return(
                    <Link
                    href={b?.link}
                    key={i}
                    className=" text-main bg-[#EAF9F9] px-6 py-3 rounded-full"
                  >
                    {b?.title}
                  </Link>
                  )
                })}
                
              </div>
              <h5 className="text-xl md:text-[32px] font-bold text-black mb-4 max-w-sm md:leading-9 text-center  sm:text-left mt-5">
                {item?.title}
              </h5>
              <p className=" text-sm text-gray-800 max-w-xs mt-1 text-center sm:text-left">
                {item?.content}
              </p>
            </div>
            <div className="flex justify-center sm:justify-end items-center md:justify-start w-full">
              <Link
                href={item?.video_production_url}
                className="text-[#EAF9F9] bg-main px-6 mt-7 py-3 rounded-full"
              >
                ZUM PROJEKT
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
