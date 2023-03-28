import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Projects = ({ id, item }: any) => {
  console.log("🚀 ~ file: projects.tsx:6 ~ Projects ~ item:", item);

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
    <section
      id="myDiv"
      ref={myDivRef}
      className={`relative px-4  z-20 pro${id}`}
    >
      {id === 0 && <div
        id="project"
        className="flex justify-center px-4 items-center pt-6 sm:pt-16 flex-col max-w-[600px] w-full mx-auto "
      >
        <h1 className="subheading">Projekte</h1>
        <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] text-center font-normal mb-5 text-gray-600">
          Entdecken Sie unsere bisherigen Arbeiten und lassen Sie sich von
          unseren Projekten inspirieren.
        </p>
      </div>}

      <div className={`grid grid-cols-1 md:grid-cols-2 container mx-auto pb-40}`}>
        <div className="flex justify-end items-end flex-col lg:p-10 ">
          <Image
            src={item?.image}
            alt="video"
            width={500}
            height={260}
            className="rounded-[32px]"
          />
          {/* <div className="item bg-[url('/images/projects.png')] bg-cover bg-no-repeat bg-bottom before:bg-[url('/images/projects.png')]">
            <div className="content "></div>
          </div> */}
        </div>

        <div className="flex bg-white justify-center relative items-start sm:items-center md:items-start flex-col sm:flex-row md:flex-col py-10 md:p-10">
          <div className="flex  justify-center w-full items-center sm:items-start flex-col sm:justify-start md:items-start">
            <div className="flex  gap-3">
              <Link
                href="#"
                className=" text-main bg-[#EAF9F9] px-6 py-3 rounded-full"
              >
                {item?.tag}
              </Link>
              {item?.tag1 && (
                <Link
                  href="#"
                  className=" text-main bg-[#EAF9F9] px-6 py-3 rounded-full"
                >
                  {item?.tag1}
                </Link>
              )}
            </div>
            <h5 className="text-xl md:text-[32px] font-bold text-black mb-4 max-w-sm md:leading-9 text-center  sm:text-left mt-5">
              {item?.title}
            </h5>
            <p className=" text-sm text-gray-800 max-w-xs mt-1 text-center sm:text-left">
              {item?.description}
            </p>
          </div>
          <div className="flex justify-center sm:justify-end items-center md:justify-start w-full">
            <Link
              href={item?.viewProjectLink}
              className="text-[#EAF9F9] bg-main px-6 mt-7 py-3 rounded-full"
            >
              Videoproduktion
            </Link>
          </div>
          <ul className="gap-2 hidden lg:flex top-1/2 right-40 absolute flex-col transform -translate-y-1/2 px-4 z-50">
            {[1, 2, 3].map((dots, idx) => {
              return (
                <li
                  key={idx}
                  className={`bg-main p-1 rounded-full ${id === idx && "py-2"}`}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>

      

      {id === 0 && (
        <img
          src="/images/bg-3.png"
          alt="video"
          className={`absolute hidden _pimg z-[-1] lg:block lg:w-[50%] 2xl:w-auto left-0 lg:top-0 sm:-top-60 `}
        />
      )}
    </section>
  );
};

export default Projects;
