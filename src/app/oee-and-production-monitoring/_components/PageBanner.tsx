import React from "react";

// const pageVideo = "/videos/internal-video.mp4";

function PageBanner() {
  return (
    <>
      <section>
        <div className="relative max-[480px]:h-[400px] 2xl:h-[600px] xl:h-[525px] h-[466.67px] overflow-hidden">
          <div className="bg-[rgba(0,0,0,0.85)] 2xl:py-[260px] xl:py-[195px] flex items-center justify-center md:py-[173px] py-[185px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] absolute left-0 top-0 w-full h-full">
            <div className="flex justify-center text-white flex-col text-center 2xl:gap-y-[40px] xl:gap-y-[30px] md:gap-y-[26.67px] gap-y-[16px]">
              <h1 className="2xl:text-[68.5px] xl:text-[49.35px] md:text-[48px] text-[32px] font-semibold">
                Productivity Monitoring
              </h1>
              <div className="mx-auto 2xl:text-[20.72px] xl:text-[15.54px] text-[14px] 2xl:max-w-[658px] xl:max-w-[541px] md:max-w-[452px] max-w-[428px]">
                Transform your industrial energy data into actionable insights for improved efficiency and cost savings
              </div>
            </div>
          </div>
          <div className="h-full">
            <video className="h-full w-full object-cover" loop muted playsInline autoPlay  >
              <source src="https://eltedge.s3.ap-south-1.amazonaws.com/website+videos+v3/product+monitoring+video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageBanner;
