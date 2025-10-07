import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import CostControlCard from './CostControlCard'

// images
import palletizer from '@/src/assets/images/palletizer.png'
import iconOne from '@/src/assets/images/increase.svg'

function CostControlAllocation() {
  const costControlCardData = [
    { icon: iconOne, title: 'Predicting with AI', description: 'The utilization of artificial intelligence to predict potential failures in systems and machinery.' },
    { icon: iconOne, title: 'Streamlining Maintenance', description: 'Optimizing the scheduling of maintenance tasks to ensure efficiency and minimize downtime.' },
    { icon: iconOne, title: 'Forecasting Lifespan', description: 'Forecasting the expected lifespan of various components to enhance reliability and planning.' },
    { icon: iconOne, title: 'Planning Maintenance', description: 'Planning maintenance activities based on risk assessment to prioritize critical systems and reduce unexpected failures.' },
  ]
  return (
    <>
      <section>
        <div className='bg-[#051731] 2xl:py-[67px] xl:py-[50.33px] md:py-[44px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
          <div className='flex items-center justify-between lg:flex-nowrap flex-wrap xl:gap-0 md:gap-5'>
            <div className='2xl:w-[calc(100%_-_762.5px)] xl:w-[calc(100%_-_571.87px)] lg:w-[calc(100%_-_508.33px)] w-full min-[1850px]:pe-[79.5px] max-[1535px]:pe-[35px] max-[1199px]:pe-0'>
              <div className='lg:hidden flex mb-[30px]'>
                <h2 className='font-semibold text-[24px] text-white'>Predictive Maintenance</h2>
              </div>
              <Image src={palletizer} alt='' />
            </div>
            <div className='2xl:w-[762.5px] xl:w-[571.87px] lg:w-[508.33px] w-full text-white'>
              <h2 className='font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] lg:flex hidden'>Predictive Maintenance</h2>
              <div className='grid md:grid-cols-2 2xl:pt-[50px] xl:pt-[40px] pt-[33.33px] 2xl:gap-[40px] xl:gap-[30px] gap-[26.67px]'>
                <CostControlCard costControlCardData={costControlCardData} />
              </div>
              <div className="2xl:pt-[60px] xl:pt-[40px] pt-[30px]">
                <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
                  href="/contact-us">Schedule a demo <MdArrowOutward className="ms-2.5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CostControlAllocation