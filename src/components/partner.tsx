import Image from "next/image";
import React from "react";
import { Logo1, Logo2, Logo3, Logo4 } from "public/images/imports";
import Link from "next/link";

function Partner({ partners }: any) {
  console.log("🚀 ~ file: partner.tsx:6 ~ Partner ~ partners:", partners)
  return (
    <section id="partner" className="py-20 mt-28">
      <div className="max-w-[500px] mx-auto px-4 mb-10">
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
            <div className="hover:cursor-pointer hover:scale-105" key={i}>
              <Link target="_blank" href={item?.image?.link}><Image src={item?.image?.asset.url} alt={`logo`} width={150} height={100}/></Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partner;
