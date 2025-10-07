"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import elogicTechLogo from "../assets/images/elogictech-logo.svg";
import Link from "next/link";
import NavBar from "./Navigation";
import { motion } from "framer-motion";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
        className={`xl:py-0 py-3 w-full backdrop-blur-[20px] 2xl:px-[72px] xl:px-[54px] md:px-[15px] px-[20px] flex justify-between items-center left-0 top-0 right-0 z-[999] transition-all duration-500 ${
          isSticky
            ? "header-sticky fixed shadow-md bg-white [&>a>img]:brightness-0 [&_.togglebtn]:text-black [&_nav_ul>li_*]:text-black [&_.nav-btn]:text-black"
            : "absolute bg-[rgba(0,0,0,0.14)]"
        }`}
      >
        <Link href="/">
          <Image
            className="2xl:w-[200px] w-[150px]"
            src={elogicTechLogo}
            alt=""
          />
        </Link>
       <div className="flex items-center  gap-6">
          <NavBar />
           
        </div>
         <div className="max-[1279px]:hidden   flex justify-end">
            <Link
              className="transition-all border border-transparent bg-[#3563E9] 2xl:px-[39px] xl:px-[29.5px] px-[22px] 2xl:py-[15.5px] xl:py-[11.5px] py-[9px] text-white 2xl:text-[18px] xl:text-[13.5px] font-bold rounded-[16px] capitalize hover:bg-white hover:text-[#3563E9] hover:border hover:border-[#3563E9]"
              href="/contact-us"
            >
              Book Free Consultation
            </Link>
          </div>
      </motion.header>
    </>
  );
}
export default Header;
