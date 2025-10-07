import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

// images
import edgeComputer from "@/src/assets/images/edgeGAteway.png";
import edgeComputerMob from "@/src/assets/images/edgeGAteway.png";
import rfBase from "@/src/assets/images/rfbaseimage.png"
import rfBaseMob from "@/src/assets/images/rfbaseimage.png";
import nextarrow from "@/src/assets/images/next.svg";
import hmiImg from "@/src/assets/images/hmi.jpg";
import hmiMob from "@/src/assets/images/hmi-mob.jpg";
import sensorInstruments from "@/src/assets/images/sensorsimagggge.png";
import sensorInstrumentsMob from "@/src/assets/images/sensorsimagggge.png";
import ioModule from "@/src/assets/images/iomodules (2).png";
import ioModuleMob from "@/src/assets/images/iomodules (2).png";

function HardwareEcosystem() {
  return (
    <section>
      <div className="bg-[#EEF1F5] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px]">
        <div className="flex justify-between items-start md:flex-nowrap flex-wrap md:gap-y-0 gap-y-[20px]">
          <div className="text-black">
            <span className="flex text-[#3563E9] uppercase font-bold 2xl:text-[16.88px] xl:text-[12.66px] md:text-[11.25px] text-[10px] 2xl:mb-[20px] xl:mb-[15px] md:mb-[13.33px] mb-[10px]">
              in-house & 3rd party
            </span>
            <h2 className="leading-[1] 2xl:text-[46.88px] xl:text-[35.16px] md:text-[31.25px] text-[24px] font-bold">
              Hardware Ecosystem
            </h2>
          </div>
          <div className="text-[#4B5563] font-medium leading-snug w-full 2xl:max-w-[771.19px] xl:max-w-[578px] lg:max-w-[514px] md:max-w-[420px] 2xl:text-[24px] xl:text-[18px] text-base">
            Our industrial-grade edge computers and wireless gateways support a rich variety of industrial wired and wireless fieldbus protocols while being fully customizable to support Custom Solutions
            <div className="2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px]">
              <Link
                className="bg-[#3563E9] text-white px-[2] w-full 2xl:max-w-[275px] xl:max-w-[209px] md:max-w-[175.44px] max-w-[195px] 2xl:h-[52px] xl:h-[39px] md:h-[35px] h-[40.29px] flex justify-center items-center py-[2px] 2xl:text-[20px] xl:text-[15px] md:text-[13.33px] text-[15.24px] md:font-bold font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
                href="/contact-us"
              >
                Schedule a demo <MdArrowOutward className="ms-2.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] grid md:grid-cols-2 grid-cols-1 2xl:gap-[22.92px] xl:gap-[17.19px] gap-[15.28px]">
          <div className="2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] overflow-hidden relative group">
            <div className="group-hover:[&>img]:scale-[1.23]">
              <Image
                className="md:flex hidden transition-all duration-500"
                src={edgeComputer}
                alt=""
              />
              <Image
                className="md:hidden flex transition-all duration-500"
                src={edgeComputerMob}
                alt=""
              />
            </div>
            <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-between text-white 2xl:p-[24px] xl:p-[18px] p-[16px]">
              <h4 className="font-bold 2xl:text-[30px]">
                Edge computers & IIoT
                <br />
                Gateways
              </h4>
              <Link href="">
                <Image
                  className="2xl:w-[18.7px] xl:w-[14px] w-[8px]"
                  src={nextarrow}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] overflow-hidden relative group">
            <div className="group-hover:[&>img]:scale-[1.23]">
              <Image
                className="md:flex hidden transition-all duration-500"
                src={rfBase}
                alt=""
              />
              <Image
                className="md:hidden flex transition-all duration-500"
                src={rfBaseMob}
                alt=""
              />
            </div>
            <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-between text-white 2xl:p-[24px] xl:p-[18px] p-[16px]">
              <h4 className="font-bold 2xl:text-[30px]">RF base + node</h4>
              <Link href="">
                <Image
                  className="2xl:w-[18.7px] xl:w-[14px] w-[8px]"
                  src={nextarrow}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="2xl:pt-[23px] xl:pt-[17.25x] pt-[15.28px] 2xl:gap-[22.92px] xl:gap-[17.19px] gap-[15.28px] grid md:grid-cols-3">
          <div className="2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] overflow-hidden relative group">
            <div className="group-hover:[&>img]:scale-[1.23]">
              <Image
                className="md:flex hidden transition-all duration-500"
                src={hmiImg}
                alt=""
              />
              <Image
                className="md:hidden flex transition-all duration-500"
                src={hmiMob}
                alt=""
              />
            </div>
            <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-between text-white 2xl:p-[24px] xl:p-[18px] p-[16px] 2xl:max-w-[421px] xl:max-w-[315.75px] max-w-[280.67px]">
              <div className="flex flex-col 2xl:gap-y-[10px] xl:gap-y-[8px] gap-y-[7px] text-white">
                <h6 className="2xl:text-[24px] xl:text-[18px] text-base font-bold">
                  HMIs
                </h6>
                <p className="hidden font-medium 2xl:text-base xl:text-[12px] text-[10.67px]">
                  Build and scale generative AI applications with
                  foundation models (FMs)
                </p>
              </div>
              <Link href="">
                <Image
                  className="2xl:w-[18.7px] xl:w-[14px] w-[8px]"
                  src={nextarrow}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] overflow-hidden relative group">
            <div className="group-hover:[&>img]:scale-[1.23]">
              <Image
                className="md:flex hidden transition-all duration-500"
                src={sensorInstruments}
                alt=""
              />
              <Image
                className="md:hidden flex transition-all duration-500"
                src={sensorInstrumentsMob}
                alt=""
              />
            </div>
            <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-between text-white 2xl:p-[24px] xl:p-[18px] p-[16px] 2xl:max-w-[421px] xl:max-w-[315.75px] max-w-[280.67px]">
              <div className="flex flex-col 2xl:gap-y-[10px] xl:gap-y-[8px] gap-y-[7px] text-white">
                <h6 className="2xl:text-[24px] xl:text-[18px] text-base font-bold">
                  Sensors/instruments
                </h6>
                <p className="hidden font-medium 2xl:text-base xl:text-[12px] text-[10.67px]">
                  Build and scale generative AI applications with
                  foundation models (FMs)
                </p>
              </div>
              <Link href="">
                <Image
                  className="2xl:w-[18.7px] xl:w-[14px] w-[8px]"
                  src={nextarrow}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="2xl:rounded-[12px] xl:rounded-[8.4px] md:rounded-[7.74px] rounded-[8px] overflow-hidden relative group">
            <div className="group-hover:[&>img]:scale-[1.23]">
              <Image
                className="md:flex hidden transition-all duration-500"
                src={ioModule}
                alt=""
              />
              <Image
                className="md:hidden flex transition-all duration-500"
                src={ioModuleMob}
                alt=""
              />
            </div>
            <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-between text-white 2xl:p-[24px] xl:p-[18px] p-[16px] 2xl:max-w-[421px] xl:max-w-[315.75px] max-w-[280.67px]">
              <div className="flex flex-col 2xl:gap-y-[10px] xl:gap-y-[8px] gap-y-[7px] text-white">
                <h6 className="2xl:text-[24px] xl:text-[18px] text-base font-bold">
                  I/O modules
                </h6>
                <p className="hidden font-medium 2xl:text-base xl:text-[12px] text-[10.67px]">
                  Build and scale generative AI applications with
                  foundation models (FMs)
                </p>
              </div>
              <Link href="">
                <Image
                  className="2xl:w-[18.7px] xl:w-[14px] w-[8px]"
                  src={nextarrow}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardwareEcosystem;
