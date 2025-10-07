import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface costControlCardData {
    icon: string | StaticImageData
    title: string
    description: string
}

interface CostControlCardProps{
    costControlCardData:costControlCardData[]
}

const CostControlCard: React.FC <CostControlCardProps> = ({costControlCardData})  =>{
  return (
    <>
        {costControlCardData.map((data, index) => (
          <div key={index} className="">
            <div className="flex-shrink-0">
                <Image src={data.icon} alt="" className='2xl:w-[40px] xl:w-[30px] md:w-[26.67px] w-[30px]' />
            </div>
            {/* Content */}
            <div>
              <h3 className="font-semibold text-white 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] 2xl:pt-[15px] 2xl:pb-[10px] md:pt-[11px] pt-[13px] pb-[7.5px]">
                {data.title}
              </h3>
              <p className="2xl:text-base xl:text-[12px] md:text-[10.67px] text-[14px]] text-white opacity-80">{data.description}</p>
            </div>
          </div>
        ))}
    </>
  )
}

export default CostControlCard