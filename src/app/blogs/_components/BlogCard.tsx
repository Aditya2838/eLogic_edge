import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

interface blogCardData {
    cardTitle: string
    cardLink: string
    blogDes: string
    linkText: string
    cardImg: string | StaticImageData
}

interface BlogCardProps {
    blogCardData:blogCardData[]
}
const BlogCard: React.FC <BlogCardProps> = ({blogCardData}) => {
  return (
    <>
        {blogCardData.map((data, index) => (
            <Link href={data.cardLink} key={index} className="2xl:rounded-ss-[27.27px] 2xl:rounded-ee-[27.27px] xl:rounded-ss-[20.45px] xl:rounded-ee-[20.45px] md:rounded-ss-[18.18px] md:rounded-ee-[18.18px] rounded-ss-[11.67px] rounded-ee-[11.67px] 2xl:shadow-[0_0_54.35px_rgba(0,0,0,0.1)] xl:shadow-[0_0_40.75px_rgba(0,0,0,0.1)] md:shadow-[0_0_36.23px_rgba(0,0,0,0.1)] shadow-[0_0_23.25px_rgba(0,0,0,0.1)] bg-white relative overflow-hidden group">
                <div className='flex justify-between gap-x-2 2xl:p-[39px] xl:p-[29px] md:p-[26px] p-[16.74px] absolute left-0 top-0 bottom-0 right-0 z-[1]'>
                    <div className='flex justify-between flex-col leading-tight transition-all duration-500 min-[1200px]:group-hover:text-white text-[#181A2A] font-semibold 2xl:text-[30px] xl:text-[22.5px] md:text-[20px] text-[12.83px] 2xl:py-[26px] xl:py-[19px] md:py-[0px] sm:py-[23px] 2xl:ps-[0px] xl:ps-[19px] md:ps-[17px] ps-[12px] 2xl:max-w-[420px] md:max-w-[292px] max-w-[255px] max-[500px]:max-w-[190px] max-[400px]:max-w-[160px] 2xl:w-[calc(100%_-_260px)] xl:w-[calc(100%_-_224px)] lg:w-[calc(100%_-_199px)] md:w-[245px] max-[991px]:!w-full lg:break-all max:[500px]:!pt-[0px]'>
                        <div>
                            {/* <span className='text-[#4B6BFB] min-[1200px]:group-hover:text-white transition-all duration-500 bg-[rgba(75,107,251,0.05)] rounded-[7.68px] font-medium 2xl:text-[17.93px] xl:text-[15.93px] md:text-[14px] text-[13.5px] flext xl:px-[12.81px] lg:px-[10px] px-[8px] xl:py-[5.12px] py-[4.5px] capitalize'>{data.blogTag}</span> */}
                            <div className='2xl:pt-[16px] xl:pt-[14px] md:pt-[12px] pt-[10px] 2xl:pb-[20px] xl:pb-[16px] md:pb-[14px] pb-[12px]'>{data.cardTitle}</div>
                            {/* <div className='text-[#97989F] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[10.33px] sm:mb-0 mb-3 min-[1200px]:group-hover:text-white duration-500 transition-all'>{data.cardDate}</div> */}
                            <div className='mt-3 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px]'>{data.blogDes}</div>
                        </div>
                        <div>
                            <span className='flex items-center capitalize lg:font-semibold font-bold 2xl:text-[20.21px] xl:text-[15.16px] md:text-[13.47px] text-[8.65px]'>{data.linkText} <IoMdArrowForward className='ms-2' /></span>
                        </div>
                    </div>
                </div>
                <div className='w-full overflow-hidden transition-all duration-500 relative after:absolute after:left-0 after:w-full after:top-0 after:h-[calc(100%_+_2px)] after:bg-[url("../images/blog-mask.png")] after:bg-no-repeat after:transition-all after:duration-[1.12s] after:bg-100 after:bg-[right_center] min-[1200px]:group-hover:after:bg-[calc(100%_+_520px)_center] min-[1200px]:group-hover:after:bg-200'>
                    <Image src={data.cardImg} className='object-cover 2xl:rounded-ss-[27.27px] 2xl:rounded-ee-[27.27px] xl:rounded-ss-[20.45px] xl:rounded-ee-[20.45px] md:rounded-ss-[18.18px] md:rounded-ee-[18.18px] rounded-ss-[11.67px] rounded-ee-[11.67px] relative top-[1px] duration-[1.5s] transition-all min-[1200px]:group-hover:top-[0.5px]' alt='' />
                </div>
            </Link>
        ))}
    </>
  )
}

export default BlogCard
