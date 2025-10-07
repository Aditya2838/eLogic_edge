"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import SlickSlider from "react-slick";

interface testimonialData {
  profileImg: string | StaticImageData;
  feedbackPara: string;
  profileName: string;
  profileDes: string;
}

interface TestimonialCardProps {
  testimonialData: testimonialData[];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonialData,
}) => {
  const settings = {
    dots: true,
    infinite: testimonialData.length > 1,  
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: testimonialData.length > 1, 
    arrows: testimonialData.length > 1,  
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
        
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
        
      },
      
    ],
  };
  
  return (
    <>
      <SlickSlider
        className="[&>.slick-list>.slick-track]:flex 2xl:[&>.slick-list>.slick-track]:gap-[15px] lg:[&>.slick-list>.slick-track]:gap-[11px] [&>.slick-list>.slick-track]:gap-[10px] [&>.slick-arrow]:before:hidden [&>.slick-arrow]:2xl:w-[81.46px] [&>.slick-arrow]:xl:w-[60px] [&>.slick-arrow]:md:w-[54.3px] [&>.slick-arrow]:w-[81.46px] [&>.slick-arrow]:2xl:h-[35.71px] [&>.slick-arrow]:xl:h-[26.78px] [&>.slick-arrow]:md:h-[23.8px] [&>.slick-arrow]:h-[35.71px] [&>.slick-arrow.slick-disabled]:bg-[#E2E2E2] [&>.slick-arrow]:rounded-full [&>.slick-arrow]:bg-center [&>.slick-arrow]:bg-no-repeat [&>.slick-arrow]:bg-[#3563E9] [&>.slick-arrow]:absolute [&>.slick-arrow]:md:!left-[initial] [&>.slick-arrow]:2xl:!right-[12px] [&>.slick-arrow]:xl:!right-[10px] [&>.slick-arrow]:md:!right-[9px] [&>.slick-arrow]:!right-[20px] [&>.slick-arrow]:2xl:top-[16px] [&>.slick-arrow]:lg:top-[12px] [&>.slick-arrow]:md:top-[6px] [&>.slick-arrow]:top-0 [&>.slick-prev]:2xl:!right-[105px] [&>.slick-prev]:xl:!right-[79px] [&>.slick-prev]:md:!right-[72px] [&>.slick-prev]:!right-[initial] [&>.slick-prev]:max-[767px]:!left-[0px] [&>.slick-next]:max-[767px]:!right-[0px] !position-initial [&>.slick-arrow]:!translate-x-0 [&>.slick-arrow]:!translate-y-0 [&>.slick-prev]:bg-[url(../images/long-prev.svg)] [&>.slick-prev.slick-disabled]:bg-[url(../images/long-prev-dark.svg)] [&>.slick-next]:bg-[url(../images/long-next.svg)] [&>.slick-next.slick-disabled]:bg-[url(../images/long-next-dark.svg)] [&>.slick-arrow]:max-[1535px]:bg-24 [&>.slick-arrow]:max-[1279px]:bg-21 [&>.slick-arrow]:max-[767px]:bg-32 max-[767px]:mt-[24px] [&>.slick-dots]:relative [&>.slick-dots]:2xl:mt-[40px] [&>.slick-dots]:xl:mt-[32px] [&>.slick-dots]:md:mt-[28px] [&>.slick-dots]:mt-[25px] [&>.slick-dots]:bottom-0 [&>.slick-dots>li>button]:p-0 [&>.slick-dots>li>button]:rounded-[50px] xl:rounded-[12px] lg:px-[48px]rounded-[10px] rounded-[14px] [&>.slick-dots>li]:w-auto [&>.slick-dots>li]:h-auto [&>.slick-dots>li]:m-0 [&>.slick-dots>li>button]:2xl:h-[6px] [&>.slick-dots>li>button]:xl:h-[4.5px] [&>.slick-dots>li>button]:md:h-[4px] [&>.slick-dots>li>button]:h-[6px] [&>.slick-dots>li>button]:before:hidden [&>.slick-dots>li>button]:2xl:w-[48px] [&>.slick-dots>li>button]:xl:w-[36px] [&>.slick-dots>li>button]:md:w-[32px] [&>.slick-dots>li>button]:w-[48px] [&>.slick-dots>li>button]:bg-[#D9D9D9] [&>.slick-dots]:gap-[8px] [&>.slick-dots]:!flex [&>.slick-dots]:justify-center [&>.slick-dots>li.slick-active>button]:bg-[#3563E9] [&>.slick-dots>li>button]:transition-all [&>.slick-dots>li>button]:duration-500"
        {...settings}
      >
        {testimonialData.map((data, index) => (
          <div
            key={index}
            className="bg-white  2xl:rounded-[26px] 2xl:px-[40px] xl:px-[46.26px] md:px-[20px] px-[40px] max-[400px]:px-[25px] 2xl:pt-[40px] xl:pt-[30px] md:pt-[27px] pt-[26px] 2xl:pb-[50px] xl:pb-[37px] md:pb-[31px] pb-[32px] relative xl:rounded-[19.68px] lg:px-[48px]rounded-[10px] rounded-[14px] overflow-hidden 2xl:me-[15px] xl:min-h-[260px]"
          >
            <p className="text-black 2xl:text-[18.37px] xl:text-[13.77px] md:text-[12.24px] text-[11.94px] max-[1780px]:h-[192px] max-[1535px]:h-[130px] max-[992px]:h-[100px] max-[639px]:h-[125px] max-[400px]:h-[135px]">
              {data.feedbackPara}
            </p>
            <div className="flex items-center justify-start 2xl:mt-[25px] lg:mt-[18px] md:mt-[16px] mt-[12px] gap-[12px]">
              <div className="2xl:w-[54px] 2xl:h-[54px] xl:w-[40.34px] xl:h-[40.34px] md:w-[35.85px] md:h-[35.85px] w-[34.98px] h-[34.98px] rounded-full overflow-hidden">
                <Image src={data.profileImg} alt="" />
              </div>
              <div className="">
                <h5 className="font-sora text-black font-semibold 2xl:text-[18.37px] xl:text-[13.77px] md:text-[12.24px] text-[11.94px]">
                  {data.profileName}
                </h5>
                <small className="text-[#00004E] 2xl:text-[15.74px] lg:text-[11.81px] md:text-[10.49px] text-[10.24px]  mt-1">
                  {data.profileDes}
                </small>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </>
  );
};

export default TestimonialCard;
