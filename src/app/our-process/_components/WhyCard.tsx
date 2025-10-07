'use client'
import React from "react";


interface CardProps {
  title: string;
  description: string;
  cardTag: string;
}

interface WhyChooseUsProps {
  cardData: CardProps[];
}

const WhyChooseCard: React.FC <WhyChooseUsProps> = ({cardData}) => {
  return (
    <section>
        <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
            <div className="grid md:grid-cols-4 grid-cols-1 2xl:gap-[40px] xl:gap-[30px] md:gap-[26px] gap-[30px]">
                {cardData.map((data, index) => (
                    <div key={index} className="from-[#E7F1FF] to-[#ffffff] bg-gradient-to-b 2xl:p-[40px] xl:p-[30px] md:p-[26px] p-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px]">
                    <h3 className="2xl:text-base xl:text-[12px] md:text-[10.67px] text-[12px] text-[#3284FF] font-semibold">{data.cardTag}</h3>
                    <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] text-[#222325] 2xl:mt-[20px] mt-[15px] 2xl:mb-[30px] xl:mb-[25px] md:mb-[22px] mb-[25px]">{data.title}</h2>
                    <p className="2xl:text-base xl:text-[12px] md:text-[10.67px] text-[12px] text-[#4B5563] leading-loose">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default WhyChooseCard;
