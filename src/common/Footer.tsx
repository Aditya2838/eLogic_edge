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
import instagramimg from "@/src/assets/images/instagram.svg";
import facebookimg from "@/src/assets/images/facebook.png";

function Footer() { 
  return (
    <>
      <footer className="bg-[#EEF1F5]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#172747] 
            2xl:px-[72px] xl:px-[54px] lg:px-[48px] md:px-[32px] px-[20px] 
            2xl:py-[60px] xl:py-[55px] lg:py-[46px] md:py-[40px] py-[30px] 
            2xl:rounded-ss-[100px] xl:rounded-ss-[75px] md:rounded-ss-[66px] rounded-ss-[40px] 
            2xl:rounded-se-[100px] xl:rounded-se-[75px] md:rounded-se-[66px] rounded-se-[40px]"
        >
          <div className="flex items-start 
            2xl:gap-x-[85px] xl:gap-x-[60px] lg:gap-x-[50px] md:gap-x-[40px]
            max-[991px]:flex-wrap max-[991px]:gap-y-[40px] 
            max-[767px]:gap-y-[35px]"
          >
            {/* Company Info Section */}
            <div className="w-full 
              2xl:max-w-[430px] xl:max-w-[322.5px] lg:max-w-[286.67px] md:max-w-[250.67px]
              max-[991px]:max-w-full"
            >
              <Image
                className="2xl:w-[200px] xl:w-[150px] lg:w-[133px] md:w-[125px] w-[120px]"
                src={footerLogo}
                alt="Elogictech Edge Logo"
              />
              <p className="2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] text-[14px]
                2xl:pt-[32px] xl:pt-[24px] pt-[20px] 
                text-white font-normal tracking-[-0.4px] 
                2xl:leading-[24px] xl:leading-[20px] leading-[22px]"
              >
                We Provide Cutting Edge Solutions To Hardware And Software
                Clients Across Various Industries
              </p>
              
              <div className="2xl:mt-[32px] xl:mt-[24px] mt-[20px]">
                <Link href="/contact-us">
                  <button className="bg-[#3563E9] text-white 
                    px-4 min-w-[120px] 2xl:min-w-[140px] xl:min-w-[130px] 
                    h-[38px] 2xl:h-[45px] xl:h-[40px] 
                    flex items-center justify-center 
                    text-[14px] font-semibold rounded-lg capitalize 
                    duration-500 hover:bg-white hover:text-black 
                    transition-colors w-full sm:w-auto"
                  >
                    Book Free Consultation <MdArrowOutward className="ml-2" />
                  </button>
                </Link>
              </div>

              {/* Copyright - Desktop Only */}
              <div className="hidden lg:flex flex-col 
                2xl:pt-[50px] xl:pt-[40px] lg:pt-[35px] 
                tracking-[-0.4px] w-full"
              >
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 
                  capitalize text-white font-medium 
                  2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] text-[13px]"
                >
                  <Link
                    href="/privacy-policy"
                    className="text-white font-semibold hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-[#747D91]">|</span>
                  <span>©Elogictech Edge 2025</span>
                </div>
              </div>
            </div>

            {/* Industrial IoT Solutions */}
            <div className="w-full 
              2xl:max-w-[218px] xl:max-w-[180px] lg:max-w-[155px] md:max-w-[200px]
              max-[991px]:max-w-[48%] max-[767px]:max-w-full"
            >
              <h4 className="mb-3 text-white font-bold 
                2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[16px]"
              >
                Industrial IoT Solutions
              </h4>
              <ul className="flex flex-col 
                xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 
                2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] text-[14px]
                tracking-[-0.4px]"
              >
                <li>
                  <Link href="/our-industrial-solutions" 
                    className="text-white hover:underline transition-all"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/energy-consumption-monitoring" 
                    className="text-white hover:underline transition-all"
                  >
                    Energy Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/machine-condition-monitoring" 
                    className="text-white hover:underline transition-all"
                  >
                    Condition Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/oee-and-production-monitoring" 
                    className="text-white hover:underline transition-all"
                  >
                    Productivity Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" 
                    className="text-white hover:underline transition-all"
                  >
                    Custom Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product Development */}
            <div className="w-full 
              2xl:max-w-[400px] xl:max-w-[320px] lg:max-w-[280px]
              max-[991px]:max-w-[48%] max-[767px]:max-w-full"
            >
              <h4 className="mb-3 text-white font-bold 
                2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[16px]"
              >
                Product Development
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 
                2xl:gap-x-[30px] xl:gap-x-[25px] lg:gap-x-[20px] gap-x-[30px] 
                gap-y-[30px] sm:gap-y-0"
              >
                <ul className="flex flex-col 
                  xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 
                  2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] text-[14px]
                  tracking-[-0.4px]"
                >
                  <li>
                    <Link href="/services-overview" 
                      className="text-white hover:underline transition-all"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-overview/embedded-hardware-design" 
                      className="text-white hover:underline transition-all"
                    >
                      Hardware Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-overview/embedded-software-design" 
                      className="text-white hover:underline transition-all"
                    >
                      Software Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-overview/human-machine-interface-ux-development" 
                      className="text-white hover:underline transition-all"
                    >
                      HMI Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-overview/wireless-systems-development" 
                      className="text-white hover:underline transition-all"
                    >
                      Wireless Systems
                    </Link>
                  </li>
                </ul>
                <ul className="flex flex-col 
                  xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 
                  2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] text-[14px]
                  tracking-[-0.4px]"
                >
                  <li>
                    <Link href="/services-overview/mechanical-and-industrial-design" 
                      className="text-white hover:underline transition-all"
                    >
                      Industrial Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-overview/manufacturing-optimization-support" 
                      className="text-white hover:underline transition-all"
                    >
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-overview/custom-iot-apps-development" 
                      className="text-white hover:underline transition-all"
                    >
                      IoT Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-overview/technology-compliance-consulting" 
                      className="text-white hover:underline transition-all"
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-works" 
                      className="text-white hover:underline transition-all"
                    >
                      Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Products */}
            <div className="w-full 
              2xl:max-w-[155px] xl:max-w-[140px] lg:max-w-[120px]
              max-[991px]:max-w-[48%] max-[767px]:max-w-full"
            >
              <h4 className="mb-3 text-white font-bold 
                2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[16px]"
              >
                Products
              </h4>
              <ul className="flex flex-col 
                xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[17px] gap-y-[15px] 
                2xl:text-[14.5px] xl:text-[12px] md:text-[10.67px] text-[14px]
                tracking-[-0.4px]"
              >
                <li>
                  <Link href="/blogs" 
                    className="text-white hover:underline transition-all"
                  >
                    Edge Connect Series
                  </Link>
                </li>
                <li>
                  <Link href="" 
                    className="text-white hover:underline transition-all"
                  >
                    Field Connect Series
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="w-full 
              2xl:max-w-[230px] xl:max-w-[172.5px] lg:max-w-[153.33px]
              max-[991px]:max-w-[48%] max-[767px]:max-w-full"
            >
              <h4 className="mb-3 text-white font-bold 
                2xl:text-[18px] xl:text-[14.5px] md:text-[13.75px] text-[16px]"
              >
                Contact Us
              </h4>
              <div className="flex flex-col 
                2xl:gap-y-[26px] xl:gap-y-[22px] lg:gap-y-[19px] md:gap-y-[16px] gap-y-[15px]"
              >
                <Link
                  href="tel:+919177444992"
                  className="flex items-center gap-[8px] text-white 
                    2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px] text-[14px]
                    hover:underline transition-all"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] w-[18px] flex">
                    <FaPhone className="2xl:text-lg xl:text-[13px] text-[15px]" />
                  </span>
                  +91 9177444992
                </Link>
                <Link
                  href="mailto:info.edge@Elogictech.com"
                  className="flex items-center gap-[8px] text-white 
                    2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px] text-[14px]
                    hover:underline transition-all break-all"
                >
                  <span className="2xl:w-[20px] xl:w-[15px] w-[18px] flex flex-shrink-0">
                    <FaEnvelope className="2xl:text-lg xl:text-[13px] text-[15px]" />
                  </span>
                  info.edge@Elogictech.com
                </Link>
              </div>

              {/* Social Media */}
              <div className="mt-[25px] xl:mt-[30px]">
                <div className="2xl:text-[14px] xl:text-[10.5px] md:text-[9.33px] text-[14px]
                  text-white flex items-center flex-wrap gap-3"
                >
                  <span className="w-full sm:w-auto">Follow Us On</span>
                  <div className="flex items-center gap-3">
                    <Link href="https://www.linkedin.com/company/elt-edge" 
                      target="_blank"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        className="2xl:w-[35px] xl:w-[26.25px] md:w-[23.33px] w-[30px]"
                        src={linkedinImg}
                        alt="LinkedIn"
                      />
                    </Link>
                    <Link href="https://www.instagram.com/elt_edge/" 
                      target="_blank"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        className="2xl:w-[35px] xl:w-[26.25px] md:w-[23.33px] w-[30px]"
                        src={instagramimg}
                        alt="Instagram"
                      />
                    </Link>
                    <Link href="https://www.facebook.com/eltedge.global/" 
                      target="_blank"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        className="2xl:w-[35px] xl:w-[26.25px] md:w-[23.33px] w-[30px]"
                        src={facebookimg}
                        alt="Facebook"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright - Mobile Only */}
          <div className="lg:hidden flex flex-col 
            mt-[40px] pt-[30px] border-t border-[#2a3c5a]
            tracking-[-0.4px] w-full"
          >
            <div className="flex items-center flex-wrap justify-center sm:justify-start
              gap-x-4 gap-y-2 capitalize text-white font-medium text-[13px]"
            >
              <Link
                href="/privacy-policy"
                className="text-white font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="text-[#747D91]">|</span>
              <span>©Elogictech Edge 2025</span>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;