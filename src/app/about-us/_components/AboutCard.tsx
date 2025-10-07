import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface aboutCardData{
    cardIcon: string | StaticImageData
    cardTitle: string
    cardNumber: string
}

interface AboutCardProps{
    aboutCardData:aboutCardData[]
}

const AboutCard: React.FC <AboutCardProps> = ({aboutCardData}) =>{
  return (
    <>
        {aboutCardData.map((data,index)=>(
            <div key={index} className='bg-[#EBF2FF] 2xl:rounded-[22.2px] xl:rounded-[16px] lg:rounded-[14px] rounded-[12px] 2xl:p-[29px] xl:p-[25px] lg:p-[22px] p-[15px] flex flex-col gap-4'>
                <div className='2xl:w-[72px] xl:w-[65px] lg:w-[55px] md:w-[50px] w-[48px]'>
                    <Image src={data.cardIcon} alt='' />
                </div>
                <span className='text-[#797979] 2xl:text-[22.2px] xl:text-[18px] md:text-[16px] text-[15px] xl:h-auto lg:h-[57px]'>
                    {data.cardTitle}
                </span>
                <h3 className='2xl:text-[44.4px] xl:text-[36px] lg:text-[34px] md:text-[30px] text-[25px] font-semibold text-[#060606]'>
                    {data.cardNumber}
                </h3>
            </div>
        ))}
    </>
  )
}

export default AboutCard