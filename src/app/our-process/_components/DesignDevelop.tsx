import React from "react";
import TopSteps from "./TopSteps";

// images
import iconOne from "@/src/assets/images/inventory.svg";
import iconTwo from "@/src/assets/images/delivery-box.svg";
import iconThree from "@/src/assets/images/seo (2).svg";
import iconFour from "@/src/assets/images/image 4 prototyping.svg";
import iconFive from "@/src/assets/images/embedded.svg";
import iconSix from "@/src/assets/images/flow-chart (1).svg";
import iconSeven from "@/src/assets/images/testing.svg";
import iconEight from "@/src/assets/images/compliant.svg";
import iconOneWhite from "@/src/assets/images/manufacturing (2).svg";
import iconTwoWhite from "@/src/assets/images/production (2).svg";
import iconThreeWhite from "@/src/assets/images/computer-chip.svg";
import iconFourWhite from "@/src/assets/images/motherboard (2).svg";
 import iconSixWhite from "@/src/assets/images/programming.svg";
import iconSevenWhite from "@/src/assets/images/bugs.svg";
import iconEightWhite from "@/src/assets/images/package.svg";
import StepInfoCard from "./StepInfoCard";

function DesignDevelop() {
  const firstStepData = [
    {
      colsreverses:
        'order-1 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[106px]',
      stepNumber: "01",
      stepIcon: iconOne,
      title: "Requirement",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
    {
      colsreverses:
        'order-2 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[991px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[108px]',
      stepNumber: "02",
      stepIcon: iconTwo,
      title: "PRD Definition",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
    {
      colsreverses:
        'order-3 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[991px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[111px]',
      stepNumber: "03",
      stepIcon: iconThree,
      title: "Components Research",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
    {
      colsreverses: "order-4",
      stepNumber: "04",
      stepIcon: iconFour,
      title: "Functional Prototyping",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
  ];

  const midStepData = [
    {
      colsreverses:
        'md:order-4 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[991px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[991px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:after:hidden min-[768px]:pb-0 pb-[75px]',
      stepNumber: "05",
      stepIcon: iconFive,
      title: "High Fidelity HW, PCD and FW",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
    {
      colsreverses:
        'md:order-3 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:after:rotate-[180deg] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[110px]',
      stepNumber: "06",
      stepIcon: iconSix,
      title: "High Fidelity Prototyping",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
    {
      colsreverses:
        'md:order-2 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:after:rotate-[180deg] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[108px]',
      stepNumber: "07",
      stepIcon: iconSeven,
      title: "Acceptance Testing",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
    {
      colsreverses:
        'md:order-1 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:after:rotate-[180deg] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[111px]',
      stepNumber: "08",
      stepIcon: iconEight,
      title: "Compliance Documentation",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(75,85,99,0.6)]",
      titleColor: "text-[#222325]",
    },
  ];

  const firstStepDataDark = [
    {
      colsreverses:
        'order-1 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[51px] after:2xl:-right-[142px] after:xl:-right-[107px] after:md:-right-[97px] after:md:top-[50px] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[107px]',
      stepNumber: "01",
      stepIcon: iconOneWhite,
      title: "DFX (Manufacture/ Assembly)",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(255,255,255,0.8)]",
      titleColor: "text-[#ffffff]",
    },
    {
      colsreverses:
        'order-2 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] after:2xl:top-[72px] after:xl:top-[51px] after:2xl:-right-[142px] after:xl:-right-[107px]  after:md:-right-[97px] after:md:top-[50px] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[108px]',
      stepNumber: "02",
      stepIcon: iconTwoWhite,
      title: "Production Tooling & Setup",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(255,255,255,0.8)]",
      titleColor: "text-[#ffffff]",
    },
    {
      colsreverses:
        'order-3 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[51px] after:2xl:-right-[142px] after:xl:-right-[107px]  after:md:-right-[97px] after:md:top-[50px] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!left-[111px]',
      stepNumber: "03",
      stepIcon: iconThreeWhite,
      title: "Sourcing & Kitting",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(255,255,255,0.8)]",
      titleColor: "text-[#ffffff]",
    },
    {
      colsreverses: "order-4",
      stepNumber: "04",
      stepIcon: iconFourWhite,
      title: "PCB Assembly & Testing",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(255,255,255,0.8)]",
      titleColor: "text-[#ffffff]",
    },
  ];

  const midStepDataDark = [
    {
      colsreverses:
        'md:order-3 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[60px] after:md:top-[43px] after:2xl:-right-[142px] after:xl:-right-[105px] after:md:-right-[97px] min-[768px]:after:hidden min-[768px]:pb-0 pb-[75px]',
      stepNumber: "05",
      stepIcon: iconEightWhite,
      title: "Serialisation, Packing & Shipping",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(255,255,255,0.8)]",
      titleColor: "text-[#ffffff]",
    },
    {
      colsreverses:
        'md:order-2 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:!bg-[url("../images/step-arrow-mb.svg")] max-[767px]:after:!w-[16px] max-[767px]:after:!h-[66px] max-[767px]:after:!left-0 max-[767px]:after:!right-0 max-[767px]:after:!mx-auto max-[767px]:after:!top-[initial] max-[767px]:after:bottom-0 after:2xl:top-[72px] after:xl:top-[51px] after:2xl:-right-[142px] after:xl:-right-[107px] after:md:-right-[97px] after:md:top-[50px] min-[768px]:after:rotate-[180deg] min-[768px]:pb-0 pb-[75px] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!-right-[75px]',
      stepNumber: "06",
      stepIcon: iconSixWhite,
      title: "Firmware Flashing",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(255,255,255,0.8)]",
      titleColor: "text-[#ffffff]",
    },
    {
      colsreverses:
        'md:order-1 after:absolute after:2xl:w-[263px] after:xl:w-[198px] after:md:w-[176px] after:2xl:h-[24px] after:xl:h-[18px] after:md:h-[16px] after:2xl:bg-[url("../images/step-arrow.svg")] after:xl:bg-[url("../images/step-arrow-lg.svg")] after:md:bg-[url("../images/step-arrow-md.svg")] max-[767px]:after:hidden after:2xl:top-[72px] after:xl:top-[51px] after:2xl:-right-[142px] after:xl:-right-[107px] after:md:-right-[97px] after:md:top-[50px] min-[768px]:after:rotate-[180deg] max-[991px]:after:!bg-[url("../images/step-arrow-sm.svg")] max-[991px]:after:!w-[135px] max-[991px]:after:!top-[49px] max-[991px]:after:!-right-[76px]',
      stepNumber: "07",
      stepIcon: iconSevenWhite,
      title: "Automated End-of-Line Testing",
      stepDes: "Identify consumption trends and anomalies instantly",
      preColor: "text-[rgba(255,255,255,0.8)]",
      titleColor: "text-[#ffffff]",
    },
  ];

  const infoStepData = [
    {
      bgCard: "from-[#E7F1FF] to-[#ffffff] bg-gradient-to-r",
      tagColor: "text-[#3284FF]",
      titleColor: "text-[#222325]",
      cardTag: "Design and Development",
      cardTitle: "Our Partners",
      cardListPoints: [
        { pointText: "OEM Application Engineers", pointColor: "#4B5563" },
        { pointText: "EMI/EMC Test Labs", pointColor: "#4B5563" },
        { pointText: "Simulation Partners", pointColor: "#4B5563" },
        { pointText: "Tooling Design", pointColor: "#4B5563" },
        { pointText: "Independent Consultation", pointColor: "#4B5563" },
        { pointText: "Certifying Bodies", pointColor: "#4B5563" },
        { pointText: "Independent Consultation", pointColor: "#4B5563" },
        { pointText: "Others", pointColor: "#4B5563" },
      ],
    },
  ];

  const infoStepDataDark = [
    {
      bgCard: "from-[#3C699F] to-[rgba(0,60,70,0)] bg-gradient-to-r",
      tagColor: "text-[#35CBE9]",
      titleColor: "text-[#FFFFFF]",
      cardTag: "Design and Development",
      cardTitle: "Our Partners",
      cardListPoints: [
        { pointText: "OEM Application Engineers", pointColor: "text-white" },
        { pointText: "EMI/EMC Test Labs", pointColor: "text-white" },
        { pointText: "Simulation Partners", pointColor: "text-white" },
        { pointText: "Tooling Design", pointColor: "text-white" },
        { pointText: "Independent Consultation", pointColor: "text-white" },
        { pointText: "Certifying Bodies", pointColor: "text-white" },
        { pointText: "Independent Consultation", pointColor: "text-white" },
        { pointText: "Others", pointColor: "text-white" },
      ],
    },
  ];

  return (
    <>
      <section>
        <div className="w-full overflow-hidden 2xl:pb-[100px] xl:pb-[75px] lg:pb-[66px] md:pb-[45px] pb-[50px]">
          <div className="flex justify-center">
            <span className="bg-[rgba(53,99,233,0.2)] 2xl:rounded-[16px] xl:rounded-[13.85px] md:rounded-[12.1px] rounded-[7.48px] text-[#3563E9] font-semibold 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] 2xl:px-[24px] xl:px-[18px] px-[16px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex items-center justify-center">
              Roadmap
            </span>
          </div>
          <h2 className="text-center 2xl:mt-[20px] mt-[15px] 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] font-bold text-black">
            Design and Development
          </h2>

          <div className='min-[1536px]:max-w-[1366px] min-[1280px]:max-w-[1024px] min-[992px]:max-w-[910px] max-[991px]:max-w-[720px] max-[767px]:max-w-[calc(100%_-_40px)] mx-auto relative after:2xl:bg-[url("../images/top-right-line-xl.svg")] after:xl:bg-[url("../images/top-right-line-lg.svg")] after:md:bg-[url("../images/top-right-line-md.svg")] max-[991px]:after:!bg-[url("../images/top-right-line-xm.svg")] max-[991px]:after:!w-[99px] max-[991px]:after:!h-[506px] after:max-[767px]:hidden max-[991px]:after:!top-[85px] max-[991px]:after:!-right-[40px] after:2xl:-right-[60px] after:xl:-right-[30px] after:md:-right-[30px] after:2xl:top-[144px] after:xl:top-[114px] after:md:top-[80px] after:2xl:h-[611px] after:xl:h-[458px] after:md:h-[415px] after:2xl:w-[149px] after:xl:w-[112px] after:md:w-[99px] after:absolute after:bg-no-repeat'>
            <div className="2xl:pt-[60px] xl:pt-[40px] pt-[30px] grid md:grid-cols-4 max-[767px]:!grid-cols-1 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px] max-[991px]:!gap-[10px]">
              <TopSteps firstStepData={firstStepData} />
            </div>
            <div className="2xl:py-[72px] xl:py-[54px] md:py-[48px] py-[40px]">
              <StepInfoCard infoStepData={infoStepData} />
            </div>
            <div className="grid md:grid-cols-4 max-[767px]:!grid-cols-1 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px] max-[991px]:!gap-[10px] max-[767px]:[&>div]:!order-none">
              <TopSteps firstStepData={midStepData} />
            </div>
          </div>

          <div className="bg-[#051731] 2xl:mt-[100px] xl:mt-[75px] md:mt-[45px] mt-[50px] 2xl:pt-[148px] xl:pt-[111px] md:pt-[60px] pt-[60px] 2xl:pb-[100px] xl:pb-[75px] lg:pt-[66px] md:pb-[45px] pb-[50px]">
            <div className='min-[1536px]:max-w-[1366px] min-[1280px]:max-w-[1024px] min-[992px]:max-w-[910px] max-[991px]:max-w-[720px] max-[767px]:max-w-[calc(100%_-_40px)] mx-auto relative after:2xl:bg-[url("../images/bottom-right-line-xl.svg")] after:xl:bg-[url("../images/bottom-right-line-lg.svg")] after:md:bg-[url("../images/bottom-right-line-md.svg")] max-[991px]:after:!bg-[url("../images/top-right-line-sm.svg")] after:2xl:-right-[60px] after:2xl:top-[80px] after:md:-right-[43px] max-[1000px]:after:!-right-[34px] after:xl:top-[62px] after:md:top-[55px] after:2xl:h-[707px] after:xl:h-[536px] after:md:h-[471px] max-[991px]:after:!h-[589px] max-[991px]:after:!w-[150px] max-[991px]:after:!-right-[13px] after:2xl:w-[330px] after:xl:w-[248px] after:md:w-[220px] after:absolute after:bg-no-repeat before:2xl:bg-[url("../images/bottom-left-line-xl.svg")] before:xl:bg-[url("../images/bottom-left-line-lg.svg")] before:md:bg-[url("../images/bottom-left-line-md.svg")] max-[991px]:before:!bg-[url("../images/bottom-left-line-sm.svg")] before:2xl:-left-[60px] before:xl:-left-[30px] before:md:-left-[30px] max-[991px]:before:!-left-[36px] max-[991px]:before:!-top-[215px] before:2xl:-top-[379px] before:xl:-top-[288px] before:md:-top-[206px] before:2xl:h-[477px] before:xl:h-[357px] before:md:h-[318px] before:2xl:w-[151px] before:xl:w-[114px] before:md:w-[101px] before:absolute before:bg-no-repeat after:max-[767px]:hidden before:max-[767px]:hidden'>
              <div className="grid md:grid-cols-4 max-[767px]:!grid-cols-1 grid-cols-1 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px] max-[991px]:!gap-[10px]">
                <TopSteps firstStepData={firstStepDataDark} />
              </div>
              <div className="2xl:py-[115px] xl:py-[86px] md:py-[76px] py-[40px]">
                <StepInfoCard infoStepData={infoStepDataDark} />
              </div>
              <div className="flex 2xl:gap-[32px] xl:gap-[24px] md:gap-[21px] max-[767px]:!gap-[10px] justify-center min-[768px]:[&>div]:w-[25%] max-[767px]:flex-wrap max-[767px]:flex-col max-[767px]:items-center max-[767px]:[&>div]:!order-none">
                <TopSteps firstStepData={midStepDataDark} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DesignDevelop;
