import React from 'react'
import TeamMemberCard from './TeamMemberCard'

// images
import userOne from '@/src/assets/images/prfile-1.jpg'
import userTwo from '@/src/assets/images/prfile-2.jpg'
import userThree from '@/src/assets/images/prfile-3.jpg'
import userFour from '@/src/assets/images/prfile-4.jpg'
import userFive from '@/src/assets/images/prfile-5.jpg'
import userSix from '@/src/assets/images/prfile-6.jpg'
import userSeven from '@/src/assets/images/prfile-7.jpg'
import userEight from '@/src/assets/images/prfile-8.jpg'
import userNine from '@/src/assets/images/prfile-9.jpg'
import userTen from '@/src/assets/images/prfile-10.jpg'
import userEleven from '@/src/assets/images/prfile-11.jpg'
import userTwelve from '@/src/assets/images/prfile-12.jpg'
import userThirteen from '@/src/assets/images/Teamsimages/srikanthimage.jpeg'
import userFourteen from '@/src/assets/images/Teamsimages/pranayimg (1) (4).png'
import userFifteen from '@/src/assets/images/Teamsimages/t.sandeep.png'
import userSixteen from '@/src/assets/images/Teamsimages/manasa.png'
import userSeventeen from '@/src/assets/images/Teamsimages/sandeep.k.jpg'
import userEighteen from '@/src/assets/images/Teamsimages/murali.png'
import usernineteen from '@/src/assets/images/Teamsimages/naveen.png'
import userTwenty from '@/src/assets/images/Teamsimages/aishvarya.png'
import userTwentyOne from '@/src/assets/images/Teamsimages/manogna.png'
import userTwentyTwo from '@/src/assets/images/Teamsimages/adityan.iot.png'
import userTwentythree from '@/src/assets/images/Teamsimages/anurag01.jpg'
import userTwentyFour from '@/src/assets/images/Teamsimages/suman.png'
import userTwentyFive from '@/src/assets/images/Teamsimages/hemanth.png'
import userTwentySix from '@/src/assets/images/Teamsimages/Athulya.jpg'
import userTwentySeven from '@/src/assets/images/Teamsimages/badrinath.png'
import userTwentyEight from '@/src/assets/images/Teamsimages/Pawan_photo.jpeg'
import userTwentyNine from '@/src/assets/images/Teamsimages/Bhavani.jpg'



function TeamMembers() {
    const memberData = [
        { profileImg: userOne, profileName: 'Aditya Arora', desination: 'Chief Executive Officer', linkedinLink: '#' },
        { profileImg: userTwo, profileName: 'Tarun Pakala', desination: 'Chief Technical Officer', linkedinLink: '#' },
        { profileImg: userThree, profileName: 'Rupali Modi', desination: 'Managing Director', linkedinLink: '#' },
        { profileImg: userFour, profileName: 'Rajasekharan N.K.', desination: 'Business Advisor', linkedinLink: '#' },
        { profileImg: userTen, profileName: 'K.Venkata Narayana Singh', desination: 'Embedded Hardware Lead', linkedinLink: '#' },
        { profileImg: userSix, profileName: 'Sandeep Mukke', desination: 'Hardware Lead', linkedinLink: '#' },
        { profileImg: userEight, profileName: 'Deepak Bagdi', desination: 'FullStack Developer', linkedinLink: '#' },
        { profileImg: userSeven, profileName: 'Shiva Srinivas Chaganti', desination: 'Senior UI/UX Designer', linkedinLink: '#' },
        { profileImg: userFourteen, profileName: 'Vanga Pranay Goud', desination: 'Frontend Developer', linkedinLink: '#' },
        { profileImg: userThirteen, profileName: 'Srikanth Saindla', desination: 'Backend Developer', linkedinLink: '#' },
        { profileImg: userEleven, profileName: 'Varsha Kagithala', desination: 'Corporate HR Manager', linkedinLink: '#' },
        { profileImg: userTwelve, profileName: 'Chandra Shekhar Modi', desination: 'PCB Design Engineer', linkedinLink: '#' },
        { profileImg: userSixteen, profileName: 'Manasa Telu', desination: 'PCB Design Engineer', linkedinLink: '#' },
         { profileImg: userFifteen, profileName: 'Sandeep Thamatapu ', desination: 'Procurement & Store Manager', linkedinLink: '#' },
         { profileImg: userNine, profileName: 'Shailendra Singh', desination: 'Bussiness Development Assosiate', linkedinLink: '#' },
        { profileImg: userFive, profileName: 'Palash Balani', desination: 'Business Development Manager', linkedinLink: '#' },
        { profileImg: userSeventeen, profileName: 'Sandeep K', desination: 'Mechnical Designer Engineer', linkedinLink: '#' },
        { profileImg: userEighteen, profileName: 'Kola Murali', desination: 'Embedded Lead', linkedinLink: '#' },
        { profileImg: usernineteen, profileName: 'Naveen Namani', desination: 'Embedded Hardware Engineer', linkedinLink: '#' },
        { profileImg: userTwenty, profileName: 'Aishwarya U', desination: 'Embedded Firmware Engineer', linkedinLink: '#' },
        { profileImg: userTwentyOne, profileName: 'Manogna Vangipuram', desination: 'Embedded Firmware Engineer', linkedinLink: '#' },
        { profileImg: userTwentyTwo, profileName: 'Adityan S', desination: 'IoT Application Enginner', linkedinLink: '#' },
        { profileImg: userTwentythree, profileName: 'Anurag Pandey', desination: 'Embedded Firmware Engineer', linkedinLink: '#' },
        { profileImg: userTwentyFour, profileName: 'Suman', desination: 'Manager IT', linkedinLink: '#' },
        { profileImg: userTwentyFive, profileName: 'Hemanth', desination: 'Accounts Manager', linkedinLink: '#' },
        { profileImg: userTwentySix, profileName: 'Athulya J', desination: 'Jr. Embedded Firmware Enginner', linkedinLink: '#' },
        { profileImg: userTwentySeven, profileName: 'Badrinathan J', desination: 'Jr. Embedded Firmware Enginner', linkedinLink: '#' },
         { profileImg: userTwentyEight, profileName: 'Pawan Durga Kalyan', desination: '		Embedded Firmware Enginner', linkedinLink: '#' },
        { profileImg: userTwentyNine, profileName: 'Thumma Bhavani', desination: 'Marketing Executive', linkedinLink: '#' },
 





    ]
    return (
        <>
            <section>
                <div className='bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] md:pb-0 pb-12 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
                    <div className='container mx-auto min-[1470px]:max-w-[1417.98px]'>
                        <div className='flex justify-center'>
                            <h2 className="text-black leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold">Meet The Team</h2>
                        </div>
                        <div className='2xl:pt-[80px] xl:pt-[60px] md:pt-[53px] pt-[40px] grid lg:grid-cols-4 sm:grid-cols-3 2xl:gap-[60px] xl:gap-[50px] lg:gap-[40px] md:gap-[30px] gap-[24px]'>
                            <TeamMemberCard memberData={memberData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamMembers