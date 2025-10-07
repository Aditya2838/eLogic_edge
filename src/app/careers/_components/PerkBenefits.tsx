import Image from 'next/image'
import React from 'react'

// images
import firstIcon from '@/src/assets/images/flexibility-agility.svg'
import secondIcon from '@/src/assets/images/passion-winning.svg'
import thirdIcon from '@/src/assets/images/attractive-comp.svg'
import fourthIcon from '@/src/assets/images/one-team.svg'
import fifthIcon from '@/src/assets/images/growth-dev.svg'
import Link from 'next/link'

function PerkBenefits() {
  return (
    <>
        <section>
            <div className='bg-[#111B40] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                <div className='flex justify-center text-white'>
                    <h2 className='capitalize 2xl:text-[46.88px] xl:text-[35.16px] md:text-[31.25px] text-[24px] font-bold'>perks and Benefits</h2>
                </div>
                <div className='grid items-start md:grid-cols-5 grid-cols-2 2xl:py-[80px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:gap-x-[32px] xl:gap-x-[24px] md:gap-x-[15px] gap-x-[20px] md:gap-y-0 gap-y-[50px]'>
                    <div className='flex justify-center items-center w-full flex-col 2xl:gap-4 md:gap-3.5 gap-4 text-center'>
                        <Image className='2xl:w-[56px] xl:w-[42px] w-[37px]' src={firstIcon} alt='' />
                        <h6 className='2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] text-white font-semibold'>Flexibility & Agility</h6>
                    </div>
                    <div className='flex justify-center items-center w-full flex-col 2xl:gap-4 md:gap-3.5 gap-4 text-center'>
                        <Image className='2xl:w-[56px] xl:w-[42px] w-[37px]' src={secondIcon} alt='' />
                        <h6 className='2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] text-white font-semibold'>Passion for Winning</h6>
                    </div>
                    <div className='flex justify-center items-center max-[767px]:col-span-2 w-full flex-col 2xl:gap-4 md:gap-3.5 gap-4 text-center'>
                        <Image className='2xl:w-[56px] xl:w-[42px] w-[37px]' src={thirdIcon} alt='' />
                        <h6 className='2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] text-white font-semibold'>Attractive Compensation</h6>
                    </div>
                    <div className='flex justify-center items-center w-full flex-col 2xl:gap-4 md:gap-3.5 gap-4 text-center'>
                        <Image className='2xl:w-[56px] xl:w-[42px] w-[37px]' src={fourthIcon} alt='' />
                        <h6 className='2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] text-white font-semibold'>One Team</h6>
                    </div>
                    <div className='flex justify-center items-center w-full flex-col 2xl:gap-4 md:gap-3.5 gap-4 text-center'>
                        <Image className='2xl:w-[56px] xl:w-[42px] w-[37px]' src={fifthIcon} alt='' />
                        <h6 className='2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px] text-white font-semibold'>Growth and Development</h6>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[278.44px] xl:max-w-[228.44px] md:max-w-[188.44px] max-w-[150px] 2xl:h-[60px] xl:h-[54px] md:h-[48px] h-[44.29px] flex justify-center items-center py-[2px] 2xl:text-[19px] xl:text-[17px] md:text-[15px] text-[14px] md:font-bold font-semibold rounded-[10.67px] capitalize duration-500 hover:bg-white hover:text-black"
                        href="/contact-us">Join Us</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default PerkBenefits