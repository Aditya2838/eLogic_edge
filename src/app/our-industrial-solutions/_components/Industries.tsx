"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

// images
import imgOne from "@/src/assets/images/food-industry.jpg";
import imgTwo from "@/src/assets/images/textile-industry.jpg";
import imgThree from "@/src/assets/images/plastic-industry.jpg";
import imgFour from "@/src/assets/images/utilities-industry.jpg";
import imgFive from "@/src/assets/images/pharma-industry.jpg";

const industries = [
  {
    id: 1,
    tabImg: imgOne,
    name: "Food Manufacturing / FMCG",
    details: [
      "Energy monitoring of blast freezers and cold rooms to detect door-open events and optimize defrost cycles",
      "Real-time power quality monitoring of mixing and grinding equipment to predict maintenance needs and prevent product quality issues",
      "OEE tracking of packaging lines with breakdown reason analysis to minimize changeover times and material waste",
      "Condition monitoring of conveyor systems in bakery lines to detect belt misalignment and prevent contamination",
      "Temperature-correlated energy consumption analysis of ovens and fryers to optimize batch scheduling",
    ],
  },
  {
    id: 2,
    tabImg: imgTwo,
    name: "Textiles & Paper",
    details: [
      "Steam system efficiency monitoring through boiler-to-process energy tracking",
      "Compressed air system optimization for textile spinning machines with production speed correlation",
      "Paper machine drive system efficiency monitoring with moisture content correlation",
      "Real-time tracking of dyeing machine energy consumption per batch for process standardization",
      "Stenter frame heat recovery system efficiency monitoring for energy optimization",
    ],
  },
  {
    id: 3,
    tabImg: imgThree,
    name: "Plastics and Metal Parts Manufacturing",
    details: [
      "Temperature and power correlation of injection molding machines to detect mold heating issues",
      "Energy consumption analysis of CNC machines per part program to optimize cutting parameters",
      "Compressed air leak detection through power monitoring of air compressors during non-production hours",
      "Real-time tracking of hydraulic press efficiency with cycle time correlation",
      "Power factor monitoring of induction heating systems to optimize energy costs",
    ],
  },
  {
    id: 4,
    tabImg: imgFour,
    name: "Utilities",
    details: [
      "Pump efficiency monitoring using power/flow correlation to detect cavitation and impeller wear",
      "Real-time power consumption tracking of aeration blowers in sewage treatment with DO level correlation",
      "Solar inverter performance monitoring with string-level current comparison",
      "Energy efficiency analysis of water treatment UV systems with turbidity correlation",
      "Transformer load balancing and hotspot detection through detailed power quality analysis",
    ],
  },
  {
    id: 5,
    tabImg: imgFive,
    name: "Chemical & Pharmaceuticals",
    details: [
      "Power consumption pattern analysis of reactor vessels to validate batch consistency and detect process deviations",
      "Vibration and power monitoring of centrifuges and separators to prevent imbalance-related failures",
      "Energy efficiency tracking of clean room HVAC systems with pressure differential correlation",
      "Real-time monitoring of air compressor systems with dew point correlation for contamination prevention",
      "Power quality monitoring of precision scales and measurement equipment to ensure calibration validity",
    ],
  },
];

type Industry = {
  id: number;
  tabImg: StaticImageData;
  name: string;
  details: string[];
};

const IndustriesTabs = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);
  const [isManual, setIsManual] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Autoplay only if not mobile
  useEffect(() => {
    if (isMobile) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    if (!isManual) {
      intervalRef.current = setInterval(() => {
        setActiveTab((prevTab) => {
          const currentIndex = industries.findIndex((industry) => industry.id === prevTab.id);
          const nextIndex = (currentIndex + 1) % industries.length;
          return industries[nextIndex];
        });
      }, 10000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isManual, isMobile]);

  const handleTabClick = (industry: Industry) => {
    setActiveTab(industry);
    setIsManual(true);

    // Only reset autoplay if on desktop
    if (!isMobile) {
      setTimeout(() => {
        setIsManual(false);
      }, 10000);
    }
  };
  return (
    <section>
      <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[80px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
        <div className="flex 2xl:gap-[100px] xl:gap-[75px] lg:gap-[66px] md:gap-[35px] lg:flex-nowrap flex-wrap">
          <div className="2xl:max-w-[742px] xl:max-w-[600px] lg:max-w-[450px] w-full">
            <div className="md:mb-0 mb-8">
              <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold 2xl:mb-4 xl:mb-3 mb-2.5">
                Industries
              </h2>
              <p className="text-[#4B5563] lg:font-medium md:leading-snug leading-[1.65] 2xl:text-[24px] xl:text-[18px] text-base whitespace-normal break-words overflow-hidden text-ellipsis max-w-full">
                Our solutions have enabled manufacturers across a range of
                industries bring proven, measurable improvements to process
                efficiency and reliability.
              </p>
            </div>
            <div className="lg:flex hidden flex-col 2xl:mt-[94.5px] xl:mt-[68.5px] lg:mt-[60px] md:mt-[45px] 2xl:gap-y-[9px] md:gap-y-[6px] gap-y-[5px]">
              <div className="flex items-center justify-between 2xl:mb-3 md:mb-2 mb-1.5">
                <span className="2xl:text-[22.59px] xl:text-[16.45px] text-[14.6px]  text-[#101010]">
                  Select a Industry
                </span>
                <span className="text-[#101010] 2xl:text-[15.05px] xl:text-[11.29px] text-[10.03px]">{`${activeTab.id} — ${industries.length}`}</span>
              </div>
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => handleTabClick(industry)}
                  className={`2xl:p-[10px] xl:p-[7.5px] p-[6.67px] text-left border 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] ${activeTab.id === industry.id
                      ? "bg-[#E4E7FF] border-[#2F44FF] text-[#101010] font-semibold"
                      : "bg-gray-50 border-gray-300 text-[rgba(16,16,16,0.5)]"
                    } transition`}
                >
                  <div className="flex items-center 2xl:gap-[18px] xl:gap-[13.5px] gap-[12px]">
                    <div className="2xl:rounded-[5px] xl:rounded-[3.75px] rounded-[3.33px] overflow-hidden 2xl:w-[70px] md:w-[52.5px] w-[46.67px]">
                      <Image src={industry.tabImg} alt="" />
                    </div>
                    <span className="2xl:text-[22.73px] xl:text-[16.76px] text-[14.16px] ">
                      {industry.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="w-full min-[1536px]:min-w-[840px] min-[1720px]:min-w-[932px] min-[1280px]:min-w-[742px] min-[1024px]:min-w-[562px] relative after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-[rgba(0,0,0,0)] 2xl:after:h-[699px] after:h-full after:w-full after:2xl:rounded-[24px] after:xl:rounded-[18px] after:md:rounded-[16px] after:rounded-[18.45px] max-[1535px]:h-[562px] max-[1360px]:h-[587px] max-[1279px]:h-[547px] max-[1023px]:h-auto">
            <div className="2xl:rounded-[24px] xl:rounded-[18px] md:rounded-[16px] rounded-[18.45px] overflow-hidden h-full max-[500px]:h-[350px]">
              <Image
                className="h-full object-cover"
                src={activeTab.tabImg}
                alt=""
              />
            </div>
            <div className="absolute bottom-0 left-0 2xl:p-[40px] xl:p-[30px] md:p-[26px] sm:p-[20px] p-[15px] z-[1]">
              <h3 className="2xl:text-[43.48px] xl:text-[32.61px] md:text-[28.98px] sm:text-[17.35px] text-base text-white font-semibold md:leading-normal">
                {activeTab.name}
              </h3>
              <ul className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] sm:pt-[20px] pt-[10px] text-white 2xl:text-[24px] xl:text-[18px] md:text-base text-[9.58px] gap-2 flex-col">
                {activeTab.details.map((detail, index) => (
                  <li className="font-normal leading-snug flex" key={index}>
                    <div className="flex justify-center 2xl:w-[40px] 2xl:pt-3 lg:pt-2 md:pt-2 pt-1 pe-2">
                      <span className="rounded-full 2xl:w-[10px] xl:w-[8px] md:w-[6px] w-[3px] 2xl:h-[10px] xl:h-[8px] md:h-[6px] h-[3px] bg-white flex"></span>
                    </div>
                    <span className="w-[calc(100%_-_40px)]">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:hidden flex flex-col 2xl:gap-y-[9px] md:gap-y-[6px] gap-y-[5px] w-full md:mt-0 mt-4">
            <div className="flex items-center justify-between">
              <span className="2xl:text-[16.59px] xl:text-[12.45px] text-[11.6px]  text-[#101010] 2xl:mb-3 md:mb-2 mb-1.5">
                Select a Industry
              </span>
              <span className="text-[#101010] 2xl:text-[15.05px] xl:text-[11.29px] text-[10.03px]">{`${activeTab.id} — ${industries.length}`}</span>
            </div>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry)}
                className={`2xl:p-[10px] xl:p-[7.5px] p-[6.67px] text-left border 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] ${activeTab.id === industry.id
                    ? "bg-[#E4E7FF] border-[#2F44FF] text-[#101010] font-semibold"
                    : "bg-gray-50 border-gray-300 text-[rgba(16,16,16,0.5)]"
                  } transition`}
              >
                <div className="flex items-center 2xl:gap-[18px] xl:gap-[13.5px] gap-[12px]">
                  <div className="2xl:rounded-[5px] xl:rounded-[3.75px] rounded-[3.33px] overflow-hidden 2xl:w-[70px] md:w-[52.5px] w-[46.67px]">
                    <Image src={industry.tabImg} alt="" />
                  </div>
                  <span className="2xl:text-[16.73px] xl:text-[12.76px] text-[11.16px] ">
                    {industry.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesTabs;
