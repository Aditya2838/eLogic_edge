import React from 'react'
import HardwareCard from './HardwareCard'

// images
import energyMeter from '@/src/assets/images/sensors.png'
import edgeGetway from '@/src/assets/images/edge-connect-pro-getway.png'

function Hardware() {
    const hardwaredCardData = [
        {bgCard:'bg-white',titleColor:'text-black',cardTitle:'Sensors',cardPara:'',cardImage:energyMeter,imgWidth:''},
        {bgCard:'bg-[#051731]',titleColor:'text-white',cardTitle:'Edge Connect Pro Gateway',cardPara:'',cardImage:edgeGetway,imgWidth:''},
    ]
  return ( 
    <>
        <section>
            <div className='bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] md:pb-0 pb-12'>
                <div className="flex justify-center items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
                    <div className="text-black">
                    <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold">Hardware</h2>
                    </div>
                    <div className="text-[#4B5563] hidden font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">Turn complex energy data into clear operational advantages with our comprehensive energy monitoring platform. Get real-time visibility, predictive insights, and automated reporting to optimize your energy usage and reduce operational costs.</div>
                </div>
                <div className='grid md:grid-cols-2 2xl:mt-[60px] xl:mt-[45px] mt-[40px] 2xl:gap-[51.48px] xl:gap-[38.61px] md:gap-[34.32px] gap-[22.21px]'>
                    <HardwareCard hardwaredCardData={hardwaredCardData} />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hardware