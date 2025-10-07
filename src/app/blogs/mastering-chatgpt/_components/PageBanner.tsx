import Image from "next/image";
import React from "react";

import teamBgImg from "@/src/assets/images/mastering-chatgpt-banner.jpg";

function PageBanner() {
  return (
    <>
      <section>
        <div className="relative max-[480px]:h-[400px] 2xl:h-[600px] xl:h-[525px] h-[466.67px] overflow-hidden">
          <div className="2xl:py-[260px] xl:py-[195px] flex items-center justify-center md:py-[173px] py-[185px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] absolute left-0 top-0 w-full h-full">
            <div className="flex justify-center text-white flex-col text-center gap-4">
              <div className="flex justify-center">
                <div className="bg-[rgba(161,196,255,0.32)] flex items-center 2xl:gap-4 lg:gap-2 gap-1.5 font-medium 2xl:text-[20.74px] xl:text-[18px] text-base 2xl:py-[10.5px] xl:py-[8px] py-[7px] rounded-full 2xl:px-[20px] xl:px-[17px] md:px-[15px] px-[12px]">
                  {" "}
                  <span className="flex xl:w-[23.7px] lg:w-[16px] w-[14px] xl:h-[23.7px] lg:h-[16px] h-[14px] rounded-full bg-[#3464FC]"></span>
                  <span>Artificial Intelligence</span>
                </div>
              </div>
              <h1 className="2xl:text-[40px] xl:text-[32px] lg:text-[23px] text-[20px] font-semibold 2xl:max-w-[960px] xl:max-w-[750px] lg:max-w-[520px] max-w-[420px]">
                Mastering ChatGPT Blog Creation: Dos and Don&apos;ts for SaaS
                Marketing Managers
              </h1>
              <div className="mx-auto 2xl:text-[20.72px] xl:text-[15.54px] text-[14px]">
                <ul className="flex items-center gap-4">
                  <li>Oct 19</li>
                  <li>
                    <div className="flex items-center gap-3">
                      <div className="w-[7px] h-[7px] rounded-full bg-white"></div>{" "}
                      10 min read
                    </div>
                  </li>
                </ul>
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
