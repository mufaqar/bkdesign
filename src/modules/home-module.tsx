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
import React, { useContext, useEffect, useRef, useState } from "react";
import { useInView } from "react-hook-inview";
import { SettingsContext } from "@/context/settingContext";
import Image from "next/image";
import WhatsWeOfferDesktop from "../components/what-we-offer-ds";
import Slider from "react-slick";
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'

function Home_Module({data}:any) {
  console.log("🚀 ~ file: home-module.tsx:20 ~ Home_Module ~ data:", data)
  const { openModel, setProjectPostion, projectpostion } =
  useContext(SettingsContext);
  const {partners, projects, uberUns,  userAngebot } = data
  const [p, setP] = useState<number>();

  const myDivRef = useRef<any>(null);
  // const [ref, inView] = useInView({ threshold: 0.5,});
  // console.log("🚀 ~ file: home-module.tsx:23 ~ Home_Module ~ inView:", inView)

  useEffect(() => {
    const handleScroll = () => {
      const rect = myDivRef.current.getBoundingClientRect();
      const distanceFromTop = rect.top;
      setProjectPostion(distanceFromTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setP(940 - projectpostion);
  }, [projectpostion, p]);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  }
  const sliderRef = useRef<any>(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Banner />

      <section className={`md:sticky md:top-[75px] `}>
        <div
          id="offer"
          className={` container flex md:hidden md:mt-[-220px] mb-10 px-4 justify-center items-center flex-col max-w-[650px] w-full mx-auto  `}
        >
          <h1 className="subheading pt-4">Unser Angebot</h1>
          <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] text-center font-normal text-gray-600">
            Wir bieten Ihnen maßgeschneiderte Dienstleistungen, um Ihre
            individuellen Marketing-Bedürfnisse zu erfüllen.
          </p>
        </div>

        <div className="relative bg-red md:hidden justify-start items-start flex flex-row md:flex-col whatweoffer overflow-hidden md:overflow-clip ">
          {userAngebot.map((item:any, idx:number) => {
            return <WhatWeOffer id={idx} key={idx} item={item} />;
          })}
        </div>
      </section>

      <section id="angebot" className="relative md:mt-40 lg:mt-80 ">
        <WhatsWeOfferDesktop WhatWeOfferData={userAngebot} />
      </section>

      <section id="project"  className="" ref={myDivRef}></section>
      <div className="block project_crousel md:hidden bg-[url('/images/project-mobile.png')] bg-no-repeat bg-contain bg-left-bottom">
        <div
          className="flex justify-center px-4 items-center pt-6 sm:pt-16 flex-col max-w-[600px] w-full mx-auto "
        >
          <h1 className="subheading">Projekte</h1>
          <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] text-center font-normal mb-20 text-gray-600">
            Entdecken Sie unsere bisherigen Arbeiten und lassen Sie sich von
            unseren Projekten inspirieren.
          </p>
        </div>
        <ProjectCrousel projectData={projects} />
      </div>

      <section id="project" className="relative hidden md:block">
        <div
          className="flex justify-center px-4 items-center pt-6 sm:pt-16 flex-col w-full "
        >
          <div className="max-w-[600px] mx-auto text-center mb-12">
            <h1 className="subheading">Projekte</h1>
            <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] text-center font-normal mb-5 text-gray-600">
              Entdecken Sie unsere bisherigen Arbeiten und lassen Sie sich von
              unseren Projekten inspirieren.
            </p>
          </div>
        </div>
        <div className="hidden container mx-auto relative md:block projects">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((item:any, idx:number) => {
            return <Projects id={idx} key={idx} item={item} />;
          })}
          </Slider>

          <button className="text-main absolute top-1/2 transform -translate-y-1/2 left-7 shadow-md font-bold p-3 md:-left-12 xl:left-20 2xl:left-48 bg-white rounded-full" onClick={previous}><BsChevronLeft size={15}  /></button>
          <button className="text-main absolute top-1/2 transform -translate-y-1/2 right-16 shadow-md font-bold p-3 bg-white 2xl:right-48 rounded-full" onClick={next}><BsChevronRight size={15} /></button>
        </div>
        <img
          src="/images/bg-3.png"
          alt="video"
          className={`absolute hidden _pimg z-[-1] lg:block lg:w-[50%] 2xl:w-auto left-0 -bottom-40`}
        />
      </section>

      <Partner partners={partners}/>

      <About uberUns={uberUns}/>

      {openModel && (
        <div className="fixed top-1/2 right-1/2 transform translate-x-1/2 z-[100] bg-black/20 w-full h-full flex flex-col justify-center items-center px-4 -translate-y-1/2">
          <Data_Protection />
        </div>
      )}

      <Contectus />
    </>
  );
}

export default Home_Module;

export const projectData = [
  {
    title: "Streetkultmeet video presentation",
    description:
      "Streetkultmeet is an association for motor sports. We filmed a video for advertising and product presentation.",
    viewProjectLink: "#",
    image: "/images/projects.png",
    tag: "Videoproduktion",
  },
  {
    title: "Passion website design & developement",
    description:
      "Passion is a young marketing startup. We have developed a website with a unique design that reflects their bright style.",
    viewProjectLink: "#",
    image: "/images/p2.png",
    tag: "Webdesign",
    tag1: "Webentwicklung",
  },
  {
    title: "Thusnerfest branding",
    description:
      "Thusnerfest is an annual hip hop music festival. We have developed a stylish branding, which will be used for advertising in the future.",
    viewProjectLink: "#",
    image: "/images/p3.png",
    tag: "Branding",
  },
];

const WhatWeOfferData = [
  {
    title: "Videoproduktion",
    detail1:
      "Ein Bild sagt mehr als tausend Worte - ein Video noch viel mehr! Mit unserer Videoproduktion setzen wir Ihr Unternehmen perfekt in Szene. ",
    detail2:
      "Wir arbeiten mit modernster Ausrüstung und einem erfahrenen Team. Dabei setzen wir auf kreative Konzepte, eine professionelle Umsetzung und ein Auge fürs Detail, um sicherzustellen, dass Ihre Botschaft genau auf den Punkt gebracht wird.",
    logo: "/svg/Video.svg",
  },
  {
    title: "Branding",
    detail1:
      "Unser Branding gibt Ihrem Unternehmen ein unverwechselbares Gesicht. Wir entwerfen Logos, Visitenkarten, Briefpapier und andere Materialien, die perfekt zu Ihrem Unternehmen passen.",
    detail2:
      "Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass wir Ihre Vision und Werte vollständig verstehen und in das Design integrieren",
    detail3: "Sie Ihrem Unternehmen mit unserem Branding das gewisse Etwas!",
    logo: "/svg/Show.svg",
  },
  {
    title: "Webdesign",
    detail1:
      "Unser Webdesign zielt darauf ab, ein beeindruckendes Online-Erlebnis für Ihre Zielgruppe zu erschaffen. Wir verwenden modernste Technologie, um eine attraktive Benutzeroberfläche zu erstellen, die den Bedürfnissen Ihrer Kunden entspricht. ",
    detail2:
      "Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass das Design Ihrer Website Ihre Marke widerspiegelt. ",
    detail3: "Gemeinsam gestalten wir eine Webseite, die zu Ihnen passt.",
    logo: "/svg/Activity.svg",
  },
  {
    title: "Webentwicklung",
    detail1:
      "Unsere Webentwicklung bietet eine optimale Umsetzung und Programmierung des Webdesigns. Wir verwenden die neuesten Technologien und Standards, um sicherzustellen, dass Ihre Website auf jedem Gerät und in jedem Browser perfekt funktioniert. Darüber hinaus sorgen wir mit einem SSL-Zertifikat für maximale Sicherheit Ihrer Website und schützen die Daten Ihrer Kunden. ",
    detail2:
      "Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass Ihre Bedürfnisse und Anforderungen in jeder Phase des Entwicklungsprozesses berücksichtigt werden. Sie können sich sicher sein, dass Ihre Website nicht nur schön aussieht, sondern auch reibungslos funktioniert.",
    logo: "/svg/Setting.svg",
  },
];
