import React from 'react'
import Vacancies from './Vacancies'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

function LatestVacancies() {
    const cardData = [
        {
            cardTag: 'Engineering', title: 'Senior FinOps Engineer', description: 'We are looking for figma designers who can help desiging the entire mobile application ...', postDuration: 'Posted 12 days ago', btnLink: '',
            tagsData: [
                { tagBg: 'bg-[#F1E3FF]', textClr: 'text-[#48068A]', tagName: 'Entry Level' },
                { tagBg: 'bg-[#E3FFF0]', textClr: 'text-[#007F19]', tagName: 'Full-Time' },
                { tagBg: 'bg-[#FFEDE3]', textClr: 'text-[#7F3600]', tagName: 'Remote' },
            ]
        },
        {
            cardTag: 'Engineering', title: 'Senior FinOps Engineer', description: 'We are looking for figma designers who can help desiging the entire mobile application ...', postDuration: 'Posted 12 days ago', btnLink: '',
            tagsData: [
                { tagBg: 'bg-[#F1E3FF]', textClr: 'text-[#48068A]', tagName: 'Entry Level' },
                { tagBg: 'bg-[#E3FFF0]', textClr: 'text-[#007F19]', tagName: 'Full-Time' },
                { tagBg: 'bg-[#FFEDE3]', textClr: 'text-[#7F3600]', tagName: 'Remote' },
            ]
        },
        {
            cardTag: 'Engineering', title: 'Senior FinOps Engineer', description: 'We are looking for figma designers who can help desiging the entire mobile application ...', postDuration: 'Posted 12 days ago', btnLink: '',
            tagsData: [
                { tagBg: 'bg-[#F1E3FF]', textClr: 'text-[#48068A]', tagName: 'Entry Level' },
                { tagBg: 'bg-[#E3FFF0]', textClr: 'text-[#007F19]', tagName: 'Full-Time' },
                { tagBg: 'bg-[#FFEDE3]', textClr: 'text-[#7F3600]', tagName: 'Remote' },
            ]
        },
        {
            cardTag: 'Engineering', title: 'Senior FinOps Engineer', description: 'We are looking for figma designers who can help desiging the entire mobile application ...', postDuration: 'Posted 12 days ago', btnLink: '',
            tagsData: [
                { tagBg: 'bg-[#F1E3FF]', textClr: 'text-[#48068A]', tagName: 'Entry Level' },
                { tagBg: 'bg-[#E3FFF0]', textClr: 'text-[#007F19]', tagName: 'Full-Time' },
                { tagBg: 'bg-[#FFEDE3]', textClr: 'text-[#7F3600]', tagName: 'Remote' },
            ]
        },
        {
            cardTag: 'Engineering', title: 'Senior FinOps Engineer', description: 'We are looking for figma designers who can help desiging the entire mobile application ...', postDuration: 'Posted 12 days ago', btnLink: '',
            tagsData: [
                { tagBg: 'bg-[#F1E3FF]', textClr: 'text-[#48068A]', tagName: 'Entry Level' },
                { tagBg: 'bg-[#E3FFF0]', textClr: 'text-[#007F19]', tagName: 'Full-Time' },
                { tagBg: 'bg-[#FFEDE3]', textClr: 'text-[#7F3600]', tagName: 'Remote' },
            ]
        },
        {
            cardTag: 'Engineering', title: 'Senior FinOps Engineer', description: 'We are looking for figma designers who can help desiging the entire mobile application ...', postDuration: 'Posted 12 days ago', btnLink: '',
            tagsData: [
                { tagBg: 'bg-[#F1E3FF]', textClr: 'text-[#48068A]', tagName: 'Entry Level' },
                { tagBg: 'bg-[#E3FFF0]', textClr: 'text-[#007F19]', tagName: 'Full-Time' },
                { tagBg: 'bg-[#FFEDE3]', textClr: 'text-[#7F3600]', tagName: 'Remote' },
            ]
        },
    ]
    return (
        <>
            <section>
                <div className="2xl:py-[80px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] bg-[url('../images/vacancies-bg.svg')] bg-no-repeat bg-[center_bottom]">
                    <div className="flex justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
                        <div className="text-black">
                            <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold capitalize">
                                Latest Vacancies
                            </h2>
                        </div>
                        <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
                            Turn complex energy data into clear operational advantages with our comprehensive energy monitoring platform. Get real-time visibility, predictive insights, and automated reporting to optimize your energy usage and reduce operational costs.
                        </div>
                    </div>
                    <div className="2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] grid md:grid-cols-2 2xl:gap-[40px] xl:gap-[30px] md:gap-[26px] gap-[30px]">
                        <Vacancies cardData={cardData} />
                    </div>
                    <div className="md:flex hidden justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
                        <div className="text-black">
                            <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold capitalize pe-[15px]">
                                {"can't Find your Role"}
                            </h2>
                        </div>
                        <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
                            Turn complex energy data into clear operational advantages with our comprehensive energy monitoring platform. Get real-time visibility, predictive insights, and automated reporting to optimize your energy usage and reduce operational costs.
                            <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
                                <Link className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[227px] xl:max-w-[170px] md:max-w-[152px] max-w-[245px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white" href="/contact-us"
                                >
                                    Upload your CV <MdArrowOutward className="ms-2.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestVacancies