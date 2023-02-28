import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from 'react-hook-inview'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'

const WhatweOffer = ({id}:any) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  useEffect(()=>{
    if(id === 1 && inView){
      const wwo0 = document.querySelector('.wwo0')
      wwo0?.classList.add('scale0')
      wwo0?.classList.add('opacity-70')
    }
    if(id === 1 && !inView){
      const wwo0 = document.querySelector('.wwo0')
      wwo0?.classList.remove('scale0')
      wwo0?.classList.remove('opacity-70')
    }

    if(id === 2 && inView){
      const wwo1 = document.querySelector('.wwo1')
      wwo1?.classList.add('scale1')
      wwo1?.classList.add('opacity-75')
    }
    if(id === 2 && !inView){
      const wwo1 = document.querySelector('.wwo1')
      
      wwo1?.classList.remove('scale1')
      wwo1?.classList.remove('opacity-75')
    }
  },[inView])

  const changeMobileSlidePrevious =(id:number)=>{
    const wwoN = document.querySelector(`.wwo${id}`);
    wwoN?.classList.remove('onMobileTranslate')
  }
  const changeMobileSlideNext =(id:number)=>{
    const wwoN = document.querySelector(`.wwo${id+1}`);
    wwoN?.classList.add('onMobileTranslate')
  }
  
  return (
    <>
    <section ref={ref} className={`relative p-4 h-[650px] sm:h-[700px] md:h-[800px] min-w-full flex flex-col transition-all duration-800 ease-in-out justify-center items-center wwo${id}`}>
      <div className="relative bg-[url('/images/what-we-offer-bg.png')] container mx-auto rounded-[32px] bg-left-bottom bg-no-repeat bg-cover  grid md:h-[506px] grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-start flex-col p-6 md:p-10 lg:p-32">
          <div className="text-white flex justify-end w-full gap-2 md:hidden">
            <button className="text-main  font-bold p-2 bg-white rounded-full" onClick={()=>changeMobileSlidePrevious(id)}><BsChevronLeft size={15}  /></button>
            <button className="text-main  font-bold p-2 bg-white rounded-full" onClick={()=>changeMobileSlideNext(id)}><BsChevronRight size={15} /></button>
          </div>
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
        <div className="flex justify-center items-center flex-col p-5 md:p-10 px-28 pt-0 md:px-10">
          <Image src="/svg/Video.svg" alt="video" width={350} height={300} />
        </div>
        <ul className="gap-2 hidden lg:flex top-1/2 right-10 absolute flex-col transform -translate-y-1/2 px-4 z-50">
          {
            [1,2,3,4].map((dots,idx)=>{
              return(
                <li key={idx} className={`bg-white p-1 rounded-full ${id === idx && 'py-2'}`}></li>
              )
            })
          }
        </ul>
      </div>
    </section>
   
    </>
  );
};

export default WhatweOffer;



