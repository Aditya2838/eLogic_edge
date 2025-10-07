"use client";
import Image from "next/image";
import { TbHexagonFilled } from "react-icons/tb";

// images
import firstMap from '@/src/assets/images/roadmap-img-2021.jpg'
import dottedLine from '@/src/assets/images/roadmap-line.svg'

const RoadMap = () => {
  const timelineData = [
    {
      year: "2021",
      description: "Incorporated in India & the U.S.",
      image: firstMap,
    },
    {
      year: "2022",
      description:
        "First end-to-end Export projects delivered in industrial controls & instrumentation",
      image: firstMap,
    },
    {
      year: "2023",
      description:
        "First consumer electronics project moved to high-volume export production",
      image: firstMap,
    },
    {
      year: "2024",
      description:
        "In-house IoT gateways developed & deployed in field",
      image: firstMap,
    },
    {
      year: "2024",
      description: "Industrial IoT cloud platform launched",
      image: firstMap,
    },
    {
      year: "Heading here",
      description:
        "5+ clients and their customers' assets  onboarded onto our cloud platform",
      image: firstMap,
    },
  ];

  return (
    <>
        <section>
            <div className="w-full overflow-hidden 2xl:pb-[190px] xl:pb-[75px] lg:pb-[66px] md:pb-[45px] pb-[50px]">
                <div className="flex justify-center">
                    <span className="bg-[rgba(53,99,233,0.2)] 2xl:rounded-[16px] xl:rounded-[13.85px] md:rounded-[12.1px] rounded-[7.48px] text-[#3563E9] font-semibold 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] 2xl:px-[24px] xl:px-[18px] px-[16px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex items-center justify-center">Roadmap</span>
                </div>
                <h2 className="text-center 2xl:mt-[20px] mt-[15px] 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] font-bold text-black">Our Journey</h2>
                <div className="2xl:mt-[60px] xl:mt-[40px] mt-[30px] max-w-[1333px] max-[1535px]:max-w-[1230px] mx-auto relative xl:pt-[135px] [&_.step-card:nth-child(odd)>.step-dot]:-left-[125px] [&_.step-card:nth-child(even)>.step-dot]:-right-[125px] [&_.step-card:nth-child(1)]:mb-[39px] [&_.step-card:nth-child(2)]:mb-[40px] [&_.step-card:nth-child(3)]:mb-[36px] [&_.step-card:nth-child(4)]:mb-[46px] [&_.step-card:nth-child(5)]:mb-[45px] [&_.step-card:nth-child(1)>_.step-line]:after:top-[96px] [&_.step-card:nth-child(3)>_.step-line]:after:top-[105px] [&_.step-card:nth-child(5)>_.step-line]:after:top-[96px] 2xl:[&_.step-card:nth-child(even)>_.step-line]:after:top-[105px] xl:[&_.step-card:nth-child(even)>_.step-line]:after:top-[99px] [&_.step-card:nth-child(odd)>_.step-line]:after:left-[-125px] [&_.step-card:nth-child(even)>_.step-line]:after:right-[-125px]">
                    {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`step-card flex items-center relative z-[1] ${
                        index % 2 === 1 ? "flex-row" : "flex-row-reverse"
                        } `}
                    >
                        <div className="step-line xl:ps-[14px] xl:pt-[14px] xl:pe-[14px] bg-no-repeat bg-[url('../images/step-card-bg.svg')] 2xl:pb-[10px] xl:pb-[25px] relative after:absolute after:w-[300px] after:h-[3px] after:bg-[#3563E9] after:z-[-1]">
                        <div className="xl:w-[422px]">
                            <Image className="rounded-[13px_13px_0_0]" src={item.image} alt={item.year} />
                            <div className="2xl:p-[24px] xl:p-[20px]">
                                <h3 className="text-black font-bold 2xl:text-[24px] xl:text-[18px] text-base">{item.year}</h3>
                                <p className="text-black text-[15px] mt-[15px]">{item.description}</p>
                            </div>
                        </div>
                        </div>
                        <div className="relative step-dot">
                        <div className="2xl:w-[62px] xl:w-[55px] 2xl:h-[62px] xl:h-[55px] bg-[rgba(53,99,233,0.2)] rounded-full absolute top-1/2 transform -translate-y-[70px] -translate-x-1/2 flex justify-center items-center">
                            <div className="bg-[#3563E9] 2xl:w-[24px] xl:w-[20px] 2xl:h-[24px] xl:h-[20px] rounded-full">

                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    <div className="absolute left-0 right-0 top-0 mx-auto flex justify-center -z-[1]">
                    <div className="absolute text-[#3563E9] -top-[17px]">
                    <TbHexagonFilled className="2xl:w-[30px] 2xl:h-[30px] rotate-90" />
                    </div>
                    <Image src={dottedLine} className="max-[1535px]:w-[185px]" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default RoadMap;