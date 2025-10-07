"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface YouCardView {
  cardImg: string | StaticImageData;
  cardIcon: string | StaticImageData;
  cardTitle: React.JSX.Element;
  decListData: DecListData[];
}
interface DecListData {
  listTitle: string;
  orderListData?: orderListData[];
}
interface orderListData {
  subTitle: string;
}
interface YouAreCardProps {
  youCardView: YouCardView[];
}
const YouAreCard: React.FC<YouAreCardProps> = ({ youCardView }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      {youCardView.map((data, index) => (
        <div
          key={index}
          className="bg-[#1C2845] 2xl:p-[35px] xl:p-[30px] md:p-[20px] p-[20px] 2xl:rounded-[25px] xl:rounded-[18.75px] md:rounded-[16.67px] rounded-[16.26px] 2xl:[&>.card-title]:first-of-type:max-w-[401px] xl:[&>.card-title]:first-of-type:max-w-[301px] md:[&>.card-title]:first-of-type:max-w-[267px] text-white group lg:hover:min-w-[62%] md:hover:min-w-[50%] max-[767px]:w-full md:w-[33.333%] transition-all duration-[1.5s] linear"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative overflow-hidden">
            <div className="w-full rounded-[600px] overflow-hidden transition-all duration-500 group-hover:w-full 2xl:max-h-[192px] xl:max-h-[165px] md:max-h-[125px] max-h-[155px]">
              <Image
                className="transition-all duration-500 w-full"
                src={data.cardImg}
                alt=""
              />
            </div>
            <div className="card-title font-semibold 2xl:pt-[61px] 2xl:pb-[40px] xl:pt-[45px] xl:pb-[30px] md:pt-[41px] lg:pb-[26px] pt-[40px] pb-[30px] transition-all group-hover:w-full duration-500">
              <div className="flex items-center 2xl:gap-[20px] xl:gap-[15px] md:gap-[12px] gap-[15px] flex-wrap">
                <div className="">
                  <Image
                    className="2xl:w-[60px] xl:w-[50px] md:w-[42px] w-[45px]"
                    src={data.cardIcon}
                    alt=""
                  />
                </div>
                <h3
                  className={`transition-all duration-300 ${
                    hoveredIndex === index
                      ? "min-[1760px]:text-[27px] 2xl:text-[22px] xl:text-[21px] md:text-[16.67px] text-[18.21px]"
                      : "min-[1760px]:text-[27px] 2xl:text-[22px] xl:text-[21px] md:text-[16.67px] text-[18.21px]"
                  }`}
                >
                  {data.cardTitle}
                </h3>
              </div>
            </div>
            <div className="w-full 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] md:opacity-0 md:h-[0] group-hover:h-full group-hover:opacity-100">
              <ul className="list-decimal 2xl:ps-[22px] ps-[17px] text-white font-semibold 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] flex flex-col gap-2 2xl:h-[170px] xl:h-[140px] md:h-[132px]">
                {data.decListData.map((list, index) => (
                  <li key={index}>
                    {list.listTitle}
                    <ol className="list-disc flex flex-col gap-2 ps-[15px] my-[8px]">
                      {list.orderListData?.map((item, subindex) => (
                        <li className="font-normal" key={subindex}>
                          {item.subTitle}
                        </li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default YouAreCard;
