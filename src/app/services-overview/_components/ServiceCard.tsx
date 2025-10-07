'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardListPoint {
  listIcon: string | StaticImageData;
  pointText: React.ReactNode;
  dataAlign: string;
}

interface ServiceCardData {
  cardImg: string | StaticImageData;
  cardMobImg: string | StaticImageData;
  cardTitle: React.ReactNode;
  cardLink: string;
  linkText: string;
  nextArrow: string | StaticImageData;
  cardListPoint: CardListPoint[];
}

interface ServiceCardProps {
  serviceCardData: ServiceCardData[];
}

const ServiceCard: React.FC <ServiceCardProps> = ({serviceCardData}) => {
  return (
    <>
        {serviceCardData.map((data,index)=>(
            <Link href={data.cardLink} className='relative text-white' key={index}>
                <div className='flex justify-between flex-col absolute left-0 top-0 bottom-0 2xl:p-[40px] xl:p-[30px] md:p-[26.67px] p-[22.14px]'>
                    <div className=''>
                        <div className='2xl:text-[38px] xl:text-[28.5px] lg:text-[25.33px] md:text-[22px] text-[21.04px] font-bold'>
                            {data.cardTitle}
                        </div>
                        <div className='2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]'>
                            <ul className='w-full grid grid-cols-2 2xl:gap-y-5 xl:gap-y-3 lg:gap-y-2.5 gap-y-2 gap-x-7'>
                                {data.cardListPoint.map((item,subindex)=>(
                                    <li className={`flex 2xl:gap-x-[21px] xl:gap-x-[15.84px] md:gap-x-[14.08px] gap-x-[11.69px] ${item.dataAlign}`} key={subindex}>
                                        <div className='2xl:w-[31.68px] xl:w-[23.76px] md:w-[21.12px] w-[17.42px]'>
                                            <Image src={item.listIcon} alt='' />
                                        </div>
                                        <div className='2xl:w-[calc(100%_-_31.68px)] xl:w-[calc(100%_-_23.76px)] md:w-[calc(100%_-_21.12px)] w-[calc(100%_-_17.42px)]'>
                                            <div className='2xl:text-[12.67px] md:text-[11.26px] text-[9.35px]'>
                                                {item.pointText}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='text-white'>
                        <span className='flex items-center gap-2 font-bold 2xl:text-[18.59px] xl:text-[13.95px] md:text-[12.4px] text-[12.09px]'>{data.linkText} <span className='flex 2xl:w-[14.97px] xl:w-[11.23px] md:w-[9.98px] w-[8.29px]'><Image src={data.nextArrow} alt='' /></span></span>
                    </div>
                </div>
                <div className='2xl:rounded-[12px] xl:rounded-[9px] md:rounded-[8px] rounded-[6.65px] overflow-hidden'>
                    <Image className='w-full lg:h-[600px] xl:h-[700px] md:flex hidden' src={data.cardImg} alt='' />
                    <Image className='w-full md:hidden flex' src={data.cardMobImg} alt='' />
                </div>
            </Link>
        ))}
    </>
  )
}

export default ServiceCard