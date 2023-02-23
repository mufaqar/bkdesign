import Image from "next/image";
import React, { useState } from "react";

function Header() {
  return (
    <header className="container mx-auto ">
        <Image src="/svg/logo.svg" alt="logo" width={150} height={50}/>
        <div>
            <span>Menu</span>
        </div>
    </header>
  )
}

export default Header;
