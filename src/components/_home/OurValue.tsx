'use client'
import React from "react";
import ValueCard from "./ValueCard";
import { motion } from "framer-motion";

// images
import IconOne from "@/src/assets/images/dollar.svg";
import IconTwo from "@/src/assets/images/clock (2).svg";
import IconThree from "@/src/assets/images/target.svg";
import IconFour from "@/src/assets/images/google-docs.svg";
import Link from "next/link";

function OurValue() {
  const valueData = [
    { valueIcon: IconOne, cardTitle: "Reduced Costs", cardParagraph: "Identification of Energy, Consumables and Input Consumptions Trends" },
    { valueIcon: IconTwo, cardTitle: "Reduced Downtime", cardParagraph: 'Predictive Maintenance of Critical Equipment' },
    { valueIcon: IconThree, cardTitle: "Unlock Hidden Capacity", cardParagraph: "Identification And Analysis of Bottlenecks and Downtime Drivers" },
    { valueIcon: IconFour, cardTitle: "Rich Data Availability", cardParagraph: "For Production Planning and Quality Auditing " },
  ];
  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111B40] 2xl:pb-[40px] xl:pb-[135px] lg:pb-[120px] pb-[50px] 2xl:pt-[40px] xl:pt-[30px] lg:pt-[25px] pt-[20px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
          <div className="2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]">
            <h2 className="text-center text-white 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold">
              Our Value Adds
            </h2>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 items-start 2xl:gap-x-[32px] xl:gap-x-[24px] lg:gap-x-[21px] gap-x-[40px] md:gap-y-0 gap-y-[40px]">
            <ValueCard valueData={valueData} />
          </div>
          <div className="flex justify-center items-center 2xl:py-[50px] xl:py-[30px] lg:py-[20px] pb-[20px] mt-6">
            <Link
              className="text-center bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[250px] xl:max-w-[185.5px] md:max-w-[166.44px] max-w-[190px] 2xl:h-[60px] xl:h-[45px] md:h-[41px] h-[48px] flex justify-center items-center py-[2px] 2xl:text-[19px] xl:text-[14.25px] text-[16px] md:text-[12.67px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black"
              href="/contact-us"
            >
              Schedule a demo
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default OurValue;
