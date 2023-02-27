import Image from "next/image";
import React from "react";

const WhatweOffer = ({id}:any) => {
  
  return (
    <section className={`relative px-4 h-screen flex flex-col justify-center items-center wwo${id}`}>
      <div className="relative bg-[url('/images/what-we-offer-bg.png')]  container mx-auto rounded-[32px] bg-left-bottom bg-no-repeat bg-cover  grid md:h-[506px] grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-start flex-col p-10 lg:p-32">
          <h5 className="text-[32px] font-bold text-white mb-4">Videoproduktion</h5>
          <p className=" text-sm text-gray-300">
            Ein Bild sagt mehr als tausend Worte - ein Video noch viel mehr! Mit
            unserer Videoproduktion setzen wir Ihr Unternehmen perfekt in Szene.
            Wir arbeiten mit modernster Ausrüstung und einem erfahrenen Team.
          </p>
          <p className=" text-sm text-gray-300 mt-2">Dabei setzen wir auf kreative Konzepte, eine professionelle
            Umsetzung und ein Auge fürs Detail, um sicherzustellen, dass Ihre
            Botschaft genau auf den Punkt gebracht wird.</p>
        </div>
        <div className="flex justify-center items-center flex-col p-10">
          <Image src="/svg/Video.svg" alt="video" width={350} height={300} />
        </div>
        <img src="/images/shadebg.png" alt="shadebh" className="absolute block md:hidden -top-3 px-7 sm:-top-7 shade pl-8 -z-10"  />
      </div>
      <img src="/images/bg-2.png" alt="video" className="absolute hidden lg:block right-0 top-96 -z-10"  />
    </section>
  );
};

export default WhatweOffer;
