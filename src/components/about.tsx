import Image from "next/image";
import Link from "next/link";
import { Bgleft, Bgright, Team1, Team2 } from "public/images/imports";
import React from "react";
import Email from "../../public/svg/vector-1.svg";
import Linkedin from "../../public/svg/vector-2.svg";
import Instagram from "../../public/svg/vector-3.svg";
const BlockContent = require("@sanity/block-content-to-react");
export default function About({ uberUns }: any) {
  return (
    <section id="about" className="py-20 px-4 pb-40 relative">
      <Image src={Bgright} alt="" className="absolute top-0 right-0 -z-10" />
      <div className="max-w-[360px] mx-auto ">
        <h2 className="md:text-[64px] md:leading-[70px] text-[32px] leading-[38px] text-center font-bold mb-5">
          About us
        </h2>
        <p className="md:text-[16px] md:leading-[26px] text-[14px] leading-[22px] text-center font-normal">
          Erfahren Sie mehr über die Personen, welche die BK Design GmbH auf die 
        </p>
      </div>
      {uberUns.map((item: any, index: number) => (
        <div
          key={index}
          className={`${
            index === 0 ? "" : ""
          } container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 rounded-[40px]`}
        >
          <div className={`${index === 1 ? "md:order-2" : ""}`}>
            <img
              src={item?.image?.asset?.url}
              alt={item?.image?.alt}
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
          <div
            className={`sm:p-14 p-6 rounded-[40px] items-center flex md:justify-start justify-center`}
            style={{ backgroundColor: "rgba(247, 248, 248, 0.8)" }}
          >
            <div className="flex flex-col justify-center items-center w-full">
              <div className="max-w-[392px]">
                <h3 className="md:text-[32px] md:leading-[38px] text-[20px] leading-[32px] md:text-left text-center font-bold mb-3">
                  {item?.title}
                </h3>
                <p className="md:text-[16px] md:leading-[26px] text-[14px] leading-[22px] md:text-left text-center font-normal uppercase mb-4">
                  {item?.tag}
                </p>
                <div className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] md:text-left text-center font-normal">
                  <BlockContent blocks={item?.content} />
                </div>
                <ul className="flex gap-10 items-center mt-6 md:justify-start justify-center">
                  {item?.social?.map((so: any, i: number) => {
                    return (
                      <li key={i}>
                        <Link href={so.link} target="_blank">
                          <Image
                            src={so?.icon?.asset?.url}
                            alt=""
                            width={48}
                            height={48}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Image src={Bgleft} alt="" className="absolute -bottom-32 left-0 -z-10" />
    </section>
  );
}

export const Teams = [
  {
    id: 0,
    featured: Team1,
    name: "Benjamin Patt",
    job: "Content Creator",
    content:
      "«Wähle einen Beruf, den du liebst und du brauchst keinen Tag mehr in deinem Leben zu arbeiten»",
    mail_url: "bpa@hmq.ch",
    linkedIn_url: "https://www.linkedin.com/in/benjamin-patt-6b7655201/",
    insta_url: "https://www.instagram.com/bk_design_gmbh/",
  },
  {
    id: 1,
    featured: Team2,
    name: "Kevin Alihodzic",
    job: "Content Creator",
    content: "«Man lebt, um sich seine Träume zu erfüllen»",
    mail_url: "kal@bk-design.ch",
    linkedIn_url: "https://www.linkedin.com/in/kevin-alihodzic-5008b824b/",
    insta_url: "https://www.instagram.com/bk_design_gmbh/",
  },
];
