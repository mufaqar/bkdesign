import Image from 'next/image';
import Link from 'next/link';
import { Bgleft, Bgright, Team1, Team2 } from 'public/images/imports';
import React from 'react';
import Email from '../../public/svg/vector-1.svg';
import Linkedin from '../../public/svg/vector-2.svg';
import Instagram from '../../public/svg/vector-3.svg';

export default function About() {
    return (
        <section className='py-20 px-4 relative'>
            <Image src={Bgright} alt="" className='absolute top-0 right-0 -z-10' />
            <div className='max-w-[360px] mx-auto '>
                <h2 className='md:text-[64px] md:leading-[70px] text-[32px] leading-[38px] text-center font-bold mb-5'>
                    Über Uns
                </h2>
                <p className='md:text-[16px] md:leading-[26px] text-[14px] leading-[22px] text-center font-normal'>
                    Erfahren Sie mehr über die Personen, welche die BK Design GmbH auf die Beine gestellt haben.
                </p>
            </div>
            {Teams.map((item, index) => (
                <div key={index} className={`${item.id === 0 ? "sm:flex-row" : "sm:flex-row-reverse "} container mx-auto sm:h-[600px] flex flex-col sm:gap-6 gap-4 sm:mt-14 mt-8`}>
                    <div className='sm:w-1/2 w-full rounded-[40px'>
                        <Image src={item.featured} alt="" className='object-cover w-full h-full rounded-[40px]' />
                    </div>
                    <div className='sm:w-1/2 w-full h-full sm:p-14 p-6 rounded-[40px]' style={{ backgroundColor: "rgba(247, 248, 248, 0.8)" }}>
                        <div className='max-w-[392px]'>
                            <h3 className='md:text-[32px] md:leading-[38px] text-[20px] leading-[32px] sm:text-left text-center font-bold mb-3'>
                                {item.name}
                            </h3>
                            <p className='md:text-[16px] md:leading-[26px] text-[14px] leading-[22px] sm:text-left text-center font-normal uppercase mb-4'>
                                {item.job}
                            </p>
                            <p className='md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] sm:text-left text-center font-normal'>
                                {item.content}
                            </p>
                            <ul className='flex gap-10 items-center mt-6 sm:justify-start justify-center'>
                                <li>
                                    <Link href={item.mail_url} target="_blank">
                                        <Image src={Email} alt="" width={48} height={48} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={item.linkedIn_url} target="_blank">
                                        <Image src={Linkedin} alt="" width={48} height={48} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={item.insta_url} target="_blank">
                                        <Image src={Instagram} alt="" width={48} height={48} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
            <Image src={Bgleft} alt="" className='absolute -bottom-32 left-0 -z-10' />
        </section>
    )
}

export const Teams = [
    {
        id: 0,
        featured: Team1,
        name: 'Benjamin Patt',
        job: 'Content Creator',
        content: '«Wähle einen Beruf, den du liebst und du brauchst keinen Tag mehr in deinem Leben zu arbeiten»',
        mail_url: 'bpa@hmq.ch',
        linkedIn_url: 'https://www.linkedin.com/in/benjamin-patt-6b7655201/',
        insta_url: 'https://www.instagram.com/bk_design_gmbh/',
    },
    {
        id: 1,
        featured: Team2,
        name: 'Kevin Alihodzic',
        job: 'Content Creator',
        content: '«Man lebt, um sich seine Träume zu erfüllen»',
        mail_url: 'kal@bk-design.ch',
        linkedIn_url: 'https://www.linkedin.com/in/kevin-alihodzic-5008b824b/',
        insta_url: 'https://www.instagram.com/bk_design_gmbh/',

    },
]