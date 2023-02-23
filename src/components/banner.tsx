import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Main from '../../public/images/camera.png';

function Banner() {
    return (
        <section className='bg-[url(/images/main.png)] bg-center bg-cover bg-no-repeat py-20'>
            <div className='container mx-auto flex md:flex-row flex-col-reverse gap-10'>
                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-[88px] md:leading-[92px] text-[44px] leading-[46px] md:text-left text-center font-bold mb-10'>
                        Machen Sie Ihr Unternehmen sichtbar
                    </h1>
                    <p className='md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] md:text-left text-center font-normal mb-12'>
                        Klare Angebote, Klare Entscheidungen - ein gelungener Auftritt für Ihr Unternehmen!
                    </p>
                    <Link href="#" className='bg-[#108989] flex rounded-[50px] p-1 md:w-[336px] w-[273px] md:ml-0 mx-auto'>
                        <span className='pl-10 flex gap-8 justify-between items-center md:w-[336px] w-[273px]'>
                            <span className='md:text-[24px] md:leading-[38px] text-[16px] leading-[21px] font-normal uppercase text-white'>
                                Get in touch
                            </span>
                            <Image src="/svg/arrow-right.svg" alt="logo" width={86} height={86} className="bg-white/90 rounded-full p-2" />
                        </span>
                    </Link>
                </div>
                <div className='md:w-1/2 w-full'>
                    <Image src={Main} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner