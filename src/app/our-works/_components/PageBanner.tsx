import Image from "next/image";
import React from "react";

import ourWorksImg from "@/src/assets/images/technology-compliance.jpg";

function PageBanner() {
  return (
    <>
      <section>
        <div className="relative max-[480px]:h-[400px] 2xl:h-[600px] xl:h-[525px] h-[466.67px] overflow-hidden">
          <div className="2xl:py-[260px] xl:py-[195px] flex items-center justify-center md:py-[173px] py-[185px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] absolute left-0 top-0 w-full h-full">
            <div className="flex justify-center text-white flex-col text-center 2xl:gap-y-[40px] xl:gap-y-[30px] md:gap-y-[26.67px] gap-y-[16px]">
              <h1 className="2xl:text-[68.5px] xl:text-[49.35px] md:text-[48px] text-[32px] font-semibold">
                Our Works
              </h1>
            </div>
          </div>
          <div className="h-full">
            <Image src={ourWorksImg} className="h-full object-cover" alt="" />
          </div>
        </div>
      </section>
    </>
  ); 
}

export default PageBanner;
