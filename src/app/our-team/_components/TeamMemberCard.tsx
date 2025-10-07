import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

interface memberData{
    profileImg: string | StaticImageData
    profileName: string
    desination: string
    linkedinLink: string
}
 
interface TeamMemberCardProps{
    memberData:memberData[]
}

const TeamMemberCard: React.FC <TeamMemberCardProps> = ({memberData}) => {
  return (
    <>
        {memberData.map((data,index)=>(
            <div className='2xl:rounded-[25px] xl:rounded-[18.75px] md:rounded-[16.67px] rounded-[16.26px] 2xl:shadow-[0_4px_60px_0_rgba(0,0,0,0.04)] xl:shadow-[0_3px_40px_0_rgba(0,0,0,0.04)] md:shadow-[0_3px_30px_0_rgba(0,0,0,0.04)] shadow-[0_2px_25px_0_rgba(0,0,0,0.04)] bg-white overflow-hidden' key={index}>
                <div className=''>
                    <Image className='w-full' src={data.profileImg} alt='' />
                </div>
                <div className='text-center 2xl:my-[30px] xl:my-[20px] lg:my-[18px] my-[15px]'>
                    <h4 className='2xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] text-black font-semibold'>{data.profileName}</h4>
                    <span className='2xl:text-[20px] xl:text-[18px] md:text-[17px] text-[#A3A3A3] flex w-full justify-center'>{data.desination}</span>
                    <div className='flex justify-center xl:text-[25px] md:text-[21px] text-[19px] mt-3'>
                        <Link href={data.linkedinLink} className='text-black'><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default TeamMemberCard