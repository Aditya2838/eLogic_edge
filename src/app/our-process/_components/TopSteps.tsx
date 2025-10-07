import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface firstStepData{
    stepNumber: string
    colsreverses: string
    stepIcon: string | StaticImageData
    title: string
    stepDes: string
    titleColor: string
    preColor: string
}
interface TopStepsProps{
    firstStepData:firstStepData[]
}

const TopSteps:React.FC <TopStepsProps> = ({firstStepData})=>{
  return (
    <>
        {firstStepData.map((data,index)=>(
            <div className={`justify-center flex flex-col items-center relative ${data.colsreverses}`} key={index}>
                <span className={`2xl:text-[22px] xl:text-[21px] md:text-[16.67px] text-[18.21px] font-semibold ${data.preColor}`}>{data.stepNumber}</span>
                <div className='2xl:py-3.5 py-2.5'>
                 <Image className='2xl:w-[68px] xl:w-[38px] md:w-[32px] w-[85px]' src={data.stepIcon} alt='' />
                </div>
                <h6 className={`2xl:text-[18px] xl:text-[13.5px] md:text-[12px] font-semibold ${data.titleColor}`}>{data.title}</h6>
                <p className={`2xl:pt-2.5 pt-2 2xl:text-[18px] xl:text-[13.5px] text-[12px] text-center text-transparent ${data.preColor}`}>{data.stepDes}</p>
            </div>
        ))}
    </>
  )
}

export default TopSteps