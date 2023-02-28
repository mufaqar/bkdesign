import {
  Banner,
  Projects,
  WhatWeOffer,
  Contectus,
} from "../components/imports";
import React, { useEffect } from "react";
import { useInView } from "react-hook-inview";




function Home_Module() {
  return (
    <>
      <Banner />
      <div className="flex md:mt-28 sm:mb-20 px-4 lg:mb-0 justify-center items-center flex-col max-w-[600px] w-full mx-auto ">
        <h1 className="subheading ">Unser Angebot</h1>
        <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] md:text-left text-center font-normal text-gray-600">
          Wir bieten Ihnen maßgeschneiderte Dienstleistungen, um Ihre
          individuellen Marketing-Bedürfnisse zu erfüllen.
        </p>
      </div>

      
      <section className="relative flex flex-row md:flex-col whatweoffer">
        {[1, 2, 3].map((item, idx) => {
          return <WhatWeOffer id={idx} key={idx} />;
        })}
        <img
          src="/images/bg-2.png"
          alt="video"
          className="absolute hidden lg:block right-0 top-96 -z-10"
        />
      </section>

      <div className="flex justify-center px-4 items-center mt-5 md:mt-0 mb-5 flex-col max-w-[600px] w-full mx-auto ">
        <h1 className="subheading">Projekte</h1>
        <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px]  text-center font-normal mb-12 text-gray-600">
          Entdecken Sie unsere bisherigen Arbeiten und lassen Sie sich von
          unseren Projekten inspirieren.
        </p>
      </div>

      <section className="relative">
        {[1, 2, 3].map((item, idx) => {
          return <Projects id={idx} key={idx} />;
        })}
        <img
          src="/images/bg-3.png"
          alt="video"
          className="absolute hidden _pimg lg:block lg:w-[50%] 2xl:w-auto left-0 lg:top-0 sm:-top-60"
        />
      </section>

      <Contectus />
    </>
  );
}

export default Home_Module;
