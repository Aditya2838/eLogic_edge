import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import ApplicationCard from "./ApplicationCard";

// images
import imgOne from "@/src/assets/images/energymntrng.png";
import imgTwo from "@/src/assets/images/cndtlmntrng.png";
import imgThree from "@/src/assets/images/productivity.png";
import imgFour from "@/src/assets/images/custom solutions.png";

function CardApps() {
  const appCardData = [
    {
      cardTitle: (
        <>
          Energy <br />
          Monitoring
        </>
      ),
      cardLink: "/energy-consumption-monitoring",
      linkText: "Learn More",
      cardImg: imgOne,
    },
    {
      cardTitle: (
        <>
          Condition <br />
          Monitoring
        </>
      ),
      cardLink: "/machine-condition-monitoring",
      linkText: "Learn More",
      cardImg: imgTwo,
    },
    {
      cardTitle: (
        <>
          Productivity <br />
          Monitoring
        </>
      ),
      cardLink: "/predictive-machine-intelligence",
      linkText: "Learn More",
      cardImg: imgThree,
    },
    {
      cardTitle: (
        <>
          Custom <br />
          Solutions
        </>
      ),
      cardLink: "/contact-us",
      linkText: "Learn More",
      cardImg: imgFour,
    },
  ];

  return (
    <>
      <section>
        <div className="2xl:py-[80px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
          <div className="flex justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
            <div className="text-black">
              <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold capitalize">
                applications
              </h2>
            </div>
            <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
              We can communicate with a wide range of OEM equipment, PLCs, HMIs
              and sensors with rich protocol integrations and deploy tailor-made
              applications on both edge and cloud
              <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
                <Link
                  className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
                  href="/contact-us"
                >
                  Schedule a demo <MdArrowOutward className="ms-2.5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-[991px]:!grid-cols-1 2xl:pt-[80px] xl:pt-[60px] md:pt-[53px] pt-[40px] 2xl:gap-[36.95px] xl:gap-[27.53px] md:gap-[24.64px] gap-[15.81px]">
            <ApplicationCard appCardData={appCardData} />
          </div>
        </div>
      </section>
    </>
  );
}

export default CardApps;
