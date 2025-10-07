import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface serviceCardData {
    cardTag: string
    cardTitle: string
    cardImg:string | StaticImageData
    cardImgMob:string | StaticImageData
    cardList:cardList[]
}

interface cardList {
    pointName: string
}

interface ServiceCardProps{
    serviceCardData:serviceCardData[]
}

const ServiceCard: React.FC <ServiceCardProps> = ({serviceCardData}) => {
  return (
    <>
        {serviceCardData.map((data,index)=>(
            <div className='flex justify-between max-[991px]:flex-wrap 2xl:gap-[40px] 2xl:px-[60px] xl:px-[45px] lg:px-[40px] md:px-[30px] px-[20px] 2xl:py-[40px] xl:py-[30px] md:py-[26px] py-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px] from-[#E7F1FF] to-[#ffffff] md:bg-gradient-to-r bg-gradient-to-b' key={index}>
                <div className='2xl:w-[400px] xl:w-[300px] md:w-[266px] max-[1199px]:!w-[220px] max-[991px]:!w-full'>
                    <span className='2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] text-[#3284FF] font-medium'>{data.cardTag}</span>
                    <h3 className='font-semibold text-[#222325] 2xl:text-[42px] xl:text-[31.5px] lg:text-[28px] md:text-[24px] text-[28px]'>
                        {data.cardTitle}
                    </h3>
                </div>
                <div className='2xl:w-[calc(100%_-_800px)] min-[1750px]:!w-[calc(100%_-_1020px)] xl:w-[calc(100%_-_700px)] lg:w-[calc(100%_-_700px)] max-[1199px]:!w-[calc(100%_-_500px)] max-[991px]:!w-full max-[991px]:my-5'>
                    <ul className='list-disc list-outside text-[#4B5563] 2xl:text-[24px] xl:text-[18px] text-base leading-[2.19] max-[991px]:ps-[20px]'>
                        {data.cardList.map((item,subindex)=>(
                            <li key={subindex}>
                                {item.pointName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='2xl:w-[400px] xl:w-[300px] md:w-[266px] max-[1199px]:!w-[220px] 2xl:rounded-[10px] xl:rounded-[7.5px] rounded-[6.67px] overflow-hidden max-[991px]:!w-full'>
                    <Image  className='md:flex hidden w-full h-full object-cover' src={data.cardImg} alt='' />
                    <Image  className='md:hidden flex w-full h-full object-cover' src={data.cardImgMob} alt='' />
                </div>
            </div>
        ))}
    </>
  )
}

export default ServiceCard