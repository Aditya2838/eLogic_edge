"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import projectOne from "@/src/assets/images/powerdistributionboradimg.png";
import projectTwo from "@/src/assets/images/wirelessvoting.png";
import projectThree from "@/src/assets/images/smart home img.png";
import projectFour from "@/src/assets/images/BMS Top Side (1).png";
import projectFive from "@/src/assets/images/ISOMETRIC_VIEW_FINNA_SENSOR_PCB-removebg-preview.png";
import projectSix from "@/src/assets/images/Toshcon_-_Multiparameter_Lab_Instrument-removebg-preview (1).png";
import projectSeven from "@/src/assets/images/Low_Cost_Controller-_Enclosure-removebg-preview (1).png";
import projectEight from "@/src/assets/images/gas detetction module.png";
import projectNine from "@/src/assets/images/powerdistributionboradimg.png";
import projectTen from "@/src/assets/images/output.png";
import projectEleven from "@/src/assets/images/thermal efficeincy.jpg";
import projectTwelve from "@/src/assets/images/powerdistributionboradimg.png";
import projectThirteen from "@/src/assets/images/gas flowmetering.jpeg";
import projectFouteen from "@/src/assets/images/wire bending machine.jpeg";

const projects = [
  {
    id: 1,
    name: (
      <>
        Power Distribution <br />
        Board
      </>
    ),
    client: "Presso",
    domain: "Commercial/Industrial Robotics",
    projectImg: projectOne,
    projectTitle: "Power Distribution Board",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
              <li>hardware design </li>
              <li>PCB layout & routing </li>
              <li>power integrity analysis</li>
              <li>lab prototyping</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes:
          "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Akanksha: ",
      },
    ],
  },
  {
    id: 2,
    name: (
      <>
        Wireless voting <br />
        system
      </>
    ),
    client: "Meridia",
    domain: "Consumer Electronics",
    projectImg: projectTwo,
    projectTitle: "Wireless voting system",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
              <li>hardware design</li>
              <li>PCB layout & routing</li>
              <li>antenna design</li>
              <li>RF protocol design</li>
              <li>firmware development</li>
              <li>power optimization</li>
              <li>mechanical design</li>
              <li>3D rendering</li>
              <li>custom PCB membrane design</li>
              <li>user interface design</li>
              <li>power & signal integrity analysis</li>
              <li>lab prototyping</li>
              <li>tooling design</li>
              <li>DfM+DfA optimization</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "Custom wireless protocol & stack design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Peter: ",
      },
    ],
  },
  {
    id: 3,
    name: (
      <>
        Smart home <br />
        automation controller
      </>
    ),
    client: "Keus",
    domain: "Consumer Electronics",
    projectImg: projectThree,
    projectTitle: "Smart home automation controller",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
              <li>hardware design</li>
              <li>PCB layout & routing</li>
              <li>firmware development</li>
              <li>wireless protocol implementation</li>
              <li>mechanical design</li>
              <li>3D rendering</li>
              <li>user interface design</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "intuitive minimal user interface design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Manish: ",
      },
    ],
  },
  {
    id: 4,
    name: (
      <>
        Battery Management <br />
        System
      </>
    ),
    client: "Unbox Robotics",
    domain: "Commercial/Industrial Robotics",
    projectImg: projectFour,
    projectTitle: "Power Distribution Board",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
              <li>analog & digital hardware design</li>
              <li>mixed-signal PCB layout & routing</li>
              <li>firmware development</li>
              <li>wireless protocol implementation</li>
              <li> mechanical design</li>
              <li>3D rendering</li>
              <li>user interface design</li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "analog front end design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: " ",
      },
    ],
  },
  {
    id: 5,
    name: (
      <>
        Industrial signal <br />
        processing board
      </>
    ),
    client: "Finna Sensors",
    domain: "Industrial Controls",
    projectImg: projectFive,
    projectTitle: "Industrial signal processing board",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <>
            <ul className="list-disc ps-[17px] grid">
              <li>
                ADC, DAC & power electronics hardware design, mixed-signal PCB
                layout & routing
              </li>
            </ul>
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "FPGA based digital signal processing",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Varun/scott",
      },
    ],
  },
  {
    id: 6,
    name: (
      <>
        Chemical testing <br />
        lab equipment
      </>
    ),
    client: "Toshcon",
    domain: "Instrumentation",
    projectImg: projectSix,
    projectTitle: "Chemical testing lab equipment",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>modular analog front-end design </li>
            <li>System-on-module-based hardware design </li>
            <li>mechanical design </li>
            <li>mixed-signal & high speed PCB layout & routing</li>
            <li>linux kernel customization and application development</li>
            <li>3D rendering</li>
            <li>touch interface design </li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
            <li>tooling design </li>
            <li>DfM optimization</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "analog front end design, industrial product design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Toshniwal/Pieter",
      },
    ],
  },
  {
    id: 7,
    name: <>Process analyzer</>,
    client: "Toshcon",
    domain: "Instrumentation",
    projectImg: projectSeven,
    projectTitle: "Process analyzer",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>modular analog front-end design</li>
            <li>hardware design</li>
            <li>mixed-signal PCB layout & routing</li>
            <li>linux kernel customization and application development</li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>touch interface design</li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "Extensive cost-optimzation for price-sensitive markets",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Toshniwal/Pieter",
      },
    ],
  },
  {
    id: 8,
    name: (
      <>
        Digital IoT-enabled <br />
        gas detection module
      </>
    ),
    client: "Uniphos",
    domain: "Instrumentation",
    projectImg: projectEight,
    projectTitle: "Digital IoT-enabled gas detection module",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>hardware design</li>
            <li>PCB layout & routing</li>
            <li>firmware development</li>
            <li>cellular connectivity & IoT protocols implementation</li>
            <li>
              wired & wireless industrial fieldbus protocols implementation
            </li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>user interface design</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "ATEX class II rated intrinsically safe design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Rajan",
      },
    ],
  },
  {
    id: 9,
    name: (
      <>
        Linux single-board <br />
        computer
      </>
    ),
    client: " ",
    projectImg: projectNine,
    domain: "Industrial Controls",
    projectTitle: "Linux single-board computer",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>linux kernel customization and application development</li>
            <li>System-on-module-based hardware design</li>
            <li>wired & wireless protocol implementation</li>
            <li>cellular connectivity & IoT protocols implementation</li>
            <li>mechanical design</li>
            <li>mixed-signal & high speed PCB layout & routing</li>
            <li>3D rendering</li>
            <li>web-server user interface design</li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
            <li>tooling design</li>
            <li>DfM optimization</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "custom bootloader, kernel & drivers development",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
  {
    id: 10,
    name: (
      <>
        Industrial I/O <br />
        module
      </>
    ),
    client: "Gridshield Technologies",
    projectImg: projectTen,
    domain: "Industrial Controls",
    projectTitle: "Industrial I/O module",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>microprocessor-based hardware design</li>
            <li>mixed-signal & high speed PCB layout & routing</li>
            <li>linux kernel customization and application development</li>
            <li>wired & wireless protocol implementation</li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>power & signal integrity analysis</li>
            <li>lab prototyping</li>
            <li>tooling design</li>
            <li>DfM optimization</li>
            <li>standards-compliance documentation & testing</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes:
          "IEC-something compliance, modular & expandable plug-in I/O design",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Anand",
      },
    ],
  },
  {
    id: 11,
    name: (
      <>
        Thermal Imaging <br /> Masking Proejct
      </>
    ),
    client: "Sagar Thermals",
    projectImg: projectEleven,
    domain: "Defense",
    projectTitle: "Thermal Imaging Masking Proejct",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>hardware design</li>
            <li>PCB layout & routing</li>
            <li>power & thermal simulations</li>
            <li>firmware development</li>
            <li>closed-loop control system development & tuning</li>
            <li>wireless protocol implementation</li>
            <li>harness design</li>
            <li>field testing</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes:
          "closed-feedback-loop thermal system controller tuning, mil-spec component specification & specialized power electronics design based on custom MOSFET",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "Kedar",
      },
    ],
  },
  {
    id: 12,
    name: (
      <>
        Smart residential <br /> energy meter
      </>
    ),
    client: "Innologix",
    projectImg: projectTwelve,
    domain: "Instrumentation",
    projectTitle: "Smart residential energy meter",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>analog front end design</li>
            <li>hardware design</li>
            <li>PCB layout & routing</li>
            <li>firmware development</li>
            <li>cellular connectivity & IoT protocols implementation</li>
            <li>mechanical design</li>
            <li>3D rendering</li>
            <li>user interface design</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
  {
    id: 13,
    name: (
      <>
        Gas flow metering <br /> system controller
      </>
    ),
    client: "Mitico",
    projectImg: projectThirteen,
    domain: "Industrial Controls",
    projectTitle: "Gas flow metering system controller",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <> 
            Closed-loop control system design & tuning <br />
            Firmware development <br />
            System Integration <br />
            Field testing
          </>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "PLC-to-embedded conversion",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
  {
    id: 14,
    name: (
      <>
        Wire-Bending  machine <br />
        embedded controller
      </>
    ),
    client: "T-WORKS",
    projectImg: projectFouteen,
    domain: "Industrial Controls",
    projectTitle: "Wire-Bending  machine embedded controller",
    projectCards: [
      {
        cardHeading: "Challenge & scope",
        cardDes:
          "Our custom IoT application development service delivers end-to-end solutions for connected devices and systems. We specialize in creating secure, scalable, and efficient IoT applications that bridge edge devices with cloud infrastructure, enabling data-driven insights and remote control capabilities across industrial, commercial, and scientific applications.",
      },
      {
        cardHeading: "Capabilities involved",
        cardDes: (
          <ul className="list-disc ps-[17px] grid grid-cols-2 max-[991px]:!grid-cols-1">
            <li>Firmware development</li>
            <li>System Integration</li>
            <li>Field testing</li>
            <li>Closed-loop control system design & tuning</li>
          </ul>
        ),
      },
      {
        cardHeading: "Engineering Spotlight",
        cardDes: "PLC-to-embedded conversion",
      },
      {
        cardHeading: "Client Testimonial",
        cardDes: "",
      },
    ],
  },
];

function ProjectsCards() {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const userInteractedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lineHeight, setLineHeight] = useState<number>(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    userInteractedRef.current = true;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startAutomation = () => {
    if (!userInteractedRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 6000);
    }
  };

  useEffect(() => {
    const resetUserInteraction = setTimeout(() => {
      userInteractedRef.current = false;
      startAutomation();
    }, 15000);

    return () => clearTimeout(resetUserInteraction);
  }, [currentIndex]);

  useEffect(() => {
    startAutomation();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (circlesRef.current[currentIndex]) {
      const containerTop =
        scrollContainerRef.current?.getBoundingClientRect().top || 0;
      const activeCircleTop =
        circlesRef.current[currentIndex]?.getBoundingClientRect().top || 0;
      setLineHeight(activeCircleTop - containerTop);
    }
  }, [currentIndex]);

  return (
    <>
      <section>
        <div className="flex flex-col md:hidden 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
          <h2 className="leading-[1] 2xl:text-[61.77px] xl:text-[46.33px] md:text-[41.18px] text-[24px] font-bold capitalize text-center 2xl:pb-[70px] xl:pb-[52px] lg:pb-[45px] pb-[40px]">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-[20px] max-[991px]:flex-wrap overflow-y-hidden">
            {projects.map((data, index) => (
              <div
                key={index}
                className="bg-[#051731] 2xl:rounded-[17.78px] xl:rounded-[12px] rounded-[10px] 2xl:p-[44px] xl:p-[33px] md:p-[30px] p-[20px]"
              >
                <div className="relative w-full imggrdnt after:absolute after:left-0 after:bottom-0 after:h-full after:w-full max-[639px]:h-[180px]">
                  <Image
                    src={data.projectImg}
                    alt="Project"
                    width={1920}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute z-[1] bottom-0 2xl:p-[40px] xl:p-[27px] md:p-[30px] p-[12px] w-full text-white">
                    <span className="rounded-full font-medium 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] bg-[rgba(0,0,0,0.32)] 2xl:px-[22px] xl:px-[18px] px-[15px] 2xl:py-[8px] xl:py-[7px] py-[6px]">
                      {data.domain}
                    </span>
                    <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] 2xl:my-2">
                      {data.projectTitle}
                    </h2>
                    <p className="2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px]">
                      <span className="font-semibold">Client Name:</span>{" "}
                      {data.client}
                    </p>
                  </div>
                </div>
                <div className="2xl:w-[calc(100%_-_383px)] xl:w-[calc(100%_-_303px)] md:w-[calc(100%_-_260px)] max-[991px]:!w-full max-[991px]:mt-9 max-[767px]:mt-0 bg-[#051731] 2xl:rounded-[17.78px] xl:rounded-[12px] rounded-[10px] 2xl:p-[44px] xl:p-[33px] md:p-[30px] p-[20px]">
                  <div>
                    <div className="group [&>*:nth-child(1)]:border-b [&>*:nth-child(1)]:border-b-[rgba(255,255,255,0.5)] [&>*:nth-child(2)]:border-b [&>*:nth-child(2)]:border-b-[rgba(255,255,255,0.5)] 2xl:pt-[40px] [&>*:nth-child(1)]:2xl:pb-[30px] [&>*:nth-child(2)]:2xl:pb-[30px] [&>*:nth-child(1)]:2xl:mb-[30px] [&>*:nth-child(2)]:2xl:mb-[30px] [&>*:nth-child(1)]:xl:pb-[20px] [&>*:nth-child(2)]:xl:pb-[20px] [&>*:nth-child(1)]:pb-[18px] [&>*:nth-child(2)]:pb-[18px] [&>*:nth-child(1)]:xl:mb-[20px] [&>*:nth-child(2)]:xl:mb-[20px] [&>*:nth-child(1)]:mb-[18px] [&>*:nth-child(2)]:mb-[18px] xl:pt-[30px] md:pt-[26px] pt-[10px] grid md:grid-cols-2 grid-cols-1 2xl:gap-x-[53px] xl:gap-x-[40px] md:gap-x-[35px] max-[767px]:[&>div]:border-b max-[767px]:[&>div]:border-b-[rgba(255,255,255,0.5)] max-[767px]:[&>div]:!pb-5 max-[767px]:[&>div]:!mb-5 max-[767px]:[&>*:last-child]:border-b-0 max-[767px]:[&>*:last-child]:!pb-0">
                      {data.projectCards.map((data, subindex) => (
                        <div
                          key={subindex}
                          className="group-nth-child(1):border-b"
                        >
                          <h1 className="2xl:text-[21.33px] xl:text-[16px] md:text-[14.22px] text-base text-white">
                            {data.cardHeading}
                          </h1>
                          <div className="2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] text-white 2xl:mt-4 mt-3">
                            {data.cardDes}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
            <div className="flex lg:items-start 2xl:gap-[54px] max-[991px]:flex-wrap overflow-y-hidden">
              <div className="2xl:w-[383px] xl:w-[303px] md:w-[260px]">
                <h2 className="text-[24px] font-bold mb-4">Projects</h2>
                <div className="relative timeline-block">
                  <div className="absolute h-full w-1 bg-gray-300 max-h-[90vh] -z-[1] timeline-custom">
                    <div
                      className="absolute left-0 w-1 bg-blue-500 transition-all duration-300"
                      style={{
                        height: `${lineHeight}px`,
                        top: "5px",
                      }}
                    />
                  </div>
                  <ul
                    ref={scrollContainerRef}
                    className="relative flex flex-col gap-y-[20px] overflow-y-auto max-h-[90vh] px-[20px] 2xl:py-[85px] xl:py-[60px] md:py-[30px] scrollbar-hide after:absolute after:top-0 after:left-0 after:w-full after:2xl:h-[85px] after:xl:h-[60px] after:md:h-[45px] after:bg-gradient-to-b after:from-white after:to-[rgba(255,255,255,0.0)] before:w-full before:2xl:h-[85px] before:xl:h-[60px] before:md:h-[45px] before:bg-gradient-to-t before:from-white before:to-[rgba(255,255,255,0.0)]"
                  >
                    {projects.map((project, index) => (
                      <li
                        key={index}
                        className={`relative flex items-center cursor-pointer text-base leading-snug transition-transform duration-500 ease-in-out  ${
                          index === currentIndex
                            ? "font-bold text-[#222325]"
                            : "text-[#828282] font-medium"
                        }`}
                        onClick={() => handleClick(index)}
                      >
                        <div
                          ref={(el) => {
                            circlesRef.current[index] = el;
                          }}
                          style={{
                            boxShadow:
                              index == currentIndex
                                ? `0px 0px 0px 7px #d7e0fb`
                                : "none",
                          }}
                          className={`w-4 h-4 rounded-full border-2 -z-[1] ${
                            index <= currentIndex
                              ? "bg-blue-500 border-blue-500"
                              : "border-gray-300 bg-gray-300"
                          }`}
                        />
                        <div className="2xl:min-h-[66px] xl:min-h-[55px] flex items-center max-[991px]:w-full ml-4 text-base max-[1024px]:!text-[13px]">
                          {project.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Project Details Card */}
              <div className="2xl:w-[calc(100%_-_383px)] xl:w-[calc(100%_-_303px)] md:w-[calc(100%_-_260px)] max-[991px]:mt-9 max-[767px]:mt-7 bg-[#051731] 2xl:rounded-[17.78px] xl:rounded-[12px] rounded-[10px] 2xl:p-[44px] xl:p-[33px] md:p-[30px] p-[20px] max-[1200px]:!h-screen max-[767px]:!h-auto">
                <div>
                  <div className="relative w-full imggrdnt after:absolute after:left-0 after:bottom-0 after:h-full after:w-full max-[1024px]:h-[250px]">
                    <Image
                      src={projects[currentIndex].projectImg}
                      alt="Project"
                      width={1920}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute z-[1] bottom-0 2xl:p-[40px] xl:p-[27px] md:p-[30px] p-[12px] w-full text-white">
                      <span className="rounded-full font-medium 2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] bg-[rgba(0,0,0,0.32)] 2xl:px-[22px] xl:px-[18px] px-[15px] 2xl:py-[8px] xl:py-[7px] py-[6px]">
                        {projects[currentIndex].domain}
                      </span>
                      <h2 className="font-semibold 2xl:text-[32px] xl:text-[28px] md:text-[25px] text-[22px] 2xl:my-2">
                        {projects[currentIndex].projectTitle}
                      </h2>
                      <p className="2xl:text-[18px] xl:text-[13.5px] md:text-[12px] text-[11.22px]">
                        <span className="font-semibold">Client Name:</span>{" "}
                        {projects[currentIndex].client}
                      </p>
                    </div>
                  </div>
                  <div className="group [&>*:nth-child(1)]:border-b [&>*:nth-child(1)]:border-b-[rgba(255,255,255,0.5)] [&>*:nth-child(2)]:border-b [&>*:nth-child(2)]:border-b-[rgba(255,255,255,0.5)] 2xl:pt-[40px] [&>*:nth-child(1)]:2xl:pb-[30px] [&>*:nth-child(2)]:2xl:pb-[30px] [&>*:nth-child(1)]:2xl:mb-[30px] [&>*:nth-child(2)]:2xl:mb-[30px] [&>*:nth-child(1)]:xl:pb-[20px] [&>*:nth-child(2)]:xl:pb-[20px] [&>*:nth-child(1)]:pb-[18px] [&>*:nth-child(2)]:pb-[18px] [&>*:nth-child(1)]:xl:mb-[20px] [&>*:nth-child(2)]:xl:mb-[20px] [&>*:nth-child(1)]:mb-[18px] [&>*:nth-child(2)]:mb-[18px] xl:pt-[30px] md:pt-[26px] pt-[30px] grid md:grid-cols-2 grid-cols-1 2xl:gap-x-[53px] xl:gap-x-[40px] md:gap-x-[35px] max-[767px]:[&>div]:border-b max-[767px]:[&>div]:border-b-[rgba(255,255,255,0.5)] max-[767px]:[&>div]:!pb-5 max-[767px]:[&>div]:!mb-5 max-[767px]:[&>*:last-child]:border-b-0 max-[767px]:[&>*:last-child]:!pb-0">
                    {projects[currentIndex].projectCards.map(
                      (data, subindex) => (
                        <div
                          key={subindex}
                          className="group-nth-child(1):border-b"
                        >
                          <h1 className="2xl:text-[21.33px] xl:text-[16px] md:text-[14.22px] text-base text-white">
                            {data.cardHeading}
                          </h1>
                          <div className="2xl:text-base xl:text-[15px] md:text-[14px] text-[12px] text-white 2xl:mt-4 mt-3">
                            {data.cardDes}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectsCards;
