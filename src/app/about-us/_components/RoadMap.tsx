"use client";
import Image from "next/image";
import { TbHexagonFilled } from "react-icons/tb";

// images
import firstMap from '@/src/assets/images/roadmap-img-2021.jpg'
import dottedLine from '@/src/assets/images/roadmap-line.svg'
import dottedLineLg from '@/src/assets/images/roadmap-line-lg.svg'
import dottedLineMd from '@/src/assets/images/roadmap-line-md.svg'
import dottedLineMb from '@/src/assets/images/roadmap-line-mb.svg'

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
      year: "2025",
      description:
        "5+ clients and their customers' assets  onboarded onto our cloud platform",
      image: firstMap,
    },
  ];

  return (
    <>
        <section>
            <div className="w-full overflow-hidden 2xl:pb-[190px] xl:pb-[75px] md:pb-[70px] pb-[50px]">
                <div className="flex justify-center">
                    <span className="bg-[rgba(53,99,233,0.2)] 2xl:rounded-[16px] xl:rounded-[13.85px] md:rounded-[12.1px] rounded-[7.48px] text-[#3563E9] font-semibold 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] 2xl:px-[24px] xl:px-[18px] px-[16px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex items-center justify-center">Roadmap</span>
                </div>
                <h2 className="text-center 2xl:mt-[20px] mt-[15px] 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] font-bold text-black">Our Journey</h2>
                <div className="2xl:mt-[60px] xl:mt-[40px] mt-[30px] min-[1536px]:max-w-[1333px] min-[1280px]:max-w-[1024px] min-[992px]:max-w-[915px] min-[768px]:max-w-[460px] max-[767px]:w-[455px] max-[490px]:w-[360px] mx-auto relative 2xl:pt-[140px] xl:pt-[130px] md:pt-[90px] max-[991px]:!pt-[212px] 2xl:[&_.step-card:nth-child(odd)>.step-dot]:-left-[125px] xl:[&_.step-card:nth-child(odd)>.step-dot]:-left-[98px] md:[&_.step-card:nth-child(odd)>.step-dot]:-left-[98px] 2xl:[&_.step-card:nth-child(even)>.step-dot]:-right-[125px] xl:[&_.step-card:nth-child(even)>.step-dot]:-right-[98px] md:[&_.step-card:nth-child(even)>.step-dot]:-right-[98px] max-[991px]:[&_.step-card:nth-child(even)>.step-dot]:!right-[19px] max-[767px]:[&_.step-card:nth-child(even)>.step-dot]:!right-[12px] max-[767px]:[&_.step-card:nth-child(odd)>.step-dot]:!left-[13px] max-[991px]:[&_.step-card:nth-child(odd)>.step-dot]:!left-[17px] 2xl:[&_.step-card:nth-child(1)]:mb-[29px] md:[&_.step-card:nth-child(1)]:mb-[15px] xl:[&_.step-card:nth-child(2)]:mb-[20px] [&_.step-card:nth-child(2)]:mb-[12px] [&_.step-card:nth-child(3)]:mb-[11px] 2xl:[&_.step-card:nth-child(4)]:mb-[28px] xl:[&_.step-card:nth-child(4)]:mb-[14px] md:[&_.step-card:nth-child(4)]:mb-[10px] xl:[&_.step-card:nth-child(5)]:mb-[3px] [&_.step-card:nth-child(5)]:mb-[11px] [&_.step-card:nth-child(1)>_.step-line]:after:2xl:top-[96px] [&_.step-card:nth-child(1)>_.step-line]:after:xl:top-[60px] [&_.step-card:nth-child(1)>_.step-line]:after:md:top-[60px] 2xl:[&_.step-card:nth-child(3)>_.step-line]:after:top-[105px] md:[&_.step-card:nth-child(3)>_.step-line]:after:top-[61px] 2xl:[&_.step-card:nth-child(5)>_.step-line]:after:top-[96px] md:[&_.step-card:nth-child(5)>_.step-line]:after:top-[61px] 2xl:[&_.step-card:nth-child(even)>_.step-line]:after:top-[105px] xl:[&_.step-card:nth-child(even)>_.step-line]:after:top-[61px] md:[&_.step-card:nth-child(even)>_.step-line]:after:top-[61px] [&_.step-card:nth-child(odd)>_.step-line]:after:2xl:left-[-125px] [&_.step-card:nth-child(odd)>_.step-line]:after:xl:left-[-105px] [&_.step-card:nth-child(odd)>_.step-line]:after:md:left-[-93px] [&_.step-card:nth-child(even)>_.step-line]:after:2xl:right-[-125px] [&_.step-card:nth-child(even)>_.step-line]:after:xl:right-[-105px] [&_.step-card:nth-child(even)>_.step-line]:after:md:right-[-93px] [&_.step-card:nth-child(1)>.step-dot]:2xl:-top-[28px] [&_.step-card:nth-child(2)>.step-dot]:2xl:-top-[21px] [&_.step-card:nth-child(3)>.step-dot]:2xl:-top-[21px] [&_.step-card:nth-child(4)>.step-dot]:2xl:-top-[21px] [&_.step-card:nth-child(5)>.step-dot]:2xl:-top-[28px] [&_.step-card:nth-child(6)>.step-dot]:2xl:-top-[19px] max-[991px]:grid max-[991px]:gap-y-[94px] max-[490px]:gap-y-[102px] max-[991px]:!pb-[150px] max-[991px]:[&_.step-card:nth-child(1)]:!mb-[0] max-[991px]:[&_.step-card:nth-child(3)]:!mb-[0] max-[767px]:[&_.step-card:nth-child(3)]:!mb-[5px] max-[767px]:[&_.step-card:nth-child(4)]:!mb-[5px] max-[490px]:[&_.step-card:nth-child(4)]:!mb-[0px]">
                    {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`step-card flex items-center relative z-[1] ${
                        index % 2 === 1 ? "flex-row max-[991px]:flex-row-reverse" : "min-[992px]:flex-row-reverse max-[991px]:flex-row"
                        } `}
                    >
                        <div className="step-line 2xl:ps-[14px] xl:ps-[10px] ps-[8px] max-[490px]:!ps-[6px] max-[490px]:!pe-[7px] 2xl:pt-[14px] 2xl:pe-[14px] xl:pe-[10px] pe-[8px] bg-no-repeat min-[992px]:bg-[url('../images/step-card-bg-large.svg')] bg-[url('../images/step-card-bg.svg')] 2xl:pb-[10px] xl:pb-[25px] relative after:absolute after:2xl:w-[300px] after:w-[140px] after:2xl:h-[3px] after:h-[2px] after:bg-[#3563E9] after:z-[-1] max-[991px]:after:hidden">
                        <div className="2xl:w-[422px] xl:w-[316px] w-[281px] max-[490px]:w-[235px]">
                            <Image className="rounded-[13px_13px_0_0]" src={item.image} alt={item.year} />
                            <div className="2xl:p-[24px] xl:p-[20px] p-[15px] 2xl:h-[169px] xl:h-[135px] md:h-[116px] max-[991px]:!h-[93px] max-[991px]:!pt-3 max-[490px]:!pt-1">
                                <h3 className="text-black font-bold 2xl:text-[24px] xl:text-[18px] text-base">{item.year}</h3>
                                <p className="text-black 2xl:text-[15px] xl:text-[11.25px] text-[10px] mt-[15px] max-[991px]:mt-1 max-[490px]:!mt-">{item.description}</p>
                            </div>
                        </div>
                        </div>
                        <div className="relative step-dot">
                        <div className="2xl:w-[62px] xl:w-[46px] w-[41px] 2xl:h-[62px] xl:h-[46px] h-[41px] bg-[rgba(53,99,233,0.2)] rounded-full absolute top-0 transform 2xl:-translate-y-[70px] xl:-translate-y-[92px] md:-translate-y-[62px] max-[991px]:!-translate-y-[118px] max-[767px]:!-translate-y-[122px] -translate-x-1/2 flex justify-center items-center">
                            <div className="bg-[#3563E9] 2xl:w-[24px] xl:w-[18px] w-[16px] 2xl:h-[24px] xl:h-[18px] h-[16px] rounded-full">

                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                    <div className="absolute left-0 right-0 top-0 mx-auto flex justify-center -z-[1]">
                    <div className="absolute text-[#3563E9] -top-[17px]">
                    <TbHexagonFilled className="2xl:w-[30px] 2xl:h-[30px] rotate-90" />
                    </div>
                    <Image src={dottedLine} className="2xl:flex hidden" alt="" />
                    <Image src={dottedLineLg} className="min-[1536px]:hidden max-[1279px]:hidden w-[163.5px]" alt="" />
                    <Image src={dottedLineMd} className="min-[1280px]:hidden max-[991px]:hidden" alt="" />
                    <Image src={dottedLineMb} className="min-[992px]:hidden max-[490px]:w-[168px]" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default RoadMap;