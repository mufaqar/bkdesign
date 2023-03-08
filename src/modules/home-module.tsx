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
        {WhatWeOfferData.map((item, idx) => {
          return <WhatWeOffer id={idx} key={idx} item={item}/>;
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
        {projectData.map((item, idx) => {
          return <Projects id={idx} key={idx} item={item}/>;
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




export const projectData = [
  {
    title:'Streetkultmeet video presentation',
    description:'Streetkultmeet is an association for motor sports. We filmed a video for advertising and product presentation.',
    viewProjectLink:'#',
    image:'/images/projects.png',
    tag:"Videoproduktion"
  },
  {
    title:'Passion website design & developement',
    description:'Passion is a young marketing startup. We have developed a website with a unique design that reflects their bright style.',
    viewProjectLink:'#',
    image:'/images/p2.png',
    tag:"Webdesign",
    tag1:"Webentwicklung"
  },
  {
    title:'Thusnerfest branding',
    description:'Thusnerfest is an annual hip hop music festival. We have developed a stylish branding, which will be used for advertising in the future.',
    viewProjectLink:'#',
    image:'/images/p3.png',
    tag:'Branding'
  }
]

const WhatWeOfferData = [
  {
    title:"Videoproduktion",
    detail1: "Ein Bild sagt mehr als tausend Worte - ein Video noch viel mehr! Mit unserer Videoproduktion setzen wir Ihr Unternehmen perfekt in Szene. ",
    detail2: "Wir arbeiten mit modernster Ausrüstung und einem erfahrenen Team. Dabei setzen wir auf kreative Konzepte, eine professionelle Umsetzung und ein Auge fürs Detail, um sicherzustellen, dass Ihre Botschaft genau auf den Punkt gebracht wird.",
    logo: "/svg/Video.svg",
  },
  {
    title:"Branding",
    detail1: "Unser Branding gibt Ihrem Unternehmen ein unverwechselbares Gesicht. Wir entwerfen Logos, Visitenkarten, Briefpapier und andere Materialien, die perfekt zu Ihrem Unternehmen passen.",
    detail2: "Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass wir Ihre Vision und Werte vollständig verstehen und in das Design integrieren",
    detail3: "Sie Ihrem Unternehmen mit unserem Branding das gewisse Etwas!",
    logo: "/svg/Show.svg",
  },
  {
    title:"Webdesign",
    detail1: "Unser Webdesign zielt darauf ab, ein beeindruckendes Online-Erlebnis für Ihre Zielgruppe zu erschaffen. Wir verwenden modernste Technologie, um eine attraktive Benutzeroberfläche zu erstellen, die den Bedürfnissen Ihrer Kunden entspricht. ",
    detail2: "Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass das Design Ihrer Website Ihre Marke widerspiegelt. ",
    detail3: "Gemeinsam gestalten wir eine Webseite, die zu Ihnen passt.",
    logo: "/svg/Activity.svg",
  },
  {
    title:"Webentwicklung",
    detail1: "Unsere Webentwicklung bietet eine optimale Umsetzung und Programmierung des Webdesigns. Wir verwenden die neuesten Technologien und Standards, um sicherzustellen, dass Ihre Website auf jedem Gerät und in jedem Browser perfekt funktioniert. Darüber hinaus sorgen wir mit einem SSL-Zertifikat für maximale Sicherheit Ihrer Website und schützen die Daten Ihrer Kunden. ",
    detail2: "Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass Ihre Bedürfnisse und Anforderungen in jeder Phase des Entwicklungsprozesses berücksichtigt werden. Sie können sich sicher sein, dass Ihre Website nicht nur schön aussieht, sondern auch reibungslos funktioniert.",
    logo: "/svg/Setting.svg",
  },
]