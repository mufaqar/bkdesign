import { SettingsContext } from "@/context/settingContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaBeer } from "react-icons/fa";


function Header() {
const { IsNavOpen, setIsNavOpen, } = useContext(SettingsContext)
  return (
    <>
      <header className="container mx-auto flex justify-between items-center py-4">
        <Image src="/svg/logo.svg" alt="logo" width={150} height={50} />
        <div className="flex items-center gap-4 cursor-pointer" onClick={()=>setIsNavOpen(true)}>
          <span className="uppercase">Menu</span>
          <Image
            src="/svg/menuhamburger.svg"
            alt="hamburger"
            width={35}
            height={40}
            className="text-main"
          />
        </div>
      </header>
      {IsNavOpen && <Nav />}
    </>
  );
}

export default Header;

const Nav = () => {
const { setIsNavOpen } = useContext(SettingsContext)

  return (
    <nav className="bg-[url('/svg/nav-bg.svg')] fixed right-0 bottom-0 w-[400px] top-0 p-10">
      <div className="flex justify-end" >
        <div className="flex items-center gap-4 text-white cursor-pointer" onClick={()=>{setIsNavOpen(false)}}>
          <span className="uppercase ">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <ul className="mt-20 gap-10 flex ml-16 flex-col">
        {navItems.map((item, idx) => {
          return (
            <li key={idx} className="text-white font-bold text-5xl ">
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <button className="text-main ml-16 mt-16 bg-white rounded-full py-3 shadow-md px-6 text-sm uppercase">
        Kontaktiere uns
      </button>
    </nav>
  );
};

export const navItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Angebot",
    link: "#",
  },
  {
    name: "Projekte",
    link: "#",
  },
  {
    name: "Partner",
    link: "#",
  },
  {
    name: "Über Uns",
    link: "#",
  },
];
