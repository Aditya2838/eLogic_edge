'use client'
import React from "react";
import AppCard from "./AppCard";
import { motion } from "framer-motion";

// image
import imgFirst from "@/src/assets/images/energymntrngimg1.png";
import imgSecond from "@/src/assets/images/conditionalmntrngimg.png";
import imgThird from "@/src/assets/images/productivitymntrngimg.png";
import imgFourth from "@/src/assets/images/app-three.jpg";

function OurApplications() {
  const appCardData = [
    {
      appImg: imgFirst,
      cardTitle: "Energy Monitoring",
      appLink: "/energy-consumption-monitoring",
      linkText: "Learn more",
    },
    {
      appImg: imgSecond,
      cardTitle: "Condition Monitoring",
      appLink: "/machine-condition-monitoring",
      linkText: "Learn more",
    },
    {
      appImg: imgThird,
      cardTitle: "Productivity Monitoring",
      appLink: "/oee-and-production-monitoring",
      linkText: "Learn more",
    },
    {
      appImg: imgFourth,
      cardTitle: "Custom Solutions",
      appLink: "/contact-us",
      linkText: "Learn more",
    },
  ];
  return (
    <section>
      <div
        className="bg-[#111B40] 2xl:pt-[80px] xl:pt-[135px] lg:pt-[120px] pt-[50px] 2xl:pb-[40px] xl:pb-[75px] lg:pb-[66px] pb-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]">
          <h2 className="text-center text-white 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold">
            Industrial IoT Solutions
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.53 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 2xl:gap-x-[30px] xl:gap-x-[22.5px] md:gap-x-[20px] lg:gap-y-0 gap-y-[20px]">
          <AppCard appCardData={appCardData} />
        </motion.div>
      </div>
    </section>
  );
}

export default OurApplications;
