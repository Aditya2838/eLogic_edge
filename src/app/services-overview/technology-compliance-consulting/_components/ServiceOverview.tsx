import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import ServiceCard from "./ServiceCard";

// images
// import imgOne from "@/src/assets/images/card-img-one.jpg";
// import imgTwo from "@/src/assets/images/card-img-two.jpg";
import serviceOne from '@/src/assets/images/card-one.jpg'
import serviceTwo from '@/src/assets/images/card-two.jpg'
import serviceThree from '@/src/assets/images/card-three.jpg'
import serviceFour from '@/src/assets/images/card-four.jpg'
import mobOne from '@/src/assets/images/card-mob-one.jpg'
import mobTwo from '@/src/assets/images/card-mob-two.jpg'
import mobThree from '@/src/assets/images/card-mob-three.jpg'
import mobFour from '@/src/assets/images/card-mob-four.jpg'

function ServiceOverview() {
  // const appCardData = [
  //   {
  //     cardTitle: (
  //       <>
  //         Prediction <br />
  //         Monitoring
  //       </>
  //     ),
  //     cardLink: "/",
  //     linkText: "Learn More",
  //     cardImg: imgOne,
  //   },
  //   {
  //     cardTitle: (
  //       <>
  //         Condition <br />
  //         Monitoring
  //       </>
  //     ),
  //     cardLink: "/",
  //     linkText: "Learn More",
  //     cardImg: imgTwo,
  //   },
  //   {
  //     cardTitle: (
  //       <>
  //         Energy <br />
  //         consumption <br />
  //         monitoring
  //       </>
  //     ),
  //     cardLink: "/",
  //     linkText: "Learn More",
  //     cardImg: imgTwo,
  //   },
  //   {
  //     cardTitle: (
  //       <>
  //         Custom <br />
  //         application
  //       </>
  //     ),
  //     cardLink: "/",
  //     linkText: "Learn More",
  //     cardImg: imgOne,
  //   },
  // ];
  const serviceCardData = [
    {cardTag:'Technology & Compliance Consulting', cardTitle:'Compliance Guidance', cardImg:serviceOne,cardImgMob:mobOne,
        cardList:[
            {pointName:'EMC/EMI compliance planning'},
            {pointName:'Safety standards interpretation'},
            {pointName:'Environmental compliance (RoHS, REACH)'},
            {pointName:'Industry-specific regulations'},
            {pointName:'Medical device standards'},
            {pointName:'Wireless certification requirements'},
        ]
    },
    {cardTag:'Technology & Compliance Consulting', cardTitle:'Technology Selection', cardImg:serviceTwo,cardImgMob:mobTwo,
        cardList:[
            {pointName:'Microcontroller/processor selection'},
            {pointName:'Communication protocol evaluation'},
            {pointName:'Sensor technology assessment'},
            {pointName:'Power system architecture'},
            {pointName:'Memory technology selection'},
            {pointName:'Interface technology optimization'},
        ]
    },
    {cardTag:'Technology & Compliance Consulting', cardTitle:'Standards Implementation', cardImg:serviceThree,cardImgMob:mobThree,
        cardList:[
            {pointName:'ISO standard compliance'},
            {pointName:'IEC standard implementation'},
            {pointName:'Medical device standards (IEC 60601)'},
            {pointName:'Industrial safety standards'},
            {pointName:'Functional safety requirements'},
            {pointName:'Quality management systems'},
        ]
    },
    {cardTag:'Technology & Compliance Consulting', cardTitle:'Risk Management', cardImg:serviceFour,cardImgMob:mobFour,
        cardList:[
            {pointName:'Technology risk assessment'},
            {pointName:'Compliance risk evaluation'},
            {pointName:'Mitigation strategy development'},
            {pointName:'Documentation systems'},
            {pointName:'Change management procedures'},
            {pointName:'Long-term sustainability planning'},
        ]
    },
]
  return (
    <>
      <section>
        <div className="2xl:py-[80px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
          <div className="flex justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
            <div className="text-black">
              <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold capitalize">
                Overview
              </h2>
            </div>
            <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
            Our technology and compliance consulting service guides companies through the complex landscape of technical standards, regulatory requirements, and emerging technologies. We specialize in ensuring embedded systems and electronic products meet necessary compliance standards while leveraging appropriate technology choices for optimal performance and market success.
              <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
                <Link
                  className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[320px] xl:max-w-[260px] md:max-w-[225px] max-w-[205px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[12px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
                  href="/contact-us"
                >
                  Discuss your requirement <MdArrowOutward className="ms-2.5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="2xl:pt-[80px] xl:pt-[60px] md:pt-[53px] pt-[40px] 2xl:gap-[36.95px] xl:gap-[27.53px] md:gap-[24.64px] gap-[15.81px]">
            <div className="text-black font-bold 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px]">
                Core Capabilities
            </div>
            <div className="2xl:pt-[90px] xl:pt-[70px] lg:pt-[66px] md:pt-[45px] pt-[50px] grid grid-cols-1 2xl:gap-y-[100px] xl:gap-y-[75px] lg:gap-y-[66px] md:gap-y-[45px] gap-y-[40px]">
                <ServiceCard serviceCardData={serviceCardData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ServiceOverview