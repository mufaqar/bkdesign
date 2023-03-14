import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Main from '../../public/images/camera.png';

function Banner() {
    return (
        <section id="home" className='relative h-screen flex justify-center items-center flex-col bg-[url(/images/main-mobile-bg.png)] md:bg-[url(/images/main-mg-bg.png)] lg:container lg:mx-auto lg:bg-none bg-right bg-cover bg-no-repeat py-20 px-4 -mt-[77px]'>
            <div className='flex lg:flex-row flex-col-reverse gap-10 mt-20 lg:mt-32 container mx-auto'>
                <div className='lg:w-1/2 w-full z-[1]'>
                    <h1 className='xl:text-[88px] lg:text-[66px] lg:leading-[77px] xl:leading-[92px] text-[44px] leading-[46px] lg:text-left text-center font-bold mb-4 xl:mb-10'>
                        Machen Sie Ihr Unternehmen sichtbar
                    </h1>
                    <p className='md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] lg:text-left text-center font-normal mb-12'>
                        Klare Angebote, Klare Entscheidungen - ein gelungener Auftritt für Ihr Unternehmen!
                    </p>
                    <Link href="#contact" className='bg-[#108989] flex rounded-[50px] pl-10 p-1 pr-[3px] md:w-[336px] w-[273px] lg:ml-0 mx-auto'>
                        <span className='flex gap-8 justify-between items-center md:w-[336px] w-[273px]'>
                            <span className='md:text-[24px] md:leading-[38px] text-[16px] leading-[21px] font-normal uppercase text-white'>
                                Get in touch
                            </span>
                            <span className="bg-white/90 rounded-full p-3">
                                <Image src="/svg/arrow-right.svg" alt="logo" width={40} height={40} />
                            </span>
                        </span>
                    </Link>
                </div>
                <div className='lg:w-1/2 w-full z-[1]'>
                    <Image src={Main} alt="" />
                </div>
            </div>
            <img src="/images/main-bg.png" alt="" className='absolute hidden lg:block lg:-top-28 xl:-top-20 2xl:-top-0 md:right-0 z-0 mainbg'/>
        </section>
    )
}

export default Banner