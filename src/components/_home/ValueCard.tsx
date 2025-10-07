'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface valueData {
  valueIcon: string | StaticImageData
  cardTitle: string
  cardParagraph: string
}

interface ValueCardProps {
  valueData: valueData[]
}

const ValueCard: React.FC<ValueCardProps> = ({ valueData }) => {
  return (
    <>
      {valueData.map((data, index) => (
        <div key={index} className='flex justify-center flex-col  '>
          <div className='2xl:w-[64px] xl:w-[48px] lg:w-[43px] w-[64px] 2xl:h-[64px] xl:h-[48px] lg:h-[43px] h-[64px] mx-auto'>
            <Image src={data.valueIcon} alt='' />
          </div>
          <div className='2xl:pt-[13px] xl:pt-[10px] lg:pt-[8.2px] pt-[12px] text-center'>
            <h4 className='text-white font-semibold 2xl:text-[22px] xl:text-[13.5px] lg:text-[12px] text-[14px]'>
              {data.cardTitle}
            </h4>
            <h4 className='text-white font-normal 2xl:text-[22px] xl:text-[13.5px] lg:text-[12px] text-[14px]'>
              {data.cardParagraph}
            </h4>
          </div>
        </div>
      ))}
    </>
  )
}

export default ValueCard
