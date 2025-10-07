'use client'
import Image  from 'next/image';
import React from 'react';
 import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

// images
import valueCulturedImg from '@/src/assets/images/Image (3).jpeg';
import CulturedPoints from './CulturedPoints';

interface ExampleApplicationsProps {
    someProperty?: string;
  }
interface ListDataItem {
  leftTitle: string;
  rightDes: string;
  cardList: { pointName: string }[];
}

 
  
  const ExampleApplications: React.FC<ExampleApplicationsProps> = ({}) => {
    const listData: ListDataItem[] = [
        {leftTitle:'PCB Assembly Optimization',rightDes:'Attitude and willingness to learn are greater assets than aptitude and experience',
            cardList:[
                {pointName:'SMT line setup optimization'},
                {pointName:'Component placement improvement'},
                {pointName:'Solder process refinement'},
                {pointName:'First-pass yield improvement'},
                {pointName:'Throughput enhancement'},
            ]            
        },
        {leftTitle:'Test System Development',rightDes:'We unite diverse engineering disciplines and approaches under one roof',
            cardList:[
                {pointName:'Automated functional testing'},
                {pointName:'In-circuit test implementation'},
                {pointName:'Flying probe test optimization'},
                {pointName:'Boundary scan integration'},
                {pointName:'End-of-line testing systems'},
            ] 
        },
        {leftTitle:'Quality System Implementation',rightDes:'We go beyond service provision to become trusted advisors, sharing our experience and insights',
            cardList:[
                {pointName:'Inspection system design'},
                {pointName:'Statistical process control'},
                {pointName:'Traceability implementation'},
                {pointName:'Documentation systems'},
                {pointName:'Training program development'},
            ] 
        },
        {leftTitle:'Technologies & Tools',rightDes:'We go beyond service provision to become trusted advisors, sharing our experience and insights',
            cardList:[
                {pointName:'Automated test equipment'},
                {pointName:'Process control software'},
            ] 
        },
    ]
    
  return (
    <>
        <section>
            <div className='2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:pb-[100px] xl:pb-[75px] lg:pb-[66px] md:pb-[45px] pb-[50px]'>
                <div className='bg-[#051731] 2xl:p-[50px] xl:p-[40px] lg:p-[30px] p-[20px] 2xl:rounded-[20px] xl:rounded-[16px] md:rounded-[14px] rounded-[12px] flex justify-between md:flex-nowrap flex-wrap md:gap-y-0 gap-y-8 max-[767px]:flex-col-reverse'>
                    <div className='2xl:w-[calc(100%_-_634px)] xl:w-[calc(100%_-_457px)] lg:w-[calc(100%_-_350px)] md:w-[calc(100%_-_328.5px)] w-full 2xl:pe-[72px] xl:pe-[50px] lg:pe-[40px] md:pe-[20px]'>
                        <h4 className='md:flex hidden text-white font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px]'>Example Applications</h4>
                        <div className=' 2xl:mt-[42px] xl:mt-[32px] md:mt-[10px] mt-[0px] expmpl-apps'>
                            <CulturedPoints listData={listData} />
                        </div>
                        <div className="2xl:pt-[60px] xl:pt-[40px] pt-[30px] md:mb-0 mb-4">
                            <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[185px] xl:max-w-[139px] md:max-w-[123.44px] max-w-[140px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-white hover:text-black"
                            href="/contact-us">contact us <MdArrowOutward className="ms-2.5" /></Link>
                        </div>
                    </div>
                    <div className='relative 2xl:w-[634px] xl:w-[457px] lg:w-[350px] md:w-[328.5px] w-full overflow-hidden'>
                        <div className='md:hidden flex'>
                            <h4 className='text-white font-semibold 2xl:text-[36px] xl:text-[27px] md:text-[24px] text-[22.45px] mt-1.5 mb-3'>Example Applications</h4>
                        </div>
                      
                                <div className='h-full'>
                                    <Image src={valueCulturedImg} className="object-cover h-full w-full 2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px]" alt="" />
                                </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ExampleApplications