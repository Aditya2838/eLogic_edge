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
    {cardTag:'Embedded Software Design', cardTitle:'Edge Computing Solutions', cardImg:serviceOne,cardImgMob:mobOne,
        cardList:[
            {pointName:'Local data processing'},
            {pointName:'Edge analytics implementation'},
            {pointName:'Machine learning at the edge'},
            {pointName:'Real-time processing systems'},
            {pointName:'Resource optimization'},
            {pointName:'Local decision making'},
        ]
    },
    {cardTag:'Embedded Software Design', cardTitle:'Protocol Implementation', cardImg:serviceTwo,cardImgMob:mobTwo,
        cardList:[
            {pointName:'Standard IoT protocols (MQTT, CoAP)'},
            {pointName:'Industrial protocols integration'},
            {pointName:'Custom protocol development'},
            {pointName:'Protocol conversion systems'},
            {pointName:'Gateway implementations'},
            {pointName:'Security protocol integration'},
        ]
    },
    {cardTag:'Embedded Software Design', cardTitle:'Data Pipeline Development', cardImg:serviceThree,cardImgMob:mobThree,
        cardList:[
            {pointName:'Data acquisition systems'},
            {pointName:'Processing pipeline design'},
            {pointName:'Storage optimization'},
            {pointName:'Real-time analytics'},
            {pointName:'Data visualization'},
            {pointName:'Reporting systems'},
        ]
    },
    {cardTag:'Embedded Software Design', cardTitle:'Cloud Integration', cardImg:serviceFour,cardImgMob:mobFour,
        cardList:[
            {pointName:'Cloud platform integration'},
            {pointName:'Scalability implementation'},
            {pointName:'Load balancing systems'},
            {pointName:'Database optimization'},
            {pointName:'API development'},
            {pointName:'Service orchestration'},
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
            Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.
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