import React from 'react';
import {Banner, Projects, WhatWeOffer, Contectus} from '../components/imports';

function Home_Module() {
  return (
    <>
      <Banner/>
      <div className="flex mt-28 justify-center items-center flex-col max-w-[600px] w-full mx-auto ">
        <h1 className="subheading">Unser Angebot</h1>
        <p className="md:text-[24px] md:leading-[38px] text-[16px] leading-[26px] md:text-left text-center font-normal text-gray-600">
          Wir bieten Ihnen maßgeschneiderte Dienstleistungen, um Ihre
          individuellen Marketing-Bedürfnisse zu erfüllen.
        </p>
      </div>
      <section className='relative'>
      {
        [1,2,3].map((item,idx)=>{
          return(
            <WhatWeOffer id={idx} key={idx}/>
          )
        })
      }
      </section>
      <Projects/>
      <Contectus/>
    </>
  )
}

export default Home_Module