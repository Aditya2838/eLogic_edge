'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import SlickSlider from 'react-slick';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

// images
import valueCulturedImg from '@/src/assets/images/service-card-one.jpg';
import CulturedPoints from './CulturedPoints';

interface ExampleApplicationsProps {
    someProperty?: string;
  }
  
interface ListDataItem {
  leftTitle: string;
  rightDes: string;
  cardList: { pointName: string }[];
}

interface ExampleCardSliderItem {
  valueCulturedImg: string | StaticImageData;
}
  
  const ExampleApplications: React.FC<ExampleApplicationsProps> = ({}) => {
    const listData: ListDataItem[] = [
        {leftTitle:'Industrial IoT Systems',rightDes:'Attitude and willingness to learn are greater assets than aptitude and experience',
            cardList:[
                {pointName:'Production monitoring'},
                {pointName:'Asset tracking solutions'},
                {pointName:'Predictive maintenance'},
                {pointName:'Energy monitoring'},
                {pointName:'Remote control systems'},
            ]            
        },
        {leftTitle:'Connected Instruments',rightDes:'We unite diverse engineering disciplines and approaches under one roof',
            cardList:[
                {pointName:'Remote monitoring systems'},
                {pointName:'Data collection networks'},
                {pointName:'Calibration management'},
                {pointName:'Remote diagnostics'},
                {pointName:'Performance tracking'},
            ] 
        },
        {leftTitle:'Smart Infrastructure',rightDes:'We go beyond service provision to become trusted advisors, sharing our experience and insights',
            cardList:[
                {pointName:'Building automation'},
                {pointName:'Environmental monitoring'},
                {pointName:'Resource optimization'},
                {pointName:'Security systems'},
                {pointName:'Energy management'},
            ] 
        },
        {leftTitle:'Technologies & Tools',rightDes:'We go beyond service provision to become trusted advisors, sharing our experience and insights',
            cardList:[
                {pointName:'IoT development platforms'},
                {pointName:'Cloud service providers'},
                {pointName:'Protocol analysis tools'},
                {pointName:'Security testing systems'},
                {pointName:'Performance monitoring'},
            ] 
        },
    ]
    const exampleCardSlider: ExampleCardSliderItem[] = [
        { valueCulturedImg: valueCulturedImg },
        { valueCulturedImg: valueCulturedImg },
        { valueCulturedImg: valueCulturedImg },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
      };
  return (
    <>
        <section>
            <div className='2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:pb-[100px] xl:pb-[75px] lg:pb-[66px] md:pb-[45px] pb-[50px]'>
                <div className='bg-[#051731] 2xl:p-[50px] xl:p-[40px] lg:p-[30px] p-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px] flex justify-between md:flex-nowrap flex-wrap md:gap-y-0 gap-y-8 max-[767px]:flex-col-reverse'>
                    <div className='2xl:w-[calc(100%_-_634px)] xl:w-[calc(100%_-_457px)] lg:w-[calc(100%_-_350px)] md:w-[calc(100%_-_328.5px)] w-full 2xl:pe-[72px] xl:pe-[50px] lg:pe-[40px] md:pe-[20px]'>
                        <h4 className='md:flex hidden text-white font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px]'>Example Applications</h4>
                        <div className=' 2xl:mt-[42px] xl:mt-[32px] md:mt-[10px] mt-[0px] expmpl-apps'>
                            <CulturedPoints listData={listData} />
                        </div>
                        <div className="2xl:pt-[60px] xl:pt-[40px] pt-[30px] md:mb-0 mb-4">
                            <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[185px] xl:max-w-[139px] md:max-w-[123.44px] max-w-[140px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black"
                            href="/contact-us">contact us <MdArrowOutward className="ms-2.5" /></Link>
                        </div>
                    </div>
                    <div className='relative 2xl:w-[634px] xl:w-[457px] lg:w-[350px] md:w-[328.5px] w-full overflow-hidden'>
                        <div className='md:hidden flex'>
                            <h4 className='text-white font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] mt-1.5 mb-3'>Example Applications</h4>
                        </div>
                        <SlickSlider
                            className="h-full [&>.slick-list]:h-full [&>.slick-list>.slick-track]:h-full [&>.slick-list_.slick-slide_div]:h-full [&>.slick-list>.slick-track]:flex 2xl:[&>.slick-list>.slick-track]:gap-[15px] lg:[&>.slick-list>.slick-track]:gap-[11px] [&>.slick-list>.slick-track]:gap-[10px] max-[767px]:[&>.slick-list>.slick-track]:gap-[0px] [&>.slick-arrow]:before:hidden [&>.slick-arrow]:2xl:w-[81.46px] [&>.slick-arrow]:xl:w-[60px] [&>.slick-arrow]:md:w-[54.3px] [&>.slick-arrow]:w-[81.46px] [&>.slick-arrow]:2xl:h-[35.71px] [&>.slick-arrow]:xl:h-[26.78px] [&>.slick-arrow]:md:h-[23.8px] [&>.slick-arrow]:h-[35.71px] [&>.slick-arrow.slick-disabled]:bg-[#E2E2E2] [&>.slick-arrow]:rounded-full [&>.slick-arrow]:bg-center [&>.slick-arrow]:bg-no-repeat [&>.slick-arrow]:bg-[#3563E9] [&>.slick-arrow]:absolute [&>.slick-arrow]:md:!left-[initial] [&>.slick-arrow]:2xl:!right-[12px] [&>.slick-arrow]:xl:!right-[10px] [&>.slick-arrow]:md:!right-[9px] [&>.slick-arrow]:!right-[20px] [&>.slick-arrow]:2xl:top-[16px] [&>.slick-arrow]:lg:top-[12px] [&>.slick-arrow]:md:top-[6px] [&>.slick-arrow]:top-0 [&>.slick-prev]:2xl:!right-[105px] [&>.slick-prev]:xl:!right-[79px] [&>.slick-prev]:md:!right-[72px] [&>.slick-prev]:!right-[initial] [&>.slick-prev]:max-[767px]:!left-[0px] [&>.slick-next]:max-[767px]:!right-[0px] !position-initial [&>.slick-arrow]:!translate-x-0 [&>.slick-arrow]:!translate-y-0 [&>.slick-prev]:bg-[url(../images/long-prev.svg)] [&>.slick-prev.slick-disabled]:bg-[url(../images/long-prev-dark.svg)] [&>.slick-next]:bg-[url(../images/long-next.svg)] [&>.slick-next.slick-disabled]:bg-[url(../images/long-next-dark.svg)] [&>.slick-arrow]:max-[1535px]:bg-24 [&>.slick-arrow]:max-[1279px]:bg-21 [&>.slick-arrow]:max-[767px]:bg-32 max-[767px]:mt-[24px] [&>.slick-dots]:absolute [&>.slick-dots]:bottom-[45px] [&>.slick-dots]:2xl:mt-[0px] [&>.slick-dots]:xl:mt-[32px] [&>.slick-dots]:md:mt-[28px] [&>.slick-dots]:mt-[25px] [&>.slick-dots>li>button]:p-0 [&>.slick-dots>li>button]:rounded-[50px] xl:rounded-[12px] lg:px-[48px]rounded-[10px] rounded-[14px] [&>.slick-dots>li]:w-auto [&>.slick-dots>li]:h-auto [&>.slick-dots>li]:m-0 [&>.slick-dots>li>button]:2xl:h-[6px] [&>.slick-dots>li>button]:xl:h-[4.5px] [&>.slick-dots>li>button]:md:h-[4px] [&>.slick-dots>li>button]:h-[4px] [&>.slick-dots>li>button]:before:hidden [&>.slick-dots>li>button]:2xl:w-[33px] [&>.slick-dots>li>button]:xl:w-[24px] [&>.slick-dots>li>button]:md:w-[22px] [&>.slick-dots>li>button]:w-[22px] [&>.slick-dots>li>button]:bg-[#D9D9D9] [&>.slick-dots]:gap-[8px] [&>.slick-dots]:!flex [&>.slick-dots]:justify-center [&>.slick-dots>li.slick-active>button]:bg-[#3563E9] [&>.slick-dots>li>button]:transition-all [&>.slick-dots>li>button]:duration-500"
                            {...settings}
                        >
                            {exampleCardSlider.map((data, index) => (
                                <div key={index}>
                                    <Image src={data.valueCulturedImg} className="object-cover h-full w-full 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px]" alt="" />
                                </div>
                            ))}
                        </SlickSlider>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ExampleApplications