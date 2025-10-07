import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import AboutCard from './AboutCard'

// images
import GlobeIcon from '@/src/assets/images/wordwide-presence.svg'
import CustomIcon from '@/src/assets/images/custom-products.svg'
import DivrsIcon from '@/src/assets/images/diverse-clients.svg'
import ExperncIcon from '@/src/assets/images/years-experience.svg'

function WhoWeAre() {
    const aboutCardData = [
        {cardIcon:GlobeIcon,cardTitle:'Worldwide Presence',cardNumber:'44'},
        {cardIcon:CustomIcon,cardTitle:'Custom products supplied',cardNumber:'1000+'},
        {cardIcon:DivrsIcon,cardTitle:'Diverse Clients',cardNumber:'12'},
        {cardIcon:ExperncIcon,cardTitle:'Years of Experience',cardNumber:'100+'},
    ]
  return (
    <>
      <section>
        <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
          <div className="flex justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
            <div className="text-black">
              <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold capitalize">
                Who we are
              </h2>
            </div>
            <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
              We Are A Team Of Engineers, Designers And Solutions Architects Who
              Aim To Tackle Challenges And Develop Solutions That Don&apos;t
              Exist Yet. We Provide Design, Engineering, Development, Testing
              And Validation Services To Innovators In The Consumer Robotics,
              Electronics, Iot And Automation Spaces.
              <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
                <Link
                  className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[186px] xl:max-w-[150px] md:max-w-[135.44px] max-w-[145px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
                  href="/"
                >
                  Learn More <MdArrowOutward className="ms-2.5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] grid lg:grid-cols-4 sm:grid-cols-2 2xl:gap-[25.3px] xl:gap-[20px] sm:gap-[18px] gap-[15px]">
            <AboutCard aboutCardData={aboutCardData} />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre