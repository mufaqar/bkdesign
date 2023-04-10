import Image from "next/image";
import React from "react";
import { Logo1, Logo2, Logo3, Logo4 } from "public/images/imports";

function Partner({ partners }: any) {
  console.log("🚀 ~ file: partner.tsx:6 ~ Partner ~ partners:", partners)
  return (
    <section id="partner" className="py-20 ">
      <div className="max-w-[500px] mx-auto px-4">
        <h2 className="md:text-[64px] md:leading-[70px] text-[32px] leading-[38px] text-center font-bold mb-5">
          Partners
        </h2>
        <p className="md:text-[16px] md:leading-[26px] text-[14px] leading-[22px] text-center font-normal">
          Partnerschaften sind ein wichtiger Bestandteil unseres Erfolgs -
          werfen Sie einen Blick auf die Unternehmen, mit denen wir
          zusammenarbeiten.
        </p>
      </div>
      <div className="max-w-[1016px] mx-auto px-4 flex sm:flex-row justify-around flex-col-reverse gap-10 items-center mt-10">
        {partners.map((item: any, i: number) => {
          return (
            <div className="" key={i}>
              <Image src={item?.image?.asset.url} alt={item?.image?.alt} width={150} height={100}/>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partner;
