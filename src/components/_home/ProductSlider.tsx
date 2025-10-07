"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import SlickSlider from "react-slick";

interface productCardData {
  productImg: string | StaticImageData;
  title: string;
  smallTitle: string;
  cardLink: string;
  arrowImg: string;
}

interface ProductSliderProps {
  productCardData: productCardData[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ productCardData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>  

        <div className='md:grid hidden grid-cols-4 2xl:px-[72px] xl:px-[54px] px-[20px] lg:gap-[18px] gap-[10px]'>
            {productCardData.map((data, index) => (
                <Link href={data.cardLink} key={index} className='group relative 2xl:rounded-[16px] xl:rounded-[12px] lg:px-[48px]rounded-[10px] rounded-[14px] overflow-hidden'>
                    <Image className='w-full transition-all duration-500 min-[1200px]:group-hover:blur-[3.5px] ' src={data.productImg} alt='' />
                    <div className='absolute left-0 right-0 top-0 bottom-0 2xl:p-[32px] xl:p-[24px] md:p-[10px] p-[15px] flex flex-col justify-between z-[1]'>
                        <div className='text-white'>
                            <h5 className='2xl:text-[28px] xl:text-[24px] leading-tight lg:text-[22px] md:text-[16px] text-base font-bold'>
                                {data.title}
                            </h5>
                            <p className=' text-transparent lg:text-white opacity-0 group-hover:opacity-100 duration-500 transition-all 2xl:pt-[14px] lg:pt-[11px] md:pt-[6px] pt-[10px] 2xl:text-[18px] lg:text-[14px] text-[13px]'>{data.smallTitle}</p>
                        </div>
                        <div>
                            <span><Image className='2xl:w-[25px] xl:w-[19px] w-[17px]' src={data.arrowImg} alt='' /></span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

      <SlickSlider
        className="md:!hidden [&>.slick-list>.slick-track]:flex 2xl:[&>.slick-list>.slick-track]:gap-[15px] lg:[&>.slick-list>.slick-track]:gap-[11px] [&>.slick-list>.slick-track]:gap-[10px] 2xl:[&_.slick-slide_div:nth-child(2)]:mt-2 xl:[&_.slick-slide_div:nth-child(2)]:mt-1.5 [&>.slick-arrow]:before:hidden [&>.slick-arrow]:2xl:w-[81.46px] [&>.slick-arrow]:xl:w-[60px] [&>.slick-arrow]:md:w-[54.3px] [&>.slick-arrow]:w-[81.46px] [&>.slick-arrow]:2xl:h-[35.71px] [&>.slick-arrow]:xl:h-[26.78px] [&>.slick-arrow]:md:h-[23.8px] [&>.slick-arrow]:h-[35.71px] [&>.slick-arrow.slick-disabled]:bg-[#E2E2E2] [&>.slick-arrow]:rounded-full [&>.slick-arrow]:bg-center [&>.slick-arrow]:bg-no-repeat [&>.slick-arrow]:bg-[#3563E9] [&>.slick-arrow]:absolute [&>.slick-arrow]:md:!left-[initial] [&>.slick-arrow]:2xl:!right-[72px] [&>.slick-arrow]:xl:!right-[54px] [&>.slick-arrow]:lg:!right-[48px] [&>.slick-arrow]:!right-[5px] max-[767px]:[&>.slick-arrow]:z-[2] max-[767px]:[&>.slick-arrow]:top-[-58px] [&>.slick-arrow]:2xl:top-[16px] [&>.slick-arrow]:lg:top-[12px] [&>.slick-arrow]:md:top-[6px] [&>.slick-arrow]:top-0 [&>.slick-prev]:2xl:!right-[165px] [&>.slick-prev]:xl:!right-[123px] [&>.slick-prev]:lg:!right-[111px] [&>.slick-prev]:md:!right-[82px] [&>.slick-prev]:!right-[initial] [&>.slick-prev]:max-[767px]:!left-[8px] !position-initial [&>.slick-arrow]:!translate-x-0 [&>.slick-arrow]:!translate-y-0 [&>.slick-prev]:bg-[url(../images/long-prev.svg)] [&>.slick-prev.slick-disabled]:bg-[url(../images/long-prev-dark.svg)] [&>.slick-next]:bg-[url(../images/long-next.svg)] [&>.slick-next.slick-disabled]:bg-[url(../images/long-next-dark.svg)] [&>.slick-arrow]:max-[1535px]:bg-24 [&>.slick-arrow]:max-[1279px]:bg-21 [&>.slick-arrow]:max-[767px]:bg-32 max-[767px]:mt-[24px] max-[767px]:max-w-[460px] max-[767px]:!relative max-[767px]:mx-auto max-[480px]:max-w-[calc(100%_-_20px)] [&>.slick-dots]:relative [&>.slick-dots]:mt-[25px] [&>.slick-dots]:bottom-0 [&>.slick-dots>li>button]:p-0 [&>.slick-dots>li>button]:rounded-[50px] [&>.slick-dots>li]:w-auto [&>.slick-dots>li]:h-auto [&>.slick-dots>li]:m-0 [&>.slick-dots>li>button]:h-[10px] [&>.slick-dots>li>button]:before:hidden [&>.slick-dots>li>button]:w-[10px] [&>.slick-dots>li>button]:bg-[#D9D9D9] [&>.slick-dots]:gap-[15px] [&>.slick-dots]:!flex [&>.slick-dots]:justify-center [&>.slick-dots>li.slick-active>button]:bg-[#3563E9] [&>.slick-dots>li>button]:transition-all [&>.slick-dots>li>button]:duration-500"
        {...settings}
      >
        {productCardData.map((data, index) => (
          <Link href={data.cardLink}
            key={index}
            className="group relative 2xl:rounded-[16px] xl:rounded-[12px] lg:px-[48px]rounded-[10px] rounded-[14px] overflow-hidden 2xl:me-[15px]"
          >
            <Image
              className="w-full transition-all duration-500 min-[1200px]:group-hover:blur-[3.5px]"
              src={data.productImg}
              alt=""
            />
            <div className="absolute left-0 right-0 top-0 bottom-0 2xl:p-[32px] xl:p-[24px] p-[21.33px] flex flex-col justify-between z-[1]">
              <div className="text-white">
                <h5 className="2xl:text-[24px] lg:text-[18px] text-base font-bold">
                  {data.title}
                </h5>
                <p className="2xl:pt-[14px] lg:pt-[11px] pt-[10px] 2xl:text-[16px] lg:text-[12px] text-[11px]">
                  {data.smallTitle}
                </p>
              </div>
              <div>
                <span>
                  <Image
                    className="2xl:w-[25px] xl:w-[19px] w-[17px]"
                    src={data.arrowImg}
                    alt=""
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </SlickSlider>
    </>
  );
};

export default ProductSlider;
