// components/WhatYouGiveUs.tsx
import React from "react";
interface ListOfPoints {
    pointText: string;
  }
  
  interface ListOfData {
    cardTitle: string;
    listOfPoints: ListOfPoints[];
  }
  
  interface WhatYouGiveUsProps {
    listofData: ListOfData[];
  }

const WhatYouGiveUs:React.FC <WhatYouGiveUsProps> = ({listofData}) => {
  return (
    <section>
        <div className="2xl:pb-[100px] xl:pb-[75px] md:pb-[25px] pb-[50px]">
            <div className="2xl:px-[60px] xl:px-[45px] md:px-[40px] max-[991px]:!px-[18px] px-[20px] 2xl:py-[40px] xl:py-[30px] md:py-[26px] py-[20px] mx-auto from-[#E7F1FF] to-[#ffffff] bg-gradient-to-r 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px] w-full min-[1536px]:max-w-[1366px] min-[1280px]:max-w-[1024px] min-[992px]:max-w-[910px] flex flex-col relative justify-between max-[991px]:max-w-[720px] max-[767px]:max-w-[calc(100%_-_40px)] max-[991px]:flex-wrap after:2xl:bg-[url('../images/top-left-line-xl.svg')] after:xl:bg-[url('../images/top-left-line-lg.svg')] after:md:bg-[url('../images/top-left-line-md.svg')] max-[991px]:after:!bg-[url('../images/top-left-line-sm.svg')] after:max-[767px]:hidden after:2xl:-left-[60px] after:xl:-left-[45px] after:md:-left-[37px] max-[991px]:after:!-left-[17px] after:2xl:top-[84px] after:xl:top-[65px] after:md:top-[58px] after:2xl:h-[696px] after:xl:h-[523px] after:md:h-[464px] after:2xl:w-[150px] after:xl:w-[113px] after:md:w-[100px] max-[991px]:after:!w-[80px] max-[991px]:after:!h-[495px] after:absolute after:bg-no-repeat">
                <div className="max-[991px]:w-full">
                    <h3 className="text-[#3284FF] font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px]">Design and Development</h3>
                    <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] text-[#222325] text-nowrap">What you give us</h2>
                </div>

                <div className="">
                    <div className="2xl:mt-[40px] xl:mt-[15px] md:mt-[26px] mt-[30px] flex items-start 2xl:gap-[61px] xl:gap-[43px] md:gap-[30px] max-[991px]:!gap-[12px] gap-[30px] max-[767px]:flex-wrap">
                        {listofData.map((data, index) => (
                            <div className="md:w-auto w-[calc(50%_-_25px)] max-[575px]:w-full" key={index}>
                                <h6 className="font-semibold 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[13.5px] text-[#4B5563] block">{data.cardTitle}</h6>
                                <ul className="list-disc md:ps-[17px] ps-[28px] 2xl:pt-2 pt-1">
                                    {data.listOfPoints.map((item, subindex) => (
                                        <li className="2xl:leading-normal xl:leading-tight" key={subindex}>
                                            <span className="text-[#4B5563] 2xl:text-[13px] xl:text-[9.75px] md:text-[8.67px] text-[9.75px]">{item.pointText}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhatYouGiveUs;
