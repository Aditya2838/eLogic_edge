import Image from "next/image";
import React from "react";

import teamBgImg from '@/src/assets/images/career-banner.jpg'
import Link from "next/link";

function PageBanner() {
  return (
    <>
      <section>
        <div className="relative max-[480px]:h-[400px] 2xl:h-[600px] xl:h-[525px] h-[466.67px] overflow-hidden">
          <div className="2xl:py-[260px] xl:py-[195px] flex items-center justify-center md:py-[173px] py-[185px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] absolute left-0 top-0 w-full h-full">
            <div className="flex justify-center text-white flex-col text-center 2xl:gap-y-[40px] xl:gap-y-[30px] md:gap-y-[26.67px] gap-y-[16px]">
              <h1 className="2xl:text-[68.5px] xl:text-[49.35px] md:text-[48px] text-[32px] font-semibold">Careers</h1>
              <div className="mx-auto 2xl:text-[20.72px] xl:text-[15.54px] text-[14px] 2xl:max-w-[658px] xl:max-w-[520px] md:max-w-[452px] max-w-[438px]">
                Capture and convert equipment data into actionable maintenance insights for enhanced reliability
              </div>
              <div className="flex justify-center">
                <Link className="bg-[#3563E9] text-white px-[2] w-full md:max-w-[136.44px] max-w-[130px] md:h-[41px] h-[40.29px] flex justify-center items-center py-[2px] md:text-[12.67px] text-[11px] md:font-bold font-semibold rounded-[10.67px] capitalize duration-500 hover:bg-white hover:text-black"
                        href="/contact-us">Get In Touch</Link>
              </div>
            </div>
          </div>
          <div className="h-full">
            <Image src={teamBgImg} className="h-full object-cover" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default PageBanner;
