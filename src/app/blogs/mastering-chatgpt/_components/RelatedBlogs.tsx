import React from 'react'
import BlogCard from '../../_components/BlogCard'

// images
import bogOne from "@/src/assets/images/blog-1.jpg";
import blogTwo from "@/src/assets/images/blog-2.jpg";
import blogThree from "@/src/assets/images/blog-3.jpg";
import blogFour from "@/src/assets/images/blog-4.jpg";

function RelatedBlogs() {
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
      ];
  return (
    <>
        <section>
            <div className='bg-[#EEF1F5] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] md:pb-0 pb-12'>
                <h2 className='2xl:text-[60px] xl:text-[45px] text-[40px] text-[rgba(24, 26, 42, 1)] font-bold '>
                    Related Blogs
                </h2>
                <div className='2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] grid grid-cols-1 md:grid-cols-2 max-[991px]:!grid-cols-1 2xl:gap-[36.95px] xl:gap-[27.53px] md:gap-[24.64px] gap-[15.81px]'>
                    <BlogCard blogCardData={blogCardData} />
                </div>
            </div>
        </section>
    </>
  )
}

export default RelatedBlogs