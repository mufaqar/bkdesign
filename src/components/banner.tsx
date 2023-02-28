import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Main from '../../public/images/camera.png';

function Banner() {
    return (
        <section id="home" className='bg-[url(/images/main.png)] bg-bottom bg-cover bg-no-repeat py-20 px-4 -mt-[77px] '>
            <div className='container mx-auto flex md:flex-row flex-col-reverse gap-10 mt-20'>
                <div className='md:w-1/2 w-full'>
                    <h1 className='md:text-[88px] md:leading-[92px] text-[44px] leading-[46px] md:text-left text-center font-bold mb-10'>
                        Machen Sie Ihr Unternehmen sichtbar
                    </h1>
                    <p className='md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] md:text-left text-center font-normal mb-12'>
                        Klare Angebote, Klare Entscheidungen - ein gelungener Auftritt für Ihr Unternehmen!
                    </p>
                    <Link href="#" className='bg-[#108989] flex rounded-[50px] pl-10 p-1 pr-[3px] md:w-[336px] w-[273px] md:ml-0 mx-auto'>
                        <span className='flex gap-8 justify-between items-center md:w-[336px] w-[273px]'>
                            <span className='md:text-[24px] md:leading-[38px] text-[16px] leading-[21px] font-normal uppercase text-white'>
                                Get in touch
                            </span>
                            <span className="bg-white/90 rounded-full p-2">
                                <Image src="/svg/arrow-right.svg" alt="logo" width={40} height={40} />
                            </span>
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