'use client'
import React from 'react'
import ServiceCard from './ServiceCard'

// images
import cardOneImg from '@/src/assets/images/service-1.jpg'
import cardOneMobImg from '@/src/assets/images/service-mob-1.jpg'
import cardTwoImg from '@/src/assets/images/service-2.jpg'
import cardTwoMobImg from '@/src/assets/images/service-mob-2.jpg'
import cardThreeImg from '@/src/assets/images/service-3.jpg'
import cardThreeMobImg from '@/src/assets/images/service-mob-3.jpg'
import cardFourImg from '@/src/assets/images/service-4.jpg'
import cardFourMobImg from '@/src/assets/images/service-mob-4.jpg'
import cardFiveImg from '@/src/assets/images/service-5.jpg'
import cardFiveMobImg from '@/src/assets/images/service-mob-5.jpg'
import cardSixImg from '@/src/assets/images/service-6.jpg'
import cardSixMobImg from '@/src/assets/images/service-mob-6.jpg'
import cardEightImg from '@/src/assets/images/Intersection 46 1.png'
import cardSevenImg from '@/src/assets/images/service-7.jpg'
//import cardSevenMobImg from '@/src/assets/images/service-mob-7.jpg'
import nextIcon from '@/src/assets/images/next.svg'
import iconOne from '@/src/assets/images/architecture-systems.svg'
import iconTwo from '@/src/assets/images/multilayer-pcb.svg'
import iconThree from '@/src/assets/images/fpga-design.svg'
import iconFour from '@/src/assets/images/reference-platform.svg'
import iconFive from '@/src/assets/images/low-power-wearable.svg'
import iconSix from '@/src/assets/images/prototyping-assembly.svg'
import iconSeven from '@/src/assets/images/testing-validation.svg'
import iconEight from '@/src/assets/images/rf-antenna-design.svg'
import iconNine from '@/src/assets/images/over-the-air.svg'
import iconTen from '@/src/assets/images/over-the-air.svg'
import iconEleven from '@/src/assets/images/data-streaming.svg'
import iconSndOne from '@/src/assets/images/board-bring-up.svg'
import iconSndTwo from '@/src/assets/images/firmware-development.svg'
import iconSndThree from '@/src/assets/images/firmware-development.svg'
import iconSndFour from '@/src/assets/images/migration-of-legacy.svg'
import iconSndFive from '@/src/assets/images/secure-bootloader-development.svg'
import iconSndSix from '@/src/assets/images/rtos-development.svg'
import iconSndSeven from '@/src/assets/images/embedded-application.svg'
import iconSndEight from '@/src/assets/images/third-party-software.svg'
import iconSndNine from '@/src/assets/images/developing-hal-middleware.svg'
import iconTrdOne from '@/src/assets/images/wifi.svg'
import iconTrdTwo from '@/src/assets/images/modern-soc.svg'
import iconTrdThree from '@/src/assets/images/antenna-design.svg'
import iconTrdFour from '@/src/assets/images/modular-subsystem.svg'
import iconTrdFive from '@/src/assets/images/design-mapping.svg'
import iconTrdSix from '@/src/assets/images/developing-communication.svg'
import iconForOne from '@/src/assets/images/uiux.svg'
import iconForTwo from '@/src/assets/images/electronic-design.svg'
import iconForThree from '@/src/assets/images/responsive-optimize.svg'
import iconForFour from '@/src/assets/images/dashboard-development.svg'
import iconForFive from '@/src/assets/images/native-apps.svg'
import iconForSix from '@/src/assets/images/cross-platform.svg'
import iconSxOne from '@/src/assets/images/tech-roi.svg'
import iconSxTwo from '@/src/assets/images/market-analysis.svg'
import iconSxThree from '@/src/assets/images/transformation-strategy.svg'
import iconSxFour from '@/src/assets/images/implementation-road.svg'
import iconSxFive from '@/src/assets/images/financial.svg'

function ServicesView () {
  const serviceCardData = [
    {
      cardImg: cardOneImg,
      cardMobImg: cardOneMobImg,
      cardTitle: (
        <>
          Embedded
          <br />
          Hardware Design
        </>
      ),
      cardLink: '/services-overview/embedded-hardware-design',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconOne,
          pointText: (
            <>
              Architecture &<br />
              Systems Design
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTwo,
          pointText: (
            <>
              Multilayer PCB design <br />
              and layout
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconThree,
          pointText: <>FPGA design</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconFour,
          pointText: (
            <>
              Reference Platform <br />
              Development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconFive,
          pointText: (
            <>
              Low Power & <br />
              Wearable Design
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSix,
          pointText: (
            <>
              Prototyping & <br />
              Assembly
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSeven,
          pointText: (
            <>
              Testing, Validation & <br />
              Certifications
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconEight,
          pointText: <>RF Antenna Design</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconNine,
          pointText: (
            <>
              System-on-chip (SoC), <br />
              System-on-module <br />
              (SoM)
            </>
          )
        }
      ]
    },
    {
      cardImg: cardTwoImg,
      cardMobImg: cardTwoMobImg,
      cardTitle: (
        <>
          Embedded
          <br />
          Software Design
        </>
      ),
      cardLink: '/services-overview/embedded-software-design',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconSndOne,
          pointText: (
            <>
              Board <br />
              bring up
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSndTwo,
          pointText: (
            <>
              Device driver <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSndThree,
          pointText: (
            <>
              Firmware <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSndFour,
          pointText: (
            <>
              Board Support <br />
              Package development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSndFive,
          pointText: (
            <>
              Boot loader <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSndSix,
          pointText: (
            <>
              RTOS development & <br />
              OS porting
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSndSeven,
          pointText: (
            <>
              Embedded linux <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-start',
          listIcon: iconSndEight,
          pointText: (
            <>
              Developing HAL,
              <br />
              middleware &<br />
              application layer Unit,
              <br />
              functional and
              <br />
              integration testing.
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSndNine,
          pointText: (
            <>
              Edge Computing for
              <br />
              CV & ML.
            </>
          )
        }
      ]
    },
    {
      cardImg: cardThreeImg,
      cardMobImg: cardThreeMobImg,
      cardTitle: (
        <>
          Wireless
          <br />
          Systems
          <br />
          Development
        </>
      ),
      cardLink: '/services-overview/wireless-systems-development',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconTrdOne,
          pointText: (
            <>
              Application analysis <br />
              for technology
              <br />
              selection.
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTrdTwo,
          pointText: (
            <>
              Modem / SoC <br />
              selection.
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTrdThree,
          pointText: (
            <>
              Antenna Design &<br />
              Verification
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTrdFour,
          pointText: (
            <>
              Modular subsystem
              <br />
              development to
              <br />
              enable wireless
              <br />
              connectivity.
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTrdFive,
          pointText: (
            <>
              Boot loader <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTrdSix,
          pointText: (
            <>
              Design & mapping of
              <br />
              connectivity
              <br />
              infrastructure.
            </>
          )
        }
      ]
    },
    {
      cardImg: cardFourImg,
      cardMobImg: cardFourMobImg,
      cardTitle: (
        <>
          Human machine Interface
          <br />
          and <br /> UX development
        </>
      ),
      cardLink: '/services-overview/human-machine-interface-ux-development',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconForOne,
          pointText: <>UI/UX design</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconForTwo,
          pointText: <>Interaction design</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconForThree,
          pointText: (
            <>
              Responsiveness
              <br />
              Optimization
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconForFour,
          pointText: (
            <>
              Dashboard
              <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconForFive,
          pointText: (
            <>
              Native application <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconForSix,
          pointText: (
            <>
              Cross platform
              <br />
              application
              <br />
              development.
            </>
          )
        }
      ]
    },
    {
      cardImg: cardFiveImg,
      cardMobImg: cardFiveMobImg,
      cardTitle: (
        <>
          Mechanical &<br />
          industrial design
        </>
      ),
      cardLink: '/services-overview/mechanical-and-industrial-design',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconOne,
          pointText: <>Database Management</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTwo,
          pointText: (
            <>
              Serverless Application
              <br />
              development
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconThree,
          pointText: (
            <>
              Data collection
              <br />
              pipelines
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconFour,
          pointText: <>API development</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconFive,
          pointText: <>Analytics</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSix,
          pointText: <>Fleet management</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSeven,
          pointText: <>Remote Monitoring</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconEight,
          pointText: <>RF Antenna Design</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconTen,
          pointText: <>Over The Air Updates</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconEleven,
          pointText: (
            <>
              Data streaming
              <br />
              pipelines for CV, ML &<br />
              AI applications.
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconFive,
          pointText: <>Scientific Computing</>
        }
      ]
    },
    {
      cardImg: cardSixImg,
      cardMobImg: cardSixMobImg,
      cardTitle: (
        <>
          Manufacturing
          <br />
          and Optimization support
        </>
      ),
      cardLink: '/services-overview/manufacturing-optimization-support',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconSxOne,
          pointText: <>Technology ROI</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxTwo,
          pointText: <>Market Analysis</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxThree,
          pointText: (
            <>
              Transformation
              <br />
              Strategy
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxFour,
          pointText: (
            <>
              Implementation road
              <br />
              map
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxFive,
          pointText: <>Financial Analysis</>
        }
      ]
    },
    {
      cardImg: cardSevenImg,
      cardMobImg: cardSevenImg,
      cardTitle: (
        <>
          Technology & Compliance <br />
          Consulting
        </>
      ),
      cardLink: '/services-overview/technology-compliance-consulting',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconSxOne,
          pointText: <>Technology ROI</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxTwo,
          pointText: <>Market Analysis</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxThree,
          pointText: (
            <>
              Transformation
              <br />
              Strategy
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxFour,
          pointText: (
            <>
              Implementation road
              <br />
              map
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxFive,
          pointText: <>Financial Analysis</>
        }
      ]
    },
    {
      cardImg: cardEightImg,
      cardMobImg: cardEightImg,
      cardTitle: (
        <>
          Custom IoT <br /> application development
        </>
      ),
      cardLink: '/services-overview/custom-iot-apps-development',
      linkText: 'Learn More',
      nextArrow: nextIcon,
      cardListPoint: [
        {
          dataAlign: 'items-center',
          listIcon: iconSxOne,
          pointText: <>Technology ROI</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxTwo,
          pointText: <>Market Analysis</>
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxThree,
          pointText: (
            <>
              Transformation
              <br />
              Strategy
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxFour,
          pointText: (
            <>
              Implementation road
              <br />
              map
            </>
          )
        },
        {
          dataAlign: 'items-center',
          listIcon: iconSxFive,
          pointText: <>Financial Analysis</>
        }
      ]
    }
  ]
  return (
    <>
      <section>
        <div className='bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]'>
          <div className='leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold'>
            Services
          </div>
          <div className='2xl:pt-[80px] xl:pt-[60px] md:pt-[53px] pt-[40px]'>
            <div className='grid lg:grid-cols-2 grid-cols-1 2xl:gap-x-[40px] xl:gap-x-[30px] md:gap-x-[25px] 2xl:gap-y-[80px] lg:gap-y-[53px] gap-y-[16px] [&>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>ul>li:nth-child(7)]:items-start [&>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>ul>li:nth-child(9)]:items-center [&>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>ul>li:nth-child(9)]:relative md:[&>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>ul>li:nth-child(9)]:-top-[50px] [&>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>ul>li:nth-child(9)]:-top-[40px]'>
              <ServiceCard serviceCardData={serviceCardData} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesView
