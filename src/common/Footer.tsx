"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

// images
import footerLogo from "@/src/assets/images/footer-logo.svg";
import linkedinImg from "@/src/assets/images/linkedin.svg";

function Footer() {
  return (
    <>
      <footer className="bg-[#EEF1F5]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#172747] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[60px] xl:py-[55px] lg:py-[46px] md:py-[25px] py-[30px] 2xl:rounded-ss-[100px] xl:rounded-ss-[75px] md:rounded-ss-[66px] rounded-ss-[40px] 2xl:rounded-se-[100px] xl:rounded-se-[75px] md:rounded-se-[66px] rounded-se-[40px] max-[767px]:pb-[30px]"
        >
          <div className="flex items-start 2xl:gap-x-[85px] xl:gap-x-[60px] lg:gap-x-[70px] max-[1200px]:!gap-x-[40px] max-[991px]:!gap-x-[30px] max-[790px]:!gap-x-[20px] max-[991px]:justify-around max-[767px]:flex-wrap">
            <div className="w-full 2xl:max-w-[430px] xl:max-w-[322.5px] lg:max-w-[286.67px] max-[1200px]:max-w-[250.67px] max-[767px]:max-w-full">
              <Image
                className="2xl:w-[200px] xl:w-[150px] lg:w-[133px] md:w-[125px]"
                src={footerLogo}
                alt=""
              />
              <div className="2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] 2xl:pt-[32px] xl:pt-[24px] pt-[15px] text-white font-normal tracking-[-0.4px]">
                We Provide Cutting Edge Solutions To Hardware And Software
                Clients Across Various Industries
              </div>
              <div className="my-6">
                <Link href="/contact-us">
                  <button className="bg-[#3563E9] text-white px-4 min-w-[120px] 2xl:min-w-[140px] xl:min-w-[130px] md:min-w-[120px] sm:min-w-[110px] h-[38px] 2xl:h-[45px] xl:h-[40px] md:h-[38px] flex items-center justify-center text-[14px] font-semibold rounded-lg capitalize duration-500 hover:bg-white hover:text-black">
                    Book Free Consultation <MdArrowOutward className="ml-2" />
                  </button>
                </Link>
                <div className="flex justify-start   copyright 2xl:pt-[50px] xl:pt-[40px] lg:pt-[120px] md:pt-[65px] pt-[60px] tracking-[-0.4px] w-full">
                  <div className="flex items-center capitalize text-white font-medium 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] space-x-4">
                    <span>
                      <Link
                        href="/privacy-policy"
                        className="text-white font-semibold"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                    <span>©Elogictech Edge 2025</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full 2xl:max-w-[218px]   xl:max-w-[180px] lg:max-w-[155px] max-[1200px]:max-w-[94px] max-[767px]:max-w-full md:mt-0 mt-8">
              <h4 className="mb-3 text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">
                Industrial IoT Solutions
              </h4>
              <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                <li>
                  <Link href="/our-industrial-solutions" className="text-white">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/energy-consumption-monitoring"
                    className="text-white"
                  >
                    Energy Monitoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/machine-condition-monitoring"
                    className="text-white"
                  >
                    Condition Monitoring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/oee-and-production-monitoring"
                    className="text-white"
                  >
                    Productivity Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-white">
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Split Product Development into two columns */}
            <div className="flex gap-x-12  max-[767px]:w-full max-[767px]:mt-8">
              <div className="w-full">
                <h4 className="mb-3 text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">
                  Product Development
                </h4>
                <div className="grid xl:grid-cols-2 2xl:gap-x-[30px] xl:gap-x-[25px] lg:gap-x-[20px] md:gap-x-[15px] gap-x-[20px]">
                  <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                    <li>
                      <Link href="/services-overview" className="text-white hover:underline">
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services-overview/embedded-hardware-design"
                        className="text-white hover:underline"
                      >
                        Hardware Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services-overview/embedded-software-design"
                        className="text-white hover:underline"
                      >
                        Software Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services-overview/human-machine-interface-ux-development"
                        className="text-white hover:underline"
                      >
                        HMI Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services-overview/wireless-systems-development"
                        className="text-white hover:underline"
                      >
                        Wireless Systems
                      </Link>
                    </li>
                  </ul>
                  <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                    <li>
                      <Link
                        href="/services-overview/mechanical-and-industrial-design"
                        className="text-white hover:underline"
                      >
                        Industrial Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services-overview/manufacturing-optimization-support"
                        className="text-white hover:underline"
                      >
                        Manufacturing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services-overview/custom-iot-apps-development"
                        className="text-white hover:underline"
                      >
                        IoT Apps
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services-overview/technology-compliance-consulting"
                        className="text-white hover:underline"
                      >
                        Consulting
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-works" className="text-white hover:underline">
                        Case Studies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>


            </div>

            <div className="w-full 2xl:max-w-[155px]  xl:max-w-[140px] md:max-w-[105px] max-[767px]:flex max-[767px]:justify-between max-[480px]:flex-wrap max-[480px]:flex-col max-[480px]:gap-[30px]">
              <div>
                <h4 className="mb-3 2xl:mt-0 xl:mt-0 mt-8   text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]">
                  Products
                </h4>
                <ul className="flex flex-col xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] tracking-[-0.4px]">
                  <li>
                    <Link href="/blogs" className="text-white">
                      Edge Connect Series
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-white">
                      Field Connect Series
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            <div className="w-full 2xl:max-w-[230px] xl:max-w-[172.5px] md:max-w-[153.33px] 2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px] text-white flex flex-col gap-y-[25px] xl:gap-y-[21px] lg:gap-y-[19px] md:gap-y-[16px] md:mt-0 mt-8 max-[767px]:items-start">
              <h4 className="  text-white font-bold 2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[17px]  ">
                Contact Us
              </h4>
              <div className="flex flex-col 2xl:gap-y-[26px] xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[16px] max-[767px]:items-start">
                <Link
                  href="tel:+919177444992"
                  className="flex items-center gap-[8px] text-white max-[767px]:justify-center"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] flex">
                    <FaPhone className="2xl:text-lg xl:text-[13px]" />
                  </span>
                  +91 9177444992
                </Link>
                <Link
                  href="mailto:info.edge@Elogictech.com"
                  className="flex items-center gap-[8px] text-white max-[767px]:justify-center"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] flex">
                    <FaEnvelope className="2xl:text-lg xl:text-[13px]" />
                  </span>
                  info.edge@Elogictech.com
                </Link>
              </div>
              <div className="2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px] text-white flex items-center 2xl:gap-x-[16px] xl:gap-x-[12px] md:gap-x-[10px] max-[767px]:justify-center">
                <span>Follow Us On</span>
                <Image
                  className="2xl:w-[35px] xl:w-[26.25px] md:w-[23.33px]"
                  src={linkedinImg}
                  alt="LinkedIn"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;