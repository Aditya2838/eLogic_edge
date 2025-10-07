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
    {cardTag:'Embedded Software Design', cardTitle:'Enclosure Design', cardImg:serviceOne,cardImgMob:mobOne,
        cardList:[
            {pointName:'Custom enclosure development'},
            {pointName:'IP rating optimization'},
            {pointName:'Material selection'},
            {pointName:'DFM/DFA implementation'},
            {pointName:'Assembly mechanism design'},
            {pointName:'Cost optimization strategies'},
        ]
    },
    {cardTag:'Embedded Software Design', cardTitle:'Thermal Management', cardImg:serviceTwo,cardImgMob:mobTwo,
        cardList:[
          {pointName:'Thermal analysis and simulation'},
          {pointName:'Passive cooling solutions'},
          {pointName:'Active cooling design'},
          {pointName:'Airflow optimization'},
          {pointName:'Heat sink design'},
          {pointName:'Thermal interface specification'},
      ]
    },
    {cardTag:'Embedded Software Design', cardTitle:'Industrial Design', cardImg:serviceThree,cardImgMob:mobThree,
        cardList:[
          {pointName:'User-centered design approach'},
          {pointName:'Ergonomic considerations'},
          {pointName:'Aesthetic development'},
          {pointName:'Brand alignment'},
          {pointName:'Interface integration'},
          {pointName:'Material finish specification'},
      ]
    },
    {cardTag:'Embedded Software Design', cardTitle:'Manufacturing Support', cardImg:serviceFour,cardImgMob:mobFour,
        cardList:[
          {pointName:'Injection molding design'},
          {pointName:'Sheet metal design'},
          {pointName:'Manufacturing process selection'},
          {pointName:'Tolerance analysis'},
          {pointName:'Assembly process planning'},
          {pointName:'Cost reduction strategies'},
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
            Our mechanical and industrial design service provides comprehensive solutions for electronic product enclosures, thermal management, and structural integration. We specialize in creating designs that balance functional requirements, manufacturability, thermal performance, and aesthetic appeal while ensuring seamless integration with electronic systems.
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