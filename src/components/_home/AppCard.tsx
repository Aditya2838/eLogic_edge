import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface appCardData {
  appImg: string | StaticImageData;
  // appTag: string;
  cardTitle: string;
  appLink: string;
  linkText: string;
}

interface AppCardProps {
  appCardData: appCardData[];
}

const AppCard: React.FC<AppCardProps> = ({ appCardData }) => {
  return (
    <>
      {appCardData.map((data, index) => (
        <Link href={data.appLink}
          key={index}
          className="group transition-all duration-500 border border-transparent min-[1200px]:hover:border-[rgba(255,255,255,0.15)] min-[1200px]:hover:shadow-[0_0_15px_rgba(255,255,255,0.35)] 2xl:rounded-[16px] xl:rounded-[12px] lg:px-[48px]rounded-[10px] rounded-[14px] overflow-hidden bg-[rgba(255,255,255,0.14)]"
        >
          <div className="overflow-hidden">
            
            <Image
              className="  transition-all duration-500 rounded-2xl group-hover:scale-[1.35]"
              src={data.appImg}
              height={260}
              width={540}
              alt=""
            />
          </div>
          <div className="2xl:p-[27px] xl:p-[20px] lg:p-[8px] p-[24px]">
            <div className="flex justify-start">
              {/* <span className="px-[10px] py-[6px] bg-[rgba(255,255,255,0.15)] text-white rounded-[50px] flex 2xl:text-[10px] xl:text-[7px] lg:text-[6.65px] text-[8.8px]">
                {data.appTag}
              </span> */}
            </div>
            <h4 className="text-white font-semibold 2xl:text-[24px] xl:text-[18px] md:text-base text-[18px] 2xl:py-[16px] xl:py-[12px] lg:py-[11px] py-[14px] 2xl:leading-[1.5]">
              {data.cardTitle}
            </h4>
            <span
              className="flex items-center text-[#4272FF] 2xl:text-base xl:text-[12px] lg:text-[11px] text-[15px] font-bold 2xl:py-[10px] xl:py-[7.5px] lg:py-[6.6px] py-[8px]"
            >
              <span className="underline">{data.linkText}</span>{" "}
              <IoIosArrowForward />
            </span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default AppCard;
