import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface featuresCardData {
    icon: string | StaticImageData
    title: React.ReactNode
    description: string
}

interface AnalysticCardProps{
    featuresCardData:featuresCardData[]
}

const AnalysticCard: React.FC <AnalysticCardProps> = ({featuresCardData})  =>{
  return (
    <>
        {featuresCardData.map((data, index) => (
          <div key={index} className="">
            <div className="flex-shrink-0">
                <Image src={data.icon} alt="" className='2xl:w-[40px] xl:w-[30px] md:w-[26.67px] w-[30px]' />
            </div>
            {/* Content */}
            <div>
              <h3 className="font-semibold text-[#222325] 2xl:text-[22.66px] xl:text-[16.8px] md:text-[15px] 2xl:pt-[15px] 2xl:pb-[10px] md:pt-[11px] pt-[13px] pb-[7.5px]">
                {data.title}
              </h3>
              <p className="2xl:text-[18px] xl:text-[13.5px] text-base text-[#4B5563]">{data.description}</p>
            </div>
          </div>
        ))}
    </>
  )
}

export default AnalysticCard