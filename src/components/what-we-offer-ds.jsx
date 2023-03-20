import { useInView } from "react-hook-inview";
import Image from "next/image";


const WhatsWeOfferDesktop = ({ WhatWeOfferData }) => {
   const [ref1, inView1] = useInView({ threshold: 1,});
   const [ref2, inView2] = useInView({ threshold: 1,});
   const [ref3, inView3] = useInView({ threshold: 1,});
   const [ref4, inView4] = useInView({ threshold: 1,});


  return (
    <section className="hidden md:block">
      <ul id="cards" className="container mx-auto">
        
          <li className="card" id={`card1`} ref={ref1} >
            <div className={`card-body`} >
              <div className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom bg-no-repeat bg-cover grid md:h-[506px] transition duration-1000 ease-in-out grid-cols-1 md:grid-cols-2 ${inView2 ? 'scale-[0.94] opacity-70' : null}`}>
                <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                  <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                  Videoproduktion
                  </h5>
                  <p className=" text-sm text-gray-300">Ein Bild sagt mehr als tausend Worte - ein Video noch viel mehr! Mit unserer Videoproduktion setzen wir Ihr Unternehmen perfekt in Szene. </p>
                  <p className=" text-sm text-gray-300 mt-4">
                  Wir arbeiten mit modernster Ausrüstung und einem erfahrenen Team. Dabei setzen wir auf kreative Konzepte, eine professionelle Umsetzung und ein Auge fürs Detail, um sicherzustellen, dass Ihre Botschaft genau auf den Punkt gebracht wird.
                  </p>
                 
                </div>
                <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                  <Image
                    src="/svg/Video.svg"
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
                        className={`bg-[#457575] p-1 rounded-full  [&:nth-child(1)]:md:py-2 px-2 md:px-1 md:bg-white bg-[#042c2cc0] `}
                      > </li>
                      
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>

          <li className="card" id={`card2`} ref={ref2}>
            <div className={`card-body`} >
              <div className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom transition duration-1000 ease-in-out bg-no-repeat bg-cover grid md:h-[506px] grid-cols-1 md:grid-cols-2 ${inView3 ? 'scale-[0.96] opacity-75' : null}`}>
                <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                  <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                  Branding
                  </h5>
                  <p className=" text-sm text-gray-300">Unser Branding gibt Ihrem Unternehmen ein unverwechselbares Gesicht. Wir entwerfen Logos, Visitenkarten, Briefpapier und andere Materialien, die perfekt zu Ihrem Unternehmen passen. </p>
                  <p className=" text-sm text-gray-300 mt-4">
                  Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass wir Ihre Vision und Werte vollständig verstehen und in das Design integrieren
                  </p>
                  <p className=" text-sm text-gray-300 mt-4">Sie Ihrem Unternehmen mit unserem Branding das gewisse Etwas!</p>
                 
                </div>
                <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                  <Image
                    src="/svg/Show.svg"
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
                        className={`bg-[#457575] p-1 rounded-full  [&:nth-child(2)]:md:py-2 px-2 md:px-1 md:bg-white bg-[#042c2cc0] `}
                      > </li>
                      
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>

          <li className="card" id={`card2`} ref={ref3}>
          <div className={`card-body`} >
            <div className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom transition duration-1000 ease-in-out bg-no-repeat bg-cover grid md:h-[506px] mt-12 grid-cols-1 md:grid-cols-2 ${inView4 ? 'scale-[0.98] opacity-80' : null}`}>
              <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                Webdesign
                </h5>
                <p className=" text-sm text-gray-300">Unser Webdesign zielt darauf ab, ein beeindruckendes Online-Erlebnis für Ihre Zielgruppe zu erschaffen. Wir verwenden modernste Technologie, um eine attraktive Benutzeroberfläche zu erstellen, die den Bedürfnissen Ihrer Kunden entspricht. </p>
                <p className=" text-sm text-gray-300 mt-4">
                Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass das Design Ihrer Website Ihre Marke widerspiegelt. 
                </p>
                <p className=" text-sm text-gray-300 mt-4">Gemeinsam gestalten wir eine Webseite, die zu Ihnen passt.</p>
               
              </div>
              <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                <Image
                  src="/svg/Activity.svg"
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
                      className={`bg-[#457575] p-1 rounded-full  [&:nth-child(3)]:md:py-2 px-2 md:px-1 md:bg-white bg-[#042c2cc0] `}
                    > </li>
                    
                  );
                })}
              </ul>
            </div>
          </div>
        </li>

        <li className="card" id={`card2`} ref={ref4}>
            <div className={`card-body`} >
              <div className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom mt-24 bg-no-repeat bg-cover grid md:h-[506px] grid-cols-1 md:grid-cols-2 `}>
                <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                  <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                  Webentwicklung
                  </h5>
                  <p className=" text-sm text-gray-300">Unsere Webentwicklung bietet eine optimale Umsetzung und Programmierung des Webdesigns. Wir verwenden die neuesten Technologien und Standards, um sicherzustellen, dass Ihre Website auf jedem Gerät und in jedem Browser perfekt funktioniert. Darüber hinaus sorgen wir mit einem SSL-Zertifikat für maximale Sicherheit Ihrer Website und schützen die Daten Ihrer Kunden. </p>
                  <p className=" text-sm text-gray-300 mt-4">
                  Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass Ihre Bedürfnisse und Anforderungen in jeder Phase des Entwicklungsprozesses berücksichtigt werden. Sie können sich sicher sein, dass Ihre Website nicht nur schön aussieht, sondern auch reibungslos funktioniert.
                  </p>
                 
                </div>
                <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                  <Image
                    src="/svg/Setting.svg"
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
                        className={`bg-[#457575] p-1 rounded-full  [&:nth-child(4)]:md:py-2 px-2 md:px-1 md:bg-white bg-[#042c2cc0] `}
                      > </li>
                      
                    );
                  })}
                </ul>
              </div>
            </div>
          </li>
         
      </ul>

    </section>
  );
};

export default WhatsWeOfferDesktop;
