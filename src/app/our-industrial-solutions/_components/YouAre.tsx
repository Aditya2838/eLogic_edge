import React from "react";
import YouAreCard from "./YouAreCard";

// images
import imgOne from "@/src/assets/images/you-are-one.jpg";
import iconOne from "@/src/assets/images/factory-menufacturing.svg";
import iconTwo from "@/src/assets/images/plan-recyle.svg";
import iconThree from "@/src/assets/images/industrial-machine.svg";

function YouAre() {
  const youCardView = [
    {
      cardImg: imgOne,
      cardIcon:iconOne,
      cardTitle: (
        <>
          Factory or <br/> Manufacturing plant 
        </>
      ),
      decListData:[
        {listTitle:'Excess operating cost and inconsistent output quality due to',
          orderListData:[
            {subTitle:'equipment being in critical health'},
            {subTitle:'hidden inefficiencies in operational patterns'},
          ]
        },
        {listTitle:'Production Loss due to unexpected breakdowns'}
      ],
    },
    {
      cardImg: imgOne,
      cardIcon:iconTwo,
      cardTitle: <>Plant EPC contractor or <br/>System integrator</>,
      decListData:[
        {listTitle:'No visibility over health & status of equipment commissioned across locations',},
        {listTitle:'Customers & end users deviating from standard SOPs leading to expensive site visits for diagnosis & repair'}
      ],
    },
    {
      cardImg: imgOne,
      cardIcon:iconThree,
      cardTitle: <>Industrial machine or <br/>Instrument maker</>,
      decListData:[
        {listTitle:'No visibility over health & status of equipment commissioned across locations',},
        {listTitle:'Customers & end users deviating from standard SOPs leading to expensive site visits for diagnosis & repair'}
      ],
    },
  ];
  return (
    <>
      <section>
        <div className='relative bg-[url("../images/you-are-bg.png")] md:bg-black bg-[#05152F] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px] after:absolute after:top-0 after:left-0 after:right-0 after:h-[242px] after:bg-gradient-to-b after:from-[#05152F] after:to-[rgba(5,21,47,0)] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] min-h-screen md:h-auto lg:h-[90vh]'>
          <div className="relative z-[1]">
            <div className="text-center">
              <h2 className="text-white 2xl:text-[62px] xl:text-[47px] lg:text-[41px] text-[24px] font-bold capitalize">
                You are
              </h2>
            </div>
            <div className="flex items-start md:flex-nowrap flex-wrap 2xl:pt-[80px] xl:pt-[60px] lg:pt-[53px] md:pt-[45px] pt-[40px] 2xl:gap-[30px] xl:gap-[22px] md:xl:gap-[20px] gap-[15.81px]">
              <YouAreCard youCardView={youCardView} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default YouAre;
