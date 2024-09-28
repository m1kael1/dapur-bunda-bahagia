"use client";

import { useEffect, useState } from "react";
import SheetCart from "./cart/sheet-cart";

const Header = () => {
  const [inScroll, setInScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setInScroll(true);
      } else {
        setInScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white sticky z-50 w-full transition-all ease-in-out duration-500 delay-200 ${
        inScroll ? "shadow-lg bg-white sticky top-0 " : "-top-96"
      }`}
    >
      <div className='container mx-auto flex justify-between items-center py-5 px-4 '>
        <h2 className='text-2xl'>Dapur Bunda Bahagia</h2>
        <SheetCart />
      </div>
    </nav>
  );
};

export default Header;
