"use client";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
// images
import slideOneDesktop from "@/src/assets/images/machine-controller.png";
import slideTwoDesktop from "@/src/assets/images/custom-instruments-electronics.png";
import slideThreeDesktop from "@/src/assets/images/industrial-wireless-communication.png";
import ImgSldOne from "@/src/assets/images/cstm-img-1.png";
import ImgSldTwo from "@/src/assets/images/cstm-img-2.png";
import ImgSldThree from "@/src/assets/images/cstm-img-3.png";
import ImgSldFour from "@/src/assets/images/cstm-img-4.png";
import ImgSldFive from "@/src/assets/images/cstm-img-5.png";

import ImgSldSix from "@/src/assets/images/cstm-img-6.png";
import ImgSldSeven from "@/src/assets/images/cstm-img-7.png";
import ImgSldEight from "@/src/assets/images/cstm-img-8.png";
import ImgSldNine from "@/src/assets/images/cstm-img-9.png";
import ImgSldTen from "@/src/assets/images/cstm-img-10.png";

import ImgSldSElven from "@/src/assets/images/cstm-img-11.png";
import ImgSldTwlve from "@/src/assets/images/cstm-img-12.png";
import ImgSldThrten from "@/src/assets/images/cstm-img-13.png";
import ImgSldFourten from "@/src/assets/images/cstm-img-14.png";
import ImgSldFiften from "@/src/assets/images/cstm-img-15.png";

import Image from "next/image";

const desktopImages = [
  {
    slideImg: slideOneDesktop,
    slideTitle: (
      <>
        Custom embedded <br />
        machine controllers
      </>
    ),
    slidePoints: [
      { listPoint: <>Parameter Measurement</> },
      { listPoint: <>Data Logging</> },
      { listPoint: <>M2M Communication</> },
      { listPoint: <>Actuation Control</> },
      { listPoint: <>Sensor Interfacing</> },
      { listPoint: <>SCADA Integration</> },
    ],
    sliderImgs:[
      {slideImgs:ImgSldOne, texSlid:'Industrial Washer',imgclass:'2xl:w-[86px] xl:w-[75px] lg:w-[70px] w-[55px]'},
      {slideImgs:ImgSldTwo, texSlid:'Ultrasound Robots',imgclass:'2xl:w-[83px] xl:w-[72px] lg:w-[68px] w-[55px]'},
      {slideImgs:ImgSldThree, texSlid:'Compressed Air Supply Units',imgclass:'2xl:w-[177px] xl:w-[145px] lg:w-[125px] w-[95px]'},
      {slideImgs:ImgSldFour, texSlid:'Weaving Looms',imgclass:'2xl:w-[185px] xl:w-[155px] lg:w-[135px] w-[100px]'},
      {slideImgs:ImgSldFive, texSlid:'Material Handling Systems',imgclass:'2xl:w-[244px] xl:w-[220px] lg:w-[195px] w-[170px]'},
    ]
  },
  {
    slideImg: slideTwoDesktop,
    slideTitle: (
      <>
        Custom <br />
        Instrumentation <br />
        Electronics
      </>
    ),
    slidePoints: [
      {
        listPoint: (
          <>
            User-Machine and
            <br />
            Peripherals Interfacing
          </>
        ),
      },
      { listPoint: <>Data Logging</> },
      { listPoint: <>On-board Processing</> },
      { listPoint: <>IoT Connectivity</> },
      { listPoint: <>Signal Processing</> },
    ],
    sliderImgs:[
      {slideImgs:ImgSldSix, texSlid:'Magnetometers',imgclass:'2xl:w-[109px] xl:w-[85px] lg:w-[70px] w-[55px]'},
      {slideImgs:ImgSldSeven, texSlid:'Material Handling System',imgclass:'2xl:w-[112px] xl:w-[95px] lg:w-[78px] w-[60px]'},
      {slideImgs:ImgSldEight, texSlid:'Wireless Vital Monitor',imgclass:'2xl:w-[92px] xl:w-[72px] lg:w-[58px] w-[50px]'},
      {slideImgs:ImgSldNine, texSlid:'Tablet Hardness, Bulk Density Tester',imgclass:'2xl:w-[168px] xl:w-[150px] lg:w-[130x] w-[95px]'},
      {slideImgs:ImgSldTen, texSlid:'Gas Concentration Monitors',imgclass:'2xl:w-[136px] xl:w-[105px] lg:w-[85px] w-[70px]'},
    ]
  },
  {
    slideImg: slideThreeDesktop,
    slideTitle: (
      <>
        Industrial IOT & Wireless <br />
        Communication <br />
        equipment
      </>
    ),
    slidePoints: [
      {
        listPoint: (
          <>
            Cellular & Cloud
            <br />
            Connectivity{" "}
          </>
        ),
      },
      { listPoint: <>Star,P2P & Mesh Networking</> },
      { listPoint: <>SubGHz Medium to Long Range Communication</> },
      { listPoint: <>Multichannel I/O</> },
    ],
    sliderImgs:[
      {slideImgs:ImgSldSElven, texSlid:'Proprietary RF Network Cards (Sub Ghz Mesh & Star Networks)',imgclass:'2xl:w-[175px] xl:w-[145px] lg:w-[125px] w-[90px]'},
      {slideImgs:ImgSldTwlve, texSlid:'Cellular / Ethernet/Wifi/Lorawan Gateways',imgclass:'2xl:w-[144px] xl:w-[125px] lg:w-[82px] w-[88px]'},
      {slideImgs:ImgSldThrten, texSlid:'Protocol Converters (MODBUS/OPC UA/MQTT/ HTTP)',imgclass:'2xl:w-[62px] xl:w-[55px] lg:w-[45px] w-[40px]'},
      {slideImgs:ImgSldFourten, texSlid:'Edge Computers & Som Carrier Boards',imgclass:'2xl:w-[152px] xl:w-[130px] lg:w-[108px] w-[85px]'},
      {slideImgs:ImgSldFiften, texSlid:'Modular I/O Cards',imgclass:'2xl:w-[128px] xl:w-[108px] lg:w-[90px] w-[79px]'},
    ]
  },
];

export default function CircularSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change the active slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation through dots
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
// Swipe handlers
const swipeHandlers = useSwipeable({
  onSwipedLeft: () => setActiveIndex((prevIndex) => (prevIndex + 1) % desktopImages.length),
  onSwipedRight: () => setActiveIndex((prevIndex) => (prevIndex - 1 + desktopImages.length) % desktopImages.length),
  trackMouse: true, // Enable mouse swipe for testing in desktop mode
});
  return (
    <div {...swipeHandlers} className="flex flex-col justify-center items-center relative w-full m-auto overflow-hidden 2xl:h-[590px] xl:h-[510px] lg:h-[415px] md:h-[375px] sm:h-[780px] max-[639px]:h-[665px]">
      <div className="relative flex w-full h-full">
        {desktopImages.map((image, index) => {
          const position =
            (index - activeIndex + desktopImages.length) % desktopImages.length;

          let style: React.CSSProperties = {
            left: "50%",
            transform: "translateX(-50%)",
          };

          if (position === 0) {
            style = {
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              filter: "blur(0)",
            };
          } else if (position === 1) {
            style = {
              left: "100%",
              transform: "translateX(-91%) scale(0.8)",
              filter: "blur(7.7px)",
              zIndex: 5,
            };
          } else if (position === desktopImages.length - 1) {
            style = {
              left: "0%",
              transform: "translateX(-8%) scale(0.8)",
              filter: "blur(7.7px)",
              zIndex: 5,
            };
          } else {
            style = {
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0,
              zIndex: 0,
            };
          }

          return (
            <div
              key={index}
              style={style}
              onClick={() => handleDotClick(index)}
              className="absolute transition-all duration-500 2xl:max-w-[1085px] xl:max-w-[815px] lg:max-w-[725px] md:max-w-[615px] sm:max-w-[505px] max-[639px]:max-w-[320px] max-[450px]:max-w-[calc(100%_-_60px)] w-full"
            >
              <div className="2xl:rounded-[24px] xl:rounded-[18px] md:rounded-[16px] rounded-[18.45px] bg-no-repeat bg-cover md:bg-[url('../images/swipe-slide-bg.jpg')] bg-[url('../images/swipe-slide-mob-bg.jpg')] mx-auto 2xl:py-[74px] xl:py-[55px] md:py-[30px] py-[30px] 2xl:ps-[60px] xl:ps-[50px] lg:ps-[25px] ps-[20px] 2xl:pe-[70px] xl:pe-[60px] lg:pe-[30px] pe-[20px] flex items-center justify-between md:flex-nowrap flex-wrap max-[767px]:h-[734px] max-[639px]:h-[625px] max-[480px]:h-[645px]">
                <div className="2xl:w-[395.81px] xl:w-[330px] lg:w-[360px] md:w-[315px] w-full">
                  <h3 className="font-bold 2xl:text-[32.54px] xl:text-[24px] lg:text-[22.5px] text-[20px] text-white capitalize">
                    {image.slideTitle}
                  </h3>
                  <ul className="list-disc list-outside 2xl:ps-4 xl:ps-3.5 md:ps-3 ps-3.5 2xl:pt-[23px] xl:pt-[18px] lg:pt-[15px] pt-[12.5px] text-white 2xl:text-base xl:text-[14px] lg:text-[13px] md:text-[12.5px] text-[14.5px] gap-2 flex flex-col max-[767px]:[&_br]:hidden">
                    {(image.slidePoints || []).map((item, subindex) => (
                      <li key={subindex}>{item.listPoint}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:pt-0 2xl:w-[calc(100%_-_395.81px)] xl:w-[calc(100%_-_330px)] lg:w-[calc(100%_-_360px)] md:w-[calc(100%_-_315px)] pt-[23px] 2xl:h-[402px] xl:h-[363px] lg:h-[300px] md:h-[267px] flex items-center">
                  {/* <Image src={image.slideImg} alt="" /> */}
                  <ul className="flex justify-center flex-wrap gap-x-1 2xl:gap-y-10 lg:gap-y-8 md:gap-y-3 gap-y-6 max-[1024px]:!gap-x-4 max-[639px]:!gap-y-4">
                    {(image.sliderImgs || []).map((itm, subindex) => (
                      <li key={subindex} className="flex items-end w-[calc(33.33%_-_16px)]">
                      <div className="flex justify-end items-center flex-col lg:gap-3 md:gap-2 gap-1">
                        <div className="flex w-full justify-center">
                        <Image className={`${itm.imgclass}`} src={itm.slideImgs} alt="" />
                        </div>
                        <span className="text-white md:text-[10px] text-[11px] flex w-full justify-center text-center lg:h-[40px] xl:h-[32px] break-all max-[767px]:!h-[45px] max-[639px]:!h-[70px] max-[390px]:!h-[90px]">{itm.texSlid}</span>
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center 2xl:gap-[8px] xl:gap-[6px] md:gap-[5.33px] gap-[8px]">
        {desktopImages.map((_, index) => (
          <button
            key={index}
            className={`2xl:w-[48px] 2xl:h-[6px] xl:w-[36px] xl:h-[4.5px] md:w-[32px] md:h-[4px] w-[48px] h-[6px] rounded-full ${
              index === activeIndex ? "bg-[#3563E9]" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
