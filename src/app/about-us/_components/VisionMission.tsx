import React from 'react'

function VisionMission() {
  return (
    <>
        <div className='2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]'>
            <div className='grid md:grid-cols-2 2xl:gap-[100px] xl:gap-[75px] lg:xl:gap-[66px] md:gap-[45px] gap-[35px] max-[1279px]:[&_br]:hidden'>
                <div className='from-[#E7F1FF] to-[#ffffff] md:bg-gradient-to-r bg-gradient-to-b 2xl:p-[40px] xl:p-[30px] lg:p-[25px] p-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px]'>
                    <span className='text-[#3284FF] 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] font-semibold'>who we are</span>
                    <h3 className='mt-1.5 font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] text-[#222325]'>Our Mission</h3>
                    <div className='font-medium text-[#4B5563] 2xl:pt-[33px] xl:pt-[25px] md:pt-[20px] pt-[15px]'>
                        <p>We transform complex embedded systems challenges <br/>
                        into elegant, market-ready solutions.</p>
                    </div>
                </div>
                <div className='from-[#E7F1FF] to-[#ffffff] md:bg-gradient-to-r bg-gradient-to-b 2xl:p-[40px] xl:p-[30px] lg:p-[25px] p-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px]'>
                    <span className='text-[#3284FF] 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] font-semibold'>who we are</span>
                    <h3 className='mt-1.5 font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] text-[#222325]'>Our Vision</h3>
                    <div className='font-medium text-[#4B5563] 2xl:pt-[33px] xl:pt-[25px] md:pt-[20px] pt-[15px]'>
                        <p>To be the catalyst that turns revolutionary ideas into products <br/>
                        that change how the world works.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VisionMission