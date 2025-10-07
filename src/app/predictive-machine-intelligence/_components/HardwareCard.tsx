import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface hardwaredCardData{
    bgCard: string
    titleColor: string
    cardTitle: string
    cardPara: string
    imgWidth: string
    cardImage: string | StaticImageData
}

interface HardwareProps{
    hardwaredCardData:hardwaredCardData[]
}
const HardwareCard: React.FC <HardwareProps> = ({hardwaredCardData}) => {
  return (
    <>
        {hardwaredCardData.map((data,index)=>(
            <div className={`2xl:rounded-[15.44px] xl:rounded-[11.58px] md:rounded-[10.3px] rounded-[6.66px] 2xl:p-[50px] xl:p-[38px] md:p-[33px] p-[22px] ${data.titleColor} ${data.bgCard}`} key={index}>
                <h3 className={`2xl:text-[43.43px] xl:text-[32.58px] md:text-[28.96px] text-[18px] font-semibold`}>{data.cardTitle}</h3>
                <p className='2xl:text-[21.72px] xl:text-[16.29px] md:text-[14.48px] text-[12px] 2xl:mt-[30px] xl:mt-[22px] mt-[20px]'>{data.cardPara}</p>
                <div className='2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[35px] flex justify-center w-full'>
                    <Image className={`${data.imgWidth}`} src={data.cardImage} alt='' />
                </div>
            </div>
        ))}
    </>
  )
}

export default HardwareCard