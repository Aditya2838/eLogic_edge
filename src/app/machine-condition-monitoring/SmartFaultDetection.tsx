import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnalysticCard from "./_components/AnalysticCard";
import { MdArrowOutward } from "react-icons/md";

// images
import fiverrImg from "@/src/assets/images/advanced-diagnostics.svg";
import iconOne from "@/src/assets/images/increase.svg";

function SmartFaultDetection() {
  const featuresCardData = [
    {
      icon: iconOne,
      title: <>Fault Detection</>,
      description: "Automated fault detection and classification",
    },
    {
      icon: iconOne,
      title: <>ML for Analysis</>,
      description: "Root cause analysis with machine learning algorithms",
    },
    {
      icon: iconOne,
      title: <>Warning Systems</>,
      description: "Early warning system for developing issues",
    },
    {
      icon: iconOne,
      title: <>Trend Analysis</>,
      description: "Historical trend analysis and pattern recognition",
    },
  ];
  return (
    <>
      <section>
        <div className="2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
          <div className="bg-[#EEF1F5] 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px]">
            <div className="2xl:ps-[100px] xl:ps-[76px] lg:ps-[67px] md:ps-[45px] 2xl:pe-[95px] xl:pe-[70px] lg:pe-[25px] md:pe-[50px] 2xl:py-[95px] xl:py-[76px] md:py-[53px] p-[20px] flex items-center justify-between max-[1023px]:flex-col-reverse lg:flex-nowrap flex-wrap">
              <div className="2xl:w-[762.5px] xl:w-[571.87px] lg:w-[508.33px] w-full">
                <h2 className="font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] lg:flex hidden">
                  Advanced ﻿Diagnostics
                </h2>
                <div className="grid md:grid-cols-2 2xl:pt-[50px] xl:pt-[40px] pt-[33.33px] 2xl:gap-[40px] xl:gap-[30px] gap-[26.67px]">
                  <AnalysticCard featuresCardData={featuresCardData} />
                </div>
                <div className="2xl:pt-[60px] xl:pt-[40px] pt-[30px]">
                  <Link
                    className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
                    href="/contact-us"
                  >
                    Schedule a demo <MdArrowOutward className="ms-2.5" />
                  </Link>
                </div>
              </div>
              <div className="2xl:w-[calc(100%_-_762.5px)] xl:w-[calc(100%_-_571.87px)] lg:w-[calc(100%_-_508.33px)] w-full">
                <div className="lg:hidden flex mb-[30px]">
                  <h2 className="font-semibold text-[24px]">
                    Advanced ﻿Diagnostics
                  </h2>
                </div>
                <Image className="2xl:ms-auto" src={fiverrImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmartFaultDetection;
