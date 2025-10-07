"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

// images
import userOne from "@/src/assets/images/user-1.jpg";
import userTwo from "@/src/assets/images/user-2.jpg";

function Testimonials() {
  const testimonialData = [
    {
      feedbackPara:
        " We have partnered with eLogicTech for embedded design projects and were always 100% satisfied with their engineering as well as their communication throughout the process. They provided extensive design documents and went above and beyond to make sure our expectations and goals were met. Will be a pleasure to work with them again",
      profileImg: userOne,
      profileName: "Akanksha",
      profileDes: "Embedded Systems Engineer @ Presso",
    },
    {
      feedbackPara:
        "The dashboard portal, along with the hardware and firmware solutions, has greatly improved our operations. The team's expertise in delivering a seamless and efficient system was commendable. We appreciate their dedication and look forward to future collaborations!",
      profileImg: userTwo,
      profileName: "Rajan",
      profileDes: "Uniphos  ",
    },
    // {
    //   feedbackPara:
    //     "As a non-profit organization, we face resource constraints, but our need to communicate effectively with donors and volunteers is essential. [Your Email Marketing Software Name] has significantly enhanced our ability to engage and connect.",
    //   profileImg: userThree,
    //   profileName: "Emily Parker",
    //   profileDes: "Non-profit Coordinator",
    // },
    // {
    //   feedbackPara:
    //     "As a non-profit organization, we face resource constraints, but our need to communicate effectively with donors and volunteers is essential. [Your Email Marketing Software Name] has significantly enhanced our ability to engage and connect.",
    //   profileImg: userOne,
    //   profileName: "Sarah Thompson",
    //   profileDes: "Marketing Manager",
    // },
  ];
  return (
    <>
      <section>
        <div className="bg-[#EEF1F5] 2xl:pt-[140px] xl:pt-[105px] lg:pt-[90px] md:pt-[70px] pt-[60px] overflow-hidden 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:pb-[100px] xl:pb-[75px] md:pb-[66px] pb-[100px]">
          <div className="relative">
            <div className="">
              <h2 className="text-[#1D3157] 2xl:text-[47px] xl:text-[35px] lg:text-[31px] text-[24px] font-bold">
                What Our Clients Say About Us
              </h2>
            </div>
            <div className="2xl:pt-[60px] xl:pt-[45px] pt-[40px] max-[767px]:relative max-[767px]:mt-[40px]">
              <TestimonialCard testimonialData={testimonialData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
