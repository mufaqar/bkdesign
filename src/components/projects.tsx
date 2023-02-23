import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="relative px-4">
      <div className="flex justify-center items-center flex-col max-w-[600px] w-full mb-12 mx-auto ">
        <h1 className="subheading">Projekte</h1>
        <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px]  text-center font-normal mb-12 text-gray-600">
          Entdecken Sie unsere bisherigen Arbeiten und lassen Sie sich von
          unseren Projekten inspirieren.
        </p>
      </div>
      <div className="relative container mx-auto grid md:h-[506px] grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center flex-col lg:p-10">
          <Image
            src="/images/projects.png"
            alt="video"
            width={600}
            height={300}
            className="rounded-[32px]"
          />
        </div>

        <div className="flex justify-center items-start flex-col py-10 md:p-10">
          <div className="flex justify-center items-center flex-col md:justify-start md:items-start">
            <Link
              href="#"
              className="bg-[#EAF9F9] text-main px-6 py-3 rounded-full"
            >
              Videoproduktion
            </Link>
            <h5 className="text-[32px] font-bold text-black mb-4 max-w-xs leading-9 text-center md:text-left mt-5">
              Streetkultmeet video presentation
            </h5>
            <p className=" text-sm text-gray-800 max-w-xs mt-1 text-center md:text-left">
              Streetkultmeet is an association for motor sports. We filmed a
              video for advertising and product presentation.
            </p>
          </div>
          <div className="flex justify-center items-center"><Link
            href="#"
            className="text-[#EAF9F9] bg-main px-6 mt-7 py-3 rounded-full"
          >
            Videoproduktion
          </Link></div>
        </div>
      </div>
      <img
        src="/images/bg-3.png"
        alt="video"
        className="absolute hidden lg:block left-0 top-52 -z-10"
      />
    </section>
  );
};

export default Projects;
