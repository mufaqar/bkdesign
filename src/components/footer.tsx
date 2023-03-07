import { SettingsContext } from '@/context/settingContext';
import Image from 'next/image';
import Link from 'next/link';
import React, {useContext, useState} from 'react';
import { Data_Protection } from './imports';

function Footer() {
  const [show, setshow] = useState(false);
  const {setOpenModel} = useContext(SettingsContext)
  return (
    <footer className='md:mt-20 pt-10 px-4 bg-[#031717]'>
      <div className='container mx-auto grid sm:grid-cols-3 grid-cols-1 py-10'>
        <div className='flex sm:flex-col flex-row sm:gap-12 gap-4 justify-between'>
          <Link href="/">
            <Image src="/svg/white-logo.svg" alt="logo" width={40} height={40} />
          </Link>
          <ul className='sm:flex hidden gap-4 items-center'>
            <li className="bg-[#052E2E] p-3 rounded-full h-12 w-12 grid items-center">
              <Link href="https://www.instagram.com/bk_design_gmbh/" target="_blank">
                <Image src="/svg/vector-3.svg" alt="logo" width={40} height={40} />
              </Link>
            </li>
            <li className="bg-[#052E2E] p-3 rounded-full h-12 w-12 grid items-center">
              <Link href="https://www.youtube.com/@bkdesign7388" target="_blank">
                <Image src="/svg/youtube.svg" alt="logo" width={40} height={40} />
              </Link>
            </li>
            <li className="bg-[#052E2E] p-3 rounded-full h-12 w-12 grid items-center">
              <Link href="https://www.linkedin.com/company/bk-design-ch/" target="_blank">
                <Image src="/svg/vector-2.svg" alt="logo" width={40} height={40} />
              </Link>
            </li>
          </ul>
          <ul className='col-span-2 sm:hidden flex sm:gap-4 gap-3 items-center'>
            <li className="bg-[#052E2E] p-2 rounded-full h-10 w-10 grid items-center">
              <Link href="tel:+41 76 320 70 33" target="_blank">
                <Image src="/svg/phone.svg" alt="logo" width={38} height={38} />
              </Link>
            </li>
            <li className="bg-[#052E2E] p-2 rounded-full h-10 w-10 grid items-center">
              <Link href="mailto:info@bk-design.ch" target="_blank">
                <Image src="/svg/vector-1.svg" alt="logo" width={38} height={38} />
              </Link>
            </li>
            <li className="bg-[#052E2E] p-2 rounded-full h-10 w-10 grid items-center">
              <Link href="#">
                <Image src="/svg/map.svg" alt="logo" width={38} height={38} />
              </Link>
            </li>
            <li className="bg-[#052E2E] p-2 rounded-full h-10 w-10 grid items-center">
              <Link href="https://www.instagram.com/bk_design_gmbh/" target="_blank">
                <Image src="/svg/vector-3.svg" alt="logo" width={38} height={38} />
              </Link>
            </li>
            <li className="bg-[#052E2E] p-2 rounded-full h-10 w-10 grid items-center">
              <Link href="https://www.youtube.com/@bkdesign7388" target="_blank">
                <Image src="/svg/youtube.svg" alt="logo" width={38} height={38} />
              </Link>
            </li>
            <li className="bg-[#052E2E] p-2 rounded-full h-10 w-10 grid items-center">
              <Link href="https://www.linkedin.com/company/bk-design-ch/" target="_blank">
                <Image src="/svg/vector-2.svg" alt="logo" width={38} height={38} />
              </Link>
            </li>
          </ul>
        </div>
        <div className='grid-cols-2 sm:grid hidden'>
          <ul className='grid gap-4 items-center'>
            <li className="text-[#ADADAD]">
              <Link href="#">
                Home
              </Link>
            </li>
            <li className="text-[#ADADAD]">
              <Link href="#">
                Angebot
              </Link>
            </li>
            <li className="text-[#ADADAD]">
              <Link href="#">
                Projekte
              </Link>
            </li>
          </ul>
          <ul className='grid gap-4 items-center'>
            <li className="text-[#ADADAD]">
              <Link href="#">
                Partner
              </Link>
            </li>
            <li className="text-[#ADADAD]">
              <Link href="#">
                Über Uns
              </Link>
            </li>
            <li className="text-[#ADADAD]">
              <Link href="#">
                Kontaktiere uns
              </Link>
            </li>
          </ul>
        </div>
        <div className='sm:block hidden'>
          <ul className='grid gap-4 items-center'>
            <li className="text-[#ADADAD]">
              <Link href="tel:+41 76 320 70 33" target="_blank" className='flex gap-2'>
                <Image src="/svg/phone.svg" alt="logo" width={16} height={16} /> +41 76 320 70 33
              </Link>
            </li>
            <li className="text-[#ADADAD]">
              <Link href="mailto:info@bk-design.ch" target="_blank" className='flex gap-2'>
                <Image src="/svg/vector-1.svg" alt="logo" width={16} height={16} /> info@bk-design.ch
              </Link>
            </li>
            <li className="text-[#ADADAD]">
              <Link href="#" className='flex gap-2'>
                <Image src="/svg/map.svg" alt="logo" width={16} height={16} /> BK Design GmbH, Bachweg 24,CH-7430 Thusis
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto h-[1px] bg-white/10'></div>
      <div className='container mx-auto items-center py-4 grid sm:grid-cols-2 grid-cols-1 gap-4 justify-between'>
        <p className="text-[#ADADAD] text-[12px] leading-[15px] sm:text-left text-center font-normal">
          Copyright © 2023 | Powered by BK Design GmbH | Alle Rechte vorbehalten
        </p>
        <button onClick={()=>setOpenModel(true)} className="text-[#ADADAD] text-[12px] leading-[15px] sm:text-right text-center font-normal">
          Impressum & Datenschutz
        </button>
      </div>
      
    </footer>
  )
}

export default Footer