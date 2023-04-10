import { useInView } from 'react-hook-inview';
import Image from 'next/image';
const BlockContent = require('@sanity/block-content-to-react')

const WhatsWeOfferDesktop = ({WhatWeOfferData}) => {
  console.log("🚀 ~ file: what-we-offer-ds.jsx:5 ~ WhatsWeOfferDesktop ~ WhatWeOfferData:", WhatWeOfferData[0])
  const [ref1, inView1] = useInView({ threshold: 1 });
  const [ref2, inView2] = useInView({ threshold: 1 });
  const [ref3, inView3] = useInView({ threshold: 1 });
  const [ref4, inView4] = useInView({ threshold: 1 });

  return (
    <section className="hidden md:block ">
      <ul id="cards" className=" ">
        <li className="card  " id={`card1`} ref={ref1}>
          <div
            id="offer"
            className={` container flex md:mt-[-220px] mb-10 px-4 justify-center items-center flex-col max-w-[650px] w-full mx-auto  `}
          >
            <h1 className="subheading pt-4">Unser Angebot</h1>
            <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] text-center font-normal text-gray-600">
              Wir bieten Ihnen maßgeschneiderte Dienstleistungen, um Ihre
              individuellen Marketing-Bedürfnisse zu erfüllen.
            </p>
          </div>
          <img
            src="/images/bg-2.png"
            alt="video"
            className={` absolute hidden lg:block w-[380px] top-40 right-0 -z-[21]
             
            `}
          />
          <div className={`card-body`}>
            <div
              className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom bg-no-repeat bg-cover grid md:h-[506px] transition duration-1000 ease-in-out grid-cols-1 md:grid-cols-2 ${
                inView2 ? 'scale-[0.94] opacity-70' : null
              }`}
            >
              <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                  {WhatWeOfferData[0].title}
                </h5>
            
                <div className=" text-sm text-gray-300 _content">
                 <BlockContent blocks={WhatWeOfferData[0]?.content} />
                </div>
              </div>
              <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                <Image
                  src={WhatWeOfferData[0]?.image?.asset.url}
                  alt={WhatWeOfferData[0].image?.alt}
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
                    >
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </li>

        <li className="card" id={`card2`} ref={ref2}>
          <div className={`card-body`}>
            <div
              className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom transition duration-1000 ease-in-out bg-no-repeat bg-cover grid md:h-[506px] grid-cols-1 md:grid-cols-2 ${
                inView3 ? 'scale-[0.96] opacity-75' : null
              }`}
            >
              <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                {WhatWeOfferData[1].title}
                </h5>
                <div className=" text-sm text-gray-300 _content">
                <BlockContent blocks={WhatWeOfferData[1]?.content} />
               </div>
              </div>
              <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                <Image
                src={WhatWeOfferData[1]?.image?.asset.url}
                alt={WhatWeOfferData[1].image?.alt}
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
                    >
                      {' '}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </li>

        <li className="card" id={`card2`} ref={ref3}>
          <div className={`card-body`}>
            <div
              className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom transition duration-1000 ease-in-out bg-no-repeat bg-cover grid md:h-[506px] mt-12 grid-cols-1 md:grid-cols-2 ${
                inView4 ? 'scale-[0.98] opacity-80' : null
              }`}
            >
              <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                {WhatWeOfferData[2].title}
                </h5>
                <div className=" text-sm text-gray-300 _content">
                <BlockContent blocks={WhatWeOfferData[2]?.content} />
               </div>
              </div>
              <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                <Image
                src={WhatWeOfferData[2]?.image?.asset.url}
                alt={WhatWeOfferData[2].image?.alt}
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
                    >
                      {' '}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </li>

        <li className="card" id={`card2`} ref={ref4}>
          <div className={`card-body`}>
            <div
              className={`relative bg-[url('/images/what-we-offer-bg.png')] w-full md:container md:mx-auto rounded-[32px] bg-left-bottom mt-24 bg-no-repeat bg-cover grid md:h-[506px] grid-cols-1 md:grid-cols-2 `}
            >
              <div className="flex justify-center items-start max-w-2xl flex-col p-6 md:p-10 lg:p-32">
                <h5 className="text-2xl md:text-[32px] font-bold text-white mb-4">
                {WhatWeOfferData[3]?.title}
                </h5>
                <div className=" text-sm text-gray-300 _content">
                <BlockContent blocks={WhatWeOfferData[3]?.content} />
               </div>
              </div>
              <div className="md:flex hidden justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
                <Image
                src={WhatWeOfferData[3]?.image?.asset.url}
                alt={WhatWeOfferData[3].image?.alt}
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
                    >
                      {' '}
                    </li>
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
