'use client'
import React from "react";
import ServicesSwiperSlider from "./ServicesSwiperSlider";
import { motion } from "framer-motion";

function EngineeringServices() {
  return (
    <>
      <section>
        <div className="bg-[#EEF1F5] 2xl:py-[80px] xl:py-[75px] lg:py-[66px] py-[100px] max-[767px]:pb-[40px]">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5}}>
          <div className="2xl:pb-[40px] xl:pb-[52px] lg:pb-[45px] pb-[40px]">
            <h2 className="text-center text-[#1D3157] 2xl:text-[62px] xl:text-[47px] lg:text-[41px] text-[24px] font-bold capitalize">
              Product engineering services
            </h2>
          </div>
          <div className="">
            <div className="flex justify-center flex-col text-center">
              <h3 className="text-center text-[#1D3157] 2xl:text-[47px] xl:text-[35.16px] lg:text-[31.25px] text-base font-bold capitalize">
                Product Categories
              </h3>
              <div className="text-[#4B5563] leading-[1.5] 2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px] text-center mx-auto 2xl:max-w-[1015px] 2xl:text-[24px] xl:max-w-[760.5px] xl:text-[18px] lg:max-w-[676px] text-base">
                <p>
                  Embedded systems & electronics products from concept to production
                </p>
              </div>
            </div>
            <div className="2xl:pt-[40px] relative xl:pt-[45px] pt-[40px] flex justify-center items-center 2xl:max-w-[1475px] xl:max-w-[1115px] lg:max-w-[992px] md:max-w-[740px] sm:max-w-[600px] max-[639px]:max-w-[430px] max-[450px]:max-w-[calc(100%_-_50px)] mx-auto w-full [&>.service-slide]:blur-[7.7px] [&>.service-slide]:min-w-[860px] [&>.service-slide.active-service]:blur-0 [&>.service-slide.active-service]:w-[1085px] [&>.service-slide.active-service]:absolute [&>.service-slide.active-service]:left-0 [&>.service-slide.active-service]:right-0 [&>.service-slide.active-service]:mx-auto [&>.service-slide.active-service]:z-[1]">
              <ServicesSwiperSlider />
            </div>
          </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default EngineeringServices;
