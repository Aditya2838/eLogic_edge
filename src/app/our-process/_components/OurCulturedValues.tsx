import Image from 'next/image'
import React from 'react'

// images
import valueCulturedImg from '@/src/assets/images/cultured-value.jpg'
import CulturedPoints from './CulturedPoints'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

function OurCulturedValues () {
  const listData = [
    {
      leftTitle: 'Growth mindset',
      rightDes:
        'Attitude and willingness to learn are greater assets than aptitude and experience'
    },
    {
      leftTitle: 'CollaBoration',
      rightDes:
        'We unite diverse engineering disciplines and approaches under one roof'
    },
    {
      leftTitle: 'First-principles approach',
      rightDes:
        'We believe in questioning assumptions and understanding root problems before crafting solutions'
    },
    {
      leftTitle: 'Legacy of Learning',
      rightDes:
        'We build upon proven engineering wisdom while advancing the frontiers of innovation'
    },
    {
      leftTitle: 'Partnership Mindset',
      rightDes:
        'We go beyond service provision to become trusted advisors, sharing our experience and insights'
    }
  ]
  return (
    <>
      <section>
        <div className='2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:pb-[100px] xl:pb-[75px] lg:pb-[66px] md:pb-[45px] pb-[50px]'>
          <div className='bg-[#051731] 2xl:p-[50px] xl:p-[40px] lg:p-[30px] p-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px] flex justify-between md:flex-nowrap flex-wrap md:gap-y-0 gap-y-8'>
            <div className='2xl:w-[calc(100%_-_634px)] xl:w-[calc(100%_-_457px)] lg:w-[calc(100%_-_350px)] md:w-[calc(100%_-_328.5px)] w-full 2xl:pe-[72px] xl:pe-[50px] lg:pe-[40px] md:pe-[20px]'>
              <h4 className='text-white font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px]'>
                Our Cultured Values
              </h4>
              <div className='2xl:mt-[42px] xl:mt-[32px] md:mt-[10px] mt-[18px]'>
                <CulturedPoints listData={listData} />
              </div>
              <div className='2xl:pt-[60px] xl:pt-[40px] pt-[30px]'>
                <Link
                  className='bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[185px] xl:max-w-[139px] md:max-w-[123.44px] max-w-[140px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black'
                  href='/contact-us'
                >
                  contact us <MdArrowOutward className='ms-2.5' />
                </Link>
              </div>
            </div>
            <div className='2xl:w-[634px] xl:w-[457px] lg:w-[350px] md:w-[328.5px] w-full 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] overflow-hidden'>
              <Image src={valueCulturedImg} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCulturedValues
