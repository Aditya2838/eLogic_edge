"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

// images
import slideOne from "@/src/assets/images/home-slide-1.png";
import slideTwo from "@/src/assets/images/home-slide-2.png";
import slideThree from "@/src/assets/images/home-slide-3.png";
import slideFour from "@/src/assets/images/home-slide-4.png";
import moImgeOne from "@/src/assets/images/mobile-slide-1.jpg";
import staticMobBgImage from "@/src/assets/images/mobile-slide-1.jpg";
import staticBgImage from "@/src/assets/images/Slide-three.jpg";

const Slider: React.FC = () => {
  const sliderData = [
    {
      id: 1,
      sliderImg: slideOne,
      mobSliderImg: moImgeOne,
      slidePara:
        "Reducing energy costs through identification of operational pattern inefficiencies",
    },
    {
      id: 2,
      sliderImg: slideTwo,
      mobSliderImg: moImgeOne,
      slidePara: (
        <>
          Reduction in downtime loss costs through early <br />
          failure predictions 
        </>
      ),
    },
    {
      id: 3,
      sliderImg: slideThree,
      mobSliderImg: moImgeOne,
      slidePara:
        "Automated capturing and analysis of output, quality, bottlenecks and efficiency metrics",
    },
    {
      id: 4,
      sliderImg: slideFour,
      mobSliderImg: moImgeOne,
      slidePara:
        "Identification of costly sub-optimal running conditions such as excess power, consumables and wastage",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startSlider = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      }, 5000);
    };

    startSlider();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [sliderData.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
        className="relative ms:pt-0 pt-4 after:absolute after:left-0 after:right-0 after:top-0 after:h-[210px] after:bg-gradient-to-b after:from-black to-[rgba(0,0,0,0)]"
      >
        <div className="absolute z-[2] left-0 top-0 bottom-0 flex items-center w-full">
          <div className="relative w-full">
            <div className="slider-image w-full relative flex items-center md:flex-nowrap flex-wrap justify-between">
              <div className="flex md:items-center 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] max-[991px]:!top-[25px] z-[2]">
                <div className="w-full 2xl:max-w-[845px] xl:max-w-[632px] md:max-w-[562px] max-w-[372px]">
                  <h1 className="text-white 2xl:text-[60px] xl:text-[45px] text-[40px] md:font-bold font-semibold 2xl:w-[550px] xl:w-[450px] md:w-[355px] mb-3 tracking-[-1.5px] max-[767px]:leading-[1.34]">
                    Digitize your shop floor operations
                  </h1>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0, ease: "easeInOut" }}
                      className="text-[#F9F9FB] 2xl:text-[24px] xl:text-[18px] text-base md:leading-7 leading-[1.65] tracking-[-0.2px] 2xl:pt-[30px] xl:pt-[20px] md:pt-[15px] pt-[12px]"
                    >
                      {sliderData[currentIndex].slidePara}
                    </motion.p>
                  </AnimatePresence>
                  <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
                    <Link
                      className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[200px] xl:max-w-[153.5px] md:max-w-[136.44px] max-w-[123px] 2xl:h-[60px] xl:h-[45px] md:h-[41px] h-[48px] flex justify-center items-center py-[2px] 2xl:text-[19px] xl:text-[14.25px] text-[16px] md:text-[12.67px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black"
                      href="/contact-us"
                    >
                      contact us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="2xl:w-[calc(100%_-_845px)] xl:w-[calc(100%_-_632px)] md:w-[calc(100%_-_562px)] slide-img max-[767px]:px-[20px] md:pt-0 sm:pt-[90px] pt-3 2xl:px-[85px] min-[1800px]:px-[135px] xl:px-[80px] md:px-[30px] max-[991px]:!px-[20px] max-[991px]:!w-[425px] max-[767px]:!w-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0, ease: "easeInOut" }}
                  >
                    <Image
                      className="w-full"
                      src={sliderData[currentIndex].sliderImg}
                      alt=""
                      width={1920}
                      height={957}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-dots absolute left-0 2xl:bottom-[39px] xl:bottom-[30px] md:bottom-[25.97px] bottom-[18.95px] z-[2] flex justify-center w-full">
          <ul className="flex justify-center w-full gap-[8px]">
            {sliderData.map((_, index) => (
              <li key={index}>
                <button
                  className={`cursor-pointer rounded-[16px] 2xl:h-[6px] xl:h-[4.5px] md:h-[4px] h-[6px] 2xl:w-[48px] xl:w-[36px] md:w-[32px] w-[48px] ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-[rgba(255,255,255,0.4)]"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-image max-[767px]:after:hidden after:absolute after:left-0 after:top-0 after:bottom-0 after:right-0 after:bg-gradient-to-r after:from-[rgba(0,0,0,0.57)] after:to-[rgba(0,0,0,0)] max-[991px]:h-[600px] max-[767px]:h-auto max-[991px]:[&>img]:h-full max-[991px]:[&>img]:object-cover">
          <Image className="md:flex hidden" src={staticBgImage} alt="" />
          <Image
            className="md:hidden flex w-full max-[767px]:!h-[850px] max-[639px]:!h-[730px]"
            src={staticMobBgImage}
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Slider;
