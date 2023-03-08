import {
  Banner,
  Projects,
  WhatWeOffer,
  Contectus,
  ProjectCrousel,
  Partner,
  Data_Protection,
  About,
} from "../components/imports";
import React, { useContext, useEffect, useRef } from "react";
import { useInView } from "react-hook-inview";
import { SettingsContext } from "@/context/settingContext";


function Home_Module() {
  const { openModel, setProjectPostion, projectpostion } = useContext(SettingsContext);
  console.log("🚀 ~ file: home-module.tsx:18 ~ Home_Module ~ projectpostion:", projectpostion)
  const myDivRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = myDivRef.current.getBoundingClientRect();
      const distanceFromTop = rect.top;
      // console.log(distanceFromTop);
      setProjectPostion(distanceFromTop)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Banner />
      <div
        id="offer"
        className="flex md:mt-20 px-4 justify-center items-center flex-col max-w-[600px] w-full mx-auto "
      >
        <h1 className="subheading ">Unser Angebot</h1>
        <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] text-center font-normal text-gray-600">
          Wir bieten Ihnen maßgeschneiderte Dienstleistungen, um Ihre
          individuellen Marketing-Bedürfnisse zu erfüllen.
        </p>
      </div>

      <section ref={myDivRef} className="relative -mt-10 md:mt-0 flex flex-row md:flex-col whatweoffer overflow-hidden md:overflow-clip">
        {[1, 2, 3].map((item, idx) => {
          return <WhatWeOffer id={idx} key={idx} />;
        })}
        <img
          src="/images/bg-2.png"
          alt="video"
          className={` hidden lg:block right-0 top-[16rem] -z-[21] ${projectpostion <=  70 ? projectpostion <= -1230 ? 'absolute' : 'fixed' : 'absolute'}`}
        />
      </section>

      <div
        id="project"
        className="flex  justify-center px-4 items-center mt-6 sm:mt-16 flex-col max-w-[600px] w-full mx-auto "
      >
        <h1 className="subheading">Projekte</h1>
        <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] text-center font-normal mb-12 text-gray-600">
          Entdecken Sie unsere bisherigen Arbeiten und lassen Sie sich von
          unseren Projekten inspirieren.
        </p>
      </div>
      <section className="block md:hidden bg-[url('/images/project-mobile.png')] bg-no-repeat bg-contain bg-left-bottom">
        <ProjectCrousel />
      </section>
      <section className="hidden relative md:block">
        {[1, 2, 3].map((item, idx) => {
          return <Projects id={idx} key={idx} />;
        })}
        <img
          src="/images/bg-3.png"
          alt="video"
          className={`absolute hidden _pimg lg:block lg:w-[50%] 2xl:w-auto left-0 lg:top-0 sm:-top-60 `}
        />
      </section>

      <Partner />

      <About />

      {openModel && (
        <div className="fixed top-1/2 right-1/2 transform translate-x-1/2 z-40 bg-black/20 w-full h-full flex flex-col justify-center items-center px-4 -translate-y-1/2">
          <Data_Protection />
        </div>
      )}

      <Contectus />
    </>
  );
}

export default Home_Module;
