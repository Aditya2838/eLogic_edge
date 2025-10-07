'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// images
import footerLogo from "@/src/assets/images/footer-logo.svg";
import linkedinImg from "@/src/assets/images/linkedin.svg";
import mobLogo from "@/src/assets/images/mobile-footer-logo.svg";

function Footer() {
  return (
    <>
      <footer className="bg-[#EEF1F5]">
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3}}
        className="bg-[#172747] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:rounded-ss-[100px] xl:rounded-ss-[75px] md:rounded-ss-[66px] rounded-ss-[40px] 2xl:rounded-se-[100px] xl:rounded-se-[75px] md:rounded-se-[66px] rounded-se-[40px] max-[767px]:pb-[30px]">
          <div className="md:flex items-start 2xl:gap-x-[192.5px] xl:gap-x-[144px] lg:gap-x-[128px] max-[1200px]:!gap-x-[80px] max-[991px]:!gap-x-[30px] max-[790px]:!gap-x-[20px] max-[991px]:justify-around hidden">
            <div className="w-full 2xl:max-w-[430px] xl:max-w-[322.5px] lg:max-w-[286.67px] max-[1200px]:max-w-[250.67px]">
              <Image
                className="2xl:w-[200px] xl:w-[150px] lg:w-[133px] md:w-[125px]"
                src={footerLogo}
                alt=""
              />
              <div className="2xl:text-[16px] xl:text-[12px] md:text-[10.67px] 2xl:pt-[32px] xl:pt-[24px] md:pt-[15px] text-white font-normal tracking-[-0.4px]">
                We Provide Cutting Edge Solutions To Hardware And Software
                Clients Across Various Industries
              </div>
            </div>
            <div className="w-full 2xl:max-w-[148px] xl:max-w-[110px] lg:max-w-[98px] max-[1200px]:max-w-[94px]">
              <ul className="flex flex-col xl:gap-y-[24px] lg:gap-y-[21px] md:gap-y-[16px] 2xl:text-[16px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                <li>
                  <Link href="" className="text-white">
                    Digital Invoice
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Reimbursements
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Virtual Assistant
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full 2xl:max-w-[93px] xl:max-w-[70px] md:max-w-[62px]">
              <ul className="flex flex-col xl:gap-y-[24px] lg:gap-y-[21px] md:gap-y-[16px] 2xl:text-[16px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                <li>
                  <Link href="/about-us" className="text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Newsletters
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full 2xl:max-w-[107px] xl:max-w-[81px] md:max-w-[72px]">
              <ul className="flex flex-col xl:gap-y-[24px] lg:gap-y-[21px] md:gap-y-[16px] 2xl:text-[16px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                <li>
                  <Link href="/blogs" className="text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-white">
                    Ebook & Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full 2xl:max-w-[230px] xl:max-w-[172.5px] md:max-w-[153.33px] 2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px]  text-white flex flex-col gap-y-[25px] xl:gap-y-[21px] lg:gap-y-[19px] md:gap-y-[16px]">
              <span className="capitalize">Contact us</span>
              <div className="flex flex-col 2xl:gap-y-[26px] xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[16px]">
                <Link
                  href="tel:+919177444992"
                  className="flex items-center gap-[8px] text-white"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] flex">
                    <FaPhone className="2xl:text-lg xl:text-[13px]" />
                  </span>{" "}
                  +91 9177444992
                </Link>
                <Link
                  href="mailto:info.edge@Elogictech.com"
                  className="flex items-center gap-[8px] text-white"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] flex">
                    <FaEnvelope className="2xl:text-lg xl:text-[13px]" />
                  </span>{" "}
                  info.edge@Elogictech.com
                </Link>
              </div>
              <div className="2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px] text-white flex items-center 2xl:gap-x-[16px] xl:gap-x-[12px] md:gap-x-[10px]">
                <span>Follow Us On</span>
                <Image
                  className="2xl:w-[35px] xl:w-[26.25px] md:w-[23.33px]"
                  src={linkedinImg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="copyright 2xl:pt-[122px] xl:pt-[96px] lg:pt-[85px] md:pt-[65px] tracking-[-0.4px] md:inline-block w-full hidden">
            <div className="border-t border-t-[rgba(255,255,255,0.4)] flex justify-between items-center 2xl:pt-[32px] xl:pt-[23px] md:pt-[21px]">
              <div className="flex items-center capitalize 2xl:text-[18px] xl:text-[13.5px] md:text-[12px]">
                <Link
                  href="/privacy-policy"
                  className="flex items-center text-white font-semibold"
                >
                  Privacy Policy{" "}
                  <span className="flex w-[1px] bg-[#747D91] 2xl:h-[20px] xl:h-[15px] md:h-[13px] 2xl:mx-[32px] xl:mx-[24px] lg:mx-[21px] md:mx-[18px]"></span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center text-white font-semibold"
                >
                  Terms & Conditions
                  <span className="flex w-[1px] bg-[#747D91] 2xl:h-[20px] xl:h-[15px] md:h-[13px] 2xl:mx-[32px] xl:mx-[24px] lg:mx-[21px] md:mx-[18px]"></span>
                </Link>
                <Link
                  href="/"
                  className="flex items-center text-white font-semibold"
                >
                  Cookie Policy
                </Link>
              </div>
              <div className="text-white font-medium 2xl:text-[16px] xl:text-[12px] md:text-[10.67px]">
                ©Elogictech Edge 2024
              </div>
            </div>
          </div>

          <div className="md:hidden flex flex-col w-full">
            <div className="flex justify-between items-start w-full">
              <div className="">
                <ul className="flex flex-col text-[14px] gap-[12px]">
                  <li>
                    <Link href="" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                      Industrial IoT
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                      Smart Building
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex flex-col text-[14px] gap-[12px]">
                  <li>
                    <Link href="/about-us" className="text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-team" className="text-white">
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="flex flex-col text-[14px] gap-[12px]">
                  <li>
                    <Link href="" className="text-white">
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-team" className="text-white">
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="my-[42px] text-white font-roboto text-[14px] gap-y-[12px] flex flex-col">
              <span className="capitalize">Contact us</span>
              <div className="flex flex-col gap-y-[12px]">
                <Link
                  href="tel:+919177444992"
                  className="flex items-center gap-[8px] text-white"
                >
                  <span className="w-[20px] flex">
                    <FaPhone className="text-lg" />
                  </span>{" "}
                  +91 9177444992
                </Link>
                <Link
                  href="mailto:info.edge@Elogictech.com"
                  className="flex items-center gap-[8px] text-white"
                >
                  <span className="w-[20px] flex">
                    <FaEnvelope className="text-lg" />
                  </span>{" "}
                  info.edge@Elogictech.com
                </Link>
              </div>
              <div className="flex gap-[10px]">
                <Image className="w-[18px]" src={linkedinImg} alt="" />
                <span>Follow Us On</span>
              </div>
            </div>

            <div>
              <div>
                <Image src={mobLogo} alt="" />
              </div>
              <div className="text-white text-[12.89px] mt-4">
                We Provide Cutting Edge Solutions To Hardware And Software
                Clients Across Various Industries
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
