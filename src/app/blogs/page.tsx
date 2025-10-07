import React from "react";
import PageBanner from "./_components/PageBanner";
import BlogCard from "./_components/BlogCard";

// images
import bogOne from "@/src/assets/images/blog-1.jpg";
import blogTwo from "@/src/assets/images/blog-2.jpg";
import blogThree from "@/src/assets/images/blog-3.jpg";
import blogFour from "@/src/assets/images/blog-4.jpg";
import PaginationWithEllipsis from "@/src/common/Pagination";
import TalkToExpert from "@/src/common/TalkToExpert";

function page() {
  const blogCardData = [
    {
      cardTitle:
        "Accelerate Your IoT Product Development Journey",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'The world requirement for IoT devices is continuously increasing around all sectors, industrial verticals, enterprises, and home applications.',
      linkText: "Learn More",
      cardImg: bogOne,
       
    },
    {
      cardTitle:
        "The Hidden Cost of Hardware Prototyping",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'The market for embedded systems and IoT-dominated embedded systems is increasing steadily. To meet the demands of high performance, connectivity.',
      linkText: "Learn More",
      cardImg: blogTwo,
       
    },
    {
      cardTitle:
        "Outsource IoT Development - Save Your Engineering Hours and Get 10X Results",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'The adoption of embedded and IoT products in the industrial and consumer sectors is rising in the embedded system market.',
      linkText: "Learn More",
      cardImg: blogThree,
       
    },
    {
      cardTitle:
        "What Is Industry 4.0 and the Industry Disruptions",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'An extensive blog from eLogicTech about what industry 4.0 is, how it has been shaped over the years, and understanding the use cases to stay prepared.',
      linkText: "Learn More",
      cardImg: blogFour,
       
    },
    {
      cardTitle:
        "How IIoT can optimize a factory floor",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'A bog post on how factories can adopt IIoT based solutions to optimize their processes to improve the operations as well as production effeiciency.',
      linkText: "Learn More",
      cardImg: bogOne,
       
    },
    {
      cardTitle:
        "What Is Edge Computing? - Everything You Need to Know",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'An extensive blog on what is edge computing and how it is powering the industrial revolution by making use of cloud computing and IoT solutions',
      linkText: "Learn More",
      cardImg: blogTwo,
       
    },
    {
      cardTitle:
        "How Smart Buildings are Paving the Way for Sustainable Infrastructure",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'A blog on IoT sensors connected wirelessly backed by embedded systems can log data, monitor, and provide visualized data for sustainable infrastructure.',
      linkText: "Learn More",
      cardImg: blogThree,
       
    },
    {
      cardTitle:
        "Connected Device - The Rule of Thumb in Embedded Systems Development",
      cardLink: "blogs/mastering-chatgpt",
      blogDes:'A technical blog from eLogicTech Edge on the importance of device connectivity in embedded systems development and the key factors associated with it',
      linkText: "Learn More",
      cardImg: blogFour,
       
    },
  ];
  return (
    <>
      <PageBanner />
      <section>
        <div className="bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] md:pb-0 pb-12">
          <div className="">
            <h1 className="text-[#181A2A] 2xl:text-[60px] xl:text-[45px] text-[40px] md:font-bold font-semibold 2xl:w-[550px] xl:w-[450px] md:w-[355px] mb-3 tracking-[-1.5px] max-[767px]:leading-[1.34]">
              Latest Blogs
            </h1>
          </div>
          <div className="2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] grid grid-cols-1 md:grid-cols-2 max-[991px]:!grid-cols-1 2xl:gap-[36.95px] xl:gap-[27.53px] md:gap-[24.64px] gap-[15.81px]">
            <BlogCard blogCardData={blogCardData} />
          </div>
          <div className="border-t border-t-[#E5E5E5] 2xl:pt-[40px] xl:pt-[30px] md:pt-[26px] pt-[20px] 2xl:mt-[65px] xl:mt-[50px] md:mt-[40px] mt-[30px]">
            <PaginationWithEllipsis />
          </div>
        </div>
      </section>
      <TalkToExpert />
    </>
  );
}

export default page;
