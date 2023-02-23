import Image from 'next/image';
import React from 'react';
import { Logo1, Logo2, Logo3, Logo4 } from 'public/images/imports';

function Partner() {
    return (
        <section className='py-20 px-4'>
            <div className='max-w-[500px] mx-auto'>
                <h2 className='md:text-[64px] md:leading-[70px] text-[32px] leading-[38px] text-center font-bold mb-5'>
                    Partners
                </h2>
                <p className='md:text-[16px] md:leading-[26px] text-[14px] leading-[22px] text-center font-normal'>
                    Partnerschaften sind ein wichtiger Bestandteil unseres Erfolgs - werfen Sie einen Blick auf die Unternehmen, mit denen wir zusammenarbeiten.
                </p>
            </div>
            <div className='max-w-[1016px] mx-auto flex sm:flex-row flex-col-reverse gap-10 items-center mt-10'>
                <div className='md:w-1/4 w-1/2'>
                    <Image src={Logo1} alt="" />
                </div>
                <div className='md:w-1/4 w-1/2'>
                    <Image src={Logo2} alt="" />
                </div>
                <div className='md:w-1/4 w-1/2'>
                    <Image src={Logo3} alt="" />
                </div>
                <div className='md:w-1/4 w-1/2'>
                    <Image src={Logo4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Partner