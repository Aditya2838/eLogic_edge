import Link from 'next/link';
import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

interface CardProps {
    title: string;
    description: string;
    cardTag: string;
    tagsData:tagsData[]
    postDuration:string
    btnLink:string
  }
  
  interface tagsData{
    tagBg: string
    textClr: string
    tagName: string
  }

  interface VacanciesProps {
    cardData: CardProps[];
  }

const Vacancies: React.FC <VacanciesProps> = ({cardData}) => {
  return (
    <>
        {cardData.map((data, index) => (
            <div key={index} className="from-[#E7F1FF] to-[#ffffff] bg-gradient-to-r 2xl:p-[40px] xl:p-[30px] md:p-[26px] p-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px]">
            <h3 className="2xl:text-base xl:text-[12px] md:text-[10.67px] text-[12px] text-[#3284FF] font-semibold">{data.cardTag}</h3>
            <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] text-[#222325] mt-[10px] 2xl:mb-[15px] mb-[10px]">{data.title}</h2>
            <div className='flex 2xl:gap-[15.45px] xl:gap-[12px] gap-[10px] 2xl:text-[16.74px] xl:text-[12.56px] text-[11.16px]'>
                {data.tagsData.map((item,subindex)=>(
                    <span key={subindex} className={`px-2.5 py-0.5 rounded-full ${item.tagBg} ${item.textClr}`}>
                        {item.tagName}
                    </span>
                ))}
            </div>
            <p className="2xl:text-base xl:text-[12px] md:text-[10.67px] text-[12px] text-[#4B5563] leading-loose max-w-[425px] 2xl:mt-[30px] xl:mt-[26px] md:mt-[22px] mt-[18px]">{data.description}</p>
            <div className='text-[rgba(34,35,37,0.5)] flex items-center gap-1.5 2xl:py-[25px] xl:py-[20px] py-[15px]'>
                <IoTimeOutline className='2xl:text-[18px] xl:text-[15px] text-[13px]' /> <span className='2xl:text-[13px] xl:text-[9.75px] text-[8.67px]'>{data.postDuration}</span>
            </div>
            <div className='flex'>
                <Link href={data.btnLink} className='2xl:rounded-[8px] rounded-[6px] flex items-center text-white gap-2 bg-[#3464FC] 2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] 2xl:px-[21.25px] xl:px-[18px] md:px-[16px] px-[18px] 2xl:py-[10.5px] xl:py-[7.5px] md:py-[6.75px] py-[7px] transition-all duration-500 hover:bg-black'>Apply Now <IoArrowForwardOutline /></Link>
            </div>
            </div>
        ))}
    </>
  )
}

export default Vacancies