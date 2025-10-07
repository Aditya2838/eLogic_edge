import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

interface appCardData {
  cardTitle: React.JSX.Element;
  cardLink: string;
  linkText: string;
  cardImg: string | StaticImageData;
}

interface ApplicationCardProps {
  appCardData: appCardData[];
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ appCardData }) => {
  return (
    <>
      {appCardData.map((data, index) => (
        <Link href={data.cardLink}
          key={index}
          className="2xl:rounded-ss-[27.27px] 2xl:rounded-ee-[27.27px] xl:rounded-ss-[20.45px] xl:rounded-ee-[20.45px] md:rounded-ss-[18.18px] md:rounded-ee-[18.18px] rounded-ss-[11.67px] rounded-ee-[11.67px] 2xl:shadow-[0_0_54.35px_rgba(0,0,0,0.1)] xl:shadow-[0_0_40.75px_rgba(0,0,0,0.1)] md:shadow-[0_0_36.23px_rgba(0,0,0,0.1)] shadow-[0_0_23.25px_rgba(0,0,0,0.1)] bg-white relative overflow-hidden group"
        >
          <div className="flex justify-between gap-x-2 2xl:p-[39px] xl:p-[29px] lg:p-[20px] md:p-[18px] p-[16.74px] absolute left-0 top-0 bottom-0 right-0 z-[1]">
            <div className="flex justify-between flex-col leading-tight transition-all duration-500 min-[1200px]:group-hover:text-black text-black font-semibold 2xl:text-[42.48px] xl:text-[32.61px] lg:text-[23.98px] md:text-[35.98px] text-[18.6px] 2xl:py-[26px] xl:py-[19px] md:py-[17px] sm:py-[15px] 2xl:ps-[0px] xl:ps-[19px] md:ps-[17px] ps-[12px] 2xl:max-w-[420px] md:max-w-[400px] max-w-[290px] max-[500px]:max-w-[190px] 2xl:w-[calc(100%_-_209px)] xl:w-[calc(100%_-_224px)] lg:w-[calc(100%_-_160px)] md:w-[290px] w-[128px] lg:break-all max-[767px]:w-full">
              {data.cardTitle}
              <div>
                <span className="flex items-center capitalize lg:font-semibold font-bold 2xl:text-[20.21px] xl:text-[15.16px] md:text-[13.47px] text-[8.65px]"
                >
                  {data.linkText} <IoMdArrowForward className="ms-2" />
                </span>
              </div>
            </div>
          </div>
          <div className='w-full overflow-hidden lg:h-auto md:h-[220px] max-[991px]:!h-auto transition-all duration-500 relative after:absolute after:left-0 after:w-full after:top-0 after:h-[calc(100%_+_2px)] after:bg-[url("../images/mask-bg.png")] after:bg-no-repeat after:transition-all after:duration-[1.5s] after:bg-100 after:bg-[right_center] min-[1200px]:group-hover:after:bg-[calc(100%_+_220px)_center] min-[1200px]:group-hover:after:bg-200'>
            <Image
              src={data.cardImg}
               className=" h-full w-full object-cover 2xl:rounded-ss-[27.27px] 2xl:rounded-ee-[27.27px] xl:rounded-ss-[20.45px] xl:rounded-ee-[20.45px] md:rounded-ss-[18.18px] md:rounded-ee-[18.18px] rounded-ss-[11.67px] rounded-ee-[11.67px] relative top-[1px] duration-[1.5s] transition-all min-[1200px]:group-hover:top-[0.5px]"
              alt=""
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default ApplicationCard;
